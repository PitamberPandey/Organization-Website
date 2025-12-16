import { Scale } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import BookConsultation from '../components/BookConsultation';
import { lawServices } from '../data/services';

interface LawServicesProps {
  onNavigate: (page: string) => void;
}

export default function LawServices({ onNavigate }: LawServicesProps) {
  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-800 dark:to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="w-20 h-20 text-white mx-auto mb-6 animate-fade-in" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Legal Services
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Expert legal counsel to protect your business interests and ensure compliance
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Legal Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive legal services to help your business navigate complex regulations and grow with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lawServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} delay={index * 100} />
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 md:p-12 border-2 border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Why Choose Our Legal Services?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Experienced Lawyers
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our team of seasoned legal professionals brings decades of combined experience
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Comprehensive Coverage
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  From incorporation to compliance, we handle all your legal needs
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Fast Turnaround
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Efficient processes to deliver timely legal solutions without compromising quality
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Transparent Pricing
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Clear, upfront pricing with no hidden fees or surprise charges
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookConsultation onNavigate={onNavigate} />
    </div>
  );
}
