"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Award, CheckCircle, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeLargeTitles"
        background="grid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Star Roofing"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars",
      }}
      title="Protecting Your Home with Quality Craftsmanship"
      description="Star Roofing & Siding Co offers top-tier residential roofing and siding solutions designed for durability, energy efficiency, and aesthetic appeal. Experience service built on trust."
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-sitting-roof_23-2149343640.jpg",
          imageAlt: "Professional roof installation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/aerial-shot-rooftops-city-buildings-with-red-shingles_181624-12846.jpg",
          imageAlt: "Exterior siding repair",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-roof-house-made-wooden-tiles_169016-25417.jpg",
          imageAlt: "Residential roof replacement",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-helmet-working-roof-full-shot_23-2149343662.jpg",
          imageAlt: "Man with helmet working on roof full shot",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-men-working-together_23-2149343659.jpg",
          imageAlt: "Medium shot men working together",
        },
      ]}
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Decades of Excellence"
      description="At Star Roofing & Siding Co, we believe your home deserves the best protection available. Our certified professionals use premium materials to ensure every project stands the test of time and weather."
      metrics={[
        {
          value: "1500+",
          title: "Projects Completed",
        },
        {
          value: "25+",
          title: "Years Experience",
        },
        {
          value: "100%",
          title: "Customer Satisfaction",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-construction-worker-standing-rooftops-high-silos-storage-tanks_342744-442.jpg"
      imageAlt="Professional roofer contractor smiling"
      mediaAnimation="blur-reveal"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          tag: "Roofing",
          title: "Roof Installation",
          subtitle: "Durable and aesthetic",
          description: "High-quality asphalt, metal, and tile roofing solutions.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-smiley-man-working-roof_23-2149343672.jpg",
          imageAlt: "professional roofing installation home",
        },
        {
          tag: "Siding",
          title: "Siding Installation",
          subtitle: "Modern energy efficiency",
          description: "Premium vinyl, fiber cement, and wood siding options.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-sitting-roof_23-2149343640.jpg",
          imageAlt: "professional roofing installation home",
        },
        {
          tag: "Repair",
          title: "Storm Repair",
          subtitle: "Rapid disaster response",
          description: "Fast-acting repair services after severe weather incidents.",
          imageSrc: "http://img.b2bpic.net/free-photo/aerial-shot-rooftops-city-buildings-with-red-shingles_181624-12846.jpg",
          imageAlt: "professional roofing installation home",
        },
        {
          tag: "Maintenance",
          title: "Gutter Services",
          subtitle: "Prevents water damage",
          description: "Cleaning, repair, and seamless gutter system installations.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-roof-house-made-wooden-tiles_169016-25417.jpg",
          imageAlt: "professional roofing installation home",
        },
        {
          tag: "Inspection",
          title: "Roof Certification",
          subtitle: "Peace of mind",
          description: "Professional condition reports for property sales or insurance.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-construction-worker-standing-rooftops-high-silos-storage-tanks_342744-442.jpg",
          imageAlt: "professional roofing installation home",
        },
      ]}
      title="Comprehensive Exterior Services"
      description="We specialize in complete exterior restoration and protection."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "Homeowner",
          testimonial: "Excellent service and craftsmanship. Our roof looks brand new!",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-practicing-tai-chi-outside_23-2149893705.jpg",
        },
        {
          id: "2",
          name: "Michael B.",
          role: "Homeowner",
          testimonial: "The siding installation was seamless and professional.",
          imageSrc: "http://img.b2bpic.net/free-photo/greetings-joyful-man-woman-standing-with-back-camera-shaking-hands_259150-58289.jpg",
        },
        {
          id: "3",
          name: "Emily R.",
          role: "Homeowner",
          testimonial: "Responsive, friendly, and very transparent pricing.",
          imageSrc: "http://img.b2bpic.net/free-photo/successful-arab-man-wear-striped-shirt-sunglasses-pose-outdoor_627829-4295.jpg",
        },
        {
          id: "4",
          name: "David W.",
          role: "Homeowner",
          testimonial: "They handled our storm damage repair quickly and efficiently.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-walking-roof_1321-1041.jpg",
        },
        {
          id: "5",
          name: "Jennifer K.",
          role: "Homeowner",
          testimonial: "Highly recommended for any exterior work needed.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-happy-woman-with-ice-cream_23-2149735870.jpg",
        },
      ]}
      title="Trusted by Homeowners"
      description="See why our neighbors choose us for their home projects."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "How long does a roof last?",
          content: "Most asphalt roofs last between 20-30 years depending on the material and maintenance.",
        },
        {
          id: "f2",
          title: "Do you offer financing?",
          content: "Yes, we offer flexible financing plans for all major roofing and siding projects.",
        },
        {
          id: "f3",
          title: "Is work covered by warranty?",
          content: "All our installations come with a comprehensive labor and material warranty.",
        },
        {
          id: "f4",
          title: "Can you handle insurance claims?",
          content: "Absolutely. We work directly with insurance adjusters to help you get the coverage you deserve after storm damage.",
        },
        {
          id: "f5",
          title: "Do I need to be home for the installation?",
          content: "For exterior work, it is not required for you to be home, provided we have access to the areas required for project completion.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Answers to common concerns about roofing and siding services."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "98%",
          title: "On-Time Completion",
          description: "Consistently finishing projects by deadlines.",
          icon: CheckCircle,
        },
        {
          id: "m2",
          value: "5/5",
          title: "Rating",
          description: "High praise from our valued customers.",
          icon: Star,
        },
        {
          id: "m3",
          value: "120+",
          title: "Five-Star Reviews",
          description: "Social proof of our quality service.",
          icon: Award,
        },
      ]}
      title="Built on Reliable Stats"
      description="Our work speaks for itself through our commitment to service."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Ready to get started?"
      title="Request a Free Estimate"
      description="Provide your details, and our team will contact you to schedule a consultation."
      imageSrc="http://img.b2bpic.net/free-photo/top-view-tools-wooden-surface-father-s-day_23-2147625636.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "FAQs",
              href: "#faq",
            },
            {
              label: "Reviews",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Get a Quote",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="Star Roofing"
      copyrightText="© 2025 Star Roofing & Siding Co."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
