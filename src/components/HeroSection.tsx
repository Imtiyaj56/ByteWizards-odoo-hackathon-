import { Button } from '@/components/ui/button';
import { Recycle, Users, Heart } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Give Your Clothes a
            <span className="text-primary block">Second Life</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join our sustainable clothing exchange community. Swap, redeem, and discover 
            amazing pre-loved fashion while reducing textile waste.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Swapping
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Browse Items
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Recycle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">1,000+</h3>
              <p className="text-muted-foreground">Items Exchanged</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">500+</h3>
              <p className="text-muted-foreground">Community Members</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">50kg</h3>
              <p className="text-muted-foreground">Textile Waste Saved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};