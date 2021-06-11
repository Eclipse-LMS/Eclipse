import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardSidebar.css";
import React from "react";

const DashboardSidebar = () => {
  return (
    <div className="sidebar">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Student Zone
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <ul >
              <li>Do this</li>
              <li>Or that</li>
              <li>Maybe this</li>
              <li>Naah that</li>
            </ul>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Tutor Zone
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
             <ul >
              <li>Do this</li>
              <li>Or that</li>
              <li>Maybe this</li>
              <li>Naah that</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
