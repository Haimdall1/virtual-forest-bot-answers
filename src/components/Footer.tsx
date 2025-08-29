import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-forest text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Haimdall AI Solutions</h3>
            <p className="text-forest-light/80">
              Enabling access to AI solutions
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#overview" className="hover:text-forest-light">Overview</a></li>
              <li><a href="#pricing" className="hover:text-forest-light">Pricing</a></li>
              <li><a href="#faq" className="hover:text-forest-light">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-forest-light">About</a></li>
              <li><a href="#" className="hover:text-forest-light">Careers</a></li>
              <li><a href="#" className="hover:text-forest-light">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-forest-light">Privacy</Link></li>
              <li><a href="#" className="hover:text-forest-light">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-forest-light/20 mt-8 pt-8 text-center text-forest-light/60">
          <p>&copy; {new Date().getFullYear()} Haimdall AI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};