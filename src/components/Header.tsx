
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ui/theme-toggle";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const menuItems = [
    { text: 'Problems', path: '/problems' },
    { text: 'Documentation', path: '/docs' },
    { text: 'Leaderboard', path: '/leaderboard' },
    { text: 'Pricing', path: '/pricing' },
    { text: 'About Us', path: '/aboutus' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-[100] w-full",
      "glass-morphism dark border-b border-white/10",
      className
    )}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent hover:to-primary transition-colors"
          >
            SpreadsheetChallenges
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link 
                key={item.text} 
                to={item.path} 
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {item.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
            <div className="flex items-center gap-4 pl-4 border-l border-border">
              <Button variant="ghost" className="text-sm font-medium">
                Sign In
              </Button>
              <Button className="text-sm font-medium">
                Sign Up
              </Button>
              <ThemeToggle />
            </div>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[101] md:hidden">
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen(false)} 
          />
          <div className="fixed right-0 top-0 h-full w-3/4 max-w-xs glass-morphism dark p-6">
            <div className="flex justify-end mb-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex flex-col gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.text}
                  to={item.path}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.text}
                </Link>
              ))}
              <div className="pt-6 border-t border-border">
                <div className="flex flex-col gap-4">
                  <Button variant="ghost" className="text-sm font-medium w-full">
                    Sign In
                  </Button>
                  <Button className="text-sm font-medium w-full">
                    Sign Up
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
