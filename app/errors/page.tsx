'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, ChevronLeft } from 'lucide-react';
import { useState, useMemo } from 'react';

export default function ErrorsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const errors = [
    {
      code: 'E001',
      title: 'Command not found',
      description: 'The specified command does not exist or is not installed.',
      causes: [
        'CLI tools not installed or improperly installed',
        'Command is misspelled',
        'Installation directory not in PATH',
      ],
      solutions: [
        'Verify installation with: clitech --version',
        'Check command spelling with: clitech --help',
        'Reinstall CLITech with: npm install -g clitech',
        'Ensure NODE_PATH is correctly set',
      ],
    },
    {
      code: 'E002',
      title: 'Permission denied',
      description: 'You do not have permission to perform this operation.',
      causes: [
        'Insufficient file permissions',
        'Global installation requires elevated permissions',
        'Ownership mismatch on directories',
      ],
      solutions: [
        'Use sudo for global installation: sudo npm install -g clitech',
        'Fix npm permissions: npm config set prefix ~/.npm-global',
        'Check directory ownership: ls -l /path/to/directory',
        'Run with elevated permissions if necessary',
      ],
    },
    {
      code: 'E003',
      title: 'Configuration file missing',
      description: 'CLITech configuration file could not be found or read.',
      causes: [
        'Configuration file deleted or moved',
        'Incorrect file permissions on config file',
        'Project not properly initialized',
      ],
      solutions: [
        'Reinitialize project: clitech init --force',
        'Check config file location: ~/.clitech/config.json',
        'Verify file permissions: chmod 644 ~/.clitech/config.json',
        'See docs/config for configuration details',
      ],
    },
    {
      code: 'E004',
      title: 'Build failed',
      description: 'Project build process encountered an error.',
      causes: [
        'Syntax errors in source code',
        'Missing dependencies',
        'Invalid configuration',
        'Incompatible versions',
      ],
      solutions: [
        'Check error message for details',
        'Verify all dependencies: npm install',
        'Review configuration file',
        'Update CLITech: npm update -g clitech',
        'Check docs/best-practices for optimization tips',
      ],
    },
    {
      code: 'E005',
      title: 'Port already in use',
      description: 'The specified port is already in use by another process.',
      causes: [
        'Another service running on the port',
        'Server not properly shut down',
        'Process running in background',
      ],
      solutions: [
        'Use a different port: clitech serve --port 3001',
        'Kill process on port: lsof -ti:3000 | xargs kill -9',
        'Wait a moment and try again',
        'Check for background processes',
      ],
    },
    {
      code: 'E006',
      title: 'Network connection failed',
      description: 'Failed to connect to remote server or service.',
      causes: [
        'Network connectivity issues',
        'Server is down or unreachable',
        'Firewall or proxy blocking connection',
        'Invalid API endpoint',
      ],
      solutions: [
        'Check network connection',
        'Verify server status and endpoint',
        'Check firewall and proxy settings',
        'Use --verbose flag for more details',
        'Contact support if issue persists',
      ],
    },
    {
      code: 'E007',
      title: 'Invalid input',
      description: 'The provided input does not match expected format or constraints.',
      causes: [
        'Incorrect command syntax',
        'Invalid parameter values',
        'Missing required arguments',
      ],
      solutions: [
        'Check command syntax: clitech [command] --help',
        'Verify parameter values',
        'Review docs/commands for proper usage',
        'Use --verbose flag to see what went wrong',
      ],
    },
    {
      code: 'E008',
      title: 'Dependency conflict',
      description: 'Conflicting dependency versions detected.',
      causes: [
        'Multiple incompatible package versions',
        'Outdated dependencies',
        'Node version incompatibility',
      ],
      solutions: [
        'Clear node_modules: rm -rf node_modules package-lock.json',
        'Reinstall dependencies: npm install',
        'Check Node version: node --version (requires 14.0+)',
        'Update dependencies: npm update',
      ],
    },
  ];

  const filteredErrors = useMemo(() => {
    if (!searchQuery) return errors;

    const query = searchQuery.toLowerCase();
    return errors.filter(
      (error) =>
        error.code.toLowerCase().includes(query) ||
        error.title.toLowerCase().includes(query) ||
        error.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-accent">CLITech</Link>
          <div className="hidden sm:flex items-center gap-8">
            <Link href="/docs" className="hover:text-accent transition-colors">Docs</Link>
            <Link href="/errors" className="hover:text-accent transition-colors font-semibold">Error Lookup</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-accent hover:text-accent/80 mb-6">
          <ChevronLeft size={20} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Error Lookup</h1>
          <p className="text-xl text-muted-foreground">Search for error codes and find solutions to common problems.</p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search by error code (E001), title, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-base"
              />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {filteredErrors.length} of {errors.length} error codes found
          </p>
        </div>

        {/* Error List */}
        {filteredErrors.length > 0 ? (
          <div className="space-y-4">
            {filteredErrors.map((error, idx) => (
              <Card key={idx} className="p-6 border-border hover:border-accent transition-all">
                <div className="mb-4">
                  <div className="flex items-start gap-4 mb-2">
                    <div className="bg-accent/10 border border-accent/20 rounded px-3 py-1 font-mono font-bold text-accent">
                      {error.code}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold">{error.title}</h2>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{error.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-sm text-muted-foreground uppercase">Common Causes</h3>
                    <ul className="space-y-2">
                      {error.causes.map((cause, cidx) => (
                        <li key={cidx} className="flex gap-2 text-sm">
                          <span className="text-accent flex-shrink-0">•</span>
                          <span>{cause}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-sm text-muted-foreground uppercase">Solutions</h3>
                    <ul className="space-y-2">
                      {error.solutions.map((solution, sidx) => (
                        <li key={sidx} className="flex gap-2 text-sm">
                          <span className="text-accent flex-shrink-0">✓</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 border-border text-center">
            <p className="text-muted-foreground text-lg mb-4">No errors found matching "{searchQuery}"</p>
            <p className="text-muted-foreground mb-6">Try searching with different keywords or browse all error codes above.</p>
            <Button
              onClick={() => setSearchQuery('')}
              variant="outline"
              className="border-border text-foreground hover:bg-background"
            >
              Clear Search
            </Button>
          </Card>
        )}

        {/* Help Section */}
        <section className="mt-16 bg-card border border-border p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="text-muted-foreground mb-6">
            If you can't find a solution to your problem, our support team is ready to help.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button asChild variant="outline" className="border-border text-foreground hover:bg-background bg-transparent">
              <Link href="/docs">View Documentation</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
