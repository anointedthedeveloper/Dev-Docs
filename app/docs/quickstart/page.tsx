'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, Check } from 'lucide-react';

export default function QuickstartPage() {
  const steps = [
    {
      number: 1,
      title: 'Install CLITech',
      description: 'Get CLITech installed on your system using npm',
      code: 'npm install -g clitech',
    },
    {
      number: 2,
      title: 'Verify Installation',
      description: 'Check that CLITech is properly installed',
      code: 'clitech --version',
    },
    {
      number: 3,
      title: 'Create a Project',
      description: 'Initialize a new CLITech project',
      code: 'clitech init my-project',
    },
    {
      number: 4,
      title: 'Navigate to Project',
      description: 'Change to your project directory',
      code: 'cd my-project',
    },
    {
      number: 5,
      title: 'Start Development Server',
      description: 'Launch the development server',
      code: 'clitech serve',
    },
    {
      number: 6,
      title: 'Build Your Project',
      description: 'Create a production build',
      code: 'clitech build --production',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/80 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-accent">CLITech</Link>
          <div className="hidden sm:flex items-center gap-8">
            <Link href="/docs" className="hover:text-accent transition-colors">Docs</Link>
            <Link href="/errors" className="hover:text-accent transition-colors">Error Lookup</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/docs" className="inline-flex items-center text-accent hover:text-accent/80 mb-6">
          <ChevronLeft size={20} />
          Back to Documentation
        </Link>

        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Quick Start</h1>
          <p className="text-xl text-muted-foreground">Get up and running with CLITech in just 5 minutes.</p>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 border border-accent/40 rounded-full flex items-center justify-center">
                {idx < 5 ? (
                  <span className="text-accent font-bold text-lg">{step.number}</span>
                ) : (
                  <Check className="text-accent" size={24} />
                )}
              </div>
              <Card className="flex-1 p-6 bg-card border-border">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <div className="bg-background border border-border rounded-lg p-4">
                  <code className="text-accent font-mono text-sm">{step.code}</code>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Next Steps */}
        <Card className="p-8 bg-card border-border mb-8">
          <h2 className="text-3xl font-bold mb-6">What's Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Link href="/docs/commands" className="p-4 border border-border rounded-lg hover:border-accent hover:bg-background transition-all">
              <h3 className="font-semibold text-accent mb-2">Commands Reference</h3>
              <p className="text-sm text-muted-foreground">Explore all available commands</p>
            </Link>
            <Link href="/docs/best-practices" className="p-4 border border-border rounded-lg hover:border-accent hover:bg-background transition-all">
              <h3 className="font-semibold text-accent mb-2">Best Practices</h3>
              <p className="text-sm text-muted-foreground">Learn recommended patterns</p>
            </Link>
            <Link href="/errors" className="p-4 border border-border rounded-lg hover:border-accent hover:bg-background transition-all">
              <h3 className="font-semibold text-accent mb-2">Error Lookup</h3>
              <p className="text-sm text-muted-foreground">Find solutions to errors</p>
            </Link>
          </div>
        </Card>

        {/* Common Commands */}
        <Card className="p-8 bg-card border-border">
          <h2 className="text-3xl font-bold mb-6">Common Commands</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Get Help</h3>
              <div className="bg-background border border-border rounded-lg p-3">
                <code className="text-accent font-mono text-sm">clitech --help</code>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Run Tests</h3>
              <div className="bg-background border border-border rounded-lg p-3">
                <code className="text-accent font-mono text-sm">clitech test</code>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Deploy Project</h3>
              <div className="bg-background border border-border rounded-lg p-3">
                <code className="text-accent font-mono text-sm">clitech deploy production</code>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">View Configuration</h3>
              <div className="bg-background border border-border rounded-lg p-3">
                <code className="text-accent font-mono text-sm">clitech config list</code>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <section className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">Ready to dive deeper?</p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/docs">View Full Documentation</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
