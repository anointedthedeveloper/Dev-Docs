# CLITech - Developer Documentation Site

## Project Overview

A comprehensive, AdSense-ready developer documentation website for CLITech CLI tools with a modern dark theme, professional design, and complete compliance infrastructure.

## Site Structure

### Main Pages
- **Homepage** (`/`) - Hero section with search, feature grid, and quick access links
- **Documentation Hub** (`/docs`) - Central documentation hub with categorized guides
- **Installation Guide** (`/docs/installation`) - Step-by-step installation instructions
- **Quick Start** (`/docs/quickstart`) - 5-minute getting started guide
- **Command Reference** (`/docs/commands`) - Complete list of all CLI commands
- **Best Practices** (`/docs/best-practices`) - Development best practices and patterns
- **Error Lookup** (`/errors`) - Searchable error code database with solutions
- **About** (`/about`) - Company mission, values, team, and statistics
- **Contact** (`/contact`) - Contact form, support channels, and FAQ
- **Privacy Policy** (`/privacy`) - Complete privacy policy for compliance

### SEO & Compliance Files
- **sitemap.ts** - XML sitemap for search engines
- **robots.txt** - Search engine crawler directives
- **ads.txt** - AdSense publisher information (requires publisher ID)

## Design System

### Color Palette
- **Background**: Dark navy (`oklch(0.1 0 0)`)
- **Foreground**: Light gray (`oklch(0.95 0 0)`)
- **Primary/Accent**: Cyan/Teal (`oklch(0.5-0.6 0.15-0.18 195-200)`)
- **Cards**: Slightly lighter dark (`oklch(0.15 0 0)`)
- **Borders**: Subtle gray (`oklch(0.25 0 0)`)

### Typography
- **Font Family**: Geist (sans) & Geist Mono
- **Heading Scale**: 5xl, 4xl, 3xl, 2xl, xl
- **Line Height**: Relaxed (1.5-1.6)

### Components Used
- Shadcn/ui components (Button, Card, Input)
- Lucide icons
- Tailwind CSS utilities
- Semantic HTML

## Features

### Interactive Elements
1. **Search Functionality**
   - Homepage search bar for documentation
   - Error lookup with real-time filtering
   - 8 pre-loaded error codes with solutions

2. **Navigation**
   - Sticky top navigation on all pages
   - Breadcrumb navigation on detail pages
   - Comprehensive footer with links

3. **Error Database**
   - 8 common error codes (E001-E008)
   - Searchable by code, title, or description
   - Causes and solutions for each error

4. **Content Organization**
   - Command reference with 6 commands
   - Installation methods (npm, yarn, Homebrew, source)
   - Best practices guide with 8 sections

## AdSense Optimization

### Compliance Requirements Met
✓ Privacy Policy page with detailed data collection disclosure
✓ About page with company information and team details
✓ Contact page with multiple support channels
✓ ads.txt file for publisher verification
✓ robots.txt for SEO crawling control
✓ Sitemap for content discovery
✓ Meta tags for social sharing
✓ Clear site structure and navigation

### Content & SEO
- SEO-optimized metadata in layout
- Descriptive page titles and descriptions
- Semantic HTML structure
- Proper heading hierarchy
- Mobile-responsive design

## Setup Instructions

### AdSense Setup
1. Replace `pub-xxxxxxxxxxxxxxxx` in `/public/ads.txt` with your actual Google AdSense publisher ID
2. Update `https://clitech.dev` in `/app/sitemap.ts` with your actual domain
3. Verify domain ownership in Google Search Console
4. Add AdSense code to your layout for ad placement

### Deployment
1. Deploy to Vercel, Next.js hosting, or any Node.js host
2. Ensure environment variables are set correctly
3. Test all pages and links
4. Submit sitemap to Google Search Console
5. Monitor Google AdSense dashboard

## File Structure

```
/app
├── page.tsx (Homepage)
├── layout.tsx (Root layout with metadata)
├── globals.css (Design tokens and theme)
├── sitemap.ts (XML sitemap)
├── docs/
│   ├── page.tsx (Docs hub)
│   ├── installation/page.tsx
│   ├── quickstart/page.tsx
│   ├── commands/page.tsx
│   └── best-practices/page.tsx
├── errors/
│   └── page.tsx (Error lookup)
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
└── privacy/
    └── page.tsx

/public
├── robots.txt
└── ads.txt
```

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## Next Steps

1. Update all placeholder content with your actual CLITech documentation
2. Add your Google AdSense publisher ID to ads.txt
3. Customize the color scheme in globals.css if desired
4. Update contact information on the About and Contact pages
5. Add your domain to the metadata and sitemap
6. Deploy to production
7. Submit to Google Search Console

## Performance Notes

- All pages are optimized for performance
- Uses semantic CSS and minimal JavaScript
- Mobile-first responsive design
- Lighthouse-ready structure
- Fast Core Web Vitals

---

**Project Created**: January 2026
**Framework**: Next.js 16 with React
**Styling**: Tailwind CSS v4
