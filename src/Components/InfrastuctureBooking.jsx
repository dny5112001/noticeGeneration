import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import headerImage from "../assets/tcet header.jpg";
import copytoimage from "../assets/pmt-placement_drive_copytoImage.png";

const InfrastuctureBooking = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [formData, setFormData] = useState({
    srNo: "",
    sender: "",
    senderAddLine1: "",
    senderAddLine2: "",
    senderAddLine3: "",
    senderAddLine4: "",
    receiver: "",
    receiverAddLine1: "",
    receiverAddLine2: "",
    receiverAddLine3: "",
    receiverAddLine4: "",
    subject: "",
    date: new Date().toISOString().split("T")[0],
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
            .content-header {
              text-align: center;
            }
            .flex-container {
              display: flex;
              justify-content: space-between;
              margin-bottom: 20px;
            }
            .main_body {
            }
            .fromto {
              float: right;
              margin-right: 20px;
            }
            .sender {
              float:right;

            }
            .receiver {
              text-align: left;
              margin-top:400px;
              clear: both; /* Ensures the receiver doesn't float next to the sender */

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
            <div class="sender">
              <p><strong>From:</strong> ${formData.sender}</p>
              <p>${formData.senderAddLine1}</p>
              <p>${formData.senderAddLine2}</p>
              <p>${formData.senderAddLine3}</p>
              <p>${formData.senderAddLine4}</p>
            </div>

            <div class="receiver">
              <p><strong>To:</strong> ${formData.receiver}</p>
              <p>${formData.receiverAddLine1}</p>
              <p>${formData.receiverAddLine2}</p>
              <p>${formData.receiverAddLine3}</p>
              <p>${formData.receiverAddLine4}</p>
            </div>

            <p><strong>Subject:</strong> ${formData.subject}</p>
            <div>${previewContent}</div>

            <p><strong>Note:</strong> ${formData.Note}</p>
            <div class="fromto"> ${formData.From}</p>
            <p>${formData.From_designation}</p></div>
           
          </div>
          ${copytoimage ? `<img src="${copytoimage}" alt="Footer" />` : ""}
        </body>
      </html>
    `);
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <div style={{ padding: "30px 200px" }}>
      <h2>NOTICE DETAILS : INFRASTUCTURE BOOKING</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          name="srNo"
          value={formData.srNo}
          onChange={handleInputChange}
          placeholder="Serial No"
          style={{ height: "40px" }}
        />
        <input
          type="text"
          name="sender"
          value={formData.sender}
          onChange={handleInputChange}
          placeholder="Sender"
          style={{ height: "40px" }}
        />
        <input
          type="text"
          name="senderAddLine1"
          value={formData.senderAddLine1}
          onChange={handleInputChange}
          placeholder="Sender Address Line 1"
          style={{ height: "40px" }}
        />
        <input
          type="text"
          name="senderAddLine2"
          value={formData.senderAddLine2}
          onChange={handleInputChange}
          placeholder="Sender Address Line 2"
          style={{ height: "40px" }}
        />
        <input
          type="text"
          name="senderAddLine3"
          value={formData.senderAddLine3}
          onChange={handleInputChange}
          placeholder="Sender Address Line 3"
          style={{ height: "40px" }}
        />
        <input
          type="text"
          name="senderAddLine4"
          value={formData.senderAddLine4}
          onChange={handleInputChange}
          placeholder="Sender Address Line 4"
          style={{ height: "40px" }}
        />
        <input
          type="text"
          name="receiver"
          value={formData.receiver}
          onChange={handleInputChange}
          placeholder="Receiver"
          style={{ height: "40px" }}
        />
        <input
          type="text"
          name="receiverAddLine1"
          value={formData.receiverAddLine1}
          onChange={handleInputChange}
          placeholder="Receiver Address Line 1"
          style={{ height: "40px" }}
        />
        <input
          type="text"
          name="receiverAddLine2"
          value={formData.receiverAddLine2}
          onChange={handleInputChange}
          placeholder="Receiver Address Line 2"
          style={{ height: "40px" }}
        />
        <input
          type="text"
          name="receiverAddLine3"
          value={formData.receiverAddLine3}
          onChange={handleInputChange}
          placeholder="Receiver Address Line 3"
          style={{ height: "40px" }}
        />
        <input
          type="text"
          name="receiverAddLine4"
          value={formData.receiverAddLine4}
          onChange={handleInputChange}
          placeholder="Receiver Address Line 4"
          style={{ height: "40px" }}
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="Subject"
          style={{ height: "40px" }}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          style={{ height: "40px" }}
        />
        <textarea
          name="Note"
          value={formData.Note}
          onChange={handleInputChange}
          placeholder="Note"
          style={{ height: "40px" }}
        />
        <input
          type="text"
          name="From"
          value={formData.From}
          onChange={handleInputChange}
          placeholder="From"
          style={{ height: "40px" }}
        />
        <input
          type="text"
          name="From_designation"
          value={formData.From_designation}
          onChange={handleInputChange}
          placeholder="From Designation"
          style={{ height: "40px" }}
        />
      </form>
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

export default InfrastuctureBooking;
