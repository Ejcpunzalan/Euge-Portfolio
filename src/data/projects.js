import logo from "../images/logo.png";
import misso from "../images/MISS O.jpg";
import expenseTracker from "../images/expense-tracker.jpg";

export const projects = [
  {
    title: "FlavorFix Food Hub",
    description: "Developed a complete business website for FlavorFix, showcasing products, menu, and company information.",
    image: logo,
    tech: ["HTML", "CSS", "JavaScript", "Netlify"],
    link: "https://flavorfix-tanauan.netlify.app/"
  },
  {
    title: "Miss O Kitchenette",
    description: "Developed a company profile website to help the business present its services and information online.",
    image: misso,
    tech: ["React", "JavaScript", "Netlify"],
    link: "https://miss-o-kitchenette.netlify.app/"
  },
  {
    title: "Expense Tracker",
    description: "A React-based expense tracking app with budget management, categories, and local storage.",
    image: expenseTracker,
    tech: ["React", "JavaScript", "CSS", "Vercel"],
    link: "https://expense-tracker-ejcp.vercel.app/"
  }
];