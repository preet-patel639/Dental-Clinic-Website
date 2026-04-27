import { Award, Heart, Shield, Users, Target, Eye } from 'lucide-react';
import clinicData from '../data/data.json';

const About = () => {
  const { clinic, doctor } = clinicData;

  const features = [
    { icon: Award, title: 'Expert Care', description: 'Highly qualified dental professionals with years of experience' },
    { icon: Heart, title: 'Patient-Centered', description: 'Your comfort and satisfaction are our top priorities' },
    { icon: Shield, title: 'Advanced Technology', description: 'State-of-the-art equipment for precise treatments' },
    { icon: Users, title: 'Friendly Staff', description: 'Warm and welcoming team dedicated to your care' },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">About Us</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Providing exceptional dental care with compassion and expertise
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full h-96 bg-gradient-to-br from-primary-200 to-gold-200 dark:from-primary-900 dark:to-gold-900 rounded-3xl flex items-center justify-center text-9xl">
              👨‍⚕️
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet {doctor.name}</h2>
              <p className="text-xl text-primary-600 dark:text-primary-400 mb-6">{doctor.qualification} | {doctor.specialization}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                With over {doctor.experience} of dedicated service in dentistry, {doctor.name} has established {clinic.name} as a trusted name in dental care. Specializing in {doctor.specialization}, Dr. Patel combines expertise with a gentle approach to ensure every patient receives the best possible care.
              </p>
              <div className="bg-primary-50 dark:bg-gray-700 p-6 rounded-lg border-l-4 border-primary-600">
                <p className="text-gray-700 dark:text-gray-300 italic">"{doctor.quote}"</p>
                <p className="text-right mt-4 font-semibold text-gray-900 dark:text-white">— {doctor.name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card">
              <Target className="text-primary-600 dark:text-primary-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To provide exceptional dental care that enhances the oral health and overall well-being of our patients. We are committed to delivering personalized treatment in a comfortable, modern environment using the latest dental technology and techniques.
              </p>
            </div>
            <div className="card">
              <Eye className="text-primary-600 dark:text-primary-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To be the most trusted dental clinic in Ahmedabad, known for excellence in patient care, innovative treatments, and creating beautiful, healthy smiles that last a lifetime. We strive to make quality dental care accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Experience the difference at White & Bright</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 dark:bg-primary-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-primary-600 dark:text-primary-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Environment */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Modern Clinic Environment</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our clinic is designed with your comfort in mind. We maintain the highest standards of cleanliness and hygiene, with modern equipment and a relaxing atmosphere that makes every visit pleasant.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-6xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Modern Facility</h3>
              <p className="text-gray-600 dark:text-gray-400">State-of-the-art dental equipment</p>
            </div>
            <div className="card text-center">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Hygienic Standards</h3>
              <p className="text-gray-600 dark:text-gray-400">Strict sterilization protocols</p>
            </div>
            <div className="card text-center">
              <div className="text-6xl mb-4">🛋️</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Comfortable Space</h3>
              <p className="text-gray-600 dark:text-gray-400">Relaxing waiting area</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
