import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { savePreferences } from "@/lib/storage";
import { ArrowRight, Check } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [topics, setTopics] = useState<string[]>([]);
  const [summaryLength, setSummaryLength] = useState<'tldr' | 'short' | 'full'>('short');
  const [tone, setTone] = useState<'formal' | 'conversational' | 'bullets'>('conversational');
  const [digest, setDigest] = useState<'realtime' | 'daily' | 'weekly'>('daily');

  const availableTopics = [
    "Technology",
    "Business",
    "Politics",
    "Science",
    "Entertainment",
    "Health",
    "Sports",
    "Local"
  ];

  const toggleTopic = (topic: string) => {
    setTopics(prev =>
      prev.includes(topic)
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const handleFinish = () => {
    savePreferences({
      topics,
      summaryLength,
      tone,
      digest
    });
    navigate("/feed");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container px-4 py-12 max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex-1 h-2 rounded-full mx-1 transition-colors ${
                  s <= step ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center">Step {step} of 3</p>
        </div>

        {/* Step 1: Topics */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">What interests you?</h1>
            <p className="text-muted-foreground mb-8">Select the topics you want to follow.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {availableTopics.map((topic) => (
                <div
                  key={topic}
                  onClick={() => toggleTopic(topic)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all card-hover ${
                    topics.includes(topic)
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Checkbox checked={topics.includes(topic)} />
                    {topics.includes(topic) && <Check className="h-4 w-4 text-primary" />}
                  </div>
                  <p className="font-medium">{topic}</p>
                </div>
              ))}
            </div>

            <Button
              onClick={() => setStep(2)}
              disabled={topics.length === 0}
              size="lg"
              className="w-full"
            >
              Continue <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}

        {/* Step 2: Summary Style */}
        {step === 2 && (
          <div className="animate-fade-in space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">How do you prefer your news?</h1>
              <p className="text-muted-foreground mb-8">Customize your reading experience.</p>
            </div>

            <div>
              <Label className="text-lg font-semibold mb-4 block">Summary Length</Label>
              <RadioGroup value={summaryLength} onValueChange={(v: any) => setSummaryLength(v)}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-4 rounded-lg border cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="tldr" id="tldr" />
                    <Label htmlFor="tldr" className="flex-1 cursor-pointer">
                      <div className="font-medium">TL;DR</div>
                      <div className="text-sm text-muted-foreground">One line summary</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="short" id="short" />
                    <Label htmlFor="short" className="flex-1 cursor-pointer">
                      <div className="font-medium">Short Summary</div>
                      <div className="text-sm text-muted-foreground">3-4 sentences</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="full" id="full" />
                    <Label htmlFor="full" className="flex-1 cursor-pointer">
                      <div className="font-medium">Full Summary</div>
                      <div className="text-sm text-muted-foreground">Detailed with key takeaways</div>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="text-lg font-semibold mb-4 block">Reading Style</Label>
              <RadioGroup value={tone} onValueChange={(v: any) => setTone(v)}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-4 rounded-lg border cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="formal" id="formal" />
                    <Label htmlFor="formal" className="flex-1 cursor-pointer">
                      <div className="font-medium">Formal</div>
                      <div className="text-sm text-muted-foreground">Professional and objective</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="conversational" id="conversational" />
                    <Label htmlFor="conversational" className="flex-1 cursor-pointer">
                      <div className="font-medium">Conversational</div>
                      <div className="text-sm text-muted-foreground">Friendly and engaging</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border cursor-pointer hover:bg-muted/50">
                    <RadioGroupItem value="bullets" id="bullets" />
                    <Label htmlFor="bullets" className="flex-1 cursor-pointer">
                      <div className="font-medium">Bullet Points</div>
                      <div className="text-sm text-muted-foreground">Quick scannable format</div>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="flex gap-3">
              <Button onClick={() => setStep(1)} variant="outline" size="lg" className="flex-1">
                Back
              </Button>
              <Button onClick={() => setStep(3)} size="lg" className="flex-1">
                Continue <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Digest Preference */}
        {step === 3 && (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">When do you want updates?</h1>
            <p className="text-muted-foreground mb-8">Choose your notification preference.</p>

            <RadioGroup value={digest} onValueChange={(v: any) => setDigest(v)}>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 p-4 rounded-lg border cursor-pointer hover:bg-muted/50">
                  <RadioGroupItem value="realtime" id="realtime" />
                  <Label htmlFor="realtime" className="flex-1 cursor-pointer">
                    <div className="font-medium">Real-time Alerts</div>
                    <div className="text-sm text-muted-foreground">Get notified as stories break</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg border cursor-pointer hover:bg-muted/50">
                  <RadioGroupItem value="daily" id="daily" />
                  <Label htmlFor="daily" className="flex-1 cursor-pointer">
                    <div className="font-medium">Daily Morning Digest</div>
                    <div className="text-sm text-muted-foreground">Start your day informed (8 AM)</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg border cursor-pointer hover:bg-muted/50">
                  <RadioGroupItem value="weekly" id="weekly" />
                  <Label htmlFor="weekly" className="flex-1 cursor-pointer">
                    <div className="font-medium">Weekly Weekend Deep-dive</div>
                    <div className="text-sm text-muted-foreground">Sunday morning roundup</div>
                  </Label>
                </div>
              </div>
            </RadioGroup>

            <div className="flex gap-3">
              <Button onClick={() => setStep(2)} variant="outline" size="lg" className="flex-1">
                Back
              </Button>
              <Button onClick={handleFinish} size="lg" className="flex-1">
                Finish Setup <Check className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Onboarding;
