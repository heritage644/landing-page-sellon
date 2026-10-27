import type { AudiencePageConfig } from "@/components/audience-page";

export const retailerPageContent: AudiencePageConfig = {
  eyebrow: "FOR RETAILERS",
  title: "Find products. Build your store. Start selling.",
  description: "Sellonit is being built to help retailers discover products from participating suppliers, add products to their own catalogues, and sell through a dedicated online storefront. Build your retail business around the products your customers want.",
  audience: "retailer",
  highlight: "Product discovery, storefront, and order tools are being developed in phases.",
  introTitle: "Focus on selling. Work with suppliers for your products.",
  introCopy: [
    "Starting a retail business can involve finding suppliers, negotiating prices, buying stock, organising product information, and figuring out how to reach customers.",
    "Sellonit is designed to bring product discovery and online retail into one experience. Retailers will be able to explore available supplier products, choose what fits their market, and present those products through their own storefronts.",
    "The retailer remains responsible for customer relationships and selling decisions, while supplier information helps establish where products come from.",
  ],
  steps: [
    "Set up your retail business and complete the required business setup.",
    "Explore product catalogues available to your business.",
    "Select products and organise your retail catalogue.",
    "Set retail prices within the applicable product and business rules.",
    "Share your storefront with customers when that feature is available.",
    "Use relevant product, order, and analytics tools as they are released.",
  ],
  features: [
    { title: "Product discovery", description: "Find products from participating suppliers without sourcing every product independently." },
    { title: "Your own catalogue", description: "Manage the products you have chosen to sell." },
    { title: "Your storefront", description: "Present your business and products through a dedicated online shop as storefront tools are released." },
    { title: "Pricing control", description: "Set selling prices where permitted and understand supplier pricing alongside your retail price." },
    { title: "Order management", description: "Access relevant order information and tools as the order features become available." },
    { title: "Sales analytics", description: "Review sales and product performance through analytics available to your account." },
  ],
  closingTitle: "Your retail business deserves room to grow.",
  closingCopy: "Find products, shape your catalogue, and build a selling experience around your business.",
  cta: "Get Started as a Retailer",
  ctaHref: undefined,
  visual: "catalogue",
};

export const supplierPageContent: AudiencePageConfig = {
  eyebrow: "FOR SUPPLIERS",
  title: "Put your products in front of retailers ready to sell.",
  description: "Sellonit is being built to help suppliers organise product catalogues, manage wholesale pricing and inventory, and make products available to retailers through one platform.",
  audience: "supplier",
  highlight: "Supplier catalogues, pricing, inventory, and retailer tools are being developed.",
  introTitle: "Your products. Your pricing. Your retailer relationships.",
  introCopy: [
    "Suppliers often manage product information, pricing, and retailer relationships across different channels. As the number of retailers grows, keeping these details organised becomes increasingly important.",
    "Sellonit is designed to give suppliers a central place to manage product information and make available products easier for retailers to discover.",
    "The goal is to help suppliers build a more organised way of working with retailers while retaining control over product and pricing rules.",
  ],
  features: [
    { title: "Product catalogue management", description: "Maintain product names, descriptions, images, SKUs, and other relevant information." },
    { title: "Wholesale pricing", description: "Define supplier prices retailers can review when deciding whether to sell your products." },
    { title: "Inventory management", description: "Maintain stock information and product availability for better-informed decisions." },
    { title: "Retailer access", description: "Make eligible products available to participating retailers." },
    { title: "Order visibility", description: "Access relevant order information and supplier-side workflows as they become available." },
    { title: "Business analytics", description: "Review supported product and sales activity through the tools released for your account." },
  ],
  closingTitle: "Make your products easier for retailers to find.",
  closingCopy: "Build an organised product catalogue and prepare to work with retailers through Sellonit.",
  cta: "Get Started as a Supplier",
  visual: "catalogue",
};

export const entrepreneurPageContent: AudiencePageConfig = {
  eyebrow: "FOR ENTREPRENEURS",
  title: "Your business deserves its own space online.",
  description: "Sellonit is being built to help entrepreneurs organise their products, create a storefront, and manage their selling activities from one place. Give your products a home customers can visit.",
  audience: "entrepreneur",
  highlight: "Product catalogues and storefronts are part of the product direction and are releasing in phases.",
  introTitle: "Bring your products and customers closer together.",
  introCopy: [
    "Your business may have started through WhatsApp, Instagram, referrals, or a physical shop. As you grow, you may need a more organised way to present products and manage selling activities.",
    "Sellonit is designed to give entrepreneurs a central place to manage business information and access the tools relevant to their operations.",
  ],
  features: [
    { title: "Your product catalogue", description: "Keep product information organised and ready for customers to browse." },
    { title: "Your online storefront", description: "Create a dedicated place for your business and the products you sell." },
    { title: "Your business identity", description: "Present your business name and product range consistently across the storefront concept." },
    { title: "Your selling activity", description: "Access product and order management features available to your business." },
    { title: "Your business insights", description: "Use available analytics to understand business activity and monitor changes over time." },
  ],
  closingTitle: "Give your business a place to grow.",
  closingCopy: "Bring your products online and build a storefront around your business as those features become available.",
  cta: "Get Started",
  visual: "storefront",
};

export const enterprisePageContent: AudiencePageConfig = {
  eyebrow: "FOR ENTERPRISE",
  title: "Manage more of your commerce operations in one place.",
  description: "Sellonit is being built for businesses that need to manage products, supply, retail, and business activity across more complex operations. Bring the relevant parts of your business into a structure designed to support how your teams work.",
  audience: "enterprise",
  highlight: "Enterprise access, plan details, and operational capabilities are subject to confirmation.",
  introTitle: "One business may have several sides to manage.",
  introCopy: [
    "A business may supply retailers, sell directly to customers, manage multiple product categories, or operate through different business units.",
    "Sellonit’s enterprise direction brings supplier and retail capabilities into a common business structure, with access designed to follow each user’s role and permissions.",
    "This provides a foundation for managing different parts of commerce operations as the relevant tools become available.",
  ],
  features: [
    { title: "Supplier and retail operations", description: "Support the supplier and retail sides through capabilities available to your business." },
    { title: "Product and catalogue management", description: "Organise product information and maintain relevant pricing and availability details." },
    { title: "Business access and permissions", description: "Shape access to business information and actions around confirmed user roles." },
    { title: "Operational visibility", description: "Access management and reporting tools as they become available." },
    { title: "Analytics", description: "Review supported sales, product, and order information to understand business activity." },
    { title: "Future commerce integrations", description: "Payment, settlement, and fulfilment capabilities depend on future releases and integrations." },
  ],
  closingTitle: "Choose a structure suited to your operations.",
  closingCopy: "Enterprise and Enterprise Plus are intended for businesses with different levels of operational complexity. Final features, eligibility, limits, support, and pricing are still to be defined.",
  cta: "Contact Us",
  ctaHref: "/contact",
  visual: "access",
};
