import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import clinicData from '../data/data.json';

const Services = () => {
  const { services } = clinicData;

  const iconMap = {
    tooth: '🦷',
    scissors: '✂️',
    heart: '❤️',
    activity: '⚡',
    smile: '😊',
    grid: '📐',
    sparkles: '✨',
    sun: '☀️',
    anchor: '⚓',
    award: '🏆',
    stethoscope: '🩺',
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive dental solutions for all your oral health needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card group hover:scale-105 transition-transform">
                <div className="text-6xl mb-4">{iconMap[service.icon] || '🦷'}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{service.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                <Link 
                  to="/appointment" 
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:underline group-hover:translate-x-2 transition-transform"
                >
                  Book Now <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Not Sure Which Service You Need?</h2>
          <p className="text-xl mb-8">Schedule a consultation and let our experts guide you to the best treatment</p>
          <Link to="/appointment" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
