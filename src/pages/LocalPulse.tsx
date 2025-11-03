import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Compass, Radio } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

interface LocalStory {
  id: string;
  headline: string;
  location: string;
  distance: string;
  category: string;
  summary: string;
  imageUrl: string;
  timestamp: string;
}

const mockLocalStories: LocalStory[] = [
  {
    id: "1",
    headline: "New Tech Hub Opens in Downtown District",
    location: "Downtown, 2.3km away",
    distance: "2.3km",
    category: "Business",
    summary: "A new innovation center brings 500 jobs to the local economy, focusing on AI and sustainable technology.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3",
    timestamp: "2 hours ago"
  },
  {
    id: "2",
    headline: "Community Garden Project Wins National Award",
    location: "Riverside, 4.1km away",
    distance: "4.1km",
    category: "Community",
    summary: "Local residents transform vacant lot into thriving urban farm, serving 300 families with fresh produce.",
    imageUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3",
    timestamp: "5 hours ago"
  },
  {
    id: "3",
    headline: "New Public Transit Route Reduces Commute Times",
    location: "City Center, 1.8km away",
    distance: "1.8km",
    category: "Transport",
    summary: "Express bus route cuts average commute by 25 minutes, connecting suburban areas to business district.",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3",
    timestamp: "8 hours ago"
  },
  {
    id: "4",
    headline: "Local School Achieves Record Test Scores",
    location: "Northside, 3.5km away",
    distance: "3.5km",
    category: "Education",
    summary: "Innovative teaching methods and technology integration lead to 40% improvement in student performance.",
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3",
    timestamp: "1 day ago"
  },
  {
    id: "5",
    headline: "Street Art Festival Transforms Neighborhood",
    location: "Arts District, 5.2km away",
    distance: "5.2km",
    category: "Culture",
    summary: "International artists create 50+ murals, revitalizing historic area and attracting tourism.",
    imageUrl: "https://images.unsplash.com/photo-1603328203114-8b9c370b374d?ixlib=rb-4.0.3",
    timestamp: "2 days ago"
  }
];

export default function LocalPulse() {
  const [location, setLocation] = useState<string | null>(null);
  const [stories, setStories] = useState<LocalStory[]>(mockLocalStories);
  const [isLocating, setIsLocating] = useState(false);

  const requestLocation = () => {
    setIsLocating(true);
    
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`${position.coords.latitude.toFixed(2)}°N, ${position.coords.longitude.toFixed(2)}°W`);
          toast.success("Location detected! Showing nearby stories");
          setIsLocating(false);
        },
        (error) => {
          toast.error("Location access denied. Using default location.");
          setLocation("Default Location");
          setIsLocating(false);
        }
      );
    } else {
      toast.error("Geolocation not supported");
      setLocation("Default Location");
      setIsLocating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Compass className="h-8 w-8 text-primary" />
            <h1 className="text-5xl newspaper-title border-b-4 border-primary pb-4">
              Local Pulse Lens™
            </h1>
          </div>
          <p className="text-muted-foreground mb-8 text-lg">
            Geo-aware news that matters in your neighborhood
          </p>

          {/* Location Banner */}
          <Card className="mb-8 border-2 border-primary">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <MapPin className="h-8 w-8 text-primary" />
                  <div>
                    <h2 className="text-2xl newspaper-title">Your Location</h2>
                    <p className="text-muted-foreground">
                      {location || "Location not set"}
                    </p>
                  </div>
                </div>
                <Button 
                  size="lg" 
                  onClick={requestLocation}
                  disabled={isLocating}
                  className="gap-2"
                >
                  <Navigation className="h-5 w-5" />
                  {isLocating ? "Detecting..." : "Detect Location"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* AR Feature Callout */}
          <Card className="mb-8 bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Radio className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl newspaper-title mb-2">AR Overlay Available on Mobile</h3>
                  <p className="text-muted-foreground">
                    Point your phone at landmarks to see related news stories overlaid in augmented reality. 
                    Turn any location into a live news portal.
                  </p>
                  <Button variant="outline" className="mt-4">
                    Learn More About AR Mode
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Local Stories Grid */}
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-3xl newspaper-title border-b-2 border-primary pb-2">
              Nearby Stories
            </h2>
            <div className="flex gap-2">
              <Badge variant="secondary" className="gap-1">
                <MapPin className="h-3 w-3" />
                Within 10km
              </Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <Card key={story.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <img
                    src={story.imageUrl}
                    alt={story.headline}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{story.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {story.distance}
                    </span>
                  </div>
                  <h3 className="text-xl newspaper-title mb-2 line-clamp-2">
                    {story.headline}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                    {story.summary}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{story.location}</span>
                    <span>{story.timestamp}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
