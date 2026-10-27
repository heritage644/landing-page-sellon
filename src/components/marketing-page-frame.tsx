import type { ReactNode } from "react";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

type MarketingPageFrameProps = {
  children: ReactNode;
  currentPath?: string;
};

export default function MarketingPageFrame({ children, currentPath = "/" }: MarketingPageFrameProps) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader currentPath={currentPath} />
      <main id="main">{children}</main>
      <SiteFooter currentPath={currentPath} />
    </>
  );
}
