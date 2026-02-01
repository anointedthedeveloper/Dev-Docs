'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';

export default function PrivacyPage() {
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

        <div className="prose prose-invert max-w-none">
          <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg mb-8">Last updated: January 2026</p>

          <div className="space-y-8">
            <Card className="p-6 bg-card border-border">
              <h2 className="text-3xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                CLITech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you use our website and services.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h2 className="text-3xl font-bold mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Information You Provide</h3>
                  <p className="text-muted-foreground">
                    We collect information you voluntarily provide, including but not limited to: contact information (name, email address), feedback, messages, and any other information you choose to share with us.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Automatically Collected Information</h3>
                  <p className="text-muted-foreground">
                    When you visit our website, we automatically collect certain information including: IP address, browser type, operating system, referral source, pages visited, and time spent on pages. We use cookies and similar tracking technologies to enhance your experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Usage Information</h3>
                  <p className="text-muted-foreground">
                    We collect information about how you interact with our services, including commands used, features accessed, and errors encountered.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h2 className="text-3xl font-bold mb-4">How We Use Your Information</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Provide and improve our services</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Send technical notices and support messages</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Respond to your inquiries and requests</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Prevent fraudulent transactions and improve security</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Send promotional communications (with your consent)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Conduct analytics and monitor service usage</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Comply with legal obligations</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h2 className="text-3xl font-bold mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies, web beacons, and similar tracking technologies to improve your experience, remember your preferences, and understand how you use our services. You can control cookie settings through your browser preferences.
              </p>
              <p className="text-muted-foreground">
                We may use third-party analytics tools that collect information about your browsing activities. These tools may place cookies on your device to gather data about your usage patterns.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h2 className="text-3xl font-bold mb-4">Information Sharing</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We do not sell, trade, or rent your personal information to third parties. However, we may share information with:
                </p>
                <ul className="space-y-2 text-muted-foreground pl-4">
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Service providers who assist us in operating our website and conducting our business</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Legal authorities when required by law</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Business partners with your consent</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Successors in case of merger, acquisition, or business sale</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h2 className="text-3xl font-bold mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h2 className="text-3xl font-bold mb-4">Your Rights and Choices</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  You have rights regarding your personal information, including:
                </p>
                <ul className="space-y-2 text-muted-foreground pl-4">
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Right to access the personal information we hold about you</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Right to request correction of inaccurate information</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Right to request deletion of your information</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Right to opt-out of promotional communications</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: privacy@clitech.dev</p>
                <p>Address: CLITech Support, 123 Developer Street, Tech City, TC 12345</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
