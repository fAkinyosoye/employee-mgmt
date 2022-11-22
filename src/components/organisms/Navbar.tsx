import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import navlogo from "../../assets/images/BOI-logo-cropped.png";
import { Burger, Colors } from "../atoms";
import { dashboard, profile, records } from "../utilities/routerPaths";

type NavWrapperProps = {
  show: boolean;
};

const Navbar: () => JSX.Element = () => {
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();

  const location = useLocation();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <NavWrapper show={show} className="px-4 py-5 lg:px-12">
      <div className="nav-head">
        <NavLink to={dashboard}>
          <img
            src={navlogo}
            alt="boi logo cropped"
            width="30"
            height="30"
            //   className="mx-auto mb-5"
          />
        </NavLink>

        <div className="burger">
          <Burger open={show} setOpen={setShow} className="" />
        </div>

        <ul className="nav-list">
          <li className={location.pathname === dashboard ? "activ" : ""}>
            <NavLink to={dashboard}>Home</NavLink>
          </li>
          <li className={location.pathname === profile ? "activ" : ""}>
            <Link to="">Profile</Link>
          </li>
          <li className={location.pathname === profile ? "activ" : ""}>
            <p onClick={logout} className="cursor-pointer">
              Logout
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="ml-3"
              />
            </p>
          </li>
        </ul>
      </div>
      {show && (
        <ul className="nav-list-sm">
          <li className={location.pathname === dashboard ? "activ" : ""}>
            <NavLink to={dashboard}>Home</NavLink>
          </li>
          <li className={location.pathname === profile ? "activ" : ""}>
            <Link to="">Profile</Link>
          </li>
          <li className={location.pathname === profile ? "activ" : ""}>
            <p onClick={logout} className="cursor-pointer">
              Logout
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="ml-3"
              />
            </p>
          </li>
        </ul>
      )}
    </NavWrapper>
  );
};

const NavWrapper: any = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #fff;
  width: 100%;
  color: #000;

  //   input mobile design here
  .nav-head {
    margin-inline: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    // padding: 1.2rem 0 2.4rem 0;
    // padding: 2rem 0;
  }

  .burger {
    display: block;
  }

  .activ {
    color: ${Colors.boiGreen};
    font-weight: bold;
  }

  .nav-list-sm {
    list-style: none;
    display: flex;
    flex-direction: column;
    font-size: var(--font-size--large);
    padding: 2rem 0 2rem 2rem;
    margin-bottom: 0;
    gap: 1rem;
  }

  .nav-list {
    display: none;
    list-style: none;
    margin-bottom: 0;
    gap: 2rem;
  }

  @media screen and (min-width: 768px) {
    .nav-head {
      .burger {
        display: none;
      }
      .nav-list {
        display: flex;
        // flex-direction: row;
        justify-content: space-between;
      }
    }
    .nav-list-sm {
      display: none;
      list-style: none;
    }
  }
`;

export default Navbar;
