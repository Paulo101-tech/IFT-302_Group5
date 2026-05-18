export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between",
      alignItems: "center", marginTop: 24, paddingBottom: 24,
    }}>
      <button style={{
        padding: "8px 16px", border: "1px solid #D1D5DB",
        borderRadius: 6, background: "#fff", fontSize: 13, cursor: "pointer",
      }}>
        « Go back
      </button>

      <div style={{ display: "flex", gap: 4 }}>
        <button style={{
          padding: "8px 12px", border: "1px solid #D1D5DB",
          borderRadius: 6, background: "#fff", fontSize: 13, cursor: "pointer",
        }}>
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            style={{
              width: 36, height: 36, border: "1px solid #D1D5DB",
              borderRadius: 6,
              background: currentPage === p ? "#3B5BDB" : "#fff",
              color: currentPage === p ? "#fff" : "#374151",
              fontWeight: currentPage === p ? 700 : 400,
              fontSize: 13, cursor: "pointer",
            }}
          >
            {p}
          </button>
        ))}

        <button style={{
          padding: "8px 12px", border: "1px solid #D1D5DB",
          borderRadius: 6, background: "#fff", fontSize: 13, cursor: "pointer",
        }}>
          Next
        </button>
      </div>
    </div>
  );
}
