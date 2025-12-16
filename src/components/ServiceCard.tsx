import * as Icons from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

export default function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div
      className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
