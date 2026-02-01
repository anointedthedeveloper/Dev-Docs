'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';

export default function InstallationPage() {
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
        {/* Back Button */}
        <Link href="/docs" className="inline-flex items-center text-accent hover:text-accent/80 mb-6">
          <ChevronLeft size={20} />
          Back to Documentation
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Installation Guide</h1>
          <p className="text-xl text-muted-foreground">Get CLITech up and running on your system in minutes.</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* System Requirements */}
          <section>
            <h2 className="text-3xl font-bold mb-4">System Requirements</h2>
            <Card className="p-6 bg-card border-border">
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  Node.js 14.0 or higher
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  npm 6.0 or higher
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  Unix-based OS (Linux, macOS) or Windows with WSL
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  100MB free disk space
                </li>
              </ul>
            </Card>
          </section>

          {/* Installation Methods */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Installation Methods</h2>

            {/* npm */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-3">Using npm (Recommended)</h3>
              <Card className="p-4 bg-background border border-border mb-4">
                <code className="text-accent font-mono text-sm">npm install -g clitech</code>
              </Card>
              <p className="text-muted-foreground mb-4">This will install CLITech globally on your system, making it accessible from any directory.</p>
            </div>

            {/* Yarn */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-3">Using Yarn</h3>
              <Card className="p-4 bg-background border border-border mb-4">
                <code className="text-accent font-mono text-sm">yarn global add clitech</code>
              </Card>
              <p className="text-muted-foreground mb-4">If you prefer using Yarn, use this command instead.</p>
            </div>

            {/* Homebrew */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-3">Using Homebrew (macOS)</h3>
              <Card className="p-4 bg-background border border-border mb-4">
                <code className="text-accent font-mono text-sm">brew install clitech</code>
              </Card>
              <p className="text-muted-foreground mb-4">For macOS users with Homebrew installed.</p>
            </div>

            {/* From Source */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">From Source</h3>
              <Card className="p-4 bg-background border border-border mb-4">
                <div className="space-y-2 font-mono text-sm text-accent">
                  <div>git clone https://github.com/clitech/clitech.git</div>
                  <div>cd clitech</div>
                  <div>npm install</div>
                  <div>npm run build</div>
                  <div>npm link</div>
                </div>
              </Card>
              <p className="text-muted-foreground mb-4">For developers who want to build from source.</p>
            </div>
          </section>

          {/* Verification */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Verify Installation</h2>
            <p className="text-muted-foreground mb-4">After installation, verify that CLITech is properly installed by running:</p>
            <Card className="p-4 bg-background border border-border mb-4">
              <code className="text-accent font-mono text-sm">clitech --version</code>
            </Card>
            <p className="text-muted-foreground">You should see the version number displayed in your terminal.</p>
          </section>

          {/* Troubleshooting */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Troubleshooting</h2>
            <div className="space-y-4">
              <Card className="p-6 bg-card border-border">
                <h3 className="font-semibold mb-2">Command not found</h3>
                <p className="text-muted-foreground text-sm mb-3">If you get a "command not found" error, the installation didn't complete properly. Try:</p>
                <Card className="p-3 bg-background border border-border">
                  <code className="text-accent font-mono text-xs">npm install -g clitech --force</code>
                </Card>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="font-semibold mb-2">Permission denied</h3>
                <p className="text-muted-foreground text-sm mb-3">On macOS or Linux, you may need to use sudo or fix npm permissions. See the npm documentation for details.</p>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="font-semibold mb-2">Still having issues?</h3>
                <p className="text-muted-foreground text-sm">
                  Check the <Link href="/errors" className="text-accent hover:underline">Error Lookup</Link> or <Link href="/contact" className="text-accent hover:underline">contact support</Link>.
                </p>
              </Card>
            </div>
          </section>

          {/* Next Steps */}
          <section className="bg-card border border-border p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
            <p className="text-muted-foreground mb-6">Now that you have CLITech installed, learn how to use it:</p>
            <div className="flex gap-4 flex-wrap">
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/docs/commands">View Commands</Link>
              </Button>
              <Button asChild variant="outline" className="border-border text-foreground hover:bg-background bg-transparent">
                <Link href="/docs/best-practices">Best Practices</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
