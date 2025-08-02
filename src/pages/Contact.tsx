import React, { useState } from 'react';
import { useThemeStyles } from '../hooks/useThemeStyles';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const styles = useThemeStyles();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@themeforge.dev',
      link: 'mailto:hello@themeforge.dev',
      style: 'email'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      style: 'phone'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: null,
      style: 'location'
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
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className={styles.layout}>
      <h1 className={styles.typography.h1}>
        Get In Touch
      </h1>

      <p className={`${styles.typography.body} mb-12`}>
        Have questions about ThemeForge? Want to collaborate or discuss the technology?
        We'd love to hear from you!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {contactInfo.map((info, index) => (
          <div key={index} className={styles.infoBox.base}>
            <div className="text-center">
              <info.icon className="w-12 h-12 mx-auto mb-4 text-current" />
              <h3 className={styles.typography.h3}>
                {info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="transition-colors hover:opacity-80"
                >
                  {info.value}
                </a>
              ) : (
                <span className={styles.typography.bodySecondary}>
                  {info.value}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.form.container}>
        <h2 className={`${styles.typography.h2} text-center`}>
          Send us a Message
        </h2>

        {isSubmitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
            <h3 className={styles.typography.h3}>
              Message Sent Successfully!
            </h3>
            <p className={styles.typography.bodySecondary}>
              Thank you for reaching out. We'll get back to you soon!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={styles.form.label}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.form.input}
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
                <label htmlFor="email" className={styles.form.label}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.form.input}
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
              <label htmlFor="subject" className={styles.form.label}>
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.form.input}
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
              <label htmlFor="message" className={styles.form.label}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={styles.form.textarea}
                placeholder="Tell us more about your inquiry..."
              />
              {errors.message && (
                <div className="flex items-center mt-2 text-red-600">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  <span className="text-sm">{errors.message}</span>
                </div>
              )}
            </div>

            <button type="submit" className={styles.form.submit}>
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact