import React from "react";
import { Navbar } from "../components";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center border-bottom border-3 pb-3">Contact US</h1>
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-6 col-sm-8 mx-auto">
            <form>
              <div className="form my-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your name"
                  className="form-control"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your email address"
                  className="form-control"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="message">Message</label>
                <textarea
                  rows={5}
                  id="message"
                  placeholder="Enter Your email address"
                  className="form-control"
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  disabled
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
