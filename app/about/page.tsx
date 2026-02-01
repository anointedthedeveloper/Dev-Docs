'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';

export default function AboutPage() {
  const team = [
    { name: 'Alex Johnson', role: 'Founder & Lead Developer', bio: 'CLI enthusiast with 10+ years of experience' },
    { name: 'Sarah Chen', role: 'Product Manager', bio: 'Passionate about developer experience' },
    { name: 'Marcus Williams', role: 'DevOps Engineer', bio: 'Infrastructure and deployment specialist' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/80 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-accent">CLITech</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-accent hover:text-accent/80 mb-6">
          <ChevronLeft size={20} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">About CLITech</h1>
          <p className="text-xl text-muted-foreground">
            Building the future of command-line development, one command at a time.
          </p>
        </div>

        {/* Story */}
        <Card className="p-8 bg-card border-border mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              CLITech was founded in 2023 with a simple mission: make command-line development more accessible and powerful for developers of all skill levels. What started as a personal project quickly evolved into a comprehensive toolkit used by thousands of developers worldwide.
            </p>
            <p>
              We believe that developers deserve tools that are both powerful and intuitive. That's why we've spent countless hours refining every aspect of CLITech, from the command syntax to the documentation.
            </p>
            <p>
              Today, CLITech is used by startups, enterprises, and individual developers to streamline their development workflows and deploy applications faster than ever before.
            </p>
          </div>
        </Card>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 bg-card border-border">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              To empower developers with intuitive, powerful, and reliable command-line tools that accelerate development and reduce friction in their workflows.
            </p>
          </Card>

          <Card className="p-6 bg-card border-border">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Developer-first approach</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Open and transparent</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Continuous improvement</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">•</span>
                <span>Community-driven</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Key Features */}
        <Card className="p-8 bg-card border-border mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose CLITech</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-accent">Lightning Fast</h3>
              <p className="text-muted-foreground">Optimized performance that keeps up with your workflow</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-accent">Easy to Learn</h3>
              <p className="text-muted-foreground">Intuitive commands and comprehensive documentation</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-accent">Powerful Features</h3>
              <p className="text-muted-foreground">Advanced capabilities for experienced developers</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-accent">Active Community</h3>
              <p className="text-muted-foreground">Support and contributions from thousands of users</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-accent">Regular Updates</h3>
              <p className="text-muted-foreground">Continuous improvements and new features</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-accent">Open Source</h3>
              <p className="text-muted-foreground">Transparent development and community contributions</p>
            </div>
          </div>
        </Card>

        {/* Team */}
        <Card className="p-8 bg-card border-border mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <div key={idx} className="border border-border rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-2xl font-bold text-accent">{member.name.charAt(0)}</div>
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-accent mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="p-6 bg-card border-border text-center">
            <div className="text-3xl font-bold text-accent mb-2">50K+</div>
            <p className="text-sm text-muted-foreground">Active Users</p>
          </Card>
          <Card className="p-6 bg-card border-border text-center">
            <div className="text-3xl font-bold text-accent mb-2">1M+</div>
            <p className="text-sm text-muted-foreground">Commands Run</p>
          </Card>
          <Card className="p-6 bg-card border-border text-center">
            <div className="text-3xl font-bold text-accent mb-2">100+</div>
            <p className="text-sm text-muted-foreground">Countries</p>
          </Card>
          <Card className="p-6 bg-card border-border text-center">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Support</p>
          </Card>
        </div>

        {/* CTA */}
        <Card className="p-8 bg-card border-border text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6">Join thousands of developers using CLITech</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/docs/installation">Get Started</Link>
            </Button>
            <Button asChild variant="outline" className="border-border text-foreground hover:bg-background bg-transparent">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
