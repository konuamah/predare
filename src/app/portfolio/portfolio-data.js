// Portfolio Data - Organized by Service Categories

export const SERVICE_CATEGORIES = [
    "All Projects",
    "Websites/Sales Funnels Development",
    "Digital Marketing/Customer Acquisition",
    "Graphic Design and Branding"
];

export const PORTFOLIO_PROJECTS = [
    // Websites/Sales Funnels Development
    {
        id: 1,
        title: "Healthcare Website for Forever Champion Health Centre",
        category: "Websites/Sales Funnels Development",
        description: "Developed and deployed a successful Healthcare website and ecommerce store, automate it with clients acquisition systems and drive traffic to it using SMM, SEM and SEO for Forever Champion Health Centre. Helping the company to increase its Sales Revenue over 85% within six months (ie from GHC5,000/month to GHC35,000/month).",
        technologies: ["Web Development", "E-commerce", "SEO", "SMM", "SEM"],
        results: "85% increase in sales revenue from GHC5,000 to GHC35,000 per month",
        client: "Forever Champion Health Centre",
        image: "/champion.png", // Assuming this is a relevant image; replace if needed
        featured: true
    },
    {
        id: 2,
        title: "Sales Funnel/Website for Digital Skills Bootcamp I.T Courses",
        category: "Websites/Sales Funnels Development",
        description: "Developed a successful sales funnel for Digital Skillup Bootcamp IT Training Courses that sell.",
        technologies: ["Sales Funnel", "Web Development", "Marketing Automation"],
        results: "Successful sales funnel for IT training courses",
        client: "Digital Skills Bootcamp",
        image: "/funnel.png",
        featured: false
    },
    {
        id: 3,
        title: "Appointment Booking Website for Primeagle Consult",
        category: "Websites/Sales Funnels Development",
        description: "Design a Prestigious Appointments Booking Website for my brand which helps attract quality clients to book appointment everyday.",
        technologies: ["Appointment Booking", "Web Design", "CRM Integration"],
        results: "Attracts quality clients daily for appointments",
        client: "Primeagle Consult",
        image: "/primeeagle.png",
        featured: true
    },
    // Digital Marketing/Customer Acquisition
    {
        id: 4,
        title: "Digital Marketing Campaigns for Global Businesses",
        category: "Digital Marketing/Customer Acquisition",
        description: "Have a diverse & professional skills in the field of Digital Marketing/Clients Acquisition with internationally recognized certifications. For the past years, my team and I have been able to build & successfully deployed sales process automations that helps businesses across the globe to get more customers.",
        technologies: ["Social Media Marketing", "SEM", "PPC", "SEO", "Copywriting", "Email Marketing", "Chatbot Automation"],
        results: "Built successful sales process automations for global businesses",
        client: "Various Global Businesses",
        image: "/marketing.png",
        featured: true
    },
    // Graphic Design and Branding
    {
        id: 5,
        title: "Logo Designs and Branding Projects",
        category: "Graphic Design and Branding",
        description: "Created professional logo designs and branding materials for various clients.",
        technologies: ["Adobe Illustrator", "Graphic Design", "Branding"],
        results: "Professional branding that enhances client identity",
        client: "Multiple Clients",
        image: "/graphic-design.jpg",
        featured: false
    },
    {
        id: 6,
        title: "Ama Cars Dealership Website",
        category: "Web Development",
        description: "Developed a modern website for Ama Cars Dealership featuring car rental services, vehicle listings for sedans, SUVs, vans, buses, and luxury options, with search filters, industry solutions, and booking features.",
        technologies: ["React", "JavaScript", "CSS", "Web Design"],
        results: "User-friendly platform enabling easy vehicle browsing and rentals, showcasing 13 vehicles including Toyota Corolla, Mitsubishi Pajero, and Mercedes S-Class.",
        client: "Ama Cars Dealership",
        image: "/amacarsdealership.png",
        link: "https://amacarsdealership.com",
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
