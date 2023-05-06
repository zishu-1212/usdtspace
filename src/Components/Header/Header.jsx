import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BiMenu } from "react-icons/bi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { IoCalendar } from "react-icons/io5";
import { TbMessageDots } from "react-icons/tb";
import { FaFolderMinus } from "react-icons/fa";
// import jutto_token from "../Assets/jutto_token.pdf";
import wyz from "../Assets/Document/wyzth.pdf";
import LOGO1 from "../Assets/LOGO2.png";
function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="header_main">
      <Navbar collapseOnSelect expand="lg" className="nav_bg">
        
        <Container>
        <Link to="/">
          <img src={LOGO1} className="stackig_top_logo" alt="" />
        </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <a className="user px-2" onClick={handleShow}>
                <BiMenu />
              </a>
              <Offcanvas
                show={show}
                onHide={handleClose}
                placement="end"
                responsive=""
              >
                <Offcanvas.Header
                  className="bbbdy"
                  closeButton
                  closeVariant="white"
                >
                  <Offcanvas.Title>
                    <h3></h3>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="bbbdy">
                  <Link to="/Dashboard/Home">
                    <div className="lenkk">
                      <MdOutlineDashboardCustomize className="iicon" />{" "}
                      <h3>Dashboard </h3>
                    </div>
                  </Link>
                  <Link to="/Dashboard/Latest_Deposit">
                    <div className="lenkk">
                      <IoPeople className="iicon" /> <h3>Latest Deposit</h3>
                    </div>
                  </Link>
                  
                  <Link to="/Dashboard/Deposit_details">
                    <div className="lenkk">
                      <TbMessageDots className="iicon" />{" "}
                      <h3>Deposit Details</h3>
                    </div>
                  </Link>

                  <a href={wyz} target="_blank">
                    <div className="lenkk">
                      <FaFolderMinus className="iicon" /> <h3>Rules</h3>
                    </div>
                  </a>
                  
        
                </Offcanvas.Body>
              </Offcanvas>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
