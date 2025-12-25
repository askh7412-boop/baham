import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export enum SectionId {
  HERO = 'hero',
  FEATURES = 'features',
  AI_DEMO = 'ai-demo',
  PRICING = 'pricing',
  TESTIMONIALS = 'testimonials',
  FAQ = 'faq'
}