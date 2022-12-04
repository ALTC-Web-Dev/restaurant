import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="lg:px-32 md:px-20 px-4 min-h-screen">{children}</div>
      <Footer />
    </>
  );
}
