import { Lightbulb, TrendingUp, Users, Clock, TrendingDown, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface QuickFactCardProps {
  headline: string;
  sentiment?: string;
  readTime?: number;
  topics: string[];
}

export const QuickFactCard = ({ headline, sentiment, readTime, topics }: QuickFactCardProps) => {
  const getSentimentColor = (sentiment?: string) => {
    switch (sentiment) {
      case 'positive':
        return 'text-green-600 bg-green-50 dark:bg-green-950 dark:text-green-400';
      case 'negative':
        return 'text-red-600 bg-red-50 dark:bg-red-950 dark:text-red-400';
      default:
        return 'text-blue-600 bg-blue-50 dark:bg-blue-950 dark:text-blue-400';
    }
  };

  const getSentimentIcon = () => {
    if (sentiment === 'positive') return TrendingUp;
    if (sentiment === 'negative') return TrendingDown;
    return ArrowRight;
  };

  return (
    <Card className="absolute z-10 w-80 shadow-2xl animate-in fade-in-0 slide-in-from-bottom-4">
      <CardContent className="p-4">
        <div className="flex items-start gap-3 mb-3">
          <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
          <h4 className="font-semibold text-sm leading-tight">{headline}</h4>
        </div>
        
        <div className="space-y-2">
          {sentiment && (
            <div className={`flex items-center gap-2 text-xs px-2 py-1 rounded-full ${getSentimentColor(sentiment)}`}>
              {(() => {
                const Icon = getSentimentIcon();
                return <Icon className="h-3 w-3" />;
              })()}
              <span className="font-medium capitalize">Sentiment: {sentiment}</span>
            </div>
          )}
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            {readTime && (
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{readTime} min read</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>{Math.floor(Math.random() * 5000) + 500} readers</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {topics.map((topic) => (
              <span
                key={topic}
                className="text-xs px-2 py-0.5 bg-muted rounded-full font-mono"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
