import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Zap } from "lucide-react";

const PricingTiers = () => {
  const tiers = [
    {
      name: "Enthusiast",
      icon: Zap,
      price: "€850",
      period: "per session",
      description: "Perfect for first-time experience",
      features: [
        "2-hour group session",
        "Ferrari 488 GTB",
        "One artwork creation",
        "Basic photography",
        "Digital certificate",
        "Small refreshments"
      ],
      buttonText: "Book Session",
      popular: false,
      color: "blue"
    },
    {
      name: "Collector",
      icon: Star,
      price: "€2,500",
      period: "per session",
      description: "Premium private experience",
      features: [
        "3-hour private session",
        "Choice of 3 Ferrari models",
        "Two artwork creations",
        "Professional filming",
        "NFT certification",
        "Luxury hospitality",
        "Artwork shipping",
        "Performance data"
      ],
      buttonText: "Reserve Now",
      popular: true,
      color: "red"
    },
    {
      name: "Connoisseur",
      icon: Crown,
      price: "€12,000",
      period: "per event",
      description: "Ultimate VIP experience",
      features: [
        "Full-day experience",
        "Entire Ferrari collection access",
        "Multiple artwork series",
        "4K documentary filming",
        "Blockchain authenticity",
        "Michelin-star catering",
        "Global artwork shipping",
        "Personal art consultant",
        "Gallery exhibition priority",
        "Exclusive membership"
      ],
      buttonText: "Contact Concierge",
      popular: false,
      color: "gold"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            💎 Investment Tiers
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="paint-splash">Artistic</span> Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From exclusive private sessions to grand corporate experiences, 
            select the perfect level of luxury for your automotive art adventure.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <Card key={tier.name} className={`art-card relative ${tier.popular ? 'ring-2 ring-red-600 scale-105' : ''}`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-red-600 text-white px-6 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 mx-auto ${
                  tier.color === 'blue' ? 'bg-blue-100' :
                  tier.color === 'red' ? 'bg-red-100' :
                  'bg-yellow-100'
                }`}>
                  <tier.icon className={`w-8 h-8 ${
                    tier.color === 'blue' ? 'text-blue-600' :
                    tier.color === 'red' ? 'text-red-600' :
                    'text-yellow-600'
                  }`} />
                </div>
                
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                <p className="text-gray-600">{tier.description}</p>
                
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-600 ml-2">{tier.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${tier.popular ? 'btn-ferrari' : ''}`}
                  variant={tier.popular ? 'default' : 'outline'}
                >
                  {tier.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Information */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-gray-600">
            All experiences include safety equipment, professional supervision, and artwork authentication.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center">
              <Check className="w-4 h-4 mr-1 text-green-600" />
              Eco-friendly process
            </span>
            <span className="flex items-center">
              <Check className="w-4 h-4 mr-1 text-green-600" />
              Insurance included
            </span>
            <span className="flex items-center">
              <Check className="w-4 h-4 mr-1 text-green-600" />
              Worldwide shipping
            </span>
            <span className="flex items-center">
              <Check className="w-4 h-4 mr-1 text-green-600" />
              Money-back guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;