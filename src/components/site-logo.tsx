import Image from "next/image";

type SiteLogoProps = {
  className?: string;
};

export default function SiteLogo({ className }: SiteLogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt=""
      width={160}
      height={36}
      className={className}
    />
  );
}
