import type { SVGProps } from "react";

export type ProductKind = "bag" | "skincare" | "pottery" | "shirt" | "parcel" | "phone";

type ProductVectorProps = SVGProps<SVGSVGElement> & {
  kind: ProductKind;
};

export function ProductVector({ kind, ...props }: ProductVectorProps) {
  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      role="img"
      aria-label={`${kind} product illustration`}
      focusable="false"
      {...props}
    >
      <rect x="5" y="5" width="170" height="170" rx="34" fill="#EEF5FC" />
      <circle cx="138" cy="39" r="16" fill="#FFE4C2" />
      <ellipse cx="90" cy="145" rx="47" ry="9" fill="#172A45" fillOpacity=".09" />
      {kind === "bag" ? <BagArtwork /> : null}
      {kind === "skincare" ? <SkincareArtwork /> : null}
      {kind === "pottery" ? <PotteryArtwork /> : null}
      {kind === "shirt" ? <ShirtArtwork /> : null}
      {kind === "parcel" ? <ParcelArtwork /> : null}
      {kind === "phone" ? <PhoneArtwork /> : null}
    </svg>
  );
}

function BagArtwork() {
  return (
    <>
      <path d="M61 70V57c0-16 13-29 29-29s29 13 29 29v13" stroke="#172A45" strokeWidth="7" strokeLinecap="round" />
      <path d="M48 70c0-5 4-9 9-9h66c5 0 9 4 9 9l7 63c1 7-4 13-11 13H52c-7 0-12-6-11-13l7-63Z" fill="#FF8B00" />
      <path d="m57 79 4 48m61-48-4 48" stroke="#D56F00" strokeWidth="2" strokeLinecap="round" />
      <path d="M78 94h24v21H78z" fill="#F5C581" />
      <path d="M84 94v-4a6 6 0 0 1 12 0v4" stroke="#172A45" strokeWidth="3" strokeLinecap="round" />
      <path d="M53 70h74" stroke="#F5B357" strokeWidth="3" />
    </>
  );
}

function SkincareArtwork() {
  return (
    <>
      <path d="M70 47h40v16H70z" rx="4" fill="#172A45" />
      <path d="M78 36h24v11H78z" rx="3" fill="#FF8B00" />
      <path d="M63 63h54l8 65c1 7-4 13-11 13H66c-7 0-12-6-11-13l8-65Z" fill="#F5C581" />
      <path d="M67 72h46l6 51H61l6-51Z" fill="#FFF8EE" />
      <path d="M77 91h27" stroke="#172A45" strokeWidth="4" strokeLinecap="round" />
      <path d="M82 101h17" stroke="#FF8B00" strokeWidth="5" strokeLinecap="round" />
      <path d="M81 112h19" stroke="#A9B8C8" strokeWidth="3" strokeLinecap="round" />
      <path d="M72 63h36" stroke="#E0AA56" strokeWidth="2" />
    </>
  );
}

function PotteryArtwork() {
  return (
    <>
      <path d="M72 46h36l-5 14c16 15 20 34 14 54-5 16-18 25-27 25s-22-9-27-25c-6-20-2-39 14-54l-5-14Z" fill="#F2B870" />
      <path d="M72 46h36" stroke="#172A45" strokeWidth="6" strokeLinecap="round" />
      <path d="M68 83c14 8 30 8 44 0M64 101c17 9 35 9 52 0" stroke="#D47B3F" strokeWidth="4" strokeLinecap="round" />
      <path d="M87 68c4 4 7 9 8 15" stroke="#FFF0D8" strokeWidth="3" strokeLinecap="round" />
      <path d="M90 48V24m0 24c-17-1-25-10-24-23 13 0 22 7 24 23Zm0-5c1-17 10-26 24-26 1 13-7 24-24 26Z" fill="#517B63" />
    </>
  );
}

function ShirtArtwork() {
  return (
    <>
      <path d="m64 48 19-12a16 16 0 0 0 14 0l19 12 19 17-16 18-11-9v58H62V74l-11 9-16-18 19-17Z" fill="#6D93C2" />
      <path d="m83 36 7 11 7-11" stroke="#172A45" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M62 74v58m46-58v58" stroke="#5279A6" strokeWidth="2" />
      <path d="M75 94h30" stroke="#A9C2E1" strokeWidth="3" strokeLinecap="round" />
      <circle cx="90" cy="110" r="3" fill="#F3D59F" />
    </>
  );
}

function ParcelArtwork() {
  return (
    <>
      <path d="m49 69 41-22 41 22-41 22-41-22Z" fill="#E9B56E" />
      <path d="M49 69v48l41 24V91L49 69Z" fill="#D89448" />
      <path d="M131 69v48l-41 24V91l41-22Z" fill="#F3C783" />
      <path d="m90 91 41-22m-41 22L49 69" stroke="#BB7535" strokeWidth="2" />
      <path d="M82 54 123 76m-27-20L56 78" stroke="#FFF0D8" strokeWidth="8" />
      <path d="M82 105h16" stroke="#172A45" strokeWidth="3" strokeLinecap="round" />
    </>
  );
}

function PhoneArtwork() {
  return (
    <>
      <rect x="56" y="20" width="68" height="140" rx="17" fill="#172A45" />
      <rect x="62" y="28" width="56" height="124" rx="11" fill="#EAF2FA" />
      <rect x="76" y="35" width="28" height="5" rx="2.5" fill="#9CAEC1" />
      <rect x="69" y="51" width="42" height="52" rx="9" fill="#FFF0DC" />
      <circle cx="90" cy="75" r="12" fill="#FF8B00" />
      <path d="M86 75h8m-4-4v8" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="70" y="111" width="40" height="6" rx="3" fill="#8EA4BA" />
      <rect x="70" y="123" width="29" height="5" rx="2.5" fill="#C3D1DE" />
      <circle cx="90" cy="143" r="3" fill="#F5C581" />
      <path d="M135 53v33m-8-25 8-8 8 8m-8 17 8 8 8-8" stroke="#FF8B00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

export function StorefrontVector(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 520 360"
      fill="none"
      role="img"
      aria-label="Vector illustration of a small online storefront"
      focusable="false"
      {...props}
    >
      <rect x="14" y="14" width="492" height="332" rx="32" fill="#EEF5FC" />
      <circle cx="416" cy="77" r="33" fill="#FFE4C2" />
      <path d="M84 130h352v160H84z" fill="#FFFDF9" stroke="#172A45" strokeWidth="4" />
      <path d="M66 128h388l-24-67H90l-24 67Z" fill="#FF8B00" />
      <path d="M66 128h388l-24 32H90l-24-32Z" fill="#F1A13F" />
      <path d="M90 61h49l-9 67H66l24-67Zm98 0h49v67h-57l8-67Zm98 0h49l8 67h-57V61Zm98 0h49l24 67h-64l-9-67Z" fill="#FFF5E8" />
      <path d="M165 179h110v111H165z" fill="#DCE8F2" stroke="#172A45" strokeWidth="4" />
      <path d="M285 180h115v110H285z" fill="#172A45" />
      <path d="M184 202h73m-73 17h53" stroke="#91A8C0" strokeWidth="5" strokeLinecap="round" />
      <path d="M317 230c0-22 16-40 35-40s35 18 35 40v60h-70v-60Z" fill="#F2B870" />
      <path d="M326 220h51m-51 15h51" stroke="#D47B3F" strokeWidth="4" strokeLinecap="round" />
      <path d="M84 290h352" stroke="#172A45" strokeWidth="4" strokeLinecap="round" />
      <path d="M144 290v26m232-26v26" stroke="#172A45" strokeWidth="4" strokeLinecap="round" />
      <path d="M126 316h290" stroke="#A9B8C8" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function SupplyFlowVector(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 520 360"
      fill="none"
      role="img"
      aria-label="Vector illustration showing products moving from suppliers to retailers"
      focusable="false"
      {...props}
    >
      <rect x="14" y="14" width="492" height="332" rx="32" fill="#EEF5FC" />
      <rect x="55" y="102" width="147" height="164" rx="20" fill="#FFFDF9" stroke="#DCE5EF" strokeWidth="3" />
      <rect x="318" y="102" width="147" height="164" rx="20" fill="#FFFDF9" stroke="#DCE5EF" strokeWidth="3" />
      <path d="M78 148h100v74H78z" fill="#172A45" />
      <path d="M69 148h118l-9-33H78l-9 33Z" fill="#FF8B00" />
      <path d="M337 143h108v102H337z" fill="#DCE8F2" />
      <path d="M355 174h72m-72 14h48m-48 14h62" stroke="#8EA4BA" strokeWidth="5" strokeLinecap="round" />
      <circle cx="132" cy="79" r="25" fill="#FCE2BD" />
      <circle cx="391" cy="79" r="25" fill="#FCE2BD" />
      <path d="M123 77h18m-15 9h12" stroke="#172A45" strokeWidth="4" strokeLinecap="round" />
      <path d="M230 176h60m-20-20 20 20-20 20" stroke="#FF8B00" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="226" y="77" width="68" height="61" rx="12" fill="#FFEDD5" />
      <path d="m239 100 21-12 21 12v24h-42v-24Z" fill="#E6A857" />
      <path d="m239 100 21 12 21-12m-21 12v12" stroke="#FFF3DF" strokeWidth="3" />
      <text x="128" y="300" textAnchor="middle" fill="#172A45" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="700">SUPPLIER</text>
      <text x="392" y="300" textAnchor="middle" fill="#172A45" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="700">RETAILER</text>
    </svg>
  );
}
