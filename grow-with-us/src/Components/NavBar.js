import React from "react";
import "../styles/nav.css";
function NavBar() {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/for_business">For Businesses</a>
          </li>
          <li>
            <a href="/pr_services">PR Services</a>
          </li>
          <li>
            <a href="/instagram_services">IG Services</a>
          </li>
          <li>
            <a href="/giveaways">Giveaways</a>
          </li>
          <li>
            <a href="/partnership_access">Partnership Access</a>
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
            <a href="/partnership_access">Partner With Us</a>
            <a href="/giveaways">Celebrity Giveaways</a>
            <a href="/instagram_services">Instagram Services</a>
            <a href="/pr_services">PR Services</a>
            <a href="/for_business">Business Services</a>
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
