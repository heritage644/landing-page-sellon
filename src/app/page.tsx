import FaqSection, { faqSchema } from "@/components/home/faq-section";
import BusinessAnalyticsSection from "@/components/home/business-analytics-section";
import FinalCtaSection from "@/components/home/final-cta-section";
import GlobalReachSection from "@/components/home/global-reach-section";
import HeroEntranceMotion from "@/components/home/hero-entrance-motion";
import HeroSection from "@/components/home/hero-section";
import HowItWorksSection from "@/components/home/how-it-works-section";
import { AudienceSpotlight, EnterpriseSpotlight } from "@/components/home/audience-spotlight";
import { BusinessManagementSection, WhoShouldUseSection } from "@/components/home/business-summary-sections";
import PlatformRolesSection from "@/components/home/platform-roles-section";
import ProblemSection from "@/components/home/problem-section";
import ShowcaseSection from "@/components/home/showcase-section";
import TrustStrip from "@/components/home/trust-strip";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader currentPath="/" />
      <HeroEntranceMotion />

      <main id="main">
        <HeroSection />
        <ProblemSection />
        <PlatformRolesSection />
        <TrustStrip />
        <HowItWorksSection />
        <GlobalReachSection />
        <AudienceSpotlight audience="retailer" id="for-retailers" />
        <AudienceSpotlight audience="supplier" id="for-suppliers" />
        <AudienceSpotlight audience="entrepreneur" id="for-entrepreneurs" />
        <BusinessAnalyticsSection />
        <ShowcaseSection />
        <EnterpriseSpotlight />
        <BusinessManagementSection />
        <WhoShouldUseSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <SiteFooter currentPath="/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
