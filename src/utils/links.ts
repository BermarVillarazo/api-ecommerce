export const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    // { name: "Login In", href: "/login" },
] as const;

export const subNavigation = [
    { name: "All", href: "/products" },
    { name: "Men's Clothing", href: "/products/mens_clothing" },
    { name: "Women's Clothing", href: "/products/womens_clothing" },
    { name: "Jewelery", href: "/products/jewelery" },
    { name: "Electronics", href: "/products/electronics" },
] as const;

export const docsAndHelp = [
    { name: "Documentation" },
    { name: "Training" },
    { name: "System status" },
    { name: "FAQ's" },
    { name: "Help Center" },
] as const;

export const aboutUs = [
    { name: "About us" },
    { name: "Careers" },
    { name: "Leadership" },
    { name: "Blog" },
    { name: "Events" },
] as const;

export const getInTouch = [
    { name: "Contact" },
    { name: "Support" },
    { name: "Partners" },
    { name: "Join research" },
] as const;

export const AboutWebsite = [
    {
        href: "https://nextjs.org/",
        svg: "/nextjs.svg",
        title: "Nextjs Icon",
        description:
            "A React framework that simplifies the development of fast, dynamic web applications.",
    },
    {
        href: "https://tailwindcss.org/",
        svg: "/tailwind.svg",
        title: "Tailwindcss Icon",
        description:
            "A React framework that simplifies the development of fast, dynamic web applications.",
    },
    {
        href: "/about",
        svg: "/responsive.svg",
        title: "Responsive Icon",
        description:
            "A React framework that simplifies the development of fast, dynamic web applications.",
    },
    {
        href: "https://ui.aceternity.com/",
        svg: "/aceternity.svg",
        title: "Aceternity Icon",
        description:
            "Ensuring optimal user experience across various devices by adapting the layout to different screen sizes.",
    },
    {
        href: "https://wind-ui.com/",
        svg: "/windui.svg",
        title: "Windui Icon",
        description:
            "A lightweight and utility-first UI library that complements Tailwind CSS, enhancing the development of modern interfaces.",
    },
    {
        href: "https://fakestoreapi.com/",
        svg: "https://fakestoreapi.com/icons/logo.png",
        title: "Fake Store API Icon",
        description:
            "A mock API serving as a placeholder for testing and demonstration, offering fictitious product and user data.",
    },
] as const;
