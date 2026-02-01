'use client';

import React from "react"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ChevronLeft, Mail, MessageSquare, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real app, this would send data to a backend
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Email us for detailed inquiries',
      contact: 'support@clitech.dev',
      response: 'Response time: 24 hours',
    },
    {
      icon: MessageSquare,
      title: 'Community Forum',
      description: 'Get help from the community',
      contact: 'forum.clitech.dev',
      response: 'Active community members',
    },
    {
      icon: Phone,
      title: 'Premium Support',
      description: 'Priority support for enterprise',
      contact: '+1 (555) 123-4567',
      response: '1-hour response time',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-accent">CLITech</Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-accent hover:text-accent/80 mb-6">
          <ChevronLeft size={20} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            We'd love to hear from you. Get in touch with our team or reach out through any of our support channels.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <Card key={idx} className="p-6 border-border hover:border-accent transition-all">
                <Icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                <div className="bg-background border border-border rounded-lg p-3 mb-2">
                  <p className="font-mono text-sm text-accent">{method.contact}</p>
                </div>
                <p className="text-xs text-muted-foreground">{method.response}</p>
              </Card>
            );
          })}
        </div>

        {/* Contact Form */}
        <Card className="p-8 bg-card border-border mb-12">
          <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Subject</label>
              <Input
                type="text"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                placeholder="Tell us more about your inquiry..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                rows={6}
              />
            </div>

            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3">
              Send Message
            </Button>
          </form>
        </Card>

        {/* FAQ Section */}
        <Card className="p-8 bg-card border-border">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2 text-lg">What's your average response time?</h3>
              <p className="text-muted-foreground">
                For standard email support, we typically respond within 24 hours. Premium support customers receive responses within 1 hour during business hours.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="font-semibold mb-2 text-lg">Do you offer phone support?</h3>
              <p className="text-muted-foreground">
                Phone support is available for enterprise and premium customers. Please contact us at support@clitech.dev to discuss your needs.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="font-semibold mb-2 text-lg">Can I request a feature?</h3>
              <p className="text-muted-foreground">
                Absolutely! We love hearing feature requests from our community. Please submit your ideas through our contact form or on the community forum.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="font-semibold mb-2 text-lg">How do I report a bug?</h3>
              <p className="text-muted-foreground">
                If you've found a bug, please report it by emailing support@clitech.dev with details about the issue, your environment, and steps to reproduce.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="font-semibold mb-2 text-lg">Where can I find documentation?</h3>
              <p className="text-muted-foreground">
                Complete documentation is available at <Link href="/docs" className="text-accent hover:underline">clitech.dev/docs</Link>. Check out the installation guide and command reference.
              </p>
            </div>
          </div>
        </Card>

        {/* Additional Resources */}
        <section className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">Looking for technical documentation?</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/docs">View Documentation</Link>
            </Button>
            <Button asChild variant="outline" className="border-border text-foreground hover:bg-background bg-transparent">
              <Link href="/errors">Error Lookup</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
