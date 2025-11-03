import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MessageSquare, TrendingUp, Users, ThumbsUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Community = () => {
  const [comment, setComment] = useState("");

  const discussions = [
    {
      id: "1",
      user: "TechAnalyst",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      title: "The Impact of AI on Modern Journalism",
      preview: "What are your thoughts on AI-generated news summaries? I believe they're changing...",
      replies: 34,
      likes: 127,
      time: "2h ago",
      trending: true
    },
    {
      id: "2",
      user: "NewsJunkie",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      title: "Best News Sources for Tech Coverage",
      preview: "Looking for recommendations on reliable tech news sources. Currently following...",
      replies: 18,
      likes: 89,
      time: "4h ago",
      trending: false
    },
    {
      id: "3",
      user: "GlobalObserver",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      title: "Climate Change Coverage Analysis",
      preview: "Has anyone noticed the shift in how climate change is being reported across...",
      replies: 56,
      likes: 203,
      time: "6h ago",
      trending: true
    },
    {
      id: "4",
      user: "MediaCritic",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      title: "Fact-Checking in the Digital Age",
      preview: "The importance of verifying sources has never been more critical. Here's my take...",
      replies: 42,
      likes: 156,
      time: "8h ago",
      trending: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6 sm:py-8 lg:py-12">
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">Community</h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
            Join the conversation with fellow news enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Main Discussion Area */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* New Discussion */}
            <div className="bg-card border rounded-lg p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Start a Discussion</h2>
              <Textarea 
                placeholder="What's on your mind? Share your thoughts about the latest news..."
                className="mb-3 sm:mb-4 text-sm sm:text-base"
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button className="w-full sm:w-auto">Post Discussion</Button>
            </div>

            {/* Discussion List */}
            <div className="space-y-3 sm:space-y-4">
              {discussions.map((discussion) => (
                <div 
                  key={discussion.id} 
                  className="bg-card border rounded-lg p-4 sm:p-6 hover:border-primary transition-colors cursor-pointer"
                >
                  <div className="flex gap-3 sm:gap-4">
                    <img 
                      src={discussion.avatar} 
                      alt={discussion.user}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="font-semibold text-sm sm:text-base truncate">{discussion.user}</span>
                            {discussion.trending && (
                              <span className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap">
                                <TrendingUp className="h-3 w-3" />
                                Trending
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{discussion.time}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-base sm:text-lg font-bold mb-2 line-clamp-2">{discussion.title}</h3>
                      <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base line-clamp-2 sm:line-clamp-none">
                        {discussion.preview}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4" />
                          {discussion.replies} replies
                        </span>
                        <span className="flex items-center gap-2">
                          <ThumbsUp className="h-4 w-4" />
                          {discussion.likes} likes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Responsive */}
          <div className="space-y-4 sm:space-y-6">
            {/* Community Stats */}
            <div className="bg-card border rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-bold mb-4">Community Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0">
                    <Users className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm truncate">Active Members</span>
                  </div>
                  <span className="font-bold text-sm sm:text-base flex-shrink-0">12,458</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0">
                    <MessageSquare className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm truncate">Discussions</span>
                  </div>
                  <span className="font-bold text-sm sm:text-base flex-shrink-0">3,294</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0">
                    <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm truncate">Active Today</span>
                  </div>
                  <span className="font-bold text-sm sm:text-base flex-shrink-0">1,847</span>
                </div>
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-card border rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-bold mb-4">Trending Topics</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2 min-w-0">
                  <span className="text-xs font-mono text-primary flex-shrink-0">#1</span>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm truncate">AI in Journalism</p>
                    <p className="text-xs text-muted-foreground">234 posts</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 min-w-0">
                  <span className="text-xs font-mono text-primary flex-shrink-0">#2</span>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm truncate">Climate Policy</p>
                    <p className="text-xs text-muted-foreground">189 posts</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 min-w-0">
                  <span className="text-xs font-mono text-primary flex-shrink-0">#3</span>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm truncate">Tech Regulation</p>
                    <p className="text-xs text-muted-foreground">156 posts</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 min-w-0">
                  <span className="text-xs font-mono text-primary flex-shrink-0">#4</span>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm truncate">Global Markets</p>
                    <p className="text-xs text-muted-foreground">142 posts</p>
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
};

export default Community;
