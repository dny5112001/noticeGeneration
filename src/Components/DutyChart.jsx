// import React, { useState, useRef, useEffect } from "react";
// import headerImage from "../assets/tcet header.jpg";
// import copytoimage from "../assets/pmt-placement_drive_copytoImage.png";

// const DutyChart = () => {
//   const editor = useRef(null);
//   const [content, setContent] = useState("");
//   const [formData, setFormData] = useState({
//     srNo: "",
//     to: "",
//     subject: "",
//     date: new Date().toISOString().split("T")[0],
//     Intro: "",
//     Note: "",
//     From: "",
//     From_designation: "",
//   });

//   const [tableData, setTableData] = useState([
//     {
//       srNo: "",
//       name: "",
//       designation: "",
//       department: "",
//       reportingTime: "",
//       roles: "",
//       signature: "",
//     },
//   ]);

//   // Fetch initial data from the API
//   useEffect(() => {
//     fetch("http://localhost:3000/api/get-duty-chart")
//       .then((response) => response.json())
//       .then((data) => {
//         setFormData(data.formData || formData);
//         setTableData(data.tableData || tableData);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleTableChange = (index, field, value) => {
//     const updatedTableData = [...tableData];
//     updatedTableData[index][field] = value;
//     setTableData(updatedTableData);
//   };

//   const addRow = () => {
//     setTableData([
//       ...tableData,
//       {
//         srNo: "",
//         name: "",
//         designation: "",
//         department: "",
//         reportingTime: "",
//         roles: "",
//         signature: "",
//       },
//     ]);
//   };

//   const removeRow = (index) => {
//     const updatedTableData = tableData.filter((_, i) => i !== index);
//     setTableData(updatedTableData);
//   };

//   const printContent = () => {
//     const previewContent = editor.current?.value || content;
//     const newWindow = window.open("", "_blank", "width=800,height=600");
//     newWindow.document.write(`
//       <html>
//         <head>
//           <style>
//             body {
//               font-family: Arial, sans-serif;
//               padding: 20px;
//               margin: 0;
//             }
//             .flex-container {
//               display: flex;
//               justify-content: space-between;
//               align-items: center;
//               gap: 20px;
//             }
//             table {
//               width: 100%;
//               border-collapse: collapse;
//             }
//             table, th, td {
//               border: 1px solid black;
//             }
//             th, td {
//               padding: 8px;
//               text-align: left;
//             }
//             .content-header {
//               margin-bottom: 5px;
//               text-align: center;
//             }
//             .footerImage {
//               margin-top: 80px;
//             }
//             .fromto {
//               float: right;
//               margin-right: 20px;
//             }
//           </style>
//         </head>
//         <body>
//           ${headerImage ? `<img src="${headerImage}" alt="Header" />` : ""}
//           <h2 class="content-header">NOTICE</h2>
//           <div class="flex-container">
//             <p><strong>Serial No:</strong> ${formData.srNo}</p>
//             <p><strong>Date:</strong> ${formData.date}</p>
//           </div>
//           <p><strong>To:</strong> ${formData.to}</p>
//           <p><strong>Subject:</strong> ${formData.subject}</p>
//           <p><strong>Intro:</strong> ${formData.Intro}</p>
//           <table>
//             <thead>
//               <tr>
//                 <th>Serial No</th>
//                 <th>Name</th>
//                 <th>Designation</th>
//                 <th>Department</th>
//                 <th>Reporting Time</th>
//                 <th>Roles and Responsibilities</th>
//                 <th>Signature</th>
//               </tr>
//             </thead>
//             <tbody>
//               ${tableData
//                 .map(
//                   (row) => `
//                 <tr>
//                   <td>${row.srNo}</td>
//                   <td>${row.name}</td>
//                   <td>${row.designation}</td>
//                   <td>${row.department}</td>
//                   <td>${row.reportingTime}</td>
//                   <td>${row.roles}</td>
//                   <td>${row.signature}</td>
//                 </tr>`
//                 )
//                 .join("")}
//             </tbody>
//           </table>
//           <p><strong>Note:</strong> ${formData.Note}</p>
//           <div class="fromto">
//             <p>${formData.From}</p>
//             <p>${formData.From_designation}</p>
//           </div>
//           ${
//             copytoimage
//               ? `<img src="${copytoimage}" alt="Footer" class="footerImage" />`
//               : ""
//           }
//         </body>
//       </html>
//     `);
//     newWindow.document.close();
//     newWindow.print();
//   };

//   return (
//     <div style={{ padding: "30px 100px" }}>
//       <h2>NOTICE DETAILS : DUTY CHART</h2>
//       <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//         {Object.keys(formData).map((key) => (
//           <input
//             key={key}
//             type={key === "date" ? "date" : "text"}
//             name={key}
//             value={formData[key]}
//             onChange={handleInputChange}
//             placeholder={key.replace(/_/g, " ").toUpperCase()}
//             style={{
//               borderWidth: 1,
//               borderColor: "black",
//               borderStyle: "solid",
//               padding: 10,
//               borderRadius: 5,
//             }}
//           />
//         ))}
//       </div>

