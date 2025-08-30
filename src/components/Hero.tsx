import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient text-white py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="speed-lines absolute top-1/2 left-0"></div>
        <div className="speed-lines absolute top-1/2 left-0 mt-4"></div>
        <div className="speed-lines absolute top-1/2 left-0 mt-8"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 border-white/30">
              🏎️ Ferrari Collection Art Platform
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Exhaust
              <span className="block paint-splash text-6xl md:text-8xl">
                Art
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Where the roar of Ferrari engines becomes the brush, and exhaust emissions create 
              <span className="text-orange-400 font-semibold"> one-of-a-kind masterpieces</span>. 
              Experience automotive art like never before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="btn-ferrari group">
                Start Creating Art
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                <PlayCircle className="w-5 h-5 mr-2" />
                Watch Process
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Live Sessions Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>NFT Certified</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Ferrari Silhouette */}
            <div className="relative w-full h-96 bg-gradient-to-r from-red-600/30 to-orange-500/30 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-4xl">🏎️</span>
                </div>
                <p className="text-white/80 text-lg">Live Art Creation</p>
              </div>
              
              {/* Animated Smoke Effects */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="smoke-animation w-8 h-8 bg-white/30 rounded-full"></div>
                <div className="smoke-animation w-6 h-6 bg-white/20 rounded-full mt-2" style={{animationDelay: '0.5s'}}></div>
                <div className="smoke-animation w-4 h-4 bg-white/10 rounded-full mt-2" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
            {/* Floating Art Pieces */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-80 transform rotate-12"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl opacity-80 transform -rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;