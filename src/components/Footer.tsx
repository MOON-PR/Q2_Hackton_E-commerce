// Footer Component
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">SHOP.CO</h3>
              <p className="text-gray-400">
                We have clothes that suit your style and which you're proud to
                wear. From women to men.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter text-gray-400 hover:text-white"></i>
                </a>
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook text-gray-400 hover:text-white"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram text-gray-400 hover:text-white"></i>
                </a>
                <a href="#" aria-label="Pinterest">
                  <i className="fab fa-pinterest text-gray-400 hover:text-white"></i>
                </a>
              </div>
            </div>
  
            {/* Company Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Works</a></li>
                <li><a href="#" className="hover:text-white">Career</a></li>
              </ul>
            </div>
  
            {/* Help Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Help</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Customer Support</a></li>
                <li><a href="#" className="hover:text-white">Delivery Details</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
  
            {/* FAQ Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Free eBooks</a></li>
                <li><a href="#" className="hover:text-white">Development Tutorial</a></li>
                <li><a href="#" className="hover:text-white">How-to Blog</a></li>
                <li><a href="#" className="hover:text-white">YouTube Playlist</a></li>
              </ul>
            </div>
          </div>
  
          {/* Newsletter Section */}
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-lg font-bold mb-4">Stay Up-to-Date About Our Latest Offers</h3>
            <form className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-2 rounded-full text-black w-full sm:w-auto focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-600 transition duration-300"
              >
                Subscribe to Newsletter
              </button>
            </form>
          </div>
  
          {/* Footer Bottom */}
          <div className="text-center mt-8 text-gray-500">
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="flex justify-center space-x-4 mt-2">
              <img src="/visa.png" alt="Visa" className="h-6" />
              <img src="/paypal.png" alt="PayPal" className="h-6" />
              <img src="/applepay.png" alt="Apple Pay" className="h-6" />
              <img src="/googlepay.png" alt="Google Pay" className="h-6" />
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  