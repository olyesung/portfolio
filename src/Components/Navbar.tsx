import { BoolProps } from "../Routes/RootHome";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

const NavContainer = styled.div`
  width: 330px;
  background-color: #004741;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  color: white;
`;
const Nav = styled(motion.nav)``;

const Column = styled.div`
  margin: 5vh 0;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

const Items = styled.ul`
  margin-top: 10vh;
`;

const Item = styled.li`
  font-size: 19px;
  line-height: 2;
  &:hover {
    color: #7ab6ae;
  }
`;

const NavLink = styled(Link)`
  position: relative;
`;

const Stick = styled(motion.span)`
  position: absolute;
  height: 4px;
  border-radius: 5px;
  bottom: 0px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #68b886;
`;

const ContactMe = styled.div`
  margin: 5vh;
`;
const Info = styled.div`
  line-height: 1.6;
  opacity: 0.7;
  font-size: 15px;
  &:first-child {
    font-size: 17px;
    font-weight: 600;
    line-height: 2;
    opacity: 1;
  }
`;

const Navbar = (bool: BoolProps["detail"]) => {
  return (
    <NavContainer style={{ overflow: "auto" }}>
      <Column>
        <Image src="https://cdn.pixabay.com/photo/2021/01/26/09/48/york-minster-5950966__340.jpg" />
        <Nav>
          <Items>
            <Item>
              <NavLink to="/">
                Home
                {bool.home && <Stick layoutId="stick" />}
              </NavLink>
            </Item>
            <Item>
              <NavLink to="/profile">
                Profile
                {bool.profile && <Stick layoutId="stick" />}
              </NavLink>
            </Item>
            <Item>
              <NavLink to="/project">
                Project
                {bool.project && <Stick layoutId="stick" />}
              </NavLink>
            </Item>
            <Item>
              <NavLink to="/contact">
                Contact
                {bool.contact && <Stick layoutId="stick" />}
              </NavLink>
            </Item>
          </Items>
        </Nav>
      </Column>

      <ContactMe>
        <Info>
          Contact
          <FontAwesomeIcon
            icon={faEnvelopeOpenText}
            style={{ marginLeft: 10, opacity: 0.8 }}
          />
        </Info>
        <Info>Yeseong Lee</Info>
        <Info>010-7591-7015</Info>
        <Info>olyesung@gmail.com</Info>
      </ContactMe>
    </NavContainer>
  );
};

export default Navbar;
