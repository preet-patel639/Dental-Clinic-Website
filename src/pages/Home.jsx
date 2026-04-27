import { Link } from 'react-router-dom';
import { Phone, Calendar, CheckCircle, Users, Award, Star, ArrowRight } from 'lucide-react';
import clinicData from '../data/data.json';

const Home = () => {
  const { clinic, doctor, services, statistics, process, testimonials } = clinicData;

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                {clinic.tagline}
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Expert dental care with {doctor.name} ({doctor.qualification}) - {doctor.experience} of excellence in dentistry
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/appointment" className="btn-primary flex items-center space-x-2">
                  <Calendar size={20} />
                  <span>Book Appointment</span>
                </Link>
                <a href={`tel:${clinic.phone}`} className="btn-secondary flex items-center space-x-2">
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-200 to-gold-200 dark:from-primary-900 dark:to-gold-900 rounded-3xl flex items-center justify-center text-8xl">
                🦷
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{statistics.referralRate}</div>
              <p className="text-gray-600 dark:text-gray-400">Patients Referral Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{statistics.treatedPatients}</div>
              <p className="text-gray-600 dark:text-gray-400">Treated Patients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{statistics.services}</div>
              <p className="text-gray-600 dark:text-gray-400">Services</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{statistics.experience}</div>
              <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Comprehensive dental care for your entire family</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.slice(0, 8).map((service) => (
              <div key={service.id} className="card hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">🦷</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:underline">
              View All Services <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Simple steps to your perfect smile</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Patient Testimonials</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">What our patients say about us</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-gold-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900 dark:text-white">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-xl mb-8">Book your appointment today and experience world-class dental care</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/appointment" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Appointment
            </Link>
            <a href={`tel:${clinic.phone}`} className="bg-gold-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gold-600 transition-colors">
              Call {clinic.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
