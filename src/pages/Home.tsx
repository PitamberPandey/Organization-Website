import { ArrowRight, Code, Scale, Star, CheckCircle, Zap, Shield } from 'lucide-react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

import BookConsultation from '../components/BookConsultation';
import { itServices, lawServices } from '../data/services';
import { testimonials } from '../data/testimonials';
import { useState } from 'react';
import coverImage from './cover.jpg';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <section
  className="relative min-h-screen flex items-center justify-center pt-16"
  style={{
    backgroundImage: `url(${coverImage})`, // <-- your image path
    backgroundSize: 'cover',        // makes the image cover the entire section
    backgroundPosition: 'center',   // center the image
    backgroundRepeat: 'no-repeat',  // prevent repetition
  }}
>
  {/* Optional overlay for better text readability */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center animate-fade-in">
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
      Your Complete
      <br />
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
        IT & Legal Services
      </span>
    </h1>
    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
      Comprehensive technology solutions and legal expertise under one roof.
      Empowering your business to thrive in the digital age.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button
        onClick={() => onNavigate('contact')}
        className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
      >
        <span>Get Started</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
      <button
        onClick={() => onNavigate('about')}
        className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-200 hover:border-blue-600 transition-all duration-300 hover:scale-105"
      >
        Learn More
      </button>
    </div>
  </div>
</section>


      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div
              onMouseEnter={() => setHoveredService('it')}
              onMouseLeave={() => setHoveredService(null)}
              className="relative group cursor-pointer"
              onClick={() => onNavigate('it-services')}
            >
              <div className={`bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 rounded-2xl p-8 h-full shadow-xl transition-all duration-300 ${
                hoveredService === 'it' ? 'scale-105 shadow-2xl' : ''
              }`}>
                <Code className="w-16 h-16 text-white mb-4" />
                <h3 className="text-3xl font-bold text-white mb-4">IT Solutions</h3>
                <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                  Cutting-edge technology services from web development to cloud solutions
                </p>
                <ul className="space-y-3">
                  {itServices.slice(0, 3).map((service) => (
                    <li key={service.id} className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span>{service.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Explore IT Services</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>

            <div
              onMouseEnter={() => setHoveredService('legal')}
              onMouseLeave={() => setHoveredService(null)}
              className="relative group cursor-pointer"
              onClick={() => onNavigate('law-services')}
            >
              <div className={`bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-800 dark:to-slate-950 rounded-2xl p-8 h-full shadow-xl transition-all duration-300 ${
                hoveredService === 'legal' ? 'scale-105 shadow-2xl' : ''
              }`}>
                <Scale className="w-16 h-16 text-white mb-4" />
                <h3 className="text-3xl font-bold text-white mb-4">Legal Solutions</h3>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  Expert legal guidance for corporate law, compliance, and documentation
                </p>
                <ul className="space-y-3">
                  {lawServices.slice(0, 3).map((service) => (
                    <li key={service.id} className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span>{service.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Explore Legal Services</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-900">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                IT vs Legal: Why Not Both?
              </h3>
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
              While IT services drive innovation and digital transformation, legal services ensure compliance and protection.
              Together, they create a complete ecosystem for business success. Pluto uniquely provides both,
              streamlining your operations and saving you time and resources.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Pluto
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The benefits of partnering with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                One-Stop Solution
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Access both IT and legal services from a single trusted partner, streamlining your business operations.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Expert Team
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Our specialized teams bring years of experience in both technology and legal domains.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Reliable & Secure
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We prioritize security and compliance in every project, protecting your business interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              What our clients say about us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookConsultation onNavigate={onNavigate} />
      

      {/* Floating WhatsApp Button */}
     

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

<a
  href="https://wa.me/9779845769570" // Replace with your WhatsApp number
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-3xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 z-50 space-x-2"
>
  <WhatsAppIcon className="text-white w-6 h-6" />
  <span className="text-white font-semibold">WhatsApp</span>
</a>
<a
  href="tel:+9779845769570" // Replace with your phone number including country code
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-20 right-6 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-3xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 z-50 space-x-2"
>
  <PhoneIcon className="text-white w-6 h-6" />
  <span className="text-white font-semibold">Call Now</span>
</a>

    </div>
  );
}
