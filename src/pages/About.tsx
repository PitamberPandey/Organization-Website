import { useEffect, useState } from "react";
import { Target, Eye, Heart, Users } from "lucide-react";
import BookConsultation from "../components/BookConsultation";
import sujanImg from "./image/sujan.jpeg";
import nikeshImg from "./image/nikesh.png";
import pitamberImg from "./image/pitamber.png";
import { Phishing } from "@mui/icons-material";

interface AboutProps {
  onNavigate: (page: string) => void;
}

/* -------------------------------------------
   INLINE COUNTER COMPONENT
-------------------------------------------- */
function Counter({
  target,
  duration = 7000,
  label,
}: {
  target: number;
  duration?: number;
  label: string;
}) {
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
      <div className="text-4xl font-bold text-white">{count}+</div>
      <p className="text-blue-100">{label}</p>
    </div>
  );
}

/* -------------------------------------------
              ABOUT PAGE
-------------------------------------------- */
export default function About({ onNavigate }: AboutProps) {
  const team = [
    {
      name: "Sujan Subedi",
      role: "Legal Associates",
      email:"subedisujan9847@gmail.com",
      phoneNumber:"+9779748437611",
      image: sujanImg,
    },
    {
      name: "Nikesh Nepal",
      role: "Legal Associates",
       email:"nikeshnepal53@gmail.com",
      phoneNumber:"+9779845769570",
      image: nikeshImg,
    },
    {
      name: "Pitamber Pandey",
      role: "Tech Associates",
       email:"pitamberpandey.2060@gmail.com",
      phoneNumber:"+9779761697135",
      image: pitamberImg,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Plato Associates
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Plato Associates is a multidisciplinary firm offering comprehensive
            legal and technology solutions designed for today’s complex and
            dynamic landscape.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Story
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Plato Associates was founded with a clear vision to bridge legal
              precision with technological innovation. We combine deep legal
              expertise with modern tech solutions.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              By integrating law and technology, we help clients navigate
              complexity with confidence, clarity, and trust.
            </p>
          </div>

          {/* Counters */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-500 rounded-lg p-8">
              <Counter target={500} label="Clients Served" />
            </div>
            <div className="bg-green-500 rounded-lg p-8">
              <Counter target={1000} label="Projects Completed" />
            </div>
            <div className="bg-purple-500 rounded-lg p-8">
              <Counter target={50} label="Team Members" />
            </div>
            <div className="bg-orange-500 rounded-lg p-8">
              <Counter target={10} label="Years Experience" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow">
            <Target className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Mission</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Deliver legally sound, modern, and future-ready solutions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow">
            <Eye className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Vision</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Become a benchmark for integrated legal and technology services.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow">
            <Heart className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Values</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Integrity, transparency, and client-first commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <Users className="w-12 h-12 mx-auto text-blue-500 mb-4" />
          <h2 className="text-3xl font-bold">Meet Our Leadership</h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover bg-white"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
               <p className="text-gray-500">{member.email}</p>
                <p className="text-gray-500">{member.phoneNumber}</p>
            </div>
          ))}
        </div>
      </section>

      <BookConsultation onNavigate={onNavigate} />
    </div>
  );
}
