'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const features = [
    {
      title: 'Installation Guide',
      description: 'Step-by-step instructions for getting CLITech up and running on your system.',
      icon: '📦',
      href: '/docs/installation',
    },
    {
      title: 'Command Reference',
      description: 'Complete reference of all available commands with examples and options.',
      icon: '⚙️',
      href: '/docs/commands',
    },
    {
      title: 'Error Lookup',
      description: 'Quick lookup for error codes and troubleshooting solutions.',
      icon: '🔍',
      href: '/errors',
    },
    {
      title: 'Best Practices',
      description: 'Learn the best practices for using CLITech in production environments.',
      icon: '💡',
      href: '/docs/best-practices',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-accent">CLITech</div>
          <div className="hidden sm:flex items-center gap-8">
            <Link href="/docs" className="hover:text-accent transition-colors">Docs</Link>
            <Link href="/errors" className="hover:text-accent transition-colors">Error Lookup</Link>
            <Link href="/about" className="hover:text-accent transition-colors">About</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-card border-b border-border py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
            Command-Line Excellence
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Complete documentation and reference for CLITech. Learn installation, commands, troubleshooting, and best practices.
          </p>

          {/* Search Bar */}
          <div className="flex gap-2 mb-8 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search documentation, errors, or commands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-base"
              />
            </div>
            <Button variant="default" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Search
            </Button>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild variant="default" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/docs/installation">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-card bg-transparent">
              <Link href="/docs">View Docs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Features & Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <Link key={idx} href={feature.href}>
              <Card className="p-6 cursor-pointer hover:border-accent transition-all hover:shadow-lg h-full">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-card border-t border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Access</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link href="/docs/installation" className="p-4 border border-border rounded-lg hover:border-accent hover:bg-background transition-all">
              <div className="font-semibold text-accent mb-1">Installation</div>
              <div className="text-sm text-muted-foreground">Get started in minutes</div>
            </Link>
            <Link href="/docs/commands" className="p-4 border border-border rounded-lg hover:border-accent hover:bg-background transition-all">
              <div className="font-semibold text-accent mb-1">Commands</div>
              <div className="text-sm text-muted-foreground">Full command reference</div>
            </Link>
            <Link href="/errors" className="p-4 border border-border rounded-lg hover:border-accent hover:bg-background transition-all">
              <div className="font-semibold text-accent mb-1">Error Lookup</div>
              <div className="text-sm text-muted-foreground">Troubleshoot issues</div>
            </Link>
            <Link href="/docs" className="p-4 border border-border rounded-lg hover:border-accent hover:bg-background transition-all">
              <div className="font-semibold text-accent mb-1">All Docs</div>
              <div className="text-sm text-muted-foreground">Complete guide</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Documentation</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/docs/installation" className="hover:text-accent">Installation</Link></li>
                <li><Link href="/docs/commands" className="hover:text-accent">Commands</Link></li>
                <li><Link href="/docs/best-practices" className="hover:text-accent">Best Practices</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/errors" className="hover:text-accent">Error Lookup</Link></li>
                <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
                <li><Link href="/about" className="hover:text-accent">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-accent">Privacy Policy</Link></li>
                <li><Link href="/" className="hover:text-accent">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-accent">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex items-center justify-between flex-wrap gap-4 text-sm text-muted-foreground">
            <p>&copy; 2026 CLITech. All rights reserved.</p>
            <p>Build for developers, by developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
