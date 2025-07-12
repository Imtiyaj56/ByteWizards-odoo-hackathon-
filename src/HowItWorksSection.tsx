import { Card, CardContent } from '@/components/ui/card';
import { Upload, Search, Repeat, Gift } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: "List Your Items",
    description: "Upload photos and details of clothes you no longer wear. Set them as available for swapping or point redemption."
  },
  {
    icon: Search,
    title: "Browse & Discover", 
    description: "Explore items from other community members. Filter by size, category, condition, and style preferences."
  },
  {
    icon: Repeat,
    title: "Request Swaps",
    description: "Send swap requests for items you love. Negotiate direct trades or use your earned points for redemption."
  },
  {
    icon: Gift,
    title: "Exchange & Enjoy",
    description: "Complete the exchange and enjoy your new-to-you clothing. Earn points for future swaps and help reduce waste."
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            How ReWear Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple steps to start your sustainable fashion journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};