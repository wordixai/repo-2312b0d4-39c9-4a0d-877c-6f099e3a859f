import { Car, Mail, Phone, MapPin, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const quickLinks = [
    { name: "Gallery", href: "#gallery" },
    { name: "Experiences", href: "#experiences" },
    { name: "Pricing", href: "#pricing" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Safety Guidelines", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                <Car className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                ExhaustArt
              </span>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Transforming the power of Ferrari engines into breathtaking works of art. 
              Where automotive excellence meets artistic expression.
            </p>
            
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-gray-700 text-gray-400 hover:text-white hover:border-white">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-700 text-gray-400 hover:text-white hover:border-white">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-700 text-gray-400 hover:text-white hover:border-white">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="text-gray-400">Maranello, Italy</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span className="text-gray-400">+39 0536 949111</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span className="text-gray-400">info@exhaustart.com</span>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Get exclusive access to new artworks and private events.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
              />
              <Button className="w-full btn-ferrari">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ExhaustArt. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
            {legalLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;