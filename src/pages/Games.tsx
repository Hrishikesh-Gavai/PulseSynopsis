import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Trophy, Target, Brain, Clock, Play, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card } from "@/components/ui/card";

const Games = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [biasGameStarted, setBiasGameStarted] = useState(false);
  const [timelineGameStarted, setTimelineGameStarted] = useState(false);

  const games = [
    {
      id: "1",
      title: "Daily News Quiz",
      description: "Test your knowledge of today's top stories",
      icon: Brain,
      players: "2.3K",
      difficulty: "Medium",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3"
    },
    {
      id: "2",
      title: "Bias Detector Challenge",
      description: "Identify media bias in news coverage and learn to spot manipulation",
      icon: Target,
      players: "1.8K",
      difficulty: "Hard",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3"
    },
    {
      id: "3",
      title: "Timeline Builder",
      description: "Arrange major news events in chronological order",
      icon: Trophy,
      players: "3.1K",
      difficulty: "Medium",
      image: "https://images.unsplash.com/photo-1630756539201-f435ba29f1fe?ixlib=rb-4.0.3"
    },
    {
      id: "4",
      title: "Headline Match",
      description: "Match breaking headlines to their news categories",
      icon: Zap,
      players: "2.7K",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3"
    },
    {
      id: "5",
      title: "Fact vs Fiction",
      description: "Separate real news from misinformation in record time",
      icon: TrendingUp,
      players: "4.2K",
      difficulty: "Hard",
      image: "https://images.unsplash.com/photo-1591473153156-c3f51d8de61b?ixlib=rb-4.0.3"
    }
  ];

  const quizQuestions = [
    {
      question: "Which company recently announced major AI breakthroughs?",
      options: ["OpenAI", "Microsoft", "Google", "Meta"],
      correct: 0
    },
    {
      question: "What is the current focus of climate policy discussions?",
      options: ["Solar Energy", "Carbon Credits", "Electric Vehicles", "All of the above"],
      correct: 3
    },
    {
      question: "Which sector saw the biggest growth in Q4 2024?",
      options: ["Healthcare", "Technology", "Finance", "Manufacturing"],
      correct: 1
    }
  ];

  const handleAnswer = (index: number) => {
    if (index === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz finished
      alert(`Quiz Complete! Your score: ${score + (index === quizQuestions[currentQuestion].correct ? 1 : 0)}/${quizQuestions.length}`);
      setQuizStarted(false);
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container px-4 py-12">
        <div className="mb-12 border-b-4 border-primary pb-6">
          <h1 className="text-5xl newspaper-title mb-4">News Games & Challenges</h1>
          <p className="text-xl text-muted-foreground">
            Sharpen your media literacy while having fun
          </p>
        </div>

        {/* Featured Game - Quiz */}
        <Card className="mb-16 border-4 border-primary">
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="h-8 w-8" />
                <span className="text-sm font-mono uppercase border-b-2 border-primary">Featured Game</span>
              </div>
              <h2 className="text-4xl newspaper-title mb-4">Daily News Challenge</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Test your knowledge with today's most important news stories. Can you get a perfect score?
              </p>
              
              {!quizStarted ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-6 text-sm">
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      5 minutes
                    </span>
                    <span className="flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      {quizQuestions.length} questions
                    </span>
                    <span className="flex items-center gap-2">
                      <Trophy className="h-4 w-4" />
                      High Score: 2,847
                    </span>
                  </div>
                  <Button size="lg" onClick={() => setQuizStarted(true)}>
                    <Play className="h-5 w-5 mr-2" />
                    Start Quiz
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-mono">Question {currentQuestion + 1}/{quizQuestions.length}</span>
                    <span className="text-sm font-mono">Score: {score}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{quizQuestions[currentQuestion].question}</h3>
                  
                  <div className="grid gap-3">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <Button 
                        key={index}
                        variant="outline" 
                        className="justify-start text-left h-auto py-3"
                        onClick={() => handleAnswer(index)}
                      >
                        <span className="font-mono mr-3">{String.fromCharCode(65 + index)}.</span>
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3"
                alt="Quiz"
                className="rounded-lg"
              />
            </div>
          </div>
          </div>
        </Card>

        {/* Other Games Grid */}
        <div>
          <h2 className="text-3xl newspaper-title mb-8 border-b-2 border-primary pb-4">More Challenges</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {games.map((game) => (
              <div key={game.id} className="bg-card border rounded-lg overflow-hidden hover:border-primary transition-colors group cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <game.icon className="h-6 w-6 text-primary" />
                    <span className={`text-xs font-mono px-2 py-1 rounded-full ${
                      game.difficulty === 'Easy' ? 'bg-green-500/10 text-green-500' :
                      game.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-500' :
                      'bg-red-500/10 text-red-500'
                    }`}>
                      {game.difficulty}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{game.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{game.players} playing</span>
                    <Button size="sm">Play Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="mt-16 bg-card border rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8">Today's Top Players</h2>
          <div className="space-y-4">
            {[
              { rank: 1, name: "NewsNinja", score: 2847, avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" },
              { rank: 2, name: "FactChecker", score: 2756, avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" },
              { rank: 3, name: "QuizMaster", score: 2689, avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop" },
            ].map((player) => (
              <div key={player.rank} className="flex items-center gap-4 p-4 rounded-lg border">
                <span className={`text-2xl font-bold ${
                  player.rank === 1 ? 'text-yellow-500' :
                  player.rank === 2 ? 'text-gray-400' :
                  'text-orange-600'
                }`}>
                  #{player.rank}
                </span>
                <img 
                  src={player.avatar}
                  alt={player.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-bold">{player.name}</p>
                  <p className="text-sm text-muted-foreground">Score: {player.score}</p>
                </div>
                <Trophy className="h-6 w-6 text-primary" />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Games;
