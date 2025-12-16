import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from "@emailjs/browser";
import { faqs } from '../data/faqs';
import map from '../pages/map.png';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {

  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_qbuakvj",    // <-- Replace
        "template_pkimbez",   // <-- Replace
        formRef.current,
        "trSLzakJkQab7iF3B"     // <-- Replace
      )
      .then(
        () => {
          setSubmitted(true);
          setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', service: '', message: '' });
          }, 3000);
        },
        () => {
          alert("Failed to send. Try again.");
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Ready to transform your business? Let's start a conversation
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT SIDE */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-xl p-8 text-center animate-fade-in">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-600 dark:text-green-300">
                    Thank you for contacting us. We’ll get back to you soon!
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                    >
                      <option value="">Select a service</option>
                      <option value="IT Services">IT Services</option>
                      <option value="Legal Services">Legal Services</option>
                      <option value="Both IT & Legal">Both IT & Legal</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT SIDE CONTACT INFO */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  
                  {/* EMAIL */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Email
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">plutoassociates5@gmail.com</p>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Phone
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">9845769570</p>
                      <p className="text-gray-600 dark:text-gray-400">9806903097</p>
                      <p className="text-gray-600 dark:text-gray-400">Sun–Fri 9 AM – 6 PM</p>
                    </div>
                  </div>

                  {/* ADDRESS */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Address
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">Kathmandu</p>
                      <p className="text-gray-600 dark:text-gray-400">Maitighar</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* OFFICE HOURS */}
              <div className="bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>Sunday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>

              {/* MAP */}
             <div className="bg-gray-200 dark:bg-gray-800 rounded-xl h-64 flex items-center justify-center overflow-hidden">
  <img
    src={map} // Replace with your image path
    alt="Map"
    className="object-cover w-full h-full rounded-xl"
  />
</div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 text-2xl">
                    {openFaq === faq.id ? '−' : '+'}
                  </span>
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
