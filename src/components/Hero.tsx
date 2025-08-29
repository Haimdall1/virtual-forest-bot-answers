import { Button } from "@/components/ui/button";
import { Receipt } from "lucide-react";

export const Hero = () => {
  return (
    <div className="pt-32 pb-20 bg-forest-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest mb-6">
            AI Powered Small Business Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            AI driven solutions for small businesses and contractors
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-8 border border-forest/20 shadow-lg max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Receipt className="h-6 w-6 text-forest" />
              <h3 className="text-lg font-semibold text-forest">Featured Solution</h3>
            </div>
            <p className="text-gray-700">
              AI driven invoicing and workload management
            </p>
          </div>
          
          <Button 
            className="bg-forest hover:bg-forest/90 text-lg px-8 py-6"
            asChild
          >
            <a 
              href="https://apps.apple.com/app/your-app-id" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download from App Store
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};