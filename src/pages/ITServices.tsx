import { Code } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import BookConsultation from '../components/BookConsultation';
import { itServices } from '../data/services';
import { useNavigate } from 'react-router-dom';

export default function ITServices() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-700 dark:to-cyan-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Code className="w-20 h-20 text-white mx-auto mb-6 animate-fade-in" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            IT Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Innovative technology solutions to drive your business forward in the digital age
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end technology services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} delay={index * 100} />
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 md:p-12 border-2 border-blue-200 dark:border-blue-900">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Why Choose Our IT Services?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {/* Features */}
            </div>
          </div>
        </div>
      </section>

      {/* Use useNavigate for BookConsultation */}
      <section>
        <div className="mt-16">
          <BookConsultation navigate={navigate} />
        </div>
      </section>
    </div>
  );
}
