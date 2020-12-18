import React from "react";
import "../styles/nav.css";
function NavBar() {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <a href="biz.html">For Businesses</a>
          </li>
          <li>
            <a href="press.html">PR Services</a>
          </li>
          <li>
            <a href="instagram.html">IG Services</a>
          </li>
          <li>
            <a href="giveaway.html">Giveaways</a>
          </li>
          <li>
            <a href="partner.html">Partnership Access</a>
          </li>
          <li>
            <a href="#testimonial">Testimonials</a>
          </li>
          <li>
            <a href="#packages">Packages</a>
          </li>
        </ul>

        <div className="dropdown-1">
          <a
            href="#"
            onclick="document.getElementById('id01').style.display='block'"
          >
            <img
              className="hometitle"
              src={process.env.PUBLIC_URL + "/images/lion.png"}
              height="50px"
              width="50px"
            />
          </a>

          <div id="id01" className="dropdown-content-1">
            <a href="#">Home</a>
            <a href="#packages">Packages</a>
            <a href="#testimonial">Testimonials</a>
            <a href="partner.html">Partner With Us</a>
            <a href="giveaway.html">Celebrity Giveaways</a>
            <a href="instagram.html">Instagram Services</a>
            <a href="press.html">PR Services</a>
            <a href="biz.html">Business Services</a>
            <a onclick="document.getElementById('id01').style.display='none'">
              &#10005;
            </a>
          </div>
        </div>

        <p className="phrase">THE BEST IN THE INDUSTRY.</p>
      </nav>
    </div>
  );
}

export default NavBar;
