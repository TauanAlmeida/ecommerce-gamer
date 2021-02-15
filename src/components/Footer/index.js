import React from "react";

import { Container, Contato, Line, FooterTitle, Header } from "./styles";
import { FiInstagram } from "react-icons/fi";
import { RiFacebookLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
const midia = {
  facebook: "http://wwww.facebook.com/tauan.face",
  instagram: "https://www.instagram.com/tauan.almd/",
  linkedin: "https://www.linkedin.com/in/tauan-almeida-1a508411b/",
  github: "https://github.com/tauanAlmeida",
};

function Footer() {
  return (
    <Container>
      <Header>
        <Contato>
          <FooterTitle>
            <span>Contato</span>
            <Line></Line>
          </FooterTitle>
          <span>
            <HiOutlineMail /> empresa@email.com
          </span>
          <span>
            <FiPhone /> (XX) XXXXX-XXXX
          </span>
        </Contato>
        <Contato>
          <FooterTitle>
            <span>Endereço</span>
            <Line></Line>
          </FooterTitle>
          <span>Rua Lorem Ipsum, Lorem Ipsum, N° 254, São Paulo - Brasil</span>
        </Contato>

        <div className="social-work">
          <FooterTitle>
            <span>Midias Sociais</span>
            <Line></Line>
          </FooterTitle>
          <ul className="navbar-nav">
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="top"
              title="Facebook"
            >
              <a
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                href={midia.facebook}
              >
                <RiFacebookLine className="fab fa-facebook"></RiFacebookLine>
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="top"
              title="Instagram"
            >
              <a
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                <FiInstagram></FiInstagram>
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="top"
              title="Twitter"
            >
              <a
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                <FiTwitter></FiTwitter>
              </a>
            </li>
          </ul>
        </div>
      </Header>
      <div className="p-3 text-center" style={{ width: "100%" }}>
        {/* <Line></Line> */}
        <div className="dropdown-divider"></div>
        2021 Desenvolvido por{" "}
        <a href="https://github.com/TauanAlmeida">Tauan Almeida</a>.
      </div>
    </Container>
  );
}

export default Footer;
