import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import clinicData from '../data/data.json';

const Contact = () => {
  const { clinic, workingHours } = clinicData;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Get in touch with us for any inquiries or to schedule an appointment
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg">
                    <MapPin className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Address</h3>
                    <p className="text-gray-600 dark:text-gray-400">{clinic.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg">
                    <Phone className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                    <a href={`tel:${clinic.phone}`} className="text-primary-600 dark:text-primary-400 hover:underline">
                      {clinic.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg">
                    <Mail className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                    <a href={`mailto:${clinic.email}`} className="text-primary-600 dark:text-primary-400 hover:underline">
                      {clinic.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-lg">
                    <Clock className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Working Hours</h3>
                    <div className="text-gray-600 dark:text-gray-400 space-y-1">
                      <p className="font-medium">{workingHours.weekdays.days}</p>
                      <p>{workingHours.weekdays.morning}</p>
                      <p>{workingHours.weekdays.evening}</p>
                      <p className="font-medium mt-2">{workingHours.sunday.day}</p>
                      <p>{workingHours.sunday.timing}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg text-center">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p>We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-700 dark:text-white"
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full btn-primary flex items-center justify-center space-x-2">
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Find Us</h2>
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe
              src={clinic.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
