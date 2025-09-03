import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  const plan = {
    name: "Professional",
    price: "99",
    features: [
      "Unlimited calls per month",
      "AI Driven Billing System",
      "SMS notifications",
      "24/7 coverage",
      "Mobile App",
    ],
  };

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-forest mb-12">
          Simple, Transparent Pricing
        </h2>
        <div className="flex justify-center">
          <div className="border border-gray-200 rounded-lg p-8 hover:border-forest/20 transition-colors max-w-md w-full">
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-4xl font-bold mb-6">
              ${plan.price}
              <span className="text-base font-normal text-gray-500">/month</span>
            </p>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="w-5 h-5 text-forest mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-forest hover:bg-forest/90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};