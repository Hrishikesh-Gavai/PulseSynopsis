import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Clock, BookOpen, Target, Award, Zap } from "lucide-react";

const readingData = [
  { day: 'Mon', articles: 12, minutes: 36 },
  { day: 'Tue', articles: 15, minutes: 45 },
  { day: 'Wed', articles: 8, minutes: 24 },
  { day: 'Thu', articles: 18, minutes: 54 },
  { day: 'Fri', articles: 14, minutes: 42 },
  { day: 'Sat', articles: 20, minutes: 60 },
  { day: 'Sun', articles: 16, minutes: 48 },
];

const categoryData = [
  { name: 'Technology', value: 35, color: '#1E90FF' },
  { name: 'Science', value: 25, color: '#00FFD1' },
  { name: 'Business', value: 20, color: '#FF9900' },
  { name: 'World', value: 12, color: '#4CAF50' },
  { name: 'Politics', value: 8, color: '#E91E63' },
];

const engagementData = [
  { month: 'Jan', saved: 45, shared: 23, liked: 67 },
  { month: 'Feb', saved: 52, shared: 31, liked: 78 },
  { month: 'Mar', saved: 61, shared: 28, liked: 85 },
  { month: 'Apr', saved: 58, shared: 35, liked: 92 },
];

export default function Analytics() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl newspaper-title mb-2 border-b-4 border-primary pb-4">
            Your Reading Analytics
          </h1>
          <p className="text-muted-foreground mb-8 text-lg">
            Track your news consumption, discover patterns, and optimize your reading habits
          </p>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Articles Read</p>
                    <p className="text-3xl font-bold">1,247</p>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +12% this week
                    </p>
                  </div>
                  <BookOpen className="h-10 w-10 text-primary opacity-20" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Time Saved</p>
                    <p className="text-3xl font-bold">87h</p>
                    <p className="text-xs text-muted-foreground mt-1">vs full articles</p>
                  </div>
                  <Clock className="h-10 w-10 text-primary opacity-20" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Reading Streak</p>
                    <p className="text-3xl font-bold">23</p>
                    <p className="text-xs text-muted-foreground mt-1">days in a row</p>
                  </div>
                  <Zap className="h-10 w-10 text-primary opacity-20" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Accuracy Score</p>
                    <p className="text-3xl font-bold">94%</p>
                    <p className="text-xs text-muted-foreground mt-1">in quizzes</p>
                  </div>
                  <Award className="h-10 w-10 text-primary opacity-20" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Weekly Reading Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="newspaper-title">Weekly Reading Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={readingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="articles" fill="#1E90FF" name="Articles Read" />
                    <Bar dataKey="minutes" fill="#00FFD1" name="Minutes Spent" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Topic Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="newspaper-title">Reading by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Engagement Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="newspaper-title">Engagement Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="saved" stroke="#1E90FF" strokeWidth={2} name="Saved" />
                    <Line type="monotone" dataKey="shared" stroke="#00FFD1" strokeWidth={2} name="Shared" />
                    <Line type="monotone" dataKey="liked" stroke="#FF9900" strokeWidth={2} name="Liked" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Reading Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="newspaper-title">AI-Powered Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 pb-3 border-b">
                    <Target className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Peak Reading Time</p>
                      <p className="text-sm text-muted-foreground">You're most active between 8-10 AM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pb-3 border-b">
                    <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Growing Interest</p>
                      <p className="text-sm text-muted-foreground">Your AI & Technology reading increased 45%</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pb-3 border-b">
                    <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Reading Speed</p>
                      <p className="text-sm text-muted-foreground">Avg 3 min per summary (optimal pace)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Comprehension</p>
                      <p className="text-sm text-muted-foreground">94% quiz accuracy - excellent retention!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="newspaper-title">Personalized Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Explore New Topics</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    You haven't read much about Climate & Environment. Would you like to explore this?
                  </p>
                  <button className="text-sm text-primary hover:underline">Add to Feed</button>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Optimize Schedule</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Get your daily digest at 8 AM when you're most likely to read.
                  </p>
                  <button className="text-sm text-primary hover:underline">Update Settings</button>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Balance Your Feed</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    70% of your reading is tech-focused. Diversify with world news?
                  </p>
                  <button className="text-sm text-primary hover:underline">Show More Variety</button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
