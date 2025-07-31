import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const getContainerClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'max-w-6xl mx-auto py-8';
      case 'theme2':
        return 'max-w-6xl mx-auto py-8';
      case 'theme3':
        return 'max-w-7xl mx-auto py-12';
      default:
        return 'max-w-6xl mx-auto py-8';
    }
  };



  const getCardClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow';
      case 'theme2':
        return 'bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-8 hover:shadow-xl transition-shadow';
      case 'theme3':
        return 'bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-pink-200 p-10 hover:shadow-2xl hover:bg-white transition-all hover:scale-105';
      default:
        return 'bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow';
    }
  };

  const getInputClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all';
      case 'theme2':
        return 'w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all';
      case 'theme3':
        return 'w-full px-4 py-3 bg-white/80 border-2 border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-400 transition-all hover:bg-white';
      default:
        return 'w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all';
    }
  };

  const getButtonClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-medium';
      case 'theme2':
        return 'w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-all hover:shadow-lg flex items-center justify-center space-x-2 font-medium';
      case 'theme3':
        return 'w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2 font-semibold';
      default:
        return 'w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-medium';
    }
  };

  const getLabelClasses = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'block text-sm font-medium text-gray-700 mb-2';
      case 'theme2':
        return 'block text-sm font-medium text-gray-300 mb-2';
      case 'theme3':
        return 'block text-sm font-bold text-gray-800 mb-2';
      default:
        return 'block text-sm font-medium text-gray-700 mb-2';
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@themeforge.dev',
      link: 'mailto:hello@themeforge.dev'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: null
    }
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className={getContainerClasses()}>
      <h1 className={getTitleClasses()}>
        Get In Touch
      </h1>

      <p className={`text-xl text-center mb-12 max-w-3xl mx-auto ${currentTheme === 'theme1' ? 'text-gray-600' :
          currentTheme === 'theme2' ? 'text-gray-300' :
            'text-gray-800 font-semibold'
        }`}>
        Have questions about ThemeForge? Want to collaborate or discuss the technology?
        We'd love to hear from you!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {contactInfo.map((info, index) => (
          <div key={index} className={getCardClasses()}>
            <div className="text-center">
              <info.icon className={`w-12 h-12 mx-auto mb-4 ${currentTheme === 'theme1' ? 'text-blue-600' :
                  currentTheme === 'theme2' ? 'text-blue-400' :
                    'text-pink-500'
                }`} />
              <h3 className={`text-lg font-semibold mb-2 ${currentTheme === 'theme2' ? 'text-gray-100' :
                  currentTheme === 'theme3' ? 'text-gray-800 font-["Pacifico"]' :
                    'text-gray-900'
                }`}>
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  className={`${currentTheme === 'theme1' ? 'text-blue-600 hover:text-blue-700' :
                      currentTheme === 'theme2' ? 'text-blue-400 hover:text-blue-300' :
                        'text-pink-600 hover:text-pink-700'
                    } transition-colors`}
                >
                  {info.value}
                </a>
              ) : (
                <span className={
                  currentTheme === 'theme2' ? 'text-gray-300' :
                    currentTheme === 'theme3' ? 'text-gray-700' :
                      'text-gray-600'
                }>
                  {info.value}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={getCardClasses()}>
        <h2 className={`text-2xl font-bold mb-6 text-center ${currentTheme === 'theme2' ? 'text-gray-100' :
            currentTheme === 'theme3' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-["Pacifico"]' :
              'text-gray-900'
          }`}>
          Send us a Message
        </h2>

        {isSubmitted ? (
          <div className="text-center py-8">
            <CheckCircle className={`w-16 h-16 mx-auto mb-4 ${currentTheme === 'theme1' ? 'text-green-600' :
                currentTheme === 'theme2' ? 'text-green-400' :
                  'text-green-500'
              }`} />
            <h3 className={`text-xl font-semibold mb-2 ${currentTheme === 'theme2' ? 'text-gray-100' :
                currentTheme === 'theme3' ? 'text-gray-800 font-["Pacifico"]' :
                  'text-gray-900'
              }`}>
              Message Sent Successfully!
            </h3>
            <p className={
              currentTheme === 'theme2' ? 'text-gray-300' :
                currentTheme === 'theme3' ? 'text-gray-700' :
                  'text-gray-600'
            }>
              Thank you for reaching out. We'll get back to you soon!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={getLabelClasses()}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={getInputClasses()}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <div className="flex items-center mt-2 text-red-600">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    <span className="text-sm">{errors.name}</span>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="email" className={getLabelClasses()}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={getInputClasses()}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <div className="flex items-center mt-2 text-red-600">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    <span className="text-sm">{errors.email}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className={getLabelClasses()}>
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={getInputClasses()}
                placeholder="What is this about?"
              />
              {errors.subject && (
                <div className="flex items-center mt-2 text-red-600">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  <span className="text-sm">{errors.subject}</span>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="message" className={getLabelClasses()}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={getInputClasses()}
                placeholder="Tell us more about your inquiry..."
              />
              {errors.message && (
                <div className="flex items-center mt-2 text-red-600">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  <span className="text-sm">{errors.message}</span>
                </div>
              )}
            </div>

            <button type="submit" className={getButtonClasses()}>
              <Send className="w-5 h-5" />
              <span className={currentTheme === 'theme3' ? 'font-["Pacifico"]' : ''}>
                Send Message
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;