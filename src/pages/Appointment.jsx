import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle } from 'lucide-react';
import clinicData from '../data/data.json';

const Appointment = () => {
  const { services } = clinicData;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    treatment: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = 'Invalid phone number';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.treatment) newErrors.treatment = 'Treatment type is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Appointment booked:', formData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          date: '',
          time: '',
          treatment: '',
          message: ''
        });
      }, 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Book Appointment</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Schedule your visit and take the first step towards a healthier smile
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="card text-center animate-slide-up">
              <div className="bg-green-100 dark:bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600 dark:text-green-400" size={48} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Appointment Confirmed!</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Thank you for booking with us. We've received your appointment request and will contact you shortly to confirm.
              </p>
              <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Date:</strong> {formData.date} at {formData.time}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  <strong>Treatment:</strong> {formData.treatment}
                </p>
              </div>
            </div>
          ) : (
            <div className="card">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Schedule Your Appointment</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      <User className="inline mr-2" size={18} />
                      Patient Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-700 dark:text-white ${
                        errors.name ? 'border-red-500' : 'dark:border-gray-600'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      <Phone className="inline mr-2" size={18} />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-700 dark:text-white ${
                        errors.phone ? 'border-red-500' : 'dark:border-gray-600'
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    <Mail className="inline mr-2" size={18} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-700 dark:text-white ${
                      errors.email ? 'border-red-500' : 'dark:border-gray-600'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      <Calendar className="inline mr-2" size={18} />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={today}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-700 dark:text-white ${
                        errors.date ? 'border-red-500' : 'dark:border-gray-600'
                      }`}
                    />
                    {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      <Clock className="inline mr-2" size={18} />
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-700 dark:text-white ${
                        errors.time ? 'border-red-500' : 'dark:border-gray-600'
                      }`}
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                    {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    <FileText className="inline mr-2" size={18} />
                    Treatment Type *
                  </label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-700 dark:text-white ${
                      errors.treatment ? 'border-red-500' : 'dark:border-gray-600'
                    }`}
                  >
                    <option value="">Select Treatment</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.name}>{service.name}</option>
                    ))}
                  </select>
                  {errors.treatment && <p className="text-red-500 text-sm mt-1">{errors.treatment}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-700 dark:text-white"
                    placeholder="Any specific concerns or questions?"
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary text-lg py-4">
                  Book Appointment
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Appointment;
