import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "https://alistarhub-backend.onrender.com/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setDownloadUrl(res.data.url);
    } catch (err) {
      alert("Upload failed");
    }
  };

  return (
    <div style={{
      backgroundColor: "#121212",
      minHeight: "100vh",
      color: "white",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <header style={{ padding: "20px", textAlign: "center", borderBottom: "1px solid #333" }}>
        <h1>🚀 ALITAR HUB</h1>
        <p style={{ color: "#bbb" }}>Upload and share your files securely</p>
      </header>

      <main style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ backgroundColor: "#1e1e1e", padding: "40px", borderRadius: "12px", boxShadow: "0 0 20px rgba(0,0,0,0.5)", textAlign: "center" }}>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} style={{ margin: "20px 0", color: "white" }} />
          <br />
          <button onClick={handleUpload} style={{
            padding: "10px 20px",
            backgroundColor: "#6200ee",
            border: "none",
            borderRadius: "8px",
            color: "white",
            cursor: "pointer"
          }}>
            Upload
          </button>

          {downloadUrl && (
            <div style={{ marginTop: "20px" }}>
              <p>✅ File uploaded successfully:</p>
              <a href={downloadUrl} target="_blank" rel="noreferrer" style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "10px 15px",
                backgroundColor: "#03dac6",
                color: "#000",
                borderRadius: "6px",
                textDecoration: "none"
              }}>
                Download File
              </a>
            </div>
          )}
        </div>
      </main>

      <footer style={{ textAlign: "center", padding: "15px", borderTop: "1px solid #333", color: "#888" }}>
        © 2025 ALITAR HUB
      </footer>
    </div>
  );
}

export default App;
