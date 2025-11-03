import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Play, Quote, TrendingUp, AlertCircle } from "lucide-react";
import { useState } from "react";

interface TimelineEvent {
  id: string;
  timestamp: string;
  title: string;
  description: string;
  type: "event" | "video" | "quote" | "prediction";
  videoUrl?: string;
  quote?: string;
  author?: string;
  prediction?: string;
  confidence?: string;
}

const mockTimeline: TimelineEvent[] = [
  {
    id: "1",
    timestamp: "2025-11-03 14:30",
    title: "AI Breakthrough Announced",
    description: "Research team reveals new model capabilities at press conference",
    type: "event"
  },
  {
    id: "2",
    timestamp: "2025-11-03 15:45",
    title: "Technical Deep Dive",
    description: "Lead researcher explains the breakthrough in detail",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/hkSj-QapfZo"
  },
  {
    id: "3",
    timestamp: "2025-11-03 16:20",
    title: "Industry Expert Reaction",
    description: "Notable AI researcher weighs in on implications",
    type: "quote",
    quote: "This represents a paradigm shift in how we approach artificial intelligence. The implications for scientific research and problem-solving are profound.",
    author: "Dr. Sarah Chen, MIT AI Lab"
  },
  {
    id: "4",
    timestamp: "2025-11-03 17:00",
    title: "Market Response",
    description: "Tech stocks rally on AI innovation news",
    type: "event"
  },
  {
    id: "5",
    timestamp: "2025-11-03 18:30",
    title: "Analysis: What Comes Next",
    description: "Expert predictions on timeline and impact",
    type: "prediction",
    prediction: "Within 6-12 months, we expect to see commercial applications in medical diagnosis and drug discovery. Regulatory frameworks will need to adapt rapidly.",
    confidence: "High confidence (85%)"
  },
  {
    id: "6",
    timestamp: "2025-11-03 19:45",
    title: "Global Reactions",
    description: "International leaders and tech CEOs respond",
    type: "event"
  },
  {
    id: "7",
    timestamp: "2025-11-04 09:00",
    title: "Follow-up Interview",
    description: "Research team discusses next steps and ethical considerations",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/OXOypK7_90c"
  }
];

const stories = [
  {
    id: "ai-breakthrough",
    title: "AI Breakthrough: New Model Achieves Human-Level Reasoning",
    category: "Technology",
    status: "Live Updates",
    lastUpdate: "5 minutes ago"
  },
  {
    id: "climate-summit",
    title: "Global Climate Summit Reaches Historic Agreement",
    category: "Politics",
    status: "Developing",
    lastUpdate: "1 hour ago"
  },
  {
    id: "tech-antitrust",
    title: "Tech Giants Face Major Regulatory Changes",
    category: "Business",
    status: "Breaking",
    lastUpdate: "Just now"
  }
];

export default function TimelineLive() {
  const [selectedStory, setSelectedStory] = useState(stories[0]);
  const [timeline, setTimeline] = useState(mockTimeline);

  const getEventIcon = (type: string) => {
    switch (type) {
      case "video":
        return Play;
      case "quote":
        return Quote;
      case "prediction":
        return TrendingUp;
      default:
        return AlertCircle;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case "video":
        return "text-red-600";
      case "quote":
        return "text-blue-600";
      case "prediction":
        return "text-purple-600";
      default:
        return "text-green-600";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="h-8 w-8 text-primary animate-pulse" />
            <h1 className="text-5xl newspaper-title border-b-4 border-primary pb-4">
              Timeline-Live™
            </h1>
          </div>
          <p className="text-muted-foreground mb-8 text-lg">
            Follow breaking stories in real-time with video checkpoints and live predictions
          </p>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Story Selection */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl newspaper-title mb-4">Live Stories</h2>
                  <div className="space-y-3">
                    {stories.map((story) => (
                      <div
                        key={story.id}
                        onClick={() => setSelectedStory(story)}
                        className={`p-3 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                          selectedStory.id === story.id ? 'border-primary bg-primary/5' : ''
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={story.status === "Breaking" ? "default" : "secondary"} className="text-xs">
                            {story.status}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-sm line-clamp-2 mb-2">
                          {story.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Updated: {story.lastUpdate}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Timeline */}
            <div className="lg:col-span-3">
              <Card className="mb-6 border-2 border-primary">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl newspaper-title">{selectedStory.title}</h2>
                    <Badge className="gap-2 text-sm">
                      <Clock className="h-4 w-4 animate-pulse" />
                      {selectedStory.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Last updated: {selectedStory.lastUpdate}
                  </p>
                </CardContent>
              </Card>

              <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

                <div className="space-y-8">
                  {timeline.map((event, index) => {
                    const Icon = getEventIcon(event.type);
                    const colorClass = getEventColor(event.type);

                    return (
                      <div key={event.id} className="relative pl-20">
                        {/* Timeline dot */}
                        <div className={`absolute left-6 top-2 w-5 h-5 rounded-full bg-background border-2 border-primary ${
                          index === 0 ? 'animate-pulse' : ''
                        }`} />

                        <Card className={index === 0 ? 'border-2 border-primary' : ''}>
                          <CardContent className="pt-6">
                            <div className="flex items-start gap-4">
                              <Icon className={`h-6 w-6 mt-1 flex-shrink-0 ${colorClass}`} />
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <span className="text-sm font-mono text-muted-foreground">
                                    {event.timestamp}
                                  </span>
                                  <Badge variant="outline" className="text-xs">
                                    {event.type}
                                  </Badge>
                                </div>
                                <h3 className="text-xl newspaper-title mb-2">{event.title}</h3>
                                <p className="text-muted-foreground mb-4">{event.description}</p>

                                {event.videoUrl && (
                                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                                    <iframe
                                      width="100%"
                                      height="100%"
                                      src={event.videoUrl}
                                      title={event.title}
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                      className="border-0"
                                    />
                                  </div>
                                )}

                                {event.quote && (
                                  <div className="border-l-4 border-primary pl-4 py-2 bg-muted/50 rounded">
                                    <p className="italic mb-2">"{event.quote}"</p>
                                    <p className="text-sm text-muted-foreground">— {event.author}</p>
                                  </div>
                                )}

                                {event.prediction && (
                                  <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                                    <div className="flex items-start gap-2 mb-2">
                                      <TrendingUp className="h-5 w-5 text-purple-600 mt-0.5" />
                                      <div>
                                        <p className="font-semibold text-purple-900 dark:text-purple-100 mb-1">
                                          Prediction
                                        </p>
                                        <p className="text-sm text-purple-800 dark:text-purple-200">
                                          {event.prediction}
                                        </p>
                                        <p className="text-xs text-purple-600 dark:text-purple-400 mt-2">
                                          {event.confidence}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })}

                  {/* Live indicator at the end */}
                  <div className="relative pl-20">
                    <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary animate-pulse" />
                    <Card className="border-2 border-primary bg-primary/5">
                      <CardContent className="pt-6">
                        <p className="text-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 inline mr-2 animate-pulse" />
                          Monitoring for updates...
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
