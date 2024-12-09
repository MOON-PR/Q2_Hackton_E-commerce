import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

// (Include your full CasualPage component code here...)



// Define types for filters
type FilterType = 'price' | 'color' | 'size' | 'dressStyle';

interface Filters {
  price: number[];
  color: string[];
  size: string[];
  dressStyle: string[];
}

// Map filter types to their corresponding value types
type FilterValueType<T extends FilterType> = T extends 'price'
  ? number[]
  : string;

const CasualPage = () => {
  const [selectedFilters, setSelectedFilters] = useState<Filters>({
    price: [50, 200],
    color: [],
    size: [],
    dressStyle: [],
  });

  // Type-safe handler function
  const handleFilterChange = <T extends FilterType>(
    filterType: T,
    value: FilterValueType<T>
  ) => {
    setSelectedFilters((prevFilters) => {
      if (filterType === 'price' && Array.isArray(value)) {
        return {
          ...prevFilters,
          [filterType]: value,
        };
      } else if (typeof value === 'string') {
        return {
          ...prevFilters,
          [filterType]: prevFilters[filterType as 'color' | 'size' | 'dressStyle'].includes(value)
            ? prevFilters[filterType].filter((item) => item !== value)
            : [...prevFilters[filterType], value],
        };
      }
      return prevFilters;
    });
  };

  const products  = [
    {
      image: '/image 8 (1).png',
      title: 'Gradient Graphic T-shirt',
      rating: 3.5,
      price: 145,
    },
    {
      image: '/image 9 (1).png',
      title: 'Polo with Tipping Details',
      rating: 4.5,
      price: 180,
    },
    {
      image: '/image 10 (1).png',
      title: 'Black Striped T-shirt',
      rating: 5,
      price: 120,
      discount: 30,
    },
    {
      image: '/Frame 71.png',
      title: 'Skinny Fit Jeans',
      rating: 3.5,
      price: 240,
      discount: 20,
    },
    {
      image: '/image 9 (2).png',
      title: 'Checkered Shirt',
      rating: 4.5,
      price: 180,
    },
    {
      image: '/image 10 (2).png',
      title: 'Sleeve Striped T-shirt',
      rating: 4.5,
      price: 150,
      discount: 10,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-black">Casual Wear Collection</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Sidebar */}
        <aside className="lg:w-1/4">
          <div className="bg-white p-4 rounded-lg shadow-md mb-6 text-black">
            <h2 className="text-xl font-semibold mb-4 text-black">Filters</h2>
            <div className="mb-4">
              <h3 className="font-medium text-black">Price</h3>
              <input
                type="range"
                min="50"
                max="200"
                value={selectedFilters.price[1]}
                className="w-full mt-2"
                onChange={(e) =>
                  handleFilterChange('price', [50, Number(e.target.value)])
                }
              />
              <p className="text-sm text-black">
                ${selectedFilters.price[0]} - ${selectedFilters.price[1]}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-medium text-black">Colors</h3>
              <div className="flex gap-2 mt-2">
                {['red', 'blue', 'green', 'yellow', 'purple'].map((color) => (
                  <button
                    key={color}
                    className={`w-6 h-6 rounded-full border ${
                      selectedFilters.color.includes(color)
                        ? 'border-black'
                        : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleFilterChange('color', color)}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-medium text-black">Size</h3>
              <div className="flex gap-2 mt-2 text-black">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className={`px-3 py-1 border rounded-md ${
                      selectedFilters.size.includes(size)
                        ? 'border-black'
                        : 'border-gray-300'
                    }`}
                    onClick={() => handleFilterChange('size', size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <section className="lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden text-black"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{product.title}</h2>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500">
                      {'★'.repeat(Math.floor(product.rating))}
                    </span>
                    <span className="text-gray-500 ml-2">
                      ({product.rating})
                    </span>
                  </div>
                  <p className="text-lg font-bold mt-2">${product.price}</p>
                  {product.discount && (
                    <p className="text-red-500 line-through">
                      ${product.price + product.discount}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <button className="px-4 py-2 bg-gray-200 text-black rounded-md ">
                <Link href={'/product'}>
              Previous
              </Link>
            </button>
            <span className=' text-black'>Page 1 of 10</span>
            <button className="px-4 py-2 bg-gray-200 text-black rounded-md">
                <Link href={'/Cart'}>
              Next
              </Link>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CasualPage;


