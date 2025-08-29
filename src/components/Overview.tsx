import { Phone, Clock, Shield, Receipt } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Natural Conversations",
    description: "Our AI assistants engage in natural, context-aware conversations that feel human.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss an important call with round-the-clock virtual reception services.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee for your peace of mind.",
  },
  {
    icon: Receipt,
    title: "AI Invoicing & Management",
    description: "AI driven invoicing and workload management for streamlined business operations.",
  },
];

export const Overview = () => {
  return (
    <section id="overview" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-forest mb-12">
          Why Choose Haimdall?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 rounded-lg border border-gray-100 hover:border-forest/20 transition-colors">
              <feature.icon className="w-12 h-12 text-forest mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};