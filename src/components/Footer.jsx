/** @format */

import React from "react";
import logo from "../assets/TEJ-logos.png";

const Footer = () => {
  return (
    <div id="Footer" className="">
      <footer className="footer p-10 bg-base-200 bg-[#236c7256] ">
        <aside>
          <img src={logo} className="w-16 h-16" />
          <p>
            FLA7H-TEH
            <br />
            Providing reliable tech solutions
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
