import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import clinicData from '../data/data.json';

const Footer = () => {
  const { clinic, workingHours } = clinicData;

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gold-500 mb-4">White & Bright</h3>
            <p className="text-gray-400 mb-4">{clinic.tagline}</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gold-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-gold-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-gold-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold-500 transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-gold-500 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gold-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-400">{clinic.phone}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-400">{clinic.email}</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-400">{clinic.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p className="font-semibold">{workingHours.weekdays.days}</p>
                  <p>{workingHours.weekdays.morning}</p>
                  <p>{workingHours.weekdays.evening}</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Clock size={18} className="mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p className="font-semibold">{workingHours.sunday.day}</p>
                  <p>{workingHours.sunday.timing}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} White & Bright Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
