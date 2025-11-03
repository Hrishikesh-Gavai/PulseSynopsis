import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Clock, Globe, Sparkles, Zap, Shield, TrendingUp } from "lucide-react";
import summaries from "@/data/summaries.json";
import heroNewsroom from "@/assets/hero-newsroom.jpg";
import featurePersonalized from "@/assets/feature-personalized.jpg";
import featureDaily from "@/assets/feature-daily.jpg";
import featureGlobal from "@/assets/feature-global.jpg";
import featureFast from "@/assets/feature-fast.jpg";

const Home = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Personalized Feed",
      description: "AI-curated summaries tailored to your interests and reading style.",
      image: featurePersonalized
    },
    {
      icon: Clock,
      title: "Daily Digest",
      description: "Catch up in minutes with summaries that match your schedule.",
      image: featureDaily
    },
    {
      icon: Globe,
      title: "Global & Local",
      description: "Stay informed on both worldwide events and your local community.",
      image: featureGlobal
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get the essence without the noise. Save hours every week.",
      image: featureFast
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] border-b-4 border-primary overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroNewsroom} 
            alt="Modern newsroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        
        <div className="relative container px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl newspaper-title mb-6 leading-tight text-white">
              All the News That's Fit to Know
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Real-time intelligence. Precision summaries. Built for the fast-moving world.
            </p>
            <div className="flex gap-4">
              <Link to="/onboarding">
                <Button size="lg" className="text-lg px-8 py-6 h-auto">
                  Get Started
                </Button>
              </Link>
              <Link to="/feed">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto bg-white/10 text-white border-white/30 hover:bg-white/20">
                  View Feed
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Feed Preview */}
      <section className="container px-4 py-16 border-b">
        <div className="flex justify-between items-center mb-8 border-b-2 border-primary pb-4">
          <h2 className="text-3xl md:text-4xl newspaper-title">Latest Headlines</h2>
          <Link to="/feed">
            <Button variant="outline">View All Stories</Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {summaries.slice(0, 3).map((summary) => (
            <Link key={summary.id} to={`/summary/${summary.id}`}>
              <article className="border-b pb-6 hover:opacity-75 transition-opacity">
                <img 
                  src={summary.imageUrl} 
                  alt={summary.headline}
                  className="w-full h-56 object-cover mb-4"
                />
                <div className="flex gap-2 mb-3">
                  {summary.topics.map((topic) => (
                    <span key={topic} className="text-xs font-mono uppercase tracking-wider border-b border-primary">
                      {topic}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl newspaper-title mb-3 line-clamp-3 leading-tight">{summary.headline}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{summary.summaryShort}</p>
                <p className="text-xs text-muted-foreground mt-2">{summary.date}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="container px-4 py-20 border-b">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl newspaper-title mb-4">Why Choose PulseSynopsis?</h2>
          <p className="text-lg text-muted-foreground">Everything you need to stay informed, nothing you don't.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group"
            >
              <div className="aspect-video overflow-hidden mb-4">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <feature.icon className="h-8 w-8 mb-3" />
                <h3 className="newspaper-title text-xl mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted py-20 border-b">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl newspaper-title mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Three simple steps to your perfect news experience.</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 border-4 border-primary flex items-center justify-center text-3xl newspaper-title mx-auto mb-4">
                1
              </div>
              <h3 className="newspaper-title text-xl mb-3">Choose Topics</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Select the subjects that matter to you</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 border-4 border-primary flex items-center justify-center text-3xl newspaper-title mx-auto mb-4">
                2
              </div>
              <h3 className="newspaper-title text-xl mb-3">Get Summaries</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Receive AI-curated, personalized briefings</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 border-4 border-primary flex items-center justify-center text-3xl newspaper-title mx-auto mb-4">
                3
              </div>
              <h3 className="newspaper-title text-xl mb-3">Go Deeper</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Explore full stories when you want more</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-20">
        <div className="border-4 border-primary p-12 text-center max-w-3xl mx-auto">
          <Shield className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-4xl newspaper-title mb-6">Stay Ahead of the Curve</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Join thousands who've transformed how they consume news.
          </p>
          <Link to="/onboarding">
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
