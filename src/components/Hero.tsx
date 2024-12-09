import Link from 'next/link';
import React from 'react';

function Hero() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-12">
          <div className="text-left">
            <h1 className="text-4xl font-bold mb-4 text-black leading-tight">
              FIND CLOTHES THAT MATCH YOUR STYLE
            </h1>
            <p className="text-lg text-black mb-6">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="px-8 py-3 bg-black text-white rounded-full text-base hover:bg-gray-600 transition duration-300 ">
              <Link href={'/product'}>
                Shop Now
                </Link>
            </button> 
          </div>
          <div className="text-center">
            <img
              src="/couple.png"
              alt="Couple wearing stylish jackets"
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Browse by Style Section */}
        <div className="w-full h-full bg-white flex flex-col items-center justify-center p-6 rounded-md border-2 border-white mb-12">
          <h1 className="text-2xl font-bold text-black mb-6">BROWSE BY DRESS STYLE</h1>
          <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
            {[{
              style: "Casual",
              url: "/image 11.png",
            }, {
              style: "Formal",
              url: "/image 13.png",
            }, {
              style: "Party",
              url: "/image 12.png",
            }, {
              style: "Gym",
              url: "/image 14.png",
            }].map(({ style, url }) => (
              <div
                key={style}
                className="bg-white flex flex-col items-center justify-center p-4 rounded-lg border border-gray-300"
              >
                <img
                  src={url}
                  alt={style}
                  className=" h-40 object-cover rounded-t-md"
                />
                <h2 className="text-lg font-semibold text-gray-800 mt-2">{style}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* New Arrivals Section */}
        <h2 className="text-3xl font-bold uppercase text-center text-black mb-8">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-black">
          {[{
            img: "/k (4).png",
            name: "T-shirt with Tape Details",
            price: "$120",
            rating: "4.6/5",
          }, {
            img: "/k (3).png",
            name: "Skinny Fit Jeans",
            price: "$240",
            originalPrice: "$260",
            rating: "3.5/5",
          }, {
            img: "/k (2).png",
            name: "Checkered Shirt",
            price: "$180",
            rating: "4.6/5",
          }, {
            img: "/k (1).png",
            name: "Sleeve Striped T-shirt",
            price: "$130",
            originalPrice: "$160",
            rating: "4.5/5",
          }].map(({ img, name, price, originalPrice, rating }) => (
            <div key={name} className="bg-white shadow-lg rounded-lg p-6">
              <img
                src={img}
                alt={name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-medium mb-2">{name}</h2>
              <p className="text-gray-800 font-bold">
                <span className="text-green-600">{price}</span>
                {originalPrice && (
                  <span className="line-through text-gray-500 ml-2">
                    {originalPrice}
                  </span>
                )}
              </p>
              <div className="text-yellow-500 text-sm mt-2">★ {rating}</div>
            </div>
          ))}
        </div>

        {/* Top Selling Section */}
        <h2 className="text-3xl font-bold text-center mb-10 text-black">
          TOP SELLING
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[{
            img: "/image 7.png",
            name: "Vertical Striped Shirt",
            price: "$212",
            originalPrice: "$232",
            rating: "5.0/5",
            stars: 5,
          }, {
            img: "/image 8.png",
            name: "Courage Graphic T-shirt",
            price: "$145",
            rating: "4.0/5",
            stars: 4,
          }, {
            img: "/image 9.png",
            name: "Loose Fit Bermuda Shorts",
            price: "$80",
            rating: "3.0/5",
            stars: 3,
          }, {
            img: "/image 10.png",
            name: "Faded Skinny Jeans",
            price: "$90",
            rating: "4.0/5",
            stars: 4,
          }].map(({ img, name, price, originalPrice, rating, stars }) => (
            <div key={name} className="bg-white rounded-lg shadow-md p-6">
              <img
                src={img}
                alt={name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-medium mb-2 text-black">{name}</h3>
              <div className="flex items-center mb-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${i < stars ? 'text-orange-500' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.978 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.978-2.89a1 1 0 00-1.175 0l-3.978 2.89c-.785.57-1.839-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.293 9.401c-.783-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-black">{rating}</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-black">{price}</span>
                {originalPrice && (
                  <span className="ml-2 text-black line-through">{originalPrice}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-50 py-12">
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
                <p className="text-gray-600 mb-4">{`"${text}"`}</p>
                <h4 className="font-semibold text-gray-900">{name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

// // Main App Component
// const App = () => {
//   return (
//     <>
//       <Hero />
//       <Testimonials />
//     </>
//   );
// };

// export default App;
