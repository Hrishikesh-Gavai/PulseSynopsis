import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Scale, ArrowLeftRight, Eye } from "lucide-react";
import summariesData from "@/data/summaries.json";

export default function Perspectives() {
  // Get first 3 summaries for demo
  const stories = summariesData.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Scale className="h-8 w-8 text-primary" />
            <h1 className="text-5xl newspaper-title border-b-4 border-primary pb-4">
              Multiple Perspectives
            </h1>
          </div>
          <p className="text-muted-foreground mb-8 text-lg">
            See how different sources frame the same story. Break out of filter bubbles.
          </p>

          {/* Feature Explanation */}
          <Card className="mb-8 bg-muted/50">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Scale className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Balanced Coverage</h3>
                    <p className="text-sm text-muted-foreground">
                      Compare viewpoints from multiple sources and ideological perspectives
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowLeftRight className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Switch Frames</h3>
                    <p className="text-sm text-muted-foreground">
                      View the same story through business, human, or policy lenses
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Eye className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Bias Detection</h3>
                    <p className="text-sm text-muted-foreground">
                      AI identifies language choices and framing techniques used
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stories with Multiple Perspectives */}
          <div className="space-y-8">
            {stories.map((story) => (
              <Card key={story.id}>
                <CardHeader>
                  <CardTitle className="newspaper-title text-3xl">{story.headline}</CardTitle>
                  <div className="flex gap-2 mt-2">
                    {story.topics.map((topic) => (
                      <Badge key={topic} variant="outline">{topic}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Business Perspective */}
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">Business Impact</h3>
                        <Badge variant="secondary">Economic</Badge>
                      </div>
                      <p className="text-sm mb-3">{story.summaryShort}</p>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <p>• Market implications analyzed</p>
                        <p>• Focus on financial outcomes</p>
                        <p>• Corporate stakeholder view</p>
                      </div>
                    </div>

                    {/* Human Interest Perspective */}
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">Human Interest</h3>
                        <Badge variant="secondary">Social</Badge>
                      </div>
                      <p className="text-sm mb-3">
                        How does this affect everyday people? This development could change daily life for millions, 
                        with potential impacts on accessibility, opportunities, and quality of life.
                      </p>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <p>• Personal stories highlighted</p>
                        <p>• Community impact focus</p>
                        <p>• Emotional resonance emphasized</p>
                      </div>
                    </div>

                    {/* Policy/Technical Perspective */}
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">Policy & Technical</h3>
                        <Badge variant="secondary">Analytical</Badge>
                      </div>
                      <p className="text-sm mb-3">
                        From a regulatory standpoint, this raises questions about governance, standards, 
                        and long-term sustainability. Technical experts weigh in on feasibility and risks.
                      </p>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <p>• Expert opinions prioritized</p>
                        <p>• Regulatory implications noted</p>
                        <p>• Technical feasibility assessed</p>
                      </div>
                    </div>
                  </div>

                  {/* Bias Analysis */}
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      AI Bias Analysis
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium mb-1">Language Tone</p>
                        <p className="text-muted-foreground">
                          Neutral-Positive • Factual phrasing with slight optimistic framing
                        </p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">Source Balance</p>
                        <p className="text-muted-foreground">
                          {story.sources.length} sources cited • Mix of perspectives represented
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm">
                      Compare Sources
                    </Button>
                    <Button variant="outline" size="sm">
                      View Original Articles
                    </Button>
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
