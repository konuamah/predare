// Portfolio Data - Organized by Service Categories

export const SERVICE_CATEGORIES = [
    "All Projects",
    "Online Business & Marketing Automation",
    "Paid Traffic Advertising",
    "Software Development",
    "Web Development",
    "Graphics Designs & Branding",
    "Website Audit",
    "Email Marketing & Automation",
    "Copywriting"
];

export const PORTFOLIO_PROJECTS = [
    // Online Business & Marketing Automation
    {
        id: 1,
        title: "Complete E-commerce Automation System",
        category: "Online Business & Marketing Automation",
        description: "Built a comprehensive sales and marketing automation system for an online retail business, integrating CRM, email marketing, and inventory management.",
        technologies: ["Zapier", "HubSpot", "Shopify", "ActiveCampaign"],
        results: "300% increase in conversion rate, 50% reduction in manual tasks",
        client: "RetailPro Inc.",
        image: "/automation.jpg",
        featured: true
    },
    {
        id: 2,
        title: "SaaS Onboarding Automation",
        category: "Online Business & Marketing Automation",
        description: "Designed and implemented automated customer onboarding workflows for a SaaS platform, reducing onboarding time from 2 weeks to 2 days.",
        technologies: ["Intercom", "Segment", "Customer.io", "Slack API"],
        results: "85% faster onboarding, 40% increase in user activation",
        client: "CloudFlow Solutions",
        image: "/analytics.png",
        featured: false
    },
    {
        id: 3,
        title: "Lead Nurturing Automation Pipeline",
        category: "Online Business & Marketing Automation",
        description: "Created multi-channel lead nurturing system with automated scoring, segmentation, and personalized content delivery.",
        technologies: ["Marketo", "Salesforce", "Drift", "Google Analytics"],
        results: "250% increase in qualified leads, 60% improvement in sales cycle",
        client: "TechVenture Partners",
        image: "/marketing.png",
        featured: false
    },

    // Paid Traffic Advertising
    {
        id: 4,
        title: "Multi-Platform Ad Campaign for Fashion Brand",
        category: "Paid Traffic Advertising",
        description: "Executed comprehensive paid advertising strategy across Facebook, Instagram, Google Ads, and TikTok for a fashion e-commerce brand.",
        technologies: ["Facebook Ads Manager", "Google Ads", "TikTok Ads", "Analytics"],
        results: "450% ROAS, 2.5M impressions, 15K new customers",
        client: "StyleHub Fashion",
        image: "/advert.png",
        featured: true
    },
    {
        id: 5,
        title: "B2B LinkedIn Lead Generation Campaign",
        category: "Paid Traffic Advertising",
        description: "Developed and managed targeted LinkedIn advertising campaign for B2B SaaS company, focusing on decision-makers in enterprise organizations.",
        technologies: ["LinkedIn Campaign Manager", "LinkedIn Sales Navigator", "HubSpot"],
        results: "500+ qualified leads, $2M pipeline generated, 8% conversion rate",
        client: "Enterprise Solutions Ltd",
        image: "/analytics.svg",
        featured: false
    },
    {
        id: 6,
        title: "YouTube Ads for Online Course Launch",
        category: "Paid Traffic Advertising",
        description: "Created and optimized YouTube advertising campaign for online education platform, targeting specific demographics and interests.",
        technologies: ["YouTube Ads", "Google Analytics", "Hotjar"],
        results: "1M+ views, 12K course enrollments, 320% ROI",
        client: "LearnPro Academy",
        image: "/content.png",
        featured: false
    },

    // Software Development
    {
        id: 7,
        title: "Custom CRM System for Real Estate",
        category: "Software Development",
        description: "Developed a fully custom CRM system tailored for real estate agencies with property management, client tracking, and automated reporting.",
        technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
        results: "Managed 10K+ properties, 70% faster client processing",
        client: "Premier Realty Group",
        image: "/web.svg",
        featured: true
    },
    {
        id: 8,
        title: "Mobile App for Fitness Tracking",
        category: "Software Development",
        description: "Built cross-platform mobile application for fitness enthusiasts with workout tracking, nutrition planning, and social features.",
        technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
        results: "50K+ downloads, 4.8★ rating, featured on App Store",
        client: "FitLife Technologies",
        image: "/analytics.png",
        featured: false
    },
    {
        id: 9,
        title: "Inventory Management System",
        category: "Software Development",
        description: "Created comprehensive inventory management software for manufacturing company with real-time tracking, forecasting, and supplier integration.",
        technologies: ["Python", "Django", "React", "MySQL", "Docker"],
        results: "90% reduction in stock discrepancies, $500K cost savings",
        client: "ManufacturePro Inc.",
        image: "/web.svg",
        featured: false
    },

    // Web Development
    {
        id: 10,
        title: "E-commerce Platform for Organic Products",
        category: "Web Development",
        description: "Designed and developed a high-converting e-commerce website with custom shopping experience, subscription options, and integrated payment processing.",
        technologies: ["Next.js", "Shopify", "Stripe", "Tailwind CSS"],
        results: "500K monthly visitors, $2M annual revenue, 4.2% conversion rate",
        client: "GreenLife Organics",
        image: "/web-dev.jpg",
        featured: true
    },
    {
        id: 11,
        title: "Corporate Website Redesign",
        category: "Web Development",
        description: "Complete website redesign for professional services firm with focus on lead generation, SEO optimization, and modern user experience.",
        technologies: ["WordPress", "PHP", "JavaScript", "SEO Tools"],
        results: "200% increase in organic traffic, 150% more contact form submissions",
        client: "Consulting Partners LLC",
        image: "/seo.png",
        featured: false
    },
    {
        id: 12,
        title: "SaaS Landing Page & Sales Funnel",
        category: "Web Development",
        description: "Built high-converting landing pages and sales funnels for SaaS product launch with A/B testing and analytics integration.",
        technologies: ["React", "Next.js", "Vercel", "Google Optimize"],
        results: "12% conversion rate, 5K sign-ups in first month",
        client: "CloudSync Pro",
        image: "/web.svg",
        featured: false
    },

    // Graphics Designs & Branding
    {
        id: 13,
        title: "Complete Brand Identity for Tech Startup",
        category: "Graphics Designs & Branding",
        description: "Created comprehensive brand identity including logo, color palette, typography, brand guidelines, and marketing collateral.",
        technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
        results: "Award-winning design, 95% brand recognition in target market",
        client: "InnovateTech Solutions",
        image: "/graphic-design.jpg",
        featured: true
    },
    {
        id: 14,
        title: "Social Media Marketing Kit",
        category: "Graphics Designs & Branding",
        description: "Designed cohesive social media templates and graphics for Instagram, LinkedIn, and Facebook to maintain brand consistency.",
        technologies: ["Canva Pro", "Adobe Creative Suite", "Figma"],
        results: "300% increase in social engagement, 50K new followers",
        client: "Digital Marketing Agency",
        image: "/social.png",
        featured: false
    },
    {
        id: 15,
        title: "Event Branding & Collateral",
        category: "Graphics Designs & Branding",
        description: "Complete event branding package including billboards, flyers, banners, posters, and digital assets for annual conference.",
        technologies: ["Adobe InDesign", "Illustrator", "Photoshop"],
        results: "5K+ event attendees, 100% brand recall among participants",
        client: "Tech Conference 2024",
        image: "/graphic-design.svg",
        featured: false
    },

    // Website Audit
    {
        id: 16,
        title: "E-commerce Conversion Optimization Audit",
        category: "Website Audit",
        description: "Comprehensive audit of e-commerce website identifying conversion bottlenecks, UX issues, and technical SEO problems with actionable recommendations.",
        technologies: ["Google Analytics", "Hotjar", "SEMrush", "GTmetrix"],
        results: "Identified 47 issues, implemented fixes led to 180% conversion increase",
        client: "Online Retail Store",
        image: "/analytics.png",
        featured: true
    },
    {
        id: 17,
        title: "SaaS Platform Performance Audit",
        category: "Website Audit",
        description: "In-depth technical audit focusing on page speed, accessibility, SEO, and user experience with detailed improvement roadmap.",
        technologies: ["Lighthouse", "WebPageTest", "Screaming Frog", "WAVE"],
        results: "90+ performance score, 50% faster load times, WCAG 2.1 AA compliance",
        client: "SaaS Platform Inc.",
        image: "/seo.png",
        featured: false
    },
    {
        id: 18,
        title: "Corporate Website SEO Audit",
        category: "Website Audit",
        description: "Complete SEO audit identifying technical issues, content gaps, and backlink opportunities to improve search rankings.",
        technologies: ["Ahrefs", "Google Search Console", "Moz Pro"],
        results: "First page rankings for 25+ keywords, 250% organic traffic increase",
        client: "Professional Services Firm",
        image: "/web.svg",
        featured: false
    },

    // Email Marketing & Automation
    {
        id: 19,
        title: "E-commerce Email Marketing Campaign",
        category: "Email Marketing & Automation",
        description: "Designed and executed automated email marketing campaigns including welcome series, cart abandonment, and re-engagement flows.",
        technologies: ["Klaviyo", "Mailchimp", "Shopify", "Google Analytics"],
        results: "45% open rate, 12% CTR, $500K revenue from email campaigns",
        client: "Fashion E-commerce Brand",
        image: "/email.png",
        featured: true
    },
    {
        id: 20,
        title: "B2B Lead Nurturing Email Sequence",
        category: "Email Marketing & Automation",
        description: "Created sophisticated lead nurturing email sequences with personalization, behavioral triggers, and lead scoring integration.",
        technologies: ["HubSpot", "ActiveCampaign", "Salesforce"],
        results: "35% increase in qualified leads, 25% shorter sales cycle",
        client: "B2B Software Company",
        image: "/marketing.png",
        featured: false
    },
    {
        id: 21,
        title: "Newsletter Growth & Engagement Campaign",
        category: "Email Marketing & Automation",
        description: "Developed content strategy and automated workflows to grow newsletter subscribers and increase engagement rates.",
        technologies: ["ConvertKit", "Substack", "Zapier"],
        results: "10K new subscribers, 55% open rate, 8% click rate",
        client: "Content Creator Platform",
        image: "/content.png",
        featured: false
    },

    // Copywriting
    {
        id: 22,
        title: "SaaS Website Copy & Messaging",
        category: "Copywriting",
        description: "Crafted compelling website copy, landing pages, and product descriptions for SaaS platform focusing on value proposition and conversion.",
        technologies: ["Copy.ai", "Grammarly", "Hemingway Editor"],
        results: "8% conversion rate, 200% increase in demo requests",
        client: "Project Management SaaS",
        image: "/copywriting.jpg",
        featured: true
    },
    {
        id: 23,
        title: "Email Sales Copy for Product Launch",
        category: "Copywriting",
        description: "Written high-converting email sales sequences for new product launch with storytelling and persuasive techniques.",
        technologies: ["Copywriting frameworks", "A/B testing tools"],
        results: "$1M in sales, 18% conversion rate, 50% open rate",
        client: "Digital Product Creator",
        image: "/email.png",
        featured: false
    },
    {
        id: 24,
        title: "Ad Copy for Multi-Platform Campaign",
        category: "Copywriting",
        description: "Created engaging ad copy for Facebook, Google, and LinkedIn campaigns with focus on click-through and conversion optimization.",
        technologies: ["Facebook Ads Library", "Google Ads Editor"],
        results: "4.5% CTR, 350% ROAS, 5K conversions",
        client: "E-learning Platform",
        image: "/advert.png",
        featured: false
    }
];

// Helper function to get projects by category
export const getProjectsByCategory = (category) => {
    if (category === "All Projects") {
        return PORTFOLIO_PROJECTS;
    }
    return PORTFOLIO_PROJECTS.filter(project => project.category === category);
};

// Helper function to get featured projects
export const getFeaturedProjects = () => {
    return PORTFOLIO_PROJECTS.filter(project => project.featured);
};

// Helper function to get project count by category
export const getProjectCountByCategory = () => {
    const counts = {};
    SERVICE_CATEGORIES.forEach(category => {
        if (category === "All Projects") {
            counts[category] = PORTFOLIO_PROJECTS.length;
        } else {
            counts[category] = PORTFOLIO_PROJECTS.filter(p => p.category === category).length;
        }
    });
    return counts;
};
