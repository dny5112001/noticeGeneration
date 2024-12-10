import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import "./App.css";

const App = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [formData, setFormData] = useState({
    srNo: "",
    to: "",
    subject: "",
    copyTo: "",
    date: "",
  });
  const [headerImage, setHeaderImage] = useState(null);

  // Handle form input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setHeaderImage(reader.result); // Store image data as base64
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to print the content (form and editor content)
  const printContent = () => {
    const previewContent = editor.current?.value || content; // Get the content from Jodit editor
    const newWindow = window.open("", "_blank", "width=800,height=600"); // Open a new window
    newWindow.document.write(`
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
              margin: 0;
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            table, th, td {
              border: 1px solid black;
            }
            th, td {
              padding: 8px;
              text-align: left;
            }
            .form-section {
              margin-bottom: 20px;
            }
            .form-section label {
              display: block;
              margin-bottom: 5px;
            }
            .content-header {
              margin-bottom: 5px;
              text-align:center;
            }
            .content-body {
              margin-top: 10px;
            }
            .notice-content {
              margin-top: 10px;
              margin-bottom:10px;
            }
            .flex-container {
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 20px;
            }
            .header-image {
              width: 100%;
              height: 80px;
              margin-bottom: 10px;
            }
          </style>
        </head>
        <body>
          <div class="form-section">
            ${
              headerImage
                ? `<img src="${headerImage}" class="header-image" />`
                : ""
            }
            <h2 class="content-header">NOTICE</h2>
            <div class="flex-container">
              <p><strong>Serial No:</strong> ${formData.srNo}</p>
              <p><strong>Date:</strong> ${formData.date}</p>
            </div>

            <p><strong>To:</strong> ${formData.to}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>

            <div class="notice-content">
              <div class="content-body">${previewContent}</div>
            </div>

            <p><strong>Copy To:</strong> ${formData.copyTo}</p>
          </div>
        </body>
      </html>
    `);
    newWindow.document.close(); // Close the document
    newWindow.print(); // Trigger the print dialog
  };

  return (
    <div
      style={{
        paddingLeft: 200,
        paddingRight: 200,
        paddingTop: 30,
      }}
    >
      <h2>NOTICE DETAILS</h2>
      <div
        className="form-section"
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <div
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderStyle: "solid", // Add this line to make the border visible
            padding: 10,
            borderRadius: 5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ color: "grey" }}>SELECT HEADER</div>
          <div>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            <label
              htmlFor="fileInput"
              style={{
                padding: "5px 20px",
                borderWidth: "1px",
                borderColor: "grey",
                borderRadius: "5px",
                cursor: "pointer",
                textAlign: "center",
                borderStyle: "solid", // Add this line to make the border visible
              }}
            >
              Choose file
            </label>
          </div>
        </div>

        <input
          type="text"
          name="srNo"
          value={formData.srNo}
          onChange={handleInputChange}
          placeholder="SR NO."
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderStyle: "solid", // Add this line to make the border visible
            padding: 10,
            borderRadius: 5,
          }}
        />

        <input
          type="text"
          name="to"
          value={formData.to}
          onChange={handleInputChange}
          placeholder="TO (eg. priciple"
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderStyle: "solid", // Add this line to make the border visible
            padding: 10,
            borderRadius: 5,
          }}
        />

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="SUBJECT"
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderStyle: "solid", // Add this line to make the border visible
            padding: 10,
            borderRadius: 5,
          }}
        />

        <input
          type="text"
          name="copyTo"
          value={formData.copyTo}
          onChange={handleInputChange}
          placeholder="COPY TO"
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderStyle: "solid", // Add this line to make the border visible
            padding: 10,
            borderRadius: 5,
          }}
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          style={{
            borderWidth: 1,
            borderColor: "black",
            borderStyle: "solid", // Add this line to make the border visible
            padding: 10,
            borderRadius: 5,
            color: "grey",
          }}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <JoditEditor
          ref={editor}
          value={content}
          config={{
            height: 300, // Set the desired height
            readonly: false, // Ensure editor is editable
          }}
          onBlur={(newContent) => setContent(newContent)} // Save content only on blur to avoid frequent updates
        />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={printContent}
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            borderWidth: "1px",
            borderColor: "grey",
            borderStyle: "solid",
            padding: "10px 25px",
            borderRadius: "5px",
            backgroundColor: "#fff",
            textAlign: "center",
          }}
        >
          Print Content
        </button>
      </div>
    </div>
  );
};

export default App;
