import { useEffect, useState } from "react";
import { Target, Eye, Heart, Users } from "lucide-react";
import BookConsultation from "../components/BookConsultation";

interface AboutProps {
  onNavigate: (page: string) => void;
}

/* -------------------------------------------
   INLINE COUNTER COMPONENT (NO EXTRA FILE)
-------------------------------------------- */
function Counter({ target, duration = 7000, label }: { target: number; duration?: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 30);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.ceil(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white">{count}</div>
      <p className="text-blue-100">{label}</p>
    </div>
  );
}

/* -------------------------------------------
              ABOUT PAGE MAIN FILE
-------------------------------------------- */
export default function About({ onNavigate }: AboutProps) {
  const team = [
    { name: "Sujan Subedi", role: "Legal Expert", initial: "SS" },
    { name: "Nikesh Nepal", role: "Legal Expert", initial: "SJ" },
    { name: "Pitamber Pandey", role: "Tech Expert", initial: "PP" },
    
  ];

  return (
    <div className="min-h-screen pt-16">

      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Pluto Associaties</h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Plato Associates is a multidisciplinary firm offering comprehensive legal and technology solutions designed for today’s complex and dynamic landscape. With strong expertise across Civil, Corporate, Criminal, FDI, and various specialized legal domains, we provide clients with strategic guidance, robust representation, and practical solutions tailored to their unique needs.

          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              
Plato Associates was founded with a simple but powerful vision: to bring clarity, integrity, and innovation to the worlds of law and technology. Built on a foundation of trust and driven by a commitment to excellence, we are a multidisciplinary firm that blends deep legal expertise with forward-thinking technological solutions.

</p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
             
From our early beginnings, we recognized that clients today face challenges that are more complex and interconnected than ever—whether navigating intricate legal landscapes or adapting to rapidly evolving digital environments. To address these needs, we brought together a team of seasoned professionals across Civil, Corporate, Criminal, FDI, and other specialized legal domains, supported by innovative thinkers in the technology sector.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              
What sets us apart is our belief that legal insight and technological advancement are no longer separate worlds—they are partners. By integrating the analytical precision of law with the efficiency and creativity of modern tech, Plato Associates delivers solutions that are not only accurate and compliant but also agile, scalable, and future-ready.

            </p>
          </div>

          {/* Counters */}
          <div className="grid grid-cols-2 gap-4">

            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg p-8 text-white">
              <Counter target={500} label="Clients Served" />
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg p-8 text-white">
              <Counter target={1000} label="Projects Completed" />
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-8 text-white">
              <Counter target={50} label="Team Members" />
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg p-8 text-white">
              <Counter target={10} label="Years Experience" />
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mission, Vision & Values
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">

          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Mission</h3>
            <p className="text-gray-600 dark:text-gray-400">At Plato Associates, our mission is to bridge the gap between legal precision and technological innovation. We strive to deliver solutions that are not only legally sound but also efficient, modern, and future-ready.
We aim to empower our clients—individuals, startups, corporates, and institutions—by offering clear guidance, strong representation, and strategies that enable them to overcome challenges with confidence.
Through continuous learning, collaboration, and a commitment to excellence, we work to simplify complexity, protect rights, and create pathways for sustainable growth.
</p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Vision</h3>
            <p className="text-gray-600 dark:text-gray-400">Our vision is to become a benchmark in the industry for integrated legal and technology services—where expertise, innovation, and trust converge.
We aspire to build a firm that adapts to evolving legal frameworks, embraces technological advancements, and consistently delivers value-driven solutions.
By fostering a culture of integrity and innovation, we envision Plato Associates as a trusted, long-term advisor for clients seeking clarity in law, stability in business, and innovation in technology.
</p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Values</h3>
            <p className="text-gray-600 dark:text-gray-400">We operate with unwavering honesty, transparency, and fairness. Our decisions and actions are grounded in strong ethical principles.
</p>
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <Users className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Meet Our Leadership Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Trusted experts committed to your success</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold shadow-lg mb-4">
                {member.initial}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <BookConsultation onNavigate={onNavigate} />

    </div>
  );
}
