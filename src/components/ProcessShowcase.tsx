import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const ProcessShowcase = () => {
  const steps = [
    {
      number: "01",
      title: "Ferrari Selection",
      description: "Choose from our collection of meticulously maintained Ferrari vehicles, each calibrated for optimal artistic output.",
      details: ["Engine temperature monitoring", "Exhaust system preparation", "Paint pigment selection", "Canvas positioning"],
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=300&fit=crop"
    },
    {
      number: "02", 
      title: "Artistic Calibration",
      description: "Our engineers calibrate the exhaust system with eco-friendly pigments that react to engine performance.",
      details: ["Non-toxic pigment injection", "Pressure system calibration", "Color mixing preparation", "Safety protocol activation"],
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=300&fit=crop"
    },
    {
      number: "03",
      title: "Performance Art",
      description: "The Ferrari's acceleration creates unique patterns as exhaust pressure projects pigments onto canvas.",
      details: ["Live performance recording", "Real-time data capture", "Audience experience", "Multiple angle documentation"],
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop"
    },
    {
      number: "04",
      title: "Masterpiece Creation",
      description: "Each artwork is unique, capturing the vehicle's DNA through performance data and visual expression.",
      details: ["Artwork finishing", "NFT certification", "Performance data embedding", "Authentication process"],
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            🔬 The Science of Art
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            From Engine to <span className="paint-splash">Canvas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we transform the raw power of Ferrari engines into breathtaking works of art 
            through our revolutionary exhaust art process.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={step.number} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-3">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Visual */}
              <div className="flex-1">
                <Card className="art-card">
                  <CardContent className="p-0">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
        
        {/* Technical Specs */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Technical Specifications</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">850°C</div>
              <div className="text-gray-600">Peak Exhaust Temperature</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">0.3s</div>
              <div className="text-gray-600">Pigment Injection Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600">Eco-Friendly Pigments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">4K</div>
              <div className="text-gray-600">Performance Recording</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessShowcase;