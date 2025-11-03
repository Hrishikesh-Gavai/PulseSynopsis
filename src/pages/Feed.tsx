import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { SummaryCard } from "@/components/SummaryCard";
import { Button } from "@/components/ui/button";
import { Filter, TrendingUp } from "lucide-react";
import summariesData from "@/data/summaries.json";
import { getPreferences } from "@/lib/storage";

const Feed = () => {
  const [summaries, setSummaries] = useState(summariesData);
  const [filter, setFilter] = useState<string | null>(null);
  const [preferences, setPreferences] = useState(getPreferences());

  useEffect(() => {
    setPreferences(getPreferences());
  }, []);

  const filteredSummaries = filter
    ? summaries.filter(s => s.topics.includes(filter))
    : preferences.topics.length > 0
    ? summaries.filter(s => s.topics.some(t => preferences.topics.includes(t)))
    : summaries;

  const allTopics = Array.from(new Set(summaries.flatMap(s => s.topics)));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container px-4 py-8">
        {/* Header */}
        <div className="mb-8 border-b-4 border-primary pb-6">
          <h1 className="text-5xl newspaper-title mb-3">Your Feed</h1>
          <p className="text-lg text-muted-foreground">
            {preferences.topics.length > 0
              ? `Personalized for: ${preferences.topics.join(", ")}`
              : "All the news that's fit to read"}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2">
          <Filter className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          <Button
            variant={filter === null ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(null)}
          >
            All
          </Button>
          {allTopics.map(topic => (
            <Button
              key={topic}
              variant={filter === topic ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(topic)}
              className="flex-shrink-0"
            >
              {topic}
            </Button>
          ))}
        </div>

        {/* Newspaper-style Grid */}
        <div className="grid md:grid-cols-12 gap-6 mb-12">
          {/* Featured Story - Full Width */}
          {filteredSummaries[0] && (
            <div className="md:col-span-12 border-b-4 border-primary pb-8">
              <Link to={`/summary/${filteredSummaries[0].id}`}>
                <div className="grid md:grid-cols-2 gap-8">
                  <img 
                    src={filteredSummaries[0].imageUrl}
                    alt={filteredSummaries[0].headline}
                    className="w-full h-96 object-cover"
                  />
                  <div>
                    <div className="flex gap-2 mb-4">
                      {filteredSummaries[0].topics.map((topic) => (
                        <span key={topic} className="text-xs font-mono uppercase tracking-wider border-b-2 border-primary">
                          {topic}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-5xl newspaper-title mb-5 leading-tight hover:opacity-75 transition-opacity">
                      {filteredSummaries[0].headline}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-4">{filteredSummaries[0].summaryShort}</p>
                    <p className="text-sm text-muted-foreground">{filteredSummaries[0].date}</p>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Secondary Stories - 3 Column Layout */}
          {filteredSummaries.slice(1, 4).map((summary) => (
            <div key={summary.id} className="md:col-span-4 border-b pb-6">
              <Link to={`/summary/${summary.id}`}>
                <img 
                  src={summary.imageUrl}
                  alt={summary.headline}
                  className="w-full h-48 object-cover mb-4"
                />
                <div className="flex gap-2 mb-3">
                  {summary.topics.map((topic) => (
                    <span key={topic} className="text-xs font-mono uppercase tracking-wider border-b border-primary">
                      {topic}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl newspaper-title mb-3 hover:opacity-75 transition-opacity">
                  {summary.headline}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{summary.summaryShort}</p>
              </Link>
            </div>
          ))}

          {/* Remaining Stories - 2 Column Layout */}
          {filteredSummaries.slice(4).map((summary) => (
            <div key={summary.id} className="md:col-span-6 border-b pb-6">
              <Link to={`/summary/${summary.id}`}>
                <div className="flex gap-4">
                  <img 
                    src={summary.imageUrl}
                    alt={summary.headline}
                    className="w-32 h-32 object-cover flex-shrink-0"
                  />
                  <div>
                    <div className="flex gap-2 mb-2">
                      {summary.topics.map((topic) => (
                        <span key={topic} className="text-xs font-mono uppercase text-primary">
                          {topic}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold mb-2 hover:text-primary transition-colors">
                      {summary.headline}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{summary.summaryShort}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {filteredSummaries.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">
              No summaries found for the selected topics.
            </p>
          </div>
        )}

        {/* Trending Section */}
        <div className="border-t-4 border-primary pt-8">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="h-7 w-7" />
            <h2 className="text-3xl newspaper-title">Trending Now</h2>
          </div>
          <div className="space-y-4">
            {summaries.slice(0, 3).map((summary) => (
              <div key={summary.id} className="flex items-start gap-4">
                <img
                  src={summary.imageUrl}
                  alt={summary.headline}
                  className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="font-semibold mb-1 line-clamp-2">{summary.headline}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {summary.summaryShort}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feed;
