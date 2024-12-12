
import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import headerImage from "../assets/tcet header.jpg";
import copytoimage from "../assets/pmt-placement_drive_copytoImage.png";
const Pli= () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [formData, setFormData] = useState({
    srNo: "",
    to: "",
    subject: "",
    date: "",
    Intro: "",
    Eligibility_Criteria: "",
    Emoluments: "",
    Role: "",
    Job_Designation: "",
    Job_Location: "",
    Job_Technologies: "",
    Documents_to_Carry: "",
    Company_registration_Link: "",
    College_registration_Link: "",
    Note: "",
    From: "",
    From_designation: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const printContent = () => {
    const previewContent = editor.current?.value || content;
    const newWindow = window.open("", "_blank", "width=800,height=600");
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
              text-align: center;
            }
            .content-body {
              margin-top: 10px;
            }
            .notice-content {
              margin-top: 10px;
              margin-bottom: 10px;
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
            .fromto {
              float: right;
              margin-right: 20px;
            }

            .main_body {
              display: flex;
              flex-direction: column;
              gap: 10px;
            }

            .footerImage {
              margin-top: 80px;
            }
          </style>
        </head>
        <body>
          ${headerImage ? `<img src="${headerImage}" alt="Header" />` : ""}
          <h2 class="content-header">NOTICE</h2>
          <div class="flex-container">
            <p><strong>Serial No:</strong> ${formData.srNo}</p>
            <p><strong>Date:</strong> ${formData.date}</p>
          </div>
          <div class="main_body">
            <p><strong>To:</strong> ${formData.to}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Intro:</strong> ${formData.Intro}</p>
            <p><strong>Eligibility Criteria:</strong> ${
              formData.Eligibility_Criteria
            }</p>
            <p><strong>Emoluments:</strong> ${formData.Emoluments}</p>
            <p><strong>Role:</strong> ${formData.Role}</p>
            <p><strong>Job Designation:</strong> ${formData.Job_Designation}</p>
            <p><strong>Job Location:</strong> ${formData.Job_Location}</p>
            <p><strong>Job Technologies:</strong> ${
              formData.Job_Technologies
            }</p>
            <p><strong>Documents to Carry:</strong> ${
              formData.Documents_to_Carry
            }</p>
            <p><strong>Company Registration Link:</strong> ${
              formData.Company_registration_Link
            }</p>
            <p><strong>College Registration Link:</strong> ${
              formData.College_registration_Link
            }</p>
            <p><strong>Note:</strong> ${formData.Note}</p>
          </div>

          <div class="notice-content">
            <div class="content-body">${previewContent}</div>
          </div>
          <div class="fromto">
            <p>${formData.From}</p>
            <p>${formData.From_designation}</p>
          </div>

          ${
            copytoimage
              ? `<img src="${copytoimage}" alt="Footer" class="footerImage" />`
              : ""
          }
        </body>
      </html>
    `);
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <div style={{ padding: "30px 200px" }}>
      <h2>NOTICE DETAILS : PLACEMENTS LINKED INTERNSHIP</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type={key === "date" ? "date" : "text"}
            name={key}
            value={formData[key]}
            onChange={handleInputChange}
            placeholder={key.replace(/_/g, " ").toUpperCase()}
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderStyle: "solid",
              padding: 10,
              borderRadius: 5,
            }}
          />
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <JoditEditor
          ref={editor}
          value={content}
          config={{
            height: 300,
            readonly: false,
          }}
          onBlur={(newContent) => setContent(newContent)}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={printContent}
          style={{
            marginTop: "20px",
            padding: "10px 25px",
            border: "1px solid grey",
            borderRadius: "5px",
            backgroundColor: "#fff",
          }}
        >
          Print Content
        </button>
      </div>
    </div>
  );
};

export default Pli;
  