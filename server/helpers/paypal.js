const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AWeY5aTp69kvkpwWZrIzC2o7e4iKLdplT8em1Ztz8A9QY7jfBG91i7Zljdgw2ib0Omped3TdDfqHIB0Z",
  client_secret: "EFRAjPA1xPe6NefRMz0DE4Cb0quLHrd-lZzs4wnjjp9iLIIym6UonwpXB_wSRzxzemnVF04ddqKbFVl3",
});

module.exports = paypal;
