import { Calendar } from 'lucide-react';

interface BookConsultationProps {
  onNavigate: (page: string) => void;
}

export default function BookConsultation({ onNavigate }: BookConsultationProps) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Calendar className="w-16 h-16 text-white mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Book a free consultation with our experts to discuss your IT and legal needs
        </p>
        <button
          onClick={() => onNavigate('contact')}
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
        >
          Book Consultation
        </button>
      </div>
    </section>
  );
}
