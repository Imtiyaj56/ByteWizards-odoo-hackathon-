import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Menu, X, User } from 'lucide-react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-card border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">ReWear</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Browse Items
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              My Swaps
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              How it Works
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm">
              List an Item
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary">
                Browse Items
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary">
                My Swaps
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary">
                How it Works
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                <Button className="w-full">
                  List an Item
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};