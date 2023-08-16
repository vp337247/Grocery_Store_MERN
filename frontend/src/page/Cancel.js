import React from 'react';

const Cancel = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="bg-violet p-6 md:mx-auto">
        
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Failed!</h3>
          <p className="text-gray-600 my-2">We're sorry, but your payment could not be processed.</p>
          <p>Please check your payment details and try again.</p>
          <div className="py-10 text-center">
            <a href="/" className="px-12 bg-red-600 hover:bg-red-500 text-white font-semibold py-3">
              GO BACK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
