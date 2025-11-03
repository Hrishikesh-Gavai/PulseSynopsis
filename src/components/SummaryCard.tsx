import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bookmark, Share2, ThumbsUp, Info, Volume2 } from "lucide-react";
import { useState } from "react";
import { toggleSavedSummary, isSummarySaved } from "@/lib/storage";
import { toast } from "sonner";
import { QuickFactCard } from "./QuickFactCard";

interface SummaryCardProps {
  id: string;
  headline: string;
  imageUrl: string;
  summaryShort: string;
  topics: string[];
  date: string;
  sentiment?: string;
  readTime?: number;
}

export const SummaryCard = ({ id, headline, imageUrl, summaryShort, topics, date, sentiment, readTime }: SummaryCardProps) => {
  const [saved, setSaved] = useState(isSummarySaved(id));
  const [showQuickFacts, setShowQuickFacts] = useState(false);
  const [isReading, setIsReading] = useState(false);

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleSavedSummary(id);
    setSaved(!saved);
    toast.success(saved ? "Removed from saved" : "Saved for later");
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.origin + "/summary/" + id);
    toast.success("Link copied to clipboard");
  };

  const handleTextToSpeech = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      toast.info("Stopped reading");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(summaryShort);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.onend = () => setIsReading(false);
    
    window.speechSynthesis.speak(utterance);
    setIsReading(true);
    toast.success("Reading summary aloud");
  };

  return (
    <Card className="overflow-hidden card-hover relative">
      <Link to={`/summary/${id}`} className="block">
        <div className="aspect-video overflow-hidden">
          <img
            src={imageUrl}
            alt={headline}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-2 mb-3">
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <span key={topic} className="text-xs font-mono uppercase tracking-wider border-b border-primary">
                  {topic}
                </span>
              ))}
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0"
              onClick={(e) => {
                e.preventDefault();
                setShowQuickFacts(!showQuickFacts);
              }}
              onMouseEnter={() => setShowQuickFacts(true)}
              onMouseLeave={() => setShowQuickFacts(false)}
            >
              <Info className="h-4 w-4" />
            </Button>
          </div>

          <h3 className="text-xl newspaper-title mb-3 line-clamp-2 hover:opacity-75 transition-opacity">
            {headline}
          </h3>

          <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
            {summaryShort}
          </p>

          <div className="flex items-center justify-between pt-3 border-t text-xs text-muted-foreground">
            <span>{date}</span>
            {readTime && <span>{readTime} min read</span>}
          </div>

          <div className="flex items-center gap-2 mt-4 flex-wrap">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSave}
              className={saved ? "text-primary" : ""}
            >
              <Bookmark className={`h-4 w-4 mr-1 ${saved ? "fill-current" : ""}`} />
              {saved ? "Saved" : "Save"}
            </Button>
            
            <Button variant="ghost" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleTextToSpeech}
              className={isReading ? "text-primary" : ""}
            >
              <Volume2 className={`h-4 w-4 mr-1 ${isReading ? "animate-pulse" : ""}`} />
              {isReading ? "Stop" : "Listen"}
            </Button>
            
            <Button variant="ghost" size="sm">
              <ThumbsUp className="h-4 w-4 mr-1" />
              Like
            </Button>
          </div>
        </CardContent>
      </Link>
      
      {showQuickFacts && (
        <div 
          className="absolute top-full left-0 mt-2 z-20"
          onMouseEnter={() => setShowQuickFacts(true)}
          onMouseLeave={() => setShowQuickFacts(false)}
        >
          <QuickFactCard 
            headline={headline} 
            sentiment={sentiment}
            readTime={readTime}
            topics={topics}
          />
        </div>
      )}
    </Card>
  );
};
