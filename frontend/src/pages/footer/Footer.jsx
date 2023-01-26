import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <footer id="sticky-footer" class="flex-shrink-0 py-2  ">
      <div class="container text-center">
        <div className="row">
          <div className="col-md-4">
            <h5>Developed By</h5>
            <p>Monzurul Haque</p>
            <p>Aminur Rahman</p>
            <p>Ashiqur Rahman</p>
          </div>
          <div className="col-md-4">
            <p>Department of cse</p>
            <p>Chittagong university of Engineering and Technology</p>
            <p>Chattagoram-4349,Bangladesh</p>
            <a class="text-dark" href="https://mdbootstrap.com/">© 2020 Copyright:PTS.com</a>
          </div>
          <div className="col-md-4">
          
            <section class="mb-4 mt-5">
              <a
                class="btn text-white btn-floating m-1"
                // style="background-color: #3b5998;"
                style={{backgroundColor: "#3b5998"}}
                href="#!"
                role="button"
              >
                <i class="fab fa-facebook-f"></i>
              </a>

              {/* <!-- Twitter --> */}
              <a
                class="btn text-white btn-floating m-1"
                style={{backgroundColor: "#55acee"}}
                href="#!"
                role="button"
              >
                <i class="fab fa-twitter"></i>
              </a>

              {/* <!-- Instagram --> */}
              <a
                class="btn text-white btn-floating m-1"
                style={{backgroundColor:"#ac2bac"}}
                href="#!"
                role="button"
              >
                <i class="fab fa-instagram"></i>
              </a>

              {/* <!-- Linkedin --> */}
              <a
                class="btn text-white btn-floating m-1"
                // style="background-color: #0082ca;"
                style={{backgroundColor:"#0082ca"}}
                href="#!"
                role="button"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              {/* <!-- Github --> */}
              <a
                class="btn text-white btn-floating m-1"
                // style="background-color: #333333;"
                style={{backgroundColor:"#333333"}}
                href="#!"
                role="button">
                <i class="fab fa-github"></i>
              </a>
            </section>
            </div>
          </div>
        </div>
      
    </footer>
  );
}
