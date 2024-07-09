// src/components/NavBar.js
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../Assets/logo.png";
import { CgFileDocument } from "react-icons/cg";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

// Styled components
const StyledNavbar = styled(Navbar)`
  background-color: rgba(255, 255, 255, 0.95); // Slight transparency
  transition: all 0.3s ease-in-out;

  &.sticky {
    background-color: rgba(
      255,
      255,
      255,
      0.98
    ); // Slightly more solid when sticky
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem; // Increased padding for a better touch target
  color: #333;
  position: relative;
  transition: background-color 0.3s ease, color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #007bff, #00c6ff); // Gradient underline
    transition: width 0.3s ease, left 0.3s ease;
  }

  &:hover,
  &.active {
    background-color: rgba(0, 123, 255, 0.1); // Soft blue background on hover
    color: #007bff; // Blue text on hover
    text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);

    &::after {
      width: 100%; // Full width underline on hover
      left: 0;
    }
  }

  svg {
    margin-right: 8px; // Space between icon and text
    transition: transform 0.3s;
  }

  &:hover svg {
    transform: translateY(-2px);
  }
`;

const BrandLogo = styled.img`
  height: 40px; // Set the size of your logo
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setSticky(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <StyledNavbar
      expanded={expanded}
      fixed="top"
      expand="md"
      className={sticky ? "sticky" : ""}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <BrandLogo src={logo} alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <StyledLink to="/" end onClick={() => setExpanded(false)}>
              <AiOutlineHome /> Home
            </StyledLink>
            <StyledLink to="/project" onClick={() => setExpanded(false)}>
              <AiOutlineFundProjectionScreen /> Projects
            </StyledLink>
            <StyledLink to="/resume" onClick={() => setExpanded(false)}>
              <CgFileDocument /> Resume
            </StyledLink>
            <StyledLink to="/contact" onClick={() => setExpanded(false)}>
              <AiOutlineUser /> Contact
            </StyledLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default NavBar;
