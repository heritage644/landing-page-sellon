import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader currentPath="/not-found" />
      <main className="not-found-main" id="main">
        <div className="not-found-content">
          <span className="not-found-code">404</span>
          <h1>This page is not in your store.</h1>
          <p>The link may have changed, or this page may no longer be available.</p>
          <Link className="button button-primary" href="/">
            <span>Back to Sellonit</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </main>
      <SiteFooter currentPath="/not-found" />
    </>
  );
}
