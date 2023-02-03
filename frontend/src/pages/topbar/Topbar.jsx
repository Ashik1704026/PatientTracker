import React from "react";
import "./topbar.css"

export default function Topbar() {
  return (
    <div className="fixed-top">
      <nav class="navbar navbar-expand-lg bg-light opacity-75">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Patient Tracker
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
