"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Coffee, Mail } from "lucide-react";

export default function CoffeeMenuPage() {
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
            { name: "Home", id: "/" },
            { name: "About", id: "about" },
            { name: "Menu", id: "features" },
            { name: "Coffee Menu", id: "/coffee-menu" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Visit Us",            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Our Coffee Collection"
          description="Explore our curated selection of premium espresso drinks and specialty coffee beverages. Each drink is crafted with precision by our master baristas using the finest beans from around the world."
          background={{ variant: "glowing-orb" }}
          tag="Coffee Menu"
          tagIcon={Coffee}
          tagAnimation="slide-up"
          buttons={[
            { text: "Reserve Your Drink", href: "contact" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/top-view-coffee-accessories-table_23-2148336811.jpg?id=5914163&_wi=2"
          imageAlt="Specialty coffee drinks"
          mediaAnimation="blur-reveal"
          imagePosition="right"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          features={[
            {
              id: "01",              title: "Espresso",              description: "Rich, concentrated shots of pure coffee intensity. Our signature single-shot and double-shot options highlight the bold flavors of our single-origin roasts. Perfect for espresso purists who appreciate the craft.",              imageSrc: "http://img.b2bpic.net/free-photo/cup-coffee-with-tasty-cookies_23-2148336785.jpg?id=5914136&_wi=2",              imageAlt: "Espresso shot"
            },
            {
              id: "02",              title: "Americano",              description: "A smooth, balanced cup made with espresso diluted with hot water. Creates a full-bodied coffee experience with the intensity of espresso and the smoothness of a classic drip coffee. Ideal for those who love simplicity with depth.",              imageSrc: "http://img.b2bpic.net/free-photo/two-espresso-cups-coffee-engine_140725-5566.jpg?id=7219621&_wi=2",              imageAlt: "Americano coffee"
            },
            {
              id: "03",              title: "Pistachio Latte",              description: "A luxurious blend of creamy steamed milk, espresso, and rich pistachio flavor. Our pistachio selection brings a subtle nuttiness and natural sweetness that perfectly complements our medium roasts. A contemporary favorite.",              imageSrc: "http://img.b2bpic.net/free-photo/coffee-mug-white-background_23-2148336788.jpg?id=5914148",              imageAlt: "Pistachio latte"
            },
            {
              id: "04",              title: "Chaga Latte",              description: "A wellness-focused beverage combining creamy milk, espresso, and adaptogenic chaga mushroom. Earthy and grounding with potential immune-boosting properties. Perfect for health-conscious coffee enthusiasts seeking functional benefits.",              imageSrc: "http://img.b2bpic.net/free-photo/shot-woman-hands-hold-cup-hot-coffee-with-heart-design-made-foam_343596-4363.jpg?id=13437475&_wi=2",              imageAlt: "Chaga latte"
            },
            {
              id: "05",              title: "Matcha Coffee",              description: "A unique fusion combining vibrant matcha green tea with smooth espresso and steamed milk. Creates a beautiful layered drink with earthy matcha notes balanced by coffee's bold character. A modern twist on traditional flavors.",              imageSrc: "http://img.b2bpic.net/free-photo/breakfast-cafe-vertical-shot-steam-rises-cup-espresso-coffee-glass-water-cookies-table-closeup-sunlight-selective-focus-empty-space-idea-advertising-banner_166373-2884.jpg?_wi=2",              imageAlt: "Matcha coffee"
            },
            {
              id: "06",              title: "Signature Seasonal Blend",              description: "Our rotating seasonal specialty featuring limited-edition combinations crafted by our head barista. Featuring unique flavor profiles that celebrate the best beans available each season. Ask our team for today's special.",              imageSrc: "http://img.b2bpic.net/free-photo/male-barista-brewing-coffee-alternative-method-pour_176420-14715.jpg?_wi=2",              imageAlt: "Seasonal coffee specialty"
            }
          ]}
          title="Our Premium Coffee Selection"
          description="From classic espresso drinks to innovative specialty beverages, discover the perfect coffee experience tailored to your taste preferences and wellness goals."
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Place Your Order"
          description="Ready to experience our coffee menu? Contact us to place an order, make a reservation, or ask about our custom brewing methods and coffee education sessions."
          tagIcon={Mail}
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/cozy-workspace-with-coffee-hearts-keyboard_191095-99789.jpg?_wi=2"
          imageAlt="Coffee shop atmosphere"
          mediaAnimation="opacity"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Get in Touch"
          termsText="We'll reach out within 24 hours to confirm your order or answer your questions about our coffee selection."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Menu",              items: [
                { label: "Espresso Drinks", href: "features" },
                { label: "Coffee Menu", href: "/coffee-menu" },
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
