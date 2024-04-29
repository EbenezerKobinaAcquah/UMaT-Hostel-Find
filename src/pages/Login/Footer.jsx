import React, {useState} from "react";

function NewFooter (){
    return <footer className="footer-container ">
    <div className="flex p-[5%]">
      <div className=" w-[40%] mr-[10%]">
        <div className="mb-5">
          <img
            src="images/Bootstrap_logo.svg.png"
            className="w-16 h-12"
          ></img>
        </div>
        <div className="mb-5 footer-content ">
          Lorem Ipsum is simply dummy text of the printing and type setting
          at industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley
          of type & scrambled it to make a type specimen book.
        </div>
        <div className="flex">
          <a href="https://www.youtube.com">
            <img
              src="images/facebook-icon.png"
              className="w-8 h-8 mr-3"
            ></img>
          </a>
          <a href="https://www.youtube.com">
            <img
              src="images/instagram-icon.png"
              className="w-8 h-8 mr-3"
            ></img>
          </a>
          <a href="https://www.youtube.com">
            <img
              src="images/twitter-icon.png"
              className="w-8 h-8 mr-3"
            ></img>
          </a>
          <a href="https://www.youtube.com">
            <img
              src="images/linkedin-icon.png"
              className="w-8 h-8 mr-3"
            ></img>
          </a>
        </div>
      </div>

      <div className="w-[20%] ">
        <h2 className="mb-5">Company</h2>
        <div className="footer-content">
          <a>
            <p className="mb-3">About us </p>
          </a>
          <a>
            <p className="mb-3">About us </p>
          </a>
          <a>
            <p className="mb-3">About us </p>
          </a>
          <a>
            <p className="mb-3">About us </p>
          </a>
          <a>
            <p>About us </p>
          </a>
        </div>
      </div>

      <div className="w-[20%]">
        <h2 className="mb-5">Destinations</h2>
        <div className="footer-content">
          <a>
            <p className="mb-3">Tarkwa </p>
          </a>
          <a>
            <p className="mb-3">Accra </p>
          </a>
          <a>
            <p className="mb-3">Kumasi </p>
          </a>
          <a>
            <p className="mb-3">About us </p>
          </a>
          <a>
            <p className="mb-3">About us </p>
          </a>
        </div>
      </div>

      <div className="w-[20%]">
        <h2 className="mb-5">Contact Us</h2>
        <div className="footer-content">
          <a>
            <p className="mb-3">Tarkwa </p>
          </a>
          <a>
            <p className="mb-3">Accra </p>
          </a>
          <a>
            <p className="mb-3">Kumasi </p>
          </a>
          <a>
            <p className="mb-3">About us </p>
          </a>
          <a>
            <p className="mb-3">About us </p>
          </a>
        </div>
      </div>
    </div>
    <div className="thin-line-horizontal-footer mt-5 mb-5"></div>

    <p className="footer-content big-searchBox p-4">
      © 2024 - UMaT-hostels | All rights reserved
    </p>
  </footer>
}

export default NewFooter;