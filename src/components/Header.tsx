import { Link } from "react-router-dom";
import { Newspaper, Moon, Sun, Settings, User, ChevronDown, BarChart3, Scale, Clock, Network, Eye, MapPin, Radio, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getPreferences, savePreferences } from "@/lib/storage";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const prefs = getPreferences();
    setTheme(prefs.theme);
    document.documentElement.classList.toggle('dark', prefs.theme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    savePreferences({ theme: newTheme });
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const closeSheet = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-primary bg-background">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 newspaper-title text-2xl">
          <Newspaper className="h-7 w-7" />
          <span>PulseSynopsis</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4 transition-all">
            Home
          </Link>
          <Link to="/feed" className="text-sm font-medium hover:underline underline-offset-4 transition-all">
            Feed
          </Link>
          <Link to="/videos" className="text-sm font-medium hover:underline underline-offset-4 transition-all">
            Videos
          </Link>
          <Link to="/community" className="text-sm font-medium hover:underline underline-offset-4 transition-all">
            Community
          </Link>
          <Link to="/games" className="text-sm font-medium hover:underline underline-offset-4 transition-all">
            Games
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium hover:underline underline-offset-4 transition-all h-auto p-0">
                Innovations <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuItem asChild>
                <Link to="/perspective-switch" className="cursor-pointer flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <div>
                    <div className="font-semibold">Perspective Switch™</div>
                    <div className="text-xs text-muted-foreground">Multi-angle story views</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/local-pulse" className="cursor-pointer flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <div>
                    <div className="font-semibold">Local Pulse Lens™</div>
                    <div className="text-xs text-muted-foreground">Geo-aware news</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/timeline-live" className="cursor-pointer flex items-center gap-2">
                  <Radio className="h-4 w-4" />
                  <div>
                    <div className="font-semibold">Timeline-Live™</div>
                    <div className="text-xs text-muted-foreground">Real-time story tracking</div>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/analytics" className="cursor-pointer flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Analytics Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/perspectives" className="cursor-pointer flex items-center gap-2">
                  <Scale className="h-4 w-4" />
                  Multiple Perspectives
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/timeline" className="cursor-pointer flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Story Timelines
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/topics-graph" className="cursor-pointer flex items-center gap-2">
                  <Network className="h-4 w-4" />
                  Topics Graph
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/about" className="text-sm font-medium hover:underline underline-offset-4 transition-all">
            About
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <Link to="/settings">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/settings">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 newspaper-title text-xl">
                <Newspaper className="h-6 w-6" />
                PulseSynopsis
              </SheetTitle>
            </SheetHeader>
            
            <div className="mt-8 flex flex-col gap-6">
              {/* Navigation Links */}
              <div className="flex flex-col gap-4">
                <Link 
                  to="/" 
                  className="text-base font-medium hover:text-primary transition-colors"
                  onClick={closeSheet}
                >
                  Home
                </Link>
                <Link 
                  to="/feed" 
                  className="text-base font-medium hover:text-primary transition-colors"
                  onClick={closeSheet}
                >
                  Feed
                </Link>
                <Link 
                  to="/videos" 
                  className="text-base font-medium hover:text-primary transition-colors"
                  onClick={closeSheet}
                >
                  Videos
                </Link>
                <Link 
                  to="/community" 
                  className="text-base font-medium hover:text-primary transition-colors"
                  onClick={closeSheet}
                >
                  Community
                </Link>
                <Link 
                  to="/games" 
                  className="text-base font-medium hover:text-primary transition-colors"
                  onClick={closeSheet}
                >
                  Games
                </Link>
              </div>

              {/* Innovations Section */}
              <div className="border-t pt-4">
                <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase">Innovations</h3>
                <div className="flex flex-col gap-3">
                  <Link 
                    to="/perspective-switch" 
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                    onClick={closeSheet}
                  >
                    <Eye className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">Perspective Switch™</div>
                      <div className="text-xs text-muted-foreground">Multi-angle story views</div>
                    </div>
                  </Link>
                  <Link 
                    to="/local-pulse" 
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                    onClick={closeSheet}
                  >
                    <MapPin className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">Local Pulse Lens™</div>
                      <div className="text-xs text-muted-foreground">Geo-aware news</div>
                    </div>
                  </Link>
                  <Link 
                    to="/timeline-live" 
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                    onClick={closeSheet}
                  >
                    <Radio className="h-4 w-4" />
                    <div>
                      <div className="font-semibold">Timeline-Live™</div>
                      <div className="text-xs text-muted-foreground">Real-time story tracking</div>
                    </div>
                  </Link>
                  <Link 
                    to="/analytics" 
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                    onClick={closeSheet}
                  >
                    <BarChart3 className="h-4 w-4" />
                    Analytics Dashboard
                  </Link>
                  <Link 
                    to="/perspectives" 
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                    onClick={closeSheet}
                  >
                    <Scale className="h-4 w-4" />
                    Multiple Perspectives
                  </Link>
                  <Link 
                    to="/timeline" 
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                    onClick={closeSheet}
                  >
                    <Clock className="h-4 w-4" />
                    Story Timelines
                  </Link>
                  <Link 
                    to="/topics-graph" 
                    className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                    onClick={closeSheet}
                  >
                    <Network className="h-4 w-4" />
                    Topics Graph
                  </Link>
                </div>
              </div>

              {/* About */}
              <div className="border-t pt-4">
                <Link 
                  to="/about" 
                  className="text-base font-medium hover:text-primary transition-colors"
                  onClick={closeSheet}
                >
                  About
                </Link>
              </div>

              {/* Actions */}
              <div className="border-t pt-4 flex items-center justify-between">
                <span className="text-sm font-medium">Theme</span>
                <Button variant="outline" size="icon" onClick={toggleTheme}>
                  {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </Button>
              </div>

              <div className="flex gap-2">
                <Link to="/settings" className="flex-1" onClick={closeSheet}>
                  <Button variant="outline" className="w-full" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                </Link>
                <Link to="/settings" className="flex-1" onClick={closeSheet}>
                  <Button variant="outline" className="w-full" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
