import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Search, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";

const topicNodes = [
  { id: "ai", name: "Artificial Intelligence", connections: 15, trending: true },
  { id: "climate", name: "Climate Change", connections: 12, trending: false },
  { id: "space", name: "Space Exploration", connections: 8, trending: true },
  { id: "crypto", name: "Cryptocurrency", connections: 10, trending: false },
  { id: "health", name: "Healthcare", connections: 11, trending: false },
  { id: "tech", name: "Technology", connections: 18, trending: true },
];

const entityNodes = [
  { id: "openai", name: "OpenAI", type: "Company", stories: 23 },
  { id: "musk", name: "Elon Musk", type: "Person", stories: 18 },
  { id: "eu", name: "European Union", type: "Organization", stories: 15 },
  { id: "nasa", name: "NASA", type: "Organization", stories: 12 },
  { id: "google", name: "Google", type: "Company", stories: 20 },
  { id: "biden", name: "Joe Biden", type: "Person", stories: 14 },
];

const connections = [
  { from: "AI", to: "OpenAI", stories: 15 },
  { from: "AI", to: "Google", stories: 12 },
  { from: "AI", to: "EU", stories: 8 },
  { from: "Space", to: "Elon Musk", stories: 10 },
  { from: "Space", to: "NASA", stories: 9 },
  { from: "Climate", to: "Joe Biden", stories: 7 },
];

export default function TopicsGraph() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Title Section - Responsive */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-2">
            <Network className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl newspaper-title border-b-4 border-primary pb-2 sm:pb-4">
              News Connection Graph
            </h1>
          </div>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg">
            Visualize how stories, entities, and topics connect across the news landscape
          </p>

          {/* Search - Responsive */}
          <Card className="mb-6 sm:mb-8">
            <CardContent className="pt-4 sm:pt-6">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search for topics, companies, or people..." 
                    className="pl-10"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Topic and Entity Nodes Grid - Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Topic Nodes */}
            <Card>
              <CardContent className="pt-4 sm:pt-6">
                <h2 className="text-xl sm:text-2xl newspaper-title mb-3 sm:mb-4 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
                  Topics
                </h2>
                <div className="space-y-2 sm:space-y-3">
                  {topicNodes.map((topic) => (
                    <div 
                      key={topic.id}
                      className="flex items-center justify-between p-2 sm:p-3 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-sm sm:text-base">{topic.name}</h3>
                          {topic.trending && (
                            <Badge variant="secondary" className="text-xs">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              Trending
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {topic.connections} connected stories
                        </p>
                      </div>
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm sm:text-base ml-2">
                        {topic.connections}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Entity Nodes */}
            <Card>
              <CardContent className="pt-4 sm:pt-6">
                <h2 className="text-xl sm:text-2xl newspaper-title mb-3 sm:mb-4 flex items-center gap-2">
                  <Network className="h-4 w-4 sm:h-5 sm:w-5" />
                  Key Entities
                </h2>
                <div className="space-y-2 sm:space-y-3">
                  {entityNodes.map((entity) => (
                    <div 
                      key={entity.id}
                      className="flex items-center justify-between p-2 sm:p-3 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-sm sm:text-base">{entity.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {entity.type}
                          </Badge>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Featured in {entity.stories} stories
                        </p>
                      </div>
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm sm:text-base ml-2">
                        {entity.stories}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Connections Map - Responsive */}
          <Card>
            <CardContent className="pt-4 sm:pt-6">
              <h2 className="text-xl sm:text-2xl newspaper-title mb-3 sm:mb-4">Connection Strength</h2>
              <div className="space-y-4 sm:space-y-3">
                {connections.map((conn, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
                    <Badge className="min-w-20 sm:min-w-24 justify-center text-xs sm:text-sm py-1">
                      {conn.from}
                    </Badge>
                    <div className="flex-1 relative py-3 sm:py-0">
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all"
                          style={{ width: `${(conn.stories / 20) * 100}%` }}
                        />
                      </div>
                      <span className="absolute -top-1 sm:-top-5 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                        {conn.stories} stories
                      </span>
                    </div>
                    <Badge variant="outline" className="min-w-20 sm:min-w-24 justify-center text-xs sm:text-sm py-1">
                      {conn.to}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Interactive Network Graph - Coming Soon - Responsive */}
          <Card className="mt-4 sm:mt-6">
            <CardContent className="pt-4 sm:pt-6">
              <h2 className="text-xl sm:text-2xl newspaper-title mb-3 sm:mb-4">Interactive Network Visualization</h2>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=100&fm=jpg&fit=max"
                  alt="Network visualization"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center px-4 sm:px-6">
                    <Network className="h-12 w-12 sm:h-16 sm:w-16 text-white mx-auto mb-3 sm:mb-4" />
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Coming Soon</h3>
                    <p className="text-white/90 text-sm sm:text-lg max-w-2xl mx-auto">
                      We're building an immersive graph experience to explore story connections. 
                      Stay tuned for advanced visualization features!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
