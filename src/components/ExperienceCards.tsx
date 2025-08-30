import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, MapPin, Star } from "lucide-react";

const ExperienceCards = () => {
  const experiences = [
    {
      id: 1,
      title: "Private Ferrari Art Session",
      description: "Exclusive one-on-one art creation with a Ferrari of your choice",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&h=400&fit=crop",
      price: "€2,500",
      duration: "2 hours",
      capacity: "1-2 people",
      location: "Maranello Studio",
      rating: 4.9,
      features: ["Personal Ferrari selection", "Professional filming", "NFT certification", "Artwork shipping"]
    },
    {
      id: 2,
      title: "Group Art Experience",
      description: "Shared Ferrari art session perfect for special occasions",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
      price: "€850",
      duration: "3 hours",
      capacity: "4-8 people",
      location: "Milan Atelier",
      rating: 4.8,
      features: ["Multiple Ferrari models", "Group participation", "Refreshments included", "Digital gallery"]
    },
    {
      id: 3,
      title: "Corporate VIP Package",
      description: "Premium corporate event with multiple Ferrari art demonstrations",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      price: "€12,000",
      duration: "Full day",
      capacity: "20-50 people",
      location: "Your venue",
      rating: 5.0,
      features: ["Mobile studio setup", "Catering service", "Brand integration", "Executive gifts"]
    }
  ];

  return (
    <section id="experiences" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            🏆 Premium Experiences
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Curated <span className="paint-splash">Automotive</span> Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate private sessions to grand corporate events, we create unforgettable 
            automotive art experiences tailored to your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <Card key={experience.id} className="art-card overflow-hidden">
              <div className="relative">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-black/20 text-white backdrop-blur-sm">
                    <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {experience.rating}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-600 text-white font-bold">
                    {experience.price}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{experience.title}</CardTitle>
                <p className="text-gray-600">{experience.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Experience Details */}
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    {experience.capacity}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    {experience.location}
                  </div>
                </div>
                
                {/* Features List */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Included:</h4>
                  <ul className="space-y-1">
                    {experience.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full btn-ferrari">
                  Book Experience
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom experience?</p>
          <Button variant="outline" size="lg" className="border-red-200 text-red-600 hover:bg-red-50">
            Contact Our Concierge
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCards;