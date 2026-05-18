import { useState } from "react";
import { PRODUCTS } from "../../data";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const SORT_OPTIONS = ["Best match", "Price: Low to High", "Price: High to Low", "Newest first"];

export default function ProductGrid() {
  const [sortBy, setSortBy] = useState("Best match");
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const sortedProducts = [...PRODUCTS].sort((a, b) => {
    if (sortBy === "Price: Low to High") return a.price - b.price;
    if (sortBy === "Price: High to Low") return b.price - a.price;
    return 0;
  });

  return (
    <div style={{ flex: 1 }}>
      {/* Toolbar */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "center", marginBottom: 16,
      }}>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            padding: "8px 12px", border: "1px solid #D1D5DB",
            borderRadius: 6, fontSize: 14, background: "#fff", cursor: "pointer",
          }}
        >
          {SORT_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </select>

        <div style={{ display: "flex", gap: 4 }}>
          {["grid", "list"].map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              style={{
                width: 34, height: 34, border: "1px solid #D1D5DB",
                borderRadius: 6,
                background: view === v ? "#3B5BDB" : "#fff",
                color: view === v ? "#fff" : "#6B7280",
                cursor: "pointer", fontSize: 16,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              {v === "grid" ? "⊞" : "☰"}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: view === "grid" ? "repeat(3, 1fr)" : "1fr",
        gap: 16,
      }}>
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={3}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
