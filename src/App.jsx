import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryStrip from "./components/CategoryStrip";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#F8F9FA", minHeight: "100vh", color: "#111" }}>
      <Navbar />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        <Hero />
        <CategoryStrip />

        <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
          <Sidebar />
          <ProductGrid />
        </div>
      </div>

      <Footer />
    </div>
  );
}
