import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-pink-50 text-gray-900">
      <Navbar />
      <main className="flex-grow p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
