import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { getPreferences, savePreferences, UserPreferences } from "@/lib/storage";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { BarChart, User, Bell, Eye } from "lucide-react";

const Settings = () => {
  const [prefs, setPrefs] = useState<UserPreferences>(getPreferences());
  const [name, setName] = useState("Guest User");

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
    const newTopics = prefs.topics.includes(topic)
      ? prefs.topics.filter(t => t !== topic)
      : [...prefs.topics, topic];
    setPrefs({ ...prefs, topics: newTopics });
  };

  const handleSave = () => {
    savePreferences(prefs);
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container px-4 py-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Settings</h1>

        {/* Profile Section */}
        <div className="bg-card border rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <User className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Profile</h2>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="region">Region</Label>
              <Input
                id="region"
                placeholder="e.g., New York, USA"
                className="mt-2"
              />
            </div>
          </div>
        </div>

        {/* Topics */}
        <div className="bg-card border rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold mb-6">Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {availableTopics.map((topic) => (
              <div
                key={topic}
                onClick={() => toggleTopic(topic)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  prefs.topics.includes(topic)
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <Checkbox checked={prefs.topics.includes(topic)} className="mb-2" />
                <p className="font-medium">{topic}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-card border rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <Bell className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Preferences</h2>
          </div>

          <div className="space-y-6">
            <div>
              <Label className="text-lg font-semibold mb-3 block">Summary Length</Label>
              <RadioGroup
                value={prefs.summaryLength}
                onValueChange={(v: any) => setPrefs({ ...prefs, summaryLength: v })}
              >
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="tldr" id="set-tldr" />
                    <Label htmlFor="set-tldr">TL;DR (One line)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="short" id="set-short" />
                    <Label htmlFor="set-short">Short (3-4 sentences)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="full" id="set-full" />
                    <Label htmlFor="set-full">Full (Detailed summary)</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="text-lg font-semibold mb-3 block">Reading Style</Label>
              <RadioGroup
                value={prefs.tone}
                onValueChange={(v: any) => setPrefs({ ...prefs, tone: v })}
              >
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="formal" id="set-formal" />
                    <Label htmlFor="set-formal">Formal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="conversational" id="set-conversational" />
                    <Label htmlFor="set-conversational">Conversational</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bullets" id="set-bullets" />
                    <Label htmlFor="set-bullets">Bullet Points</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="text-lg font-semibold mb-3 block">Notification Digest</Label>
              <RadioGroup
                value={prefs.digest}
                onValueChange={(v: any) => setPrefs({ ...prefs, digest: v })}
              >
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="realtime" id="set-realtime" />
                    <Label htmlFor="set-realtime">Real-time alerts</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="daily" id="set-daily" />
                    <Label htmlFor="set-daily">Daily morning digest</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="weekly" id="set-weekly" />
                    <Label htmlFor="set-weekly">Weekly weekend digest</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        {/* Accessibility */}
        <div className="bg-card border rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <Eye className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Accessibility</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium">Large Font</Label>
                <p className="text-sm text-muted-foreground">Increase text size for better readability</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium">High Contrast</Label>
                <p className="text-sm text-muted-foreground">Enhance color contrast</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-card border rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <BarChart className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Your Statistics</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">127</div>
              <div className="text-sm text-muted-foreground">Summaries Read</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{prefs.savedSummaries.length}</div>
              <div className="text-sm text-muted-foreground">Saved Items</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">8.5h</div>
              <div className="text-sm text-muted-foreground">Time Saved</div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <Button onClick={handleSave} size="lg" className="w-full">
          Save Changes
        </Button>
      </main>
    </div>
  );
};

export default Settings;
