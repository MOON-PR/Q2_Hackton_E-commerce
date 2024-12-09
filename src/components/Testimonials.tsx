import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-black mb-10 uppercase">
          Our Happy Customers
        </h2>
        <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
          {[{
            name: "Sarah M.",
            text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
          }, {
            name: "Alex K.",
            text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
          }, {
            name: "James L.",
            text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
          }].map(({ name, text }) => (
            <div key={name} className="bg-white rounded-lg shadow-lg p-6 w-80 flex-shrink-0">
              <div className="text-yellow-500 flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.978 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.978-2.89a1 1 0 00-1.175 0l-3.978 2.89c-.785.57-1.839-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.293 9.401c-.783-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">{text}</p>
              <h4 className="font-semibold text-gray-900">{name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;