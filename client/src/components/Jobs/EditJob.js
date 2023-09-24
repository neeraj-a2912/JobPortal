import React from "react";
import Navbar from "../ForHeader/Navbar";
import Footer from "../ForFooter/Footer";
export default function EditJob() {
  return (
    <div>
      <Navbar />
      <div className="container add-job">
        <div className="row">
          <div>
            <form className="row g-3">
              <div className="col-md-6">
                <label for="title" className="form-label">
                  Job Title
                </label>
                <input
                  type="text"
                  className="form-control shadow-none"
                  id="title"
                />
              </div>
              <div className="col-md-6">
                <label for="company" className="form-label">
                  Company
                </label>
                <input
                  type="text"
                  className="form-control shadow-none"
                  id="company"
                />
              </div>
              <div className="col-md-6">
                <label for="skills" className="form-label">
                  Skills Required
                </label>
                <input
                  type="text"
                  className="form-control shadow-none"
                  id="skills"
                />
              </div>
              <div className="col-md-6">
                <label for="job-type" className="form-label">
                  Job Type
                </label>
                <select name="job-type" className="form-select shadow-none">
                  <option value="Full Time">Full Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
              <div className="col-12">
                <label for="description" className="form-label">
                  Description
                </label>
                <textarea
                  type="text"
                  className="form-control shadow-none"
                  id="description"
                  rows={10}
                ></textarea>
              </div>
              <div className="col-12">
                <label for="skills" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control shadow-none"
                  id="location"
                  placeholder="Ex. Hyderabad, India"
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Add Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
