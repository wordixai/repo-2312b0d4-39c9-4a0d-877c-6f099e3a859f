import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Share2 } from "lucide-react";

const ArtworkGallery = () => {
  const artworks = [
    {
      id: 1,
      title: "Ferrari 488 Velocity",
      vehicle: "Ferrari 488 GTB",
      price: "€15,000",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&h=600&fit=crop",
      colors: ["Red", "Orange", "Gold"],
      performance: { speed: "200 km/h", temperature: "850°C", duration: "45s" },
      likes: 234,
      views: 1520
    },
    {
      id: 2,
      title: "Prancing Horse Dreams",
      vehicle: "Ferrari 812 Superfast",
      price: "€22,000",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=600&fit=crop",
      colors: ["Blue", "Purple", "Silver"],
      performance: { speed: "220 km/h", temperature: "920°C", duration: "52s" },
      likes: 189,
      views: 987
    },
    {
      id: 3,
      title: "Monza Circuit Symphony",
      vehicle: "Ferrari F8 Tributo",
      price: "€18,500",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop",
      colors: ["Green", "Yellow", "Orange"],
      performance: { speed: "195 km/h", temperature: "780°C", duration: "38s" },
      likes: 156,
      views: 743
    },
    {
      id: 4,
      title: "Maranello Masterpiece",
      vehicle: "Ferrari SF90 Stradale",
      price: "€35,000",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=600&fit=crop",
      colors: ["Red", "Black", "White"],
      performance: { speed: "250 km/h", temperature: "1050°C", duration: "67s" },
      likes: 445,
      views: 2890
    },
    {
      id: 5,
      title: "Rosso Corsa Expression",
      vehicle: "Ferrari 296 GTB",
      price: "€28,000",
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&h=600&fit=crop",
      colors: ["Red", "Pink", "Orange"],
      performance: { speed: "210 km/h", temperature: "890°C", duration: "55s" },
      likes: 312,
      views: 1654
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-red-100 to-orange-100 text-red-800 hover:bg-red-200">
            🎨 Featured Collection
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Masterpieces in <span className="paint-splash">Motion</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each artwork captures the raw power and precision of Ferrari engineering, 
            transformed into unique visual expressions through controlled exhaust artistry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {artworks.map((artwork, index) => (
            <Card key={artwork.id} className="art-card group cursor-pointer">
              <div className="relative overflow-hidden rounded-t-2xl">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-gray-900">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-gray-900">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-gray-900">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Performance Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-600 text-white">
                    {artwork.performance.speed}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{artwork.title}</h3>
                  <span className="text-lg font-bold text-red-600">{artwork.price}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{artwork.vehicle}</p>
                
                {/* Color Palette */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-sm text-gray-500">Colors:</span>
                  {artwork.colors.map((color, colorIndex) => (
                    <div 
                      key={colorIndex}
                      className={`w-4 h-4 rounded-full ${
                        color === 'Red' ? 'bg-red-500' :
                        color === 'Orange' ? 'bg-orange-500' :
                        color === 'Gold' ? 'bg-yellow-500' :
                        color === 'Blue' ? 'bg-blue-500' :
                        color === 'Purple' ? 'bg-purple-500' :
                        color === 'Silver' ? 'bg-gray-400' :
                        color === 'Green' ? 'bg-green-500' :
                        color === 'Yellow' ? 'bg-yellow-400' :
                        color === 'Black' ? 'bg-gray-900' :
                        color === 'White' ? 'bg-gray-200' :
                        color === 'Pink' ? 'bg-pink-500' : 'bg-gray-300'
                      }`}
                    ></div>
                  ))}
                </div>
                
                {/* Performance Stats */}
                <div className="grid grid-cols-3 gap-4 text-center text-sm border-t pt-4">
                  <div>
                    <div className="font-semibold text-gray-900">{artwork.performance.temperature}</div>
                    <div className="text-gray-500">Temp</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{artwork.performance.duration}</div>
                    <div className="text-gray-500">Duration</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{artwork.likes}</div>
                    <div className="text-gray-500">Likes</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
            View Complete Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtworkGallery;