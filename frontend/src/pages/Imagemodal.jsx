import React from "react";
import pic from "../assets/book.jpg";

export default function Imagemodal() {
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Click to view modal
      </button>
      {/* <!--Bootstrap modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            {/* <!-- Modal heading --> */}
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                aGuideHub
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            {/* <!-- Modal body with image --> */}
            <div class="modal-body">
              <img src={pic} alt="sdjhskfjds" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
