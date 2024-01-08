import React, { useEffect } from "react";
import "../styles/signForm.css";
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { gapi } from "gapi-script";
import GoogleLogin from '../components/GoogleLogin'

const clientId = "604198012661-m2cnpb6f1r67k7fal1ocru6biu08eojd.apps.googleusercontent.com"

function Login() {

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId:clientId,
        scope:""
      })
    } 
    gapi.load("client:auth2", start)
  })

  return (
    <section className="background-radial-gradient overflow-hidden">
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
            <h1
              className="my-5 display-5 fw-bold ls-tight"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              The best offer <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                for your business
              </span>
            </h1>
            <p
              className="mb-4 opacity-70"
              style={{ color: "hsl(218, 81%, 85%)" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus, expedita iusto veniam atque, magni tempora mollitia
              dolorum consequatur nulla, neque debitis eos reprehenderit quasi
              ab ipsum nisi dolorem modi. Quos?
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                    />
                  </div>
                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example33"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="form2Example33"
                    >
                      Subscribe to our newsletter
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4 w-100"
                  >
                    Sign IN
                  </button>
                  <GoogleLogin />
                  <p className="small fw-bold  pt-1 mb-3">
                    Don't have an account?{" "}
                    <Link to="/register" className="link-danger">
                      Register
                    </Link>
                  </p>
                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaFacebookF size={16} />
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaGoogle size={16} />
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaTwitter size={16} />
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaGithub size={16} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
