import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Play, Clock, Eye } from "lucide-react";
import { useState } from "react";
import summaries from "@/data/summaries.json";

const Videos = () => {
  const videoSummaries = summaries.filter((s): s is typeof s & { videoUrl: string } => 'videoUrl' in s && !!s.videoUrl);
  const [selectedVideo, setSelectedVideo] = useState(videoSummaries[0]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container px-4 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Video News</h1>
          <p className="text-xl text-muted-foreground">
            Watch the latest news stories and analysis
          </p>
        </div>

        {/* Featured Video */}
        {selectedVideo && (
          <div className="mb-16">
            <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden border">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo.videoUrl}
                title={selectedVideo.headline}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="flex gap-2 mb-3">
              {selectedVideo.topics.map((topic) => (
                <span key={topic} className="text-xs font-mono uppercase text-primary">
                  {topic}
                </span>
              ))}
            </div>
            <h2 className="text-3xl font-bold mb-4">{selectedVideo.headline}</h2>
            <p className="text-lg text-muted-foreground">{selectedVideo.summaryShort}</p>
          </div>
        )}

        {/* Video Grid */}
        <div>
          <h2 className="text-3xl font-bold mb-8">More Videos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoSummaries.map((summary) => (
              <div 
                key={summary.id} 
                className="group cursor-pointer"
                onClick={() => {
                  setSelectedVideo(summary);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden border">
                  <img 
                    src={summary.imageUrl} 
                    alt={summary.headline}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>5:32</span>
                  </div>
                </div>

                <div className="flex gap-2 mb-2">
                  {summary.topics.map((topic) => (
                    <span key={topic} className="text-xs font-mono uppercase text-primary">
                      {topic}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {summary.headline}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {Math.floor(Math.random() * 100)}K views
                  </span>
                  <span>{summary.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Videos;
