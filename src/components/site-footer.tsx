import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/ssr";
import SiteLogo from "@/components/site-logo";

type CurrentPage = "home" | "privacy" | "terms" | "not-found";

type SiteFooterProps = {
  currentPage?: CurrentPage;
};

export default function SiteFooter({ currentPage = "home" }: SiteFooterProps) {
  const homePrefix = currentPage === "home" ? "" : "/";

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-column">
          <a
            className="brand-lockup footer-brand"
            href={homePrefix || "#top"}
            aria-label="Sellonit home"
            aria-current={currentPage === "home" ? "page" : undefined}
          >
            <SiteLogo className="brand-logo footer-brand-logo" />
          </a>
          <p>Your products, your storefront, one clear place to grow.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <p className="footer-nav-title">Explore</p>
          <a href={`${homePrefix}#features`}>Features</a>
          <a href={`${homePrefix}#how-it-works`}>How it works</a>
          <a href={`${homePrefix}#pricing`}>Pricing</a>
        </nav>

        <nav className="footer-nav" aria-label="Legal information">
          <p className="footer-nav-title">Good to know</p>
          <a href="/privacy" aria-current={currentPage === "privacy" ? "page" : undefined}>
            Privacy
          </a>
          <a href="/terms" aria-current={currentPage === "terms" ? "page" : undefined}>
            Terms
          </a>
          <a href={`${homePrefix}#faq`}>Frequently asked questions</a>
        </nav>

        <div className="footer-social">
          <p className="footer-nav-title">Find us soon</p>
          <div className="social-icons" aria-label="Social channels coming soon" role="group">
            <span title="Instagram profile coming soon"><InstagramLogo size={20} weight="regular" aria-hidden="true" /></span>
            <span title="Facebook page coming soon"><FacebookLogo size={20} weight="regular" aria-hidden="true" /></span>
            <span title="LinkedIn page coming soon"><LinkedinLogo size={20} weight="regular" aria-hidden="true" /></span>
          </div>
          <p className="social-note">Our social pages are coming soon.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Sellonit. Made for the people who make things.</p>
        <a href={`${homePrefix}#top`} className="back-to-top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
