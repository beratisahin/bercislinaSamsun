import "./Navbar.css";
import React, { Component } from "react";

import { Menubar } from "primereact/menubar";

import BusinessIcon from "@material-ui/icons/Business";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import HomeIcon from "@material-ui/icons/Home";
import ContactlessIcon from "@material-ui/icons/Contactless";
import CategoryIcon from "@material-ui/icons/Category";

import Logo4 from "./berSamLogo.png";

export default class Navbar extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", function () {
      this.classList.toggle("close");
    });

    document.body.appendChild(script);
  }
  render() {
    return (
      <header>
        <nav class="navbar">
          <div class="branding">
            <a href="/">
              <img
                className="BlueLivaLogo"
                title="Samsun Bercislina Güzellik Merkezi"
                src={Logo4}
              ></img>
            </a>
          </div>
          <label for="input-hamburger" class="hamburger "></label>
          <input type="checkbox" id="input-hamburger" hidden></input>
          <ul class="menu">
            <li>
              <a href="/" class="menu-link" style={{ fontSize: "medium" }}>
                <HomeIcon style={{ fontSize: "medium" }} />
                &nbsp;Ana Sayfa
              </a>
            </li>
            <li>
              <a
                href="/hakkimizda"
                class="menu-link"
                style={{ fontSize: "medium" }}
              >
                <BusinessIcon style={{ fontSize: "medium" }} />
                &nbsp;Hakkımızda
              </a>
            </li>
            <li class="has-dropdown">
              <a href="#" class="menu-link" style={{ fontSize: "medium" }}>
                <i class="fa-regular fa-snowflake"></i>&nbsp;Hizmetlerimiz
                &nbsp;
                <span class="arrow"></span>
              </a>
              <ul class="submenu">
                <li>
                  <a href="/medikal-cilt-bakimi" class="menu-link">
                    Medikal Cilt Bakımı
                  </a>
                </li>
                <li>
                  <a href="/champion-lazer-epilasyon" class="menu-link">
                    Champion Lazer Epilasyon
                  </a>
                </li>
                <li>
                  <a href="/hydrafacial-cilt-bakimi" class="menu-link">
                    Hydrafacial Cilt Bakımı
                  </a>
                </li>
                <li>
                  <a href="/g5-kavitasyon" class="menu-link">
                    G5 Masajı - Kavitasyon
                  </a>
                </li>
                <li>
                  <a href="/kirpik-lifting" class="menu-link">
                    Kirpik Lifting
                  </a>
                </li>
                <li>
                  <a href="/kas-laminasyonu" class="menu-link">
                    Kaş Laminasyonu
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="/cihazlarimiz"
                class="menu-link"
                style={{ fontSize: "medium" }}
              >
                <CategoryIcon style={{ fontSize: "medium" }} />
                &nbsp;Cihazlarımız
              </a>
            </li>
            <li class="has-dropdown">
              <a href="#" class="menu-link" style={{ fontSize: "medium" }}>
                <CameraAltIcon style={{ fontSize: "medium" }} />
                &nbsp;Galeri &nbsp;
                <span class="arrow"></span>
              </a>
              <ul class="submenu">
                <li>
                  <a href="/fotograflar" class="menu-link">
                    Fotoğraf
                  </a>
                </li>
                <li>
                  <a href="/videolar" class="menu-link">
                    Video
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/blog" class="menu-link" style={{ fontSize: "medium" }}>
                <ContactlessIcon style={{ fontSize: "medium" }} />
                &nbsp;Blog
              </a>
            </li>
            <li>
              <a
                href="/iletisim"
                class="menu-link"
                style={{ fontSize: "medium" }}
              >
                <ContactMailIcon style={{ fontSize: "medium" }} />
                &nbsp;İletişim
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