//       <h3>Table Data</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>Serial No</th>
//             <th>Name</th>
//             <th>Designation</th>
//             <th>Department</th>
//             <th>Reporting Time</th>
//             <th>Roles</th>
//             <th>Signature</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((row, index) => (
//             <tr key={index}>
//               {Object.keys(row).map((field) => (
//                 <td key={field}>
//                   <input
//                     type="text"
//                     style={{
//                       borderWidth: 1,
//                       borderColor: "black",
//                       borderStyle: "solid",
//                       padding: 5,
//                       borderRadius: 5,
//                     }}
//                     value={row[field]}
//                     onChange={(e) =>
//                       handleTableChange(index, field, e.target.value)
//                     }
//                   />
//                 </td>
//               ))}
//               <td>
//                 <button
//                   onClick={() => removeRow(index)}
//                   style={{
//                     backgroundColor: "black",
//                     color: "white",
//                     paddingLeft: 10,
//                     paddingRight: 10,
//                     borderRadius: 5,
//                     paddingTop: 5,
//                     paddingBottom: 5,
//                   }}
//                 >
//                   Remove
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div style={{ display: "flex", gap: "20px", marginTop: 10 }}>
//         <button
//           onClick={addRow}
//           style={{
//             backgroundColor: "black",
//             color: "white",
//             paddingLeft: 10,
//             paddingRight: 10,
//             borderRadius: 5,
//             paddingTop: 5,
//             paddingBottom: 5,
//           }}
//         >
//           Add Row
//         </button>
//         <button
//           onClick={printContent}
//           style={{
//             backgroundColor: "black",
//             color: "white",
//             paddingLeft: 10,
//             paddingRight: 10,
//             borderRadius: 5,
//             paddingTop: 5,
//             paddingBottom: 5,
//           }}
//         >
//           Print Content
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DutyChart;

import React, { useState, useEffect } from "react";
import "./DutyChart.css";
import headerImage from "../assets/tcet header.jpg";
import copytoimage from "../assets/pmt-placement_drive_copytoImage.png";

const DutyChart = () => {
  const [formData, setFormData] = useState({
    srNo: "",
    to: "",
    subject: "",
    date: new Date().toISOString().split("T")[0],
    Intro: "",
    Note: "",
    From: "",
    From_designation: "",
  });

  const [tableData, setTableData] = useState([
    {
      srNo: "",
      name: "",
      designation: "",
      department: "",
      reportingTime: "",
      roles: "",
      signature: "",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:3000/api/get-duty-chart")
      .then((response) => response.json())
      .then((data) => {
        setFormData(data.formData || formData);
        setTableData(data.tableData || tableData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTableChange = (index, field, value) => {
    const updatedTableData = [...tableData];
    updatedTableData[index][field] = value;
    setTableData(updatedTableData);
  };

  const addRow = () => {
    setTableData([
      ...tableData,
      {
        srNo: "",
        name: "",
        designation: "",
        department: "",
        reportingTime: "",
        roles: "",
        signature: "",
      },
    ]);
  };

  const removeRow = (index) => {
    const updatedTableData = tableData.filter((_, i) => i !== index);
    setTableData(updatedTableData);
  };

  const printContent = () => {
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
            .flex-container {
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 20px;
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
            .content-header {
              margin-bottom: 5px;
              text-align: center;
            }
            .fromto {
              float: right;
              margin-right: 20px;
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
          <p><strong>To:</strong> ${formData.to}</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <p><strong>Intro:</strong> ${formData.Intro}</p>
          <table>
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th>Reporting Time</th>
                <th>Roles and Responsibilities</th>
                <th>Signature</th>
              </tr>
            </thead>
            <tbody>
              ${tableData
                .map(
                  (row) => `
                <tr>
                  <td>${row.srNo}</td>
                  <td>${row.name}</td>
                  <td>${row.designation}</td>
                  <td>${row.department}</td>
                  <td>${row.reportingTime}</td>
                  <td>${row.roles}</td>
                  <td>${row.signature}</td>
                </tr>`
                )
                .join("")}
            </tbody>
          </table>
          <p><strong>Note:</strong> ${formData.Note}</p>
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
    <div className="duty-chart-container">
      <h2 className="duty-chart-title">NOTICE DETAILS : DUTY CHART</h2>
      <form className="form-grid">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="form-group">
            <label htmlFor={key} className="form-label">
              {key.replace(/_/g, " ").toUpperCase()}
            </label>
            <input
              id={key}
              type={key === "date" ? "date" : "text"}
              name={key}
              value={value}
              onChange={handleInputChange}
              placeholder={key.replace(/_/g, " ").toUpperCase()}
              className="form-input"
            />
          </div>
        ))}
      </form>

      <div className="table-container">
        <h3>Table Data</h3>
        <table className="duty-table">
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Reporting Time</th>
              <th>Roles</th>
              <th>Signature</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                {Object.keys(row).map((field) => (
                  <td key={field}>
                    <input
                      type="text"
                      style={{ marginRight: 10 }}
                      value={row[field]}
                      onChange={(e) =>
                        handleTableChange(index, field, e.target.value)
                      }
                    />
                  </td>
                ))}
                <td>
                  <button
                    className="button remove-button"
                    onClick={() => removeRow(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="button-container">
        <button className="button" onClick={addRow}>
          Add Row
        </button>
        <button className="button" onClick={printContent}>
          Print Content
        </button>
      </div>
    </div>
  );
};

export default DutyChart;
