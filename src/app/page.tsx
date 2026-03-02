"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Coffee, Mail } from "lucide-react";

export default function CaffePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="largeSizeMediumTitles"
      background="noiseDiagonalGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="glass"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Sana's Caffe"
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "features" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Visit Us",            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Craft Your Perfect Cup"
          description="Welcome to Sana's Caffe, where artisan coffee meets downtown elegance. Experience carefully sourced beans, expertly prepared by our passionate baristas in the heart of San Francisco."
          background={{ variant: "glowing-orb" }}
          tag="Premium Coffee"
          tagIcon={Coffee}
          tagAnimation="slide-up"
          buttons={[
            { text: "Explore Our Menu", href: "features" },
            { text: "Visit Us Today", href: "contact" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/breakfast-cafe-vertical-shot-steam-rises-cup-espresso-coffee-glass-water-cookies-table-closeup-sunlight-selective-focus-empty-space-idea-advertising-banner_166373-2884.jpg?_wi=1"
          imageAlt="Artisan espresso pour at Sana's Caffe"
          mediaAnimation="blur-reveal"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Crafted with passion in downtown SF since 2019" }
          ]}
          useInvertedBackground={false}
          buttons={[
            { text: "Our Story", href: "#" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          features={[
            {
              id: "01",              title: "Single-Origin & Micro-Lot Roasts",              description: "Direct sourced from premium farms with small-batch roasting daily. Rotating seasonal selections with full traceability and sustainability.",              imageSrc: "http://img.b2bpic.net/free-photo/specialty-coffee-beans-direct-trade-roasting_500-400.jpg",              imageAlt: "Premium specialty coffee beans"
            },
            {
              id: "02",              title: "Urban Sanctuary for Work & Connection",              description: "Industrial-modern design aesthetic with reliable wifi and charging stations. Quiet zones and collaborative spaces with local art and community events.",              imageSrc: "http://img.b2bpic.net/free-photo/modern-coffee-shop-interior-design_500-400.jpg",              imageAlt: "Modern coffee shop interior"
            },
            {
              id: "03",              title: "Master Baristas & Expert Service",              description: "Certified specialty coffee professionals offering custom brewing methods for each bean. Personalized recommendations and coffee education tasting events.",              imageSrc: "http://img.b2bpic.net/free-photo/barista-brewing-coffee-expertise_500-400.jpg",              imageAlt: "Expert barista crafting coffee"
            },
            {
              id: "04",              title: "Inspiring Customers Through Coffee",              description: "Creating moments of joy and inspiration while building community connections. Celebrating the art of coffee culture and empowering customers to explore their passion.",              imageSrc: "http://img.b2bpic.net/free-photo/coffee-shop-community-inspiration_500-400.jpg",              imageAlt: "Coffee community gathering"
            }
          ]}
          title="Why Coffee Lovers Choose Sana's"
          description="Discover what sets our craft coffee experience apart—inspired by our vision to elevate everyday moments through exceptional coffee and connection"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Loved by Coffee Enthusiasts"
          description="Hear from our community of passionate coffee lovers and downtown professionals"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              name: "Maya Chen, Tech Entrepreneur",              date: "Date: 15 November 2024",              title: "The Best Coffee in Downtown SF",              quote: "Sana's has become my daily ritual. The baristas remember my order, the atmosphere is perfect for working, and most importantly, the coffee is exceptional. I've tried beans from around the world, and their selection is unmatched.",              tag: "Regular Customer",              avatarSrc: "http://img.b2bpic.net/free-photo/casual-smile-street-style-background-spring_1139-777.jpg",              imageSrc: "http://img.b2bpic.net/free-photo/empty-wood-chair-restaurant_1339-5949.jpg"
            },
            {
              id: "2",              name: "James Rodriguez, Architect",              date: "Date: 22 November 2024",              title: "A Hidden Gem in the Heart of the City",              quote: "The space itself is a work of art. The industrial design, the warm lighting, the way they've sourced every detail—it's clear they care deeply. Combined with impeccable coffee, it's the perfect third place.",              tag: "Design Professional",              avatarSrc: "http://img.b2bpic.net/free-photo/smiling-young-businessman-suit-looking-camera-meeting_1163-4654.jpg",              imageSrc: "http://img.b2bpic.net/free-photo/woman-works-cafe-evening_1153-3549.jpg"
            },
            {
              id: "3",              name: "Sarah Williams, Freelance Writer",              date: "Date: 28 November 2024",              title: "Where Productivity Meets Pleasure",              quote: "I spend hours here working on projects, and I never feel rushed. The wifi is reliable, the seating is comfortable, and the coffee keeps me inspired. It's become essential to my creative process.",              tag: "Remote Worker",              avatarSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg",              imageSrc: "http://img.b2bpic.net/free-photo/breakfast-cafe-vertical-shot-steam-rises-cup-espresso-coffee-glass-water-cookies-table-closeup-sunlight-selective-focus-empty-space-idea-advertising-banner_166373-2884.jpg?_wi=2"
            },
            {
              id: "4",              name: "David Kim, Coffee Connoisseur",              date: "Date: 5 December 2024",              title: "Serious Coffee for Serious Enthusiasts",              quote: "As someone who appreciates third-wave coffee, I'm impressed by their sourcing transparency and roasting consistency. The pour-over program is fantastic, and the baristas truly understand coffee craft.",              tag: "Coffee Aficionado",              avatarSrc: "http://img.b2bpic.net/free-photo/alone-specialist-handsome-daydreaming-collar_1262-870.jpg",              imageSrc: "http://img.b2bpic.net/free-photo/male-barista-brewing-coffee-alternative-method-pour_176420-14715.jpg"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Join Our Coffee Community"
          description="Subscribe to our newsletter for new single-origin releases, exclusive brewing tips, and special events happening at Sana's Caffe."
          tagIcon={Mail}
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/cozy-workspace-with-coffee-hearts-keyboard_191095-99789.jpg"
          imageAlt="Premium coffee at Sana's Caffe"
          mediaAnimation="opacity"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your inbox. Unsubscribe anytime. Weekly brewing tips and new bean announcements only."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Menu",              items: [
                { label: "Espresso Drinks", href: "features" },
                { label: "Single Origins", href: "features" },
                { label: "Pastries & Food", href: "features" },
                { label: "Seasonal Specials", href: "features" }
              ]
            },
            {
              title: "Visit",              items: [
                { label: "Location", href: "contact" },
                { label: "Hours", href: "contact" },
                { label: "Contact Us", href: "contact" },
                { label: "Private Events", href: "#" }
              ]
            },
            {
              title: "About",              items: [
                { label: "Our Story", href: "about" },
                { label: "Sourcing", href: "#" },
                { label: "Sustainability", href: "#" },
                { label: "Careers", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2024 Sana's Caffe | Downtown San Francisco | All rights reserved"
        />
      </div>
    </ThemeProvider>
  );
}
