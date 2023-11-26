import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" font-semibold py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          <span className="mr-1">Made with</span>
          <span className="text-red-500">&#10084;</span>
          <span className="ml-1">by Fidel</span>
        </p>
        <p className="text-xs mt-1">&copy; {currentYear} Fidel</p>
      </div>
    </footer>
  );
};

export default Footer;