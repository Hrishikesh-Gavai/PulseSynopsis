import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, ArrowRight } from "lucide-react";

const timelineStory = {
  title: "The Evolution of AI Regulation",
  topic: "AI Policy",
  events: [
    {
      date: "Jan 2023",
      title: "ChatGPT Reaches 100M Users",
      description: "OpenAI's chatbot becomes fastest-growing consumer app in history, triggering global discussions about AI safety.",
      impact: "high",
      sentiment: "neutral"
    },
    {
      date: "Mar 2023",
      title: "EU AI Act Negotiations Intensify",
      description: "European Parliament pushes for stricter rules on high-risk AI systems, including facial recognition bans.",
      impact: "high",
      sentiment: "cautious"
    },
    {
      date: "May 2023",
      title: "G7 Launches AI Code of Conduct",
      description: "World leaders agree on voluntary guidelines for AI development, focusing on transparency and safety.",
      impact: "medium",
      sentiment: "positive"
    },
    {
      date: "Jul 2023",
      title: "Major Tech CEOs Meet with Congress",
      description: "Executives from Google, Meta, and OpenAI testify about AI risks and self-regulation proposals.",
      impact: "medium",
      sentiment: "mixed"
    },
    {
      date: "Oct 2023",
      title: "Biden Issues Executive Order on AI",
      description: "Comprehensive federal framework addresses AI safety, security standards, and government use of AI systems.",
      impact: "high",
      sentiment: "positive"
    },
    {
      date: "Dec 2023",
      title: "EU AI Act Reaches Final Agreement",
      description: "Landmark legislation passes, establishing world's first comprehensive AI regulatory framework.",
      impact: "very-high",
      sentiment: "positive"
    },
    {
      date: "Feb 2024",
      title: "Global AI Safety Summit #2",
      description: "28 nations commit to coordinated AI safety research and information sharing protocols.",
      impact: "high",
      sentiment: "positive"
    },
    {
      date: "Present",
      title: "Implementation Phase Begins",
      description: "Companies worldwide adapt to new regulations while policymakers refine enforcement mechanisms.",
      impact: "ongoing",
      sentiment: "cautious"
    },
    {
      date: "Future",
      title: "What's Next?",
      description: "Experts predict further international coordination, potential UN framework, and continued tension between innovation and safety.",
      impact: "unknown",
      sentiment: "speculative"
    }
  ]
};

const otherTimelines = [
  {
    title: "Global Climate Action Progress",
    topic: "Climate",
    eventCount: 12,
    timespan: "2020-2024"
  },
  {
    title: "SpaceX Mars Mission Development",
    topic: "Space",
    eventCount: 15,
    timespan: "2018-2024"
  },
  {
    title: "Cryptocurrency Market Evolution",
    topic: "Finance",
    eventCount: 18,
    timespan: "2021-2024"
  }
];

const getImpactColor = (impact: string) => {
  switch (impact) {
    case "very-high": return "bg-red-500";
    case "high": return "bg-orange-500";
    case "medium": return "bg-yellow-500";
    case "ongoing": return "bg-blue-500";
    case "unknown": return "bg-gray-400";
    default: return "bg-green-500";
  }
};

export default function Timeline() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="h-8 w-8 text-primary" />
            <h1 className="text-5xl newspaper-title border-b-4 border-primary pb-4">
              Story Timelines
            </h1>
          </div>
          <p className="text-muted-foreground mb-8 text-lg">
            Track how major stories develop over time. See the full context.
          </p>

          {/* Featured Timeline */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="mb-6">
                <Badge className="mb-2">{timelineStory.topic}</Badge>
                <h2 className="text-3xl newspaper-title mb-2">{timelineStory.title}</h2>
                <p className="text-muted-foreground">
                  A comprehensive timeline of key developments in AI regulation worldwide
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-border" />

                {/* Timeline events */}
                <div className="space-y-8">
                  {timelineStory.events.map((event, index) => (
                    <div key={index} className="relative pl-10">
                      {/* Timeline dot */}
                      <div className={`absolute left-0 w-6 h-6 rounded-full border-4 border-background ${getImpactColor(event.impact)}`} />
                      
                      {/* Event card */}
                      <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-mono font-semibold">{event.date}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {event.impact}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Other Available Timelines */}
          <div>
            <h2 className="text-2xl newspaper-title mb-4 border-b-2 border-primary pb-2">
              Explore More Timelines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherTimelines.map((timeline, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <Badge className="mb-3">{timeline.topic}</Badge>
                    <h3 className="font-semibold mb-2">{timeline.title}</h3>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        {timeline.eventCount} key events
                      </p>
                      <p className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        {timeline.timespan}
                      </p>
                    </div>
                    <button className="mt-3 text-sm text-primary hover:underline flex items-center gap-1">
                      View Timeline
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
