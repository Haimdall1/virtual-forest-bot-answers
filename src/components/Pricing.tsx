import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      features: [
        "Up to 100 calls/month",
        "Basic call routing",
        "Email notifications",
        "Business hours coverage",
      ],
    },
    {
      name: "Professional",
      price: "99",
      features: [
        "Up to 500 calls/month",
        "Advanced call routing",
        "SMS notifications",
        "24/7 coverage",
        "Custom greeting",
      ],
    },
    {
      name: "Enterprise",
      price: "199",
      features: [
        "Unlimited calls",
        "Priority routing",
        "Custom integrations",
        "24/7 coverage",
        "Dedicated support",
        "Analytics dashboard",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-forest mb-12">
          Simple, Transparent Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border border-gray-200 rounded-lg p-8 hover:border-forest/20 transition-colors"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};