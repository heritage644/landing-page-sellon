import FaqSection, { faqSchema } from "@/components/home/faq-section";
import BusinessAnalyticsSection from "@/components/home/business-analytics-section";
import FeaturesSection from "@/components/home/features-section";
import FinalCtaSection from "@/components/home/final-cta-section";
import GlobalReachSection from "@/components/home/global-reach-section";
import HeroEntranceMotion from "@/components/home/hero-entrance-motion";
import HeroSection from "@/components/home/hero-section";
import PricingSection from "@/components/home/pricing-section";
import ShowcaseSection from "@/components/home/showcase-section";
import StepsSection from "@/components/home/steps-section";
import TaglineSection from "@/components/home/tagline-section";
import TrustStrip from "@/components/home/trust-strip";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader currentPage="home" />
      <HeroEntranceMotion />

      <main id="main">
        <HeroSection />
        <TrustStrip />
        <GlobalReachSection />
        <BusinessAnalyticsSection />
        <FeaturesSection />
        <TaglineSection />
        <StepsSection />
        <ShowcaseSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <SiteFooter currentPage="home" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
