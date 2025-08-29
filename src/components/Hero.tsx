import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="pt-32 pb-20 bg-forest-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold text-forest mb-6">
            AI Powered Small Business Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Never miss a call again. Haimdall's AI assistants handle your calls 24/7 with human-like conversation.
          </p>
          <Button className="bg-forest hover:bg-forest/90 text-lg px-8 py-6">
            Start Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
};