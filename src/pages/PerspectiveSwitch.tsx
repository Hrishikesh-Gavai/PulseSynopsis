import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Briefcase, Heart, Scale } from "lucide-react";
import { useState } from "react";
import summaries from "@/data/summaries.json";

type Perspective = "business" | "human" | "policy";

const perspectives = [
  {
    id: "business" as Perspective,
    name: "Business Impact",
    icon: Briefcase,
    color: "text-blue-600",
    description: "Economic implications and market effects"
  },
  {
    id: "human" as Perspective,
    name: "Human Interest",
    icon: Heart,
    color: "text-red-600",
    description: "Personal stories and human impact"
  },
  {
    id: "policy" as Perspective,
    name: "Policy Focus",
    icon: Scale,
    color: "text-purple-600",
    description: "Regulatory and political dimensions"
  }
];

const getPerspectiveContent = (story: any, perspective: Perspective) => {
  const templates = {
    business: {
      angle: "Market & Economic Impact",
      content: `This development could reshape market dynamics, affecting investor sentiment and corporate strategy. Industry analysts project significant financial implications, with potential market shifts estimated in the billions. Companies in related sectors are already adjusting their positions, while venture capital interest surges.`
    },
    human: {
      angle: "Personal Stories & Impact",
      content: `Behind these headlines are real people whose lives are changing. Communities are experiencing direct effects, from job opportunities to lifestyle changes. Personal testimonials reveal both excitement and concern as individuals navigate this transformation. Social fabric is shifting as people adapt to new realities.`
    },
    policy: {
      angle: "Regulatory & Political Dimensions",
      content: `Policymakers face complex decisions balancing innovation with public interest. Regulatory frameworks are being scrutinized and updated. International cooperation and jurisdictional challenges emerge as key factors. Legislative bodies are convening hearings to address oversight and governance questions.`
    }
  };

  return templates[perspective];
};

export default function PerspectiveSwitch() {
  const [selectedStory, setSelectedStory] = useState(summaries[0]);
  const [activePerspective, setActivePerspective] = useState<Perspective>("business");
  const [storySelectorOpen, setStorySelectorOpen] = useState(false);

  const currentPerspective = getPerspectiveContent(selectedStory, activePerspective);

  const handleStorySelect = (story: any) => {
    setSelectedStory(story);
    setStorySelectorOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header - Responsive */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
            <Eye className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl newspaper-title border-b-4 border-primary pb-2 sm:pb-4">
              Perspective Switch™
            </h1>
          </div>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-lg">
            See every story from three angles: Business, Human Interest, and Policy
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Story Selection - Responsive */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="pt-4 sm:pt-6">
                  <h2 className="text-lg sm:text-xl newspaper-title mb-3 sm:mb-4">Select a Story</h2>
                  
                  {/* Mobile Story Selector Dropdown */}
                  <div className="lg:hidden mb-4">
                    <Button
                      onClick={() => setStorySelectorOpen(!storySelectorOpen)}
                      variant="outline"
                      className="w-full justify-between text-left"
                    >
                      <span className="truncate flex-1 text-xs sm:text-sm">
                        {selectedStory.headline}
                      </span>
                    </Button>
                    {storySelectorOpen && (
                      <div className="mt-2 border rounded-lg p-2 space-y-2 max-h-96 overflow-y-auto">
                        {summaries.slice(0, 10).map((story) => (
                          <button
                            key={story.id}
                            onClick={() => handleStorySelect(story)}
                            className={`w-full text-left p-2 rounded border transition-all hover:shadow-md text-xs sm:text-sm ${
                              selectedStory.id === story.id ? 'border-primary bg-primary/5' : ''
                            }`}
                          >
                            <h3 className="font-semibold line-clamp-2 mb-1">
                              {story.headline}
                            </h3>
                            <div className="flex gap-1 flex-wrap">
                              {story.topics.slice(0, 2).map((topic) => (
                                <Badge key={topic} variant="outline" className="text-xs">
                                  {topic}
                                </Badge>
                              ))}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Desktop Story List */}
                  <div className="hidden lg:block space-y-2 sm:space-y-3 max-h-[600px] overflow-y-auto">
                    {summaries.slice(0, 10).map((story) => (
                      <div
                        key={story.id}
                        onClick={() => setSelectedStory(story)}
                        className={`p-2 sm:p-3 border rounded-lg cursor-pointer transition-all hover:shadow-md text-xs sm:text-sm ${
                          selectedStory.id === story.id ? 'border-primary bg-primary/5' : ''
                        }`}
                      >
                        <h3 className="font-semibold line-clamp-2 mb-1 sm:mb-2">
                          {story.headline}
                        </h3>
                        <div className="flex gap-1 flex-wrap">
                          {story.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Area - Responsive */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {/* Original Story */}
              <Card>
                <CardContent className="pt-4 sm:pt-6">
                  <img
                    src={selectedStory.imageUrl}
                    alt={selectedStory.headline}
                    className="w-full h-40 sm:h-48 lg:h-64 object-cover mb-3 sm:mb-4 rounded-lg"
                  />
                  <h2 className="text-2xl sm:text-3xl newspaper-title mb-2 sm:mb-3">
                    {selectedStory.headline}
                  </h2>
                  <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                    {selectedStory.summaryShort}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {selectedStory.topics.map((topic) => (
                      <Badge key={topic} className="text-xs sm:text-sm">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Perspective Selector - Responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
                {perspectives.map((perspective) => {
                  const Icon = perspective.icon;
                  return (
                    <Button
                      key={perspective.id}
                      onClick={() => setActivePerspective(perspective.id)}
                      variant={activePerspective === perspective.id ? "default" : "outline"}
                      className="h-auto flex-col py-3 sm:py-4 gap-1 sm:gap-2 text-xs sm:text-sm"
                    >
                      <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${
                        activePerspective === perspective.id ? '' : perspective.color
                      }`} />
                      <span className="font-semibold text-xs sm:text-sm">
                        {perspective.name}
                      </span>
                      <span className="text-xs opacity-80 text-center line-clamp-2">
                        {perspective.description}
                      </span>
                    </Button>
                  );
                })}
              </div>

              {/* Perspective Content - Responsive */}
              <Card className="border-2 border-primary">
                <CardContent className="pt-4 sm:pt-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    {(() => {
                      const Icon = perspectives.find(p => p.id === activePerspective)?.icon || Eye;
                      return <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />;
                    })()}
                    <h3 className="text-xl sm:text-2xl newspaper-title break-words">
                      {currentPerspective.angle}
                    </h3>
                  </div>
                  <div className="prose prose-sm sm:prose max-w-none">
                    <p className="text-sm sm:text-lg leading-relaxed">
                      {currentPerspective.content}
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-muted rounded-lg">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      <strong>Why this matters:</strong> {selectedStory.whyMatters}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
