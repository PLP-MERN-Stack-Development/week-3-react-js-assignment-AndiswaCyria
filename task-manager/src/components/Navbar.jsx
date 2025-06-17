import ThemeToggle from "./ThemeToggle";

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-pink-200 dark:bg-gray-800 text-pink-900 dark:text-white">
    <h1 className="font-playfair text-xl">💖 Girly Task Manager</h1>
    <ThemeToggle />
  </nav>
);

export default Navbar;
