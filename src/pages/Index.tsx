import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Palette, Zap, Users, Trophy, PlayCircle, Calendar, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import ArtworkGallery from "@/components/ArtworkGallery";
import ExperienceCards from "@/components/ExperienceCards";
import ProcessShowcase from "@/components/ProcessShowcase";
import PricingTiers from "@/components/PricingTiers";
import Footer from "@/components/Footer";

const Index = () => {
  const stats = [
    { icon: Car, value: "50+", label: "Ferrari Collection" },
    { icon: Palette, value: "500+", label: "Unique Artworks" },
    { icon: Users, value: "1000+", label: "Art Collectors" },
    { icon: Trophy, value: "25+", label: "Gallery Exhibitions" }
  ];

  const features = [
    {
      icon: Zap,
      title: "Live Art Creation",
      description: "Watch Ferrari exhausts create unique masterpieces in real-time performances."
    },
    {
      icon: PlayCircle,
      title: "NFT Integration",
      description: "Each artwork comes with blockchain certification and performance data."
    },
    {
      icon: Calendar,
      title: "Private Events",
      description: "Exclusive experiences for collectors and automotive enthusiasts."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                ExhaustArt
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#gallery" className="text-gray-700 hover:text-red-600 transition-colors">Gallery</a>
              <a href="#experiences" className="text-gray-700 hover:text-red-600 transition-colors">Experiences</a>
              <a href="#pricing" className="text-gray-700 hover:text-red-600 transition-colors">Pricing</a>
              <Button className="btn-ferrari">Book Experience</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-50 to-red-100 rounded-xl mb-4">
                  <stat.icon className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-200">Innovation Meets Art</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Where <span className="paint-splash">Performance</span> Creates Art
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the fusion of automotive excellence and artistic expression through our revolutionary Exhaust Art platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="art-card text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Artwork Gallery */}
      <ArtworkGallery />

      {/* Process Showcase */}
      <ProcessShowcase />

      {/* Experience Cards */}
      <ExperienceCards />

      {/* Pricing Tiers */}
      <PricingTiers />

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Automotive Art?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Join the exclusive community of collectors and artists pushing the boundaries of automotive expression.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4">
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;