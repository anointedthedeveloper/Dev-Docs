'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';

export default function BestPracticesPage() {
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
          <h1 className="text-5xl font-bold mb-4">Best Practices</h1>
          <p className="text-xl text-muted-foreground">Learn the recommended ways to use CLITech for maximum efficiency and reliability.</p>
        </div>

        <div className="space-y-8">
          {/* Project Structure */}
          <Card className="p-6 bg-card border-border">
            <h2 className="text-3xl font-bold mb-4">1. Project Structure</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>Organize your CLITech projects with a clear directory structure:</p>
              <pre className="bg-background p-4 rounded-lg border border-border overflow-x-auto text-sm font-mono text-accent">
{`project/
├── src/
│   ├── commands/
│   ├── utils/
│   └── config/
├── tests/
├── docs/
├── .clitech/
├── package.json
└── README.md`}
              </pre>
            </div>
          </Card>

          {/* Configuration Management */}
          <Card className="p-6 bg-card border-border">
            <h2 className="text-3xl font-bold mb-4">2. Configuration Management</h2>
            <div className="space-y-3 text-muted-foreground">
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Use environment files for different configurations (dev, staging, production)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Keep sensitive data in .env files (never commit to version control)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Use clitech config set to manage settings securely</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Error Handling */}
          <Card className="p-6 bg-card border-border">
            <h2 className="text-3xl font-bold mb-4">3. Error Handling & Logging</h2>
            <div className="space-y-3 text-muted-foreground">
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Always use try-catch blocks for command execution</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Enable verbose logging during development: clitech --verbose</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Use meaningful error messages for debugging</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Check the error lookup guide for common error codes</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Performance Optimization */}
          <Card className="p-6 bg-card border-border">
            <h2 className="text-3xl font-bold mb-4">4. Performance Optimization</h2>
            <div className="space-y-3 text-muted-foreground">
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Use caching to avoid redundant operations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Parallelize independent tasks using the --parallel flag</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Monitor performance with clitech benchmark</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Profile slow operations to identify bottlenecks</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Security */}
          <Card className="p-6 bg-card border-border">
            <h2 className="text-3xl font-bold mb-4">5. Security Best Practices</h2>
            <div className="space-y-3 text-muted-foreground">
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Never hardcode credentials in your code</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Use environment variables for sensitive information</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Keep CLITech and dependencies updated</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Review permissions and access controls regularly</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Version Control */}
          <Card className="p-6 bg-card border-border">
            <h2 className="text-3xl font-bold mb-4">6. Version Control</h2>
            <div className="space-y-3 text-muted-foreground">
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Commit frequently with meaningful messages</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Use semantic versioning for releases</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Tag important releases in Git</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Keep documentation in sync with code changes</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Testing */}
          <Card className="p-6 bg-card border-border">
            <h2 className="text-3xl font-bold mb-4">7. Testing Strategy</h2>
            <div className="space-y-3 text-muted-foreground">
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Write unit tests for core functionality</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Use integration tests for multi-component workflows</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Run tests before deployment: clitech test --coverage</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Aim for at least 80% code coverage</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Documentation */}
          <Card className="p-6 bg-card border-border">
            <h2 className="text-3xl font-bold mb-4">8. Documentation</h2>
            <div className="space-y-3 text-muted-foreground">
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Write clear README files for all projects</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Document all custom commands and functions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Keep API documentation up-to-date</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Include examples in your documentation</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* Resources */}
          <Card className="p-6 bg-card border-border">
            <h2 className="text-2xl font-bold mb-4">Learn More</h2>
            <div className="flex gap-4 flex-wrap">
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/docs/commands">View Commands</Link>
              </Button>
              <Button asChild variant="outline" className="border-border text-foreground hover:bg-background bg-transparent">
                <Link href="/errors">Error Lookup</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
