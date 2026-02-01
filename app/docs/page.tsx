'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function DocsPage() {
  const docCategories = [
    {
      title: 'Getting Started',
      description: 'Start your journey with CLITech',
      items: [
        { title: 'Installation', description: 'Step-by-step installation guide', href: '/docs/installation' },
        { title: 'Quick Start', description: 'Get up and running in 5 minutes', href: '/docs/quickstart' },
        { title: 'First Project', description: 'Create your first CLITech project', href: '/docs/first-project' },
      ],
    },
    {
      title: 'Reference',
      description: 'Complete API and command reference',
      items: [
        { title: 'Commands', description: 'All available CLI commands', href: '/docs/commands' },
        { title: 'Configuration', description: 'Configuration options and settings', href: '/docs/config' },
        { title: 'API Reference', description: 'Core API documentation', href: '/docs/api' },
      ],
    },
    {
      title: 'Advanced Topics',
      description: 'Deep dive into advanced features',
      items: [
        { title: 'Best Practices', description: 'Industry best practices and patterns', href: '/docs/best-practices' },
        { title: 'Performance', description: 'Optimization and performance tuning', href: '/docs/performance' },
        { title: 'Security', description: 'Security considerations and best practices', href: '/docs/security' },
      ],
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and solutions',
      items: [
        { title: 'Error Lookup', description: 'Search for error codes and solutions', href: '/errors' },
        { title: 'FAQ', description: 'Frequently asked questions', href: '/docs/faq' },
        { title: 'Contact Support', description: 'Get help from our support team', href: '/contact' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-accent">CLITech</Link>
          <div className="hidden sm:flex items-center gap-8">
            <Link href="/docs" className="hover:text-accent transition-colors font-semibold">Docs</Link>
            <Link href="/errors" className="hover:text-accent transition-colors">Error Lookup</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-accent hover:text-accent/80 mb-6">
          <ChevronLeft size={20} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive guides and reference documentation for CLITech. Whether you're just getting started or looking for advanced topics, find what you need here.
          </p>
        </div>

        {/* Search and Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Link href="/docs/installation" className="p-4 border border-border rounded-lg hover:border-accent hover:bg-card transition-all">
            <div className="font-semibold text-accent mb-1">Installation</div>
            <div className="text-sm text-muted-foreground">Get CLITech installed</div>
          </Link>
          <Link href="/docs/commands" className="p-4 border border-border rounded-lg hover:border-accent hover:bg-card transition-all">
            <div className="font-semibold text-accent mb-1">Commands</div>
            <div className="text-sm text-muted-foreground">Full command reference</div>
          </Link>
          <Link href="/errors" className="p-4 border border-border rounded-lg hover:border-accent hover:bg-card transition-all">
            <div className="font-semibold text-accent mb-1">Error Lookup</div>
            <div className="text-sm text-muted-foreground">Find error solutions</div>
          </Link>
        </div>

        {/* Doc Categories */}
        <div className="space-y-12">
          {docCategories.map((category, idx) => (
            <section key={idx}>
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {category.items.map((item, itemIdx) => (
                  <Link key={itemIdx} href={item.href}>
                    <Card className="p-6 h-full hover:border-accent transition-all cursor-pointer hover:shadow-lg">
                      <h3 className="font-semibold mb-2 flex items-center justify-between">
                        {item.title}
                        <ChevronRight size={18} className="text-accent" />
                      </h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-16 bg-card border border-border p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Check the error lookup, browse the FAQ, or contact us directly.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/errors">Error Lookup</Link>
            </Button>
            <Button asChild variant="outline" className="border-border text-foreground hover:bg-background bg-transparent">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
