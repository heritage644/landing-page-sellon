import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import SiteLogo from "@/components/site-logo";

type SiteFooterProps = {
  currentPath?: string;
};

const platformLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Features", href: "/features" },
  { label: "Storefronts", href: "/features#storefronts" },
  { label: "Analytics", href: "/analytics" },
  { label: "Plans", href: "/plans" },
];

const businessLinks = [
  { label: "Retailers", href: "/retailers" },
  { label: "Suppliers", href: "/suppliers" },
  { label: "Entrepreneurs", href: "/entrepreneurs" },
  { label: "Enterprise", href: "/enterprise" },
];

export default function SiteFooter({ currentPath = "/" }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-column">
          <Link className="brand-lockup footer-brand" href="/" aria-label="Sellonit home" aria-current={currentPath === "/" ? "page" : undefined}>
            <SiteLogo className="brand-logo footer-brand-logo" />
          </Link>
          <p>Sellonit is building a commerce platform that connects suppliers, retailers, and businesses through product catalogues, online storefronts, and business-management tools.</p>
          <span className="footer-coming-soon"><i /> Sellonit is coming.</span>
        </div>

        <nav className="footer-nav" aria-label="Platform links">
          <p className="footer-nav-title">Platform</p>
          {platformLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
        </nav>

        <nav className="footer-nav" aria-label="Business links">
          <p className="footer-nav-title">For Businesses</p>
          {businessLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
        </nav>

        <nav className="footer-nav" aria-label="Company and legal links">
          <p className="footer-nav-title">Company</p>
          <Link href="/about">About Sellonit</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/#faq">FAQs</Link>
          <Link href="/privacy" aria-current={currentPath === "/privacy" ? "page" : undefined}>Privacy Policy</Link>
          <Link href="/terms" aria-current={currentPath === "/terms" ? "page" : undefined}>Terms of Service</Link>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Sellonit. Built for the people who make commerce happen.</p>
        <Link href="/#top" className="back-to-top">Back to top <span aria-hidden="true">↑</span></Link>
        <Link href="/about#journey" className="footer-journey-link">Follow Our Journey <ArrowUpRight size={14} aria-hidden="true" /></Link>
      </div>
    </footer>
  );
}
