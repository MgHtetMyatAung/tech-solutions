import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Users, Share, Star } from "lucide-react";
import Link from "next/link";
import HeroSection from "@/components/home/hero-section";

export default function HomePage() {
  const featuredSolutions = [
    {
      id: 1,
      title: "React State Management with Zustand",
      description:
        "A lightweight alternative to Redux for managing React application state",
      author: "Sarah Chen",
      tags: ["React", "State Management", "Zustand"],
      likes: 124,
      category: "Frontend",
    },
    {
      id: 2,
      title: "Optimizing Next.js Bundle Size",
      description:
        "Techniques to reduce bundle size and improve performance in Next.js applications",
      author: "Mike Johnson",
      tags: ["Next.js", "Performance", "Optimization"],
      likes: 89,
      category: "Performance",
    },
    {
      id: 3,
      title: "Docker Multi-stage Builds for Node.js",
      description:
        "How to create efficient Docker images for Node.js applications",
      author: "Alex Rodriguez",
      tags: ["Docker", "Node.js", "DevOps"],
      likes: 156,
      category: "DevOps",
    },
  ];

  const categories = [
    { name: "Frontend", count: 245, icon: "🎨" },
    { name: "Backend", count: 189, icon: "⚙️" },
    { name: "DevOps", count: 134, icon: "🚀" },
    { name: "Mobile", count: 98, icon: "📱" },
    { name: "Database", count: 167, icon: "🗄️" },
    { name: "AI/ML", count: 76, icon: "🤖" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 min-h-[50vh] grid place-items-center">
        <div>
          <h2 className=" text-2xl sm:text-3xl font-bold text-center mb-12 text-green-300">
            Why Choose Innovix.Tech ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1280px] mx-auto">
            <Card className="text-center bg-gray-200 shadow-lg">
              <CardHeader>
                <Share className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className=" text-lg">Share Knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className=" text-gray-800 font-medium">
                  Share your technical solutions and help other developers
                  overcome similar challenges.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-gray-200 shadow-lg">
              <CardHeader>
                <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className=" text-lg">Smart Search</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className=" text-gray-800 font-medium">
                  Find solutions quickly with our advanced search by technology,
                  category, or problem type.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-gray-200 shadow-lg">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className=" text-lg">Community Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className=" text-gray-800 font-medium">
                  Connect with experienced developers and learn from real-world
                  implementations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container max-w-[1280px] mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-green-300">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/solutions?category=${category.name.toLowerCase()}`}
            >
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <div className="font-semibold">{category.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {category.count} solutions
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="container max-w-[1280px] mx-auto px-4 py-16">
        <div className="flex items-center justify-center sm:justify-between mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-300">
            Featured Solutions
          </h2>
          <Link href="/solutions" className=" hidden sm:inline-block">
            <Button className=" rounded-full border-2 border-green-300">
              View All Solutions
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSolutions.map((solution) => (
            <Card
              key={solution.id}
              className="transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-1">
                  <Badge className=" bg-green-50 text-green-800 hover:bg-gray-800 hover:text-gray-50">
                    {solution.category}
                  </Badge>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4" />
                    <span>{solution.likes}</span>
                  </div>
                </div>
                <CardTitle className=" mb-2">{solution.title}</CardTitle>
                <CardDescription className="line-clamp-3 text-gray-700 mt-2">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    by {solution.author}
                  </span>
                  <Link href={`/solutions/${solution.id}`}>
                    <Button variant="ghost" size="sm">
                      Read More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className=" sm:hidden text-center pt-12">
          <Link href="/solutions" className="">
            <Button className=" rounded-full border-2 border-green-300">
              View All Solutions
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 sm:py-28 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-green-300">
            Ready to Share Your Expertise?
          </h2>
          <p className="text-gray-200 mb-8">
            Join thousands of developers sharing their knowledge and helping
            others solve technical challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg">Create Account</Button>
            </Link>
            <Link href="/solutions/new">
              <Button variant="outline" size="lg">
                Share a Solution
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
