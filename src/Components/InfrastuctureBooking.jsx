import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import headerImage from "../assets/tcet header.jpg";
import copytoimage from "../assets/pmt-placement_drive_copytoImage.png";

const InfrastructureBooking = () => {
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
    <div className="container">
      <h1 className="title">NOTICE DETAILS: INFRASTRUCTURE BOOKING</h1>
      <form className="form">
        <div className="form-group">
          <label htmlFor="srNo">Serial No</label>
          <input
            type="text"
            id="srNo"
            name="srNo"
            value={formData.srNo}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="sender">Sender</label>
            <input
              type="text"
              id="sender"
              name="sender"
              value={formData.sender}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="receiver">Receiver</label>
            <input
              type="text"
              id="receiver"
              name="receiver"
              value={formData.receiver}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="senderAddLine1">Sender Address</label>
            <input
              type="text"
              id="senderAddLine1"
              name="senderAddLine1"
              value={formData.senderAddLine1}
              onChange={handleInputChange}
              placeholder="Line 1"
            />
            <input
              type="text"
              name="senderAddLine2"
              value={formData.senderAddLine2}
              onChange={handleInputChange}
              placeholder="Line 2"
            />
            <input
              type="text"
              name="senderAddLine3"
              value={formData.senderAddLine3}
              onChange={handleInputChange}
              placeholder="Line 3"
            />
            <input
              type="text"
              name="senderAddLine4"
              value={formData.senderAddLine4}
              onChange={handleInputChange}
              placeholder="Line 4"
            />
          </div>
          <div className="form-group">
            <label htmlFor="receiverAddLine1">Receiver Address</label>
            <input
              type="text"
              id="receiverAddLine1"
              name="receiverAddLine1"
              value={formData.receiverAddLine1}
              onChange={handleInputChange}
              placeholder="Line 1"
            />
            <input
              type="text"
              name="receiverAddLine2"
              value={formData.receiverAddLine2}
              onChange={handleInputChange}
              placeholder="Line 2"
            />
            <input
              type="text"
              name="receiverAddLine3"
              value={formData.receiverAddLine3}
              onChange={handleInputChange}
              placeholder="Line 3"
            />
            <input
              type="text"
              name="receiverAddLine4"
              value={formData.receiverAddLine4}
              onChange={handleInputChange}
              placeholder="Line 4"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Note">Note</label>
          <textarea
            id="Note"
            name="Note"
            value={formData.Note}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="From">From</label>
            <input
              type="text"
              id="From"
              name="From"
              value={formData.From}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="From_designation">From Designation</label>
            <input
              type="text"
              id="From_designation"
              name="From_designation"
              value={formData.From_designation}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
      <div className="editor-container">
        <label htmlFor="content">Content</label>
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
      <div className="button-container">
        <button onClick={printContent} className="print-button">
          Print Content
        </button>
      </div>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .title {
          text-align: center;
          color: #333;
          margin-bottom: 20px;
        }
        .form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-row {
          display: flex;
          gap: 20px;
        }
        .form-group {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        label {
          margin-bottom: 5px;
          font-weight: bold;
        }
        input,
        textarea {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }
        textarea {
          height: 100px;
          resize: vertical;
        }
        .editor-container {
          margin-top: 20px;
        }
        .button-container {
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
        }
        .print-button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s;
        }
        .print-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default InfrastructureBooking;
