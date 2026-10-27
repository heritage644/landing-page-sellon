import Image from "next/image";

type SiteLogoProps = {
  className?: string;
};

export default function SiteLogo({ className = "" }: SiteLogoProps) {
  return (
    <>
      <Image
        src="/logo.svg"
        alt=""
        aria-hidden="true"
        width={160}
        height={36}
        className={`site-logo site-logo-light ${className}`.trim()}
      />
      <Image
        src="/logo-dark.svg"
        alt=""
        aria-hidden="true"
        width={160}
        height={36}
        className={`site-logo site-logo-dark ${className}`.trim()}
      />
    </>
  );
}
