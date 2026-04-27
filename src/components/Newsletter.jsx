import { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
      setEmail('');
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8">Get the latest dental health tips and updates delivered to your inbox</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button 
                type="submit"
                disabled={loading}
                className="bg-gold-500 hover:bg-gold-600 px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {error && (
              <p className="text-red-200 mt-3 text-sm">{error}</p>
            )}
          </form>
        </div>
      </section>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md mx-4 relative animate-scale-in shadow-2xl">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <CheckCircle size={64} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                ✅ You are subscribed!
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Thank you for subscribing to our newsletter. You'll receive the latest dental health tips and updates.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Newsletter;
