import { useState } from "react";
import { SIDEBAR_CATEGORIES, BRANDS, CONDITIONS } from "../../data";
import StarRating from "../../utils/StarRating";

const Divider = () => (
  <div style={{ height: 1, background: "#F3F4F6", margin: "0 16px 16px" }} />
);

const SectionTitle = ({ dot = true, children }) => (
  <p style={{ fontWeight: 700, fontSize: 14, margin: "0 0 10px", display: "flex", alignItems: "center", gap: 6 }}>
    {dot && (
      <span style={{ width: 6, height: 6, background: "#3B5BDB", borderRadius: "50%", display: "inline-block" }} />
    )}
    {children}
  </p>
);

export default function Sidebar() {
  const [selectedCat, setSelectedCat] = useState("All electronics");
  const [selectedCondition, setSelectedCondition] = useState("Any condition");
  const [checkedBrands, setCheckedBrands] = useState({ Apple: true });
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const toggleBrand = (brand) =>
    setCheckedBrands((prev) => ({ ...prev, [brand]: !prev[brand] }));

  return (
    <aside style={{
      width: 230, flexShrink: 0,
      background: "#fff", borderRadius: 10,
      border: "1px solid #E5E7EB",
      padding: "16px 0",
    }}>
      {/* Categories */}
      <div style={{ padding: "0 16px 16px" }}>
        <SectionTitle>Categories</SectionTitle>
        {SIDEBAR_CATEGORIES.map((cat, i) => (
          <div
            key={i}
            onClick={() => setSelectedCat(cat)}
            style={{
              padding: "7px 10px", borderRadius: 6,
              cursor: "pointer", fontSize: 13,
              background: selectedCat === cat ? "#EEF2FF" : "transparent",
              color: selectedCat === cat ? "#3B5BDB" : "#374151",
              display: "flex", alignItems: "center", gap: 4,
            }}
          >
            {i === 0 && <span>‹</span>}
            {cat}
          </div>
        ))}
      </div>

      <Divider />

      {/* Brands */}
      <div style={{ padding: "0 16px 16px" }}>
        <SectionTitle>Brands</SectionTitle>
        {BRANDS.map((brand) => (
          <label key={brand} style={{
            display: "flex", alignItems: "center",
            gap: 8, marginBottom: 6, cursor: "pointer", fontSize: 13,
          }}>
            <input
              type="checkbox"
              checked={!!checkedBrands[brand]}
              onChange={() => toggleBrand(brand)}
              style={{ accentColor: "#3B5BDB", width: 14, height: 14 }}
            />
            {brand}
          </label>
        ))}
      </div>

      <Divider />

      {/* Condition */}
      <div style={{ padding: "0 16px 16px" }}>
        <SectionTitle dot={false}>Condition</SectionTitle>
        {CONDITIONS.map((cond) => (
          <label key={cond} style={{
            display: "flex", alignItems: "center",
            gap: 8, marginBottom: 6, cursor: "pointer", fontSize: 13,
          }}>
            <input
              type="radio"
              name="condition"
              checked={selectedCondition === cond}
              onChange={() => setSelectedCondition(cond)}
              style={{ accentColor: "#3B5BDB" }}
            />
            {cond}
          </label>
        ))}
      </div>

      <Divider />

      {/* Price Range */}
      <div style={{ padding: "0 16px 16px" }}>
        <SectionTitle dot={false}>Price range</SectionTitle>
        <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 11, color: "#9CA3AF", margin: "0 0 4px" }}>Min</p>
            <input
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="$0"
              style={{
                width: "100%", padding: "6px 8px",
                border: "1px solid #D1D5DB", borderRadius: 6, fontSize: 13,
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 11, color: "#9CA3AF", margin: "0 0 4px" }}>Max</p>
            <input
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="$1,000"
              style={{
                width: "100%", padding: "6px 8px",
                border: "1px solid #D1D5DB", borderRadius: 6, fontSize: 13,
                boxSizing: "border-box",
              }}
            />
          </div>
        </div>
        <button style={{
          width: "100%", padding: "8px",
          background: "#EEF2FF", color: "#3B5BDB",
          border: "1px solid #C7D2FE", borderRadius: 6,
          fontWeight: 600, fontSize: 13, cursor: "pointer",
        }}>
          Apply
        </button>
      </div>

      <Divider />

      {/* Star Rating Filter */}
      <div style={{ padding: "0 16px 16px" }}>
        <SectionTitle dot={false}>Condition</SectionTitle>
        {[5, 4, 3, 2].map((star) => (
          <label key={star} style={{
            display: "flex", alignItems: "center",
            gap: 8, marginBottom: 6, cursor: "pointer", fontSize: 13,
          }}>
            <input type="checkbox" style={{ accentColor: "#3B5BDB", width: 14, height: 14 }} />
            {star} star - <StarRating rating={star} />
          </label>
        ))}
      </div>
    </aside>
  );
}