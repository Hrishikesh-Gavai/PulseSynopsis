import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bookmark, Share2, ThumbsUp, ThumbsDown, ExternalLink } from "lucide-react";
import summariesData from "@/data/summaries.json";
import { useState } from "react";
import { toggleSavedSummary, isSummarySaved } from "@/lib/storage";
import { toast } from "sonner";

const SummaryDetail = () => {
  const { id } = useParams();
  const summary = summariesData.find(s => s.id === id);
  const [saved, setSaved] = useState(summary ? isSummarySaved(summary.id) : false);
  const [rating, setRating] = useState<'up' | 'down' | null>(null);

  if (!summary) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Summary not found</h1>
            <Link to="/feed">
              <Button>Back to Feed</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    toggleSavedSummary(summary.id);
    setSaved(!saved);
    toast.success(saved ? "Removed from saved" : "Saved for later");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard");
  };

  const handleRating = (type: 'up' | 'down') => {
    setRating(type);
    toast.success("Thanks for your feedback!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Image */}
        <div className="w-full h-[40vh] md:h-[50vh] relative">
          <img
            src={summary.imageUrl}
            alt={summary.headline}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Content */}
        <div className="container px-4 -mt-20 relative z-10">
          <article className="max-w-3xl mx-auto">
            {/* Back Button */}
            <Link to="/feed">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Feed
              </Button>
            </Link>

            {/* Topics */}
            <div className="flex gap-2 mb-4">
              {summary.topics.map((topic) => (
                <span
                  key={topic}
                  className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                >
                  {topic}
                </span>
              ))}
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{summary.headline}</h1>

            {/* Meta */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b">
              <span className="text-muted-foreground">{summary.date}</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={handleSave}>
                  <Bookmark className={`h-5 w-5 ${saved ? "fill-current text-primary" : ""}`} />
                </Button>
                <Button variant="ghost" size="icon" onClick={handleShare}>
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Summary */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl leading-relaxed">{summary.summaryFull}</p>
            </div>

            {/* Why This Matters */}
            <div className="bg-primary/5 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-primary">•</span> Why This Matters
              </h2>
              <p className="text-lg">{summary.whyMatters}</p>
            </div>

            {/* What's Next */}
            <div className="bg-secondary/5 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-secondary">•</span> What's Next?
              </h2>
              <p className="text-lg">{summary.whatsNext}</p>
            </div>

            {/* Background Context */}
            <div className="bg-muted/50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Background Context</h2>
              <p className="text-lg">{summary.background}</p>
            </div>

            {/* Sources */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Sources</h2>
              <div className="space-y-2">
                {summary.sources.map((source, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    <span>{source}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feedback */}
            <div className="bg-card border rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold mb-4">How useful was this summary?</h2>
              <div className="flex gap-4 justify-center">
                <Button
                  size="lg"
                  variant={rating === 'up' ? 'default' : 'outline'}
                  onClick={() => handleRating('up')}
                >
                  <ThumbsUp className="mr-2 h-5 w-5" />
                  Helpful
                </Button>
                <Button
                  size="lg"
                  variant={rating === 'down' ? 'destructive' : 'outline'}
                  onClick={() => handleRating('down')}
                >
                  <ThumbsDown className="mr-2 h-5 w-5" />
                  Not Helpful
                </Button>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default SummaryDetail;
