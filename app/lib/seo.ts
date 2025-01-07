// lib/seo.ts (Essential)

// Improves product visibility in search engines
// Helps with social media sharing
// Critical for product discovery
// Impacts conversion rates

interface SeoProps {
    title: string
    description: string
    canonical?: string
    openGraph?: {
      title?: string
      description?: string
      image?: string
    }
  }
  
  export function generateSeoTags({
    title,
    description,
    canonical,
    openGraph = {},
  }: SeoProps) {
    return {
      title: title,
      description: description,
      canonical: canonical,
      openGraph: {
        title: openGraph.title || title,
        description: openGraph.description || description,
        type: 'website',
        ...openGraph,
      },
    }
  }