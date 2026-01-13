import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const eventsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    // Required fields
    title: z.string().min(1, 'Event title is required'),
    date: z.coerce.date(),
    description: z.string().min(10, 'Description must be at least 10 characters'),

    // Optional fields
    endDate: z.coerce.date().optional(),
    time: z.string().optional(),
    endTime: z.string().optional(),
    location: z.string().default('NBCC Main Building'),

    // Image
    image: z.string().optional(),
    imageAlt: z.string().optional().default(''),

    // Categorization
    category: z.enum([
      'worship',
      'fellowship',
      'outreach',
      'youth',
      'children',
      'education',
      'special',
    ]).default('fellowship'),

    // Display options
    featured: z.boolean().default(false),
    published: z.boolean().default(true),

    // SEO
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),

    // Registration
    registrationRequired: z.boolean().default(false),
    registrationUrl: z.string().url().optional(),

    // Contact
    contactName: z.string().optional(),
    contactEmail: z.string().email().optional(),
  }),
});

export const collections = {
  events: eventsCollection,
};
