import React from "react";


const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-5 w-full">
     

      {/* Bottom Text */}
      <div className="text-center   text-sm">
        &copy; {new Date().getFullYear()} Kundan Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
