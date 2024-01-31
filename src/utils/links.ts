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
        alt: "Nextjs Icon",
        title: "Nextjs",
        description:
            "A React framework that simplifies the development of fast, dynamic web applications.",
    },
    {
        href: "https://www.typescriptlang.org/",
        svg: "/typescript.svg",
        alt: "TypeScript Icon",
        title: "TypeScript",
        description:
            "A superset of JavaScript, adding static typing to enhance code quality and developer experience.",
    },
    {
        href: "https://tailwindcss.org/",
        svg: "/tailwind.svg",
        alt: "Tailwindcss Icon",
        title: "Tailwindcss",
        description:
            "A utility-first CSS framework enabling streamlined design and responsive layouts.",
    },
    {
        href: "/about",
        svg: "/responsive.svg",
        alt: "Responsive Icon",
        title: "Responsive",
        description:
            "Designs optimized for diverse screen sizes, ensuring a seamless user experience.",
    },
    {
        href: "https://ui.aceternity.com/",
        svg: "/aceternity.svg",
        alt: "Aceternity Icon",
        title: "Aceternity",
        description:
            "A UI library tailored for Aeternity blockchain development, enhancing visual components.",
    },
    {
        href: "https://wind-ui.com/",
        svg: "/windui.svg",
        alt: "Windui Icon",
        title: "Windui",
        description:
            "A lightweight and utility-first UI library that complements Tailwind CSS, enhancing the development of modern interfaces.",
    },
    {
        href: "https://fakestoreapi.com/",
        svg: "https://fakestoreapi.com/icons/logo.png",
        alt: "Fake Store API Icon",
        title: "Fake Store API",
        description:
            "A mock API serving as a placeholder for testing and demonstration, offering fictitious product and user data.",
    },
    {
        href: "https://vercel.com/",
        svg: "/vercel.svg",
        alt: "Vercel Icon",
        title: "Vercel",
        description:
            "The hosting platform for this Next.js website, ensuring fast and scalable deployment.",
    },
    {
        href: "https://github.com/BermarVillarazo/api-ecommerce",
        svg: "/github.svg",
        alt: "Github Icon",
        title: "Github",
        description:
            "Repository hosting project files and source code, accessible via the GitHub icon.",
    },
] as const;

export const socialLinks = [
    { href: "https://www.facebook.com/", src: "/facebook.svg", name: "Facebook Icon" },
    { href: "https://twitter.com/", src: "/twitter.svg", name: "Twitter Icon" },
    { href: "https://discord.com/", src: "/discord.svg", name: "Discord Icon" },
    {
        href: "https://github.com/BermarVillarazo/api-ecommerce",
        src: "/githubFooter.svg",
        name: "Github Icon",
    },
] as const;
