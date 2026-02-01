'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';

export default function CommandsPage() {
  const commands = [
    {
      name: 'clitech init',
      description: 'Initialize a new CLITech project',
      usage: 'clitech init [project-name]',
      example: 'clitech init my-project',
      flags: [
        { flag: '--template', description: 'Specify project template (default, advanced, minimal)' },
        { flag: '--typescript', description: 'Initialize with TypeScript support' },
        { flag: '--git', description: 'Initialize git repository' },
      ],
    },
    {
      name: 'clitech build',
      description: 'Build your CLITech application',
      usage: 'clitech build [options]',
      example: 'clitech build --production',
      flags: [
        { flag: '--production', description: 'Build for production environment' },
        { flag: '--minify', description: 'Minify output files' },
        { flag: '--output', description: 'Specify output directory' },
      ],
    },
    {
      name: 'clitech serve',
      description: 'Start a development server',
      usage: 'clitech serve [options]',
      example: 'clitech serve --port 3000',
      flags: [
        { flag: '--port', description: 'Port to run server on (default: 3000)' },
        { flag: '--host', description: 'Host to bind server to (default: localhost)' },
        { flag: '--watch', description: 'Watch for file changes' },
      ],
    },
    {
      name: 'clitech deploy',
      description: 'Deploy your application',
      usage: 'clitech deploy [target]',
      example: 'clitech deploy production',
      flags: [
        { flag: '--env', description: 'Deployment environment' },
        { flag: '--dry-run', description: 'Test deployment without applying changes' },
        { flag: '--force', description: 'Force deployment' },
      ],
    },
    {
      name: 'clitech test',
      description: 'Run test suite',
      usage: 'clitech test [options]',
      example: 'clitech test --coverage',
      flags: [
        { flag: '--coverage', description: 'Generate coverage report' },
        { flag: '--watch', description: 'Watch for file changes' },
        { flag: '--verbose', description: 'Verbose output' },
      ],
    },
    {
      name: 'clitech config',
      description: 'Manage configuration',
      usage: 'clitech config [action] [key] [value]',
      example: 'clitech config set theme dark',
      flags: [
        { flag: 'get', description: 'Get configuration value' },
        { flag: 'set', description: 'Set configuration value' },
        { flag: 'list', description: 'List all configuration' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-accent">CLITech</Link>
          <div className="hidden sm:flex items-center gap-8">
            <Link href="/docs" className="hover:text-accent transition-colors">Docs</Link>
            <Link href="/errors" className="hover:text-accent transition-colors">Error Lookup</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/docs" className="inline-flex items-center text-accent hover:text-accent/80 mb-6">
          <ChevronLeft size={20} />
          Back to Documentation
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Command Reference</h1>
          <p className="text-xl text-muted-foreground">Complete list of all CLITech commands with usage examples.</p>
        </div>

        {/* Commands Grid */}
        <div className="space-y-6">
          {commands.map((command, idx) => (
            <Card key={idx} className="p-6 border-border">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-accent mb-2">{command.name}</h2>
                <p className="text-muted-foreground">{command.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Usage</h3>
                  <Card className="p-3 bg-background border border-border">
                    <code className="text-accent font-mono text-sm">{command.usage}</code>
                  </Card>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Example</h3>
                  <Card className="p-3 bg-background border border-border">
                    <code className="text-accent font-mono text-sm">{command.example}</code>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-3">Options & Flags</h3>
                <div className="space-y-2">
                  {command.flags.map((flag, fidx) => (
                    <div key={fidx} className="flex gap-4 p-3 bg-background border border-border rounded-md">
                      <code className="text-accent font-mono text-sm font-semibold flex-shrink-0">--{flag.flag}</code>
                      <span className="text-muted-foreground text-sm">{flag.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <section className="mt-12 bg-card border border-border p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Tips & Tricks</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Use <code className="bg-background px-2 py-1 rounded font-mono text-sm text-accent">clitech --help</code> to get help for any command</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>All commands support <code className="bg-background px-2 py-1 rounded font-mono text-sm text-accent">--verbose</code> flag for detailed output</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Use <code className="bg-background px-2 py-1 rounded font-mono text-sm text-accent">clitech --version</code> to check your current version</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>Tab completion is available for bash and zsh shells</span>
            </li>
          </ul>
        </section>

        {/* Related Links */}
        <section className="mt-12 flex gap-4 flex-wrap">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/docs/best-practices">Best Practices</Link>
          </Button>
          <Button asChild variant="outline" className="border-border text-foreground hover:bg-background bg-transparent">
            <Link href="/errors">Error Lookup</Link>
          </Button>
          <Button asChild variant="outline" className="border-border text-foreground hover:bg-background bg-transparent">
            <Link href="/contact">Get Help</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
