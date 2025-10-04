const Order = require("../../models/Order");
const Product = require("../../models/Product");
const ProductReview = require("../../models/Review");

const addProductReview = async (req, res) => {
  try {
    const { productId, userId, userName, reviewMessage, reviewValue } = req.body;

    // Check if user purchased the product
    const order = await Order.findOne({
      userId,
      "cartItems.productId": productId,
      // orderStatus: { $in: ["confirmed", "delivered"] },
    });

    if (!order) {
      return res.status(403).json({
        success: false,
        message: "You need to purchase this product to review it.",
      });
    }

    // Check if review already exists
    let review = await ProductReview.findOne({ productId, userId });

    if (review) {
      // 🔄 Update existing review instead of rejecting
      review.reviewMessage = reviewMessage;
      review.reviewValue = reviewValue;
      await review.save();
    } else {
      // Create new review
      review = new ProductReview({
        productId,
        userId,
        userName,
        reviewMessage,
        reviewValue,
      });
      await review.save();
    }

    // Recalculate average review
    const reviews = await ProductReview.find({ productId });
    const totalReviewsLength = reviews.length;
    const averageReview =
      reviews.reduce((sum, item) => sum + item.reviewValue, 0) /
      totalReviewsLength;

    await Product.findByIdAndUpdate(productId, { averageReview });

    return res.status(201).json({
      success: true,
      data: review,
      message: review.isNew ? "Review added successfully!" : "Review updated successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while adding review.",
    });
  }
};

const getProductReviews = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await ProductReview.find({ productId });

    return res.status(200).json({
      success: true,
      data: reviews,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching reviews.",
    });
  }
};

module.exports = { addProductReview, getProductReviews };
