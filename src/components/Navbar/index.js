import { useContext, useEffect, useRef } from "react";
import Cart from "../Cart";
import {
  Container,
  Nav,
  Search,
  IconSearch,
  SearchContainer,
  CartContainer,
  CartImg,
  NumberOfProducts,
} from "./styles";

function Navbar({ handleSearch }) {
  const navRef = useRef();
  const inputRef = useRef();

  function scrollFunction() {
    var toggle = document.getElementById("botao");
    //navbar scroll
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navRef.current.classList.remove("navbar-transparent");
      navRef.current.style.boxShadow = "0 6px 10px -4px rgba(0, 0, 0, 0.15)";
      navRef.current.style.background = "#161b22";
      navRef.current.style.colors = "#fafafa";
      inputRef.current.style.display = "block";
      // toggle.classList.add("navbar-toggler-icon2");
    } else {
      if (inputRef.current) {
        inputRef.current.style.display = "none";
      }
      if (navRef.current) {
        navRef.current.style.background = "transparent";
        navRef.current.style.boxShadow = "none";
        navRef.current.classList.remove("nav-scroll");
      }
    }
    //button to top page
    /*  if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    } */
  }

  useEffect(() => {
    inputRef.current.style.display = "none";
    //  var button = document.getElementById("toTop");
    navRef.current.style.background = "#161b22";

    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  return (
    <Nav
      id="navbar"
      ref={navRef}
      className="navbar navbar-expand-lg navbar-dark fixed-top navbar-transparent"
    >
      <a className="navbar-brand" href="#">
        Logo
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav mr-auto">
          <a className="nav-link nav-border" href="#">
            Home
          </a>
          <a className="nav-link nav-border" href="#">
            Features
          </a>
          <a className="nav-link nav-border" href="#">
            Pricing
          </a>
        </div>
        <SearchContainer class="form-inline" ref={inputRef}>
          <Search
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => handleSearch(e)}
          />
          <IconSearch size={25} color="#495057" />
        </SearchContainer>
        <Cart />
      </div>
    </Nav>
  );
}

export default Navbar;
