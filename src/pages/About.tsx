import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Shield, Zap, Heart, Mail } from "lucide-react";
import { toast } from "sonner";

const About = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="container px-4 py-16 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            News That Respects Your Time
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We believe staying informed shouldn't be overwhelming. PulseSynopsis uses AI to deliver
            personalized, transparent news summaries that empower you to understand the world
            in minutes, not hours.
          </p>
        </section>

        {/* Mission */}
        <section className="bg-muted/50 py-16">
          <div className="container px-4 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Transparency</h3>
                <p className="text-muted-foreground">
                  Every summary includes source links so you can verify and dive deeper.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Efficiency</h3>
                <p className="text-muted-foreground">
                  Cut through information overload with AI-powered summaries tailored to you.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">User-First</h3>
                <p className="text-muted-foreground">
                  You control what you see, how you see it, and when you see it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container px-4 py-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-card border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">How does summarization work?</h3>
              <p className="text-muted-foreground">
                Our AI reads multiple sources on each story, identifies key facts and developments,
                and creates a concise summary that captures the essential information. Every summary
                includes links to original sources for verification.
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">Can I change my topic preferences?</h3>
              <p className="text-muted-foreground">
                Absolutely! Visit your Settings page anytime to add or remove topics, adjust summary
                length, change your reading style, or modify notification preferences.
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">How do you ensure accuracy?</h3>
              <p className="text-muted-foreground">
                We aggregate information from multiple reputable sources and clearly cite them in
                every summary. Our AI is designed to present facts objectively, and we encourage
                users to check original sources for complete context.
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">Is my data private?</h3>
              <p className="text-muted-foreground">
                Yes. Your preferences and reading history are stored locally on your device. We don't
                sell user data or share it with third parties. You're in complete control.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-muted/50 py-16">
          <div className="container px-4 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
              <p className="text-muted-foreground">
                Have questions, feedback, or suggestions? We'd love to hear from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="contact-name">Name</Label>
                <Input id="contact-name" className="mt-2" required />
              </div>

              <div>
                <Label htmlFor="contact-email">Email</Label>
                <Input id="contact-email" type="email" className="mt-2" required />
              </div>

              <div>
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  rows={5}
                  className="mt-2"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
