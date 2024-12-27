import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-forest">Haimdall</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="text-gray-600 hover:text-forest">Overview</a>
            <a href="#testimonials" className="text-gray-600 hover:text-forest">Testimonials</a>
            <a href="#pricing" className="text-gray-600 hover:text-forest">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-forest">FAQ</a>
          </div>
          <Button className="bg-forest hover:bg-forest/90">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};