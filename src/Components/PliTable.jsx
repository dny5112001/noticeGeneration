import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import headerImage from "../assets/tcet header.jpg";
import copytoimage from "../assets/pmt-placement_drive_copytoImage.png";

const PliTable = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [formData, setFormData] = useState({
    srNo: "",
    to: "",
    subject: "",
    date: new Date().toISOString().split("T")[0],
    Intro: "",
    Eligibility_Criteria: "",
    Emoluments: "",
    Job_Location: "",
    Documents_to_Carry: "",
    Company_registration_Link: "",
    College_registration_Link: "",
    Note: "",
    From: "",
    From_designation: "",
  });

  const [tableData, setTableData] = useState([
    { role: "", job_designation: "", job_technologies: "" },
  ]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTableInputChange = (index, field, value) => {
    const newTableData = [...tableData];
    newTableData[index][field] = value;
    setTableData(newTableData);
  };

  const addTableRow = () => {
    setTableData([
      ...tableData,
      { role: "", job_designation: "", job_technologies: "" },
    ]);
  };

  const removeTableRow = (index) => {
    const newTableData = tableData.filter((_, i) => i !== index);
    setTableData(newTableData);
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
              line-height: 1.6;
            }
            .header-image {
              max-width: 100%;
              height: auto;
              object-fit: contain;
              margin-bottom: 20px;
            }
            .content-header {
              text-align: center;
              margin-bottom: 20px;
              font-size: 24px;
              font-weight: bold;
            }
            .flex-container {
              display: flex;
              justify-content: space-between;
              margin-bottom: 20px;
            }
            .main-body {
              margin-bottom: 30px;
            }
            .main-body p {
              margin-bottom: 10px;
            }
            .notice-content {
              margin-bottom: 30px;
              border-top: 1px solid #ccc;
              padding-top: 20px;
            }
            .fromto {
              text-align: right;
            }
            .footer-image {
              max-width: 100%;
              height: auto;
              object-fit: contain;
              margin-top: 30px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: #f2f2f2;
            }
          </style>
        </head>
        <body>
          <img src="${headerImage}" alt="Header" class="header-image" />
          <h2 class="content-header">NOTICE</h2>
          <div class="flex-container">
            <p><strong>Serial No:</strong> ${formData.srNo}</p>
            <p><strong>Date:</strong> ${formData.date}</p>
          </div>
          <div class="main-body">
            <p><strong>To:</strong> ${formData.to}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Intro:</strong> ${formData.Intro}</p>
            <p><strong>Eligibility Criteria:</strong> ${
              formData.Eligibility_Criteria
            }</p>
            <p><strong>Emoluments:</strong> ${formData.Emoluments}</p>
            <p><strong>Job Location:</strong> ${formData.Job_Location}</p>
            <table>
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Job Designation</th>
                  <th>Job Technologies</th>
                </tr>
              </thead>
              <tbody>
                ${tableData
                  .map(
                    (row) => `
                  <tr>
                    <td>${row.role}</td>
                    <td>${row.job_designation}</td>
                    <td>${row.job_technologies}</td>
                  </tr>
                `
                  )
                  .join("")}
              </tbody>
            </table>
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
          <div class="fromto">
            <p>${formData.From}</p>
            <p>${formData.From_designation}</p>
          </div>
          <img src="${copytoimage}" alt="Footer" class="footer-image" />
        </body>
      </html>
    `);
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        marginBottom: "60px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "20px",
          fontSize: "24px",
        }}
      >
        NOTICE DETAILS : PLACEMENTS LINKED INTERNSHIP
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "15px",
        }}
      >
        {Object.keys(formData).map((key) => (
          <div key={key} style={{ display: "flex", flexDirection: "column" }}>
            <label
              htmlFor={key}
              style={{
                marginBottom: "5px",
                fontSize: "14px",
                color: "#555",
              }}
            >
              {key.replace(/_/g, " ").toUpperCase()}:
            </label>
            <input
              type={key === "date" ? "date" : "text"}
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleInputChange}
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                borderStyle: "solid",
                padding: "10px",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            />
          </div>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3 style={{ marginBottom: "10px", fontSize: "18px" }}>
          Roles, Job Designations, and Technologies
        </h3>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "10px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  backgroundColor: "#f2f2f2",
                }}
              >
                Role
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  backgroundColor: "#f2f2f2",
                }}
              >
                Job Designation
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  backgroundColor: "#f2f2f2",
                }}
              >
                Job Technologies
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  backgroundColor: "#f2f2f2",
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <input
                    type="text"
                    value={row.role}
                    onChange={(e) =>
                      handleTableInputChange(index, "role", e.target.value)
                    }
                    style={{
                      width: "95%",
                      border: "none",
                      padding: "5px",
                      backgroundColor: "#f4f5f6",
                    }}
                  />
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <input
                    type="text"
                    value={row.job_designation}
                    onChange={(e) =>
                      handleTableInputChange(
                        index,
                        "job_designation",
                        e.target.value
                      )
                    }
                    style={{
                      width: "95%",
                      border: "none",
                      padding: "5px",
                      backgroundColor: "#f4f5f6",
                    }}
                  />
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <input
                    type="text"
                    value={row.job_technologies}
                    onChange={(e) =>
                      handleTableInputChange(
                        index,
                        "job_technologies",
                        e.target.value
                      )
                    }
                    style={{
                      width: "95%",
                      border: "none",
                      padding: "5px",
                      backgroundColor: "#f4f5f6",
                    }}
                  />
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <button
                    onClick={() => removeTableRow(index)}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#ff4d4d",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={addTableRow}
          style={{
            padding: "5px 10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Row
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={printContent}
          style={{
            marginTop: "20px",
            padding: "10px 25px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#4CAF50",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Print Content
        </button>
      </div>
    </div>
  );
};

export default PliTable;
