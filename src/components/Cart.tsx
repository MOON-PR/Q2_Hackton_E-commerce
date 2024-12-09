import Link from 'next/link';
import React, { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
  color: string;
}

function Cart() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      price: 145,
      quantity: 1,
      image: '/image 8 (1).png',
      size: 'Large',
      color: 'White',
    },
    {
      id: 2,
      name: 'Checkered Shirt',
      price: 180,
      quantity: 1,
      image: '/image 9 (2).png',
      size: 'Medium',
      color: 'Red',
    },
    {
      id: 3,
      name: 'Skinny Fit Jeans',
      price: 240,
      quantity: 1,
      image: '/Frame 71.png',
      size: 'Large',
      color: 'Blue',
    },
  ]);

  const [promoCode, setPromoCode] = useState<string>('');

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setItems(
      items.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateSubtotal = (): number => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateDiscount = (): number => {
    const subtotal = calculateSubtotal();
    return subtotal * 0.2; // 20% discount
  };

  const calculateTotal = (): number => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    const deliveryFee = 15;
    return subtotal - discount + deliveryFee;
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-black">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cart Items */}
        <div className="bg-white shadow-md rounded-lg p-6 text-black">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-black">Size: {item.size}</p>
                <p className="text-black">Color: {item.color}</p>
                <p className="text-black font-bold">${item.price}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="p-2 border rounded"
                >
                  -
                </button>
                <span className="mx-3">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="p-2 border rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 shadow-md rounded-lg p-6 text-black">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="mb-4">
            <p className="flex justify-between">
              <span>Subtotal</span>
              <span>${calculateSubtotal()}</span>
            </p>
            <p className="flex justify-between">
              <span>Discount (-20%)</span>
              <span>-${calculateDiscount()}</span>
            </p>
            <p className="flex justify-between">
              <span>Delivery Fee</span>
              <span>$15</span>
            </p>
          </div>
          <p className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${calculateTotal()}</span>
          </p>
          <div className="mt-6">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Add promo code"
              className="border p-2 w-2/3 rounded"
            />
            <button
              onClick={() => console.log('Promo code applied:', promoCode)}
              className="bg-black text-white p-2 rounded ml-3"
            >
              Apply
            </button>
          </div>
          <button className="w-full bg-black text-white text-lg p-4 rounded mt-6">
            <Link href={'/'}>
            Go to Checkout →
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
