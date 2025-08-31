import React from "react";

function Ticket() {
  return (
    <div style={{ marginTop: "3.5rem", backgroundColor: "#f8f9fa" }}>
      <div className="container py-5 my-5">
        <div
          className="mb-4"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 className="mb-4">Support Portal</h1>
          <button className="btn btn-primary" type="button">
            My Tickets
          </button>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Eg: How do I open my account, How do I activate F&O..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;