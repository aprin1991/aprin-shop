import React, { useState } from "react";
import { ReactComponent as Logo } from "./../../assets/images/logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon";
import CartDropDown from "../cart-dropdown";
import { selectCurrentUser } from "../../redux/user/user.selector";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./Header.style";

function Header({ currentUser }) {
  const [togglecart, setToggleCart] = useState(false);
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signIn">SIGNIN</OptionLink>
        )}
        <CartIcon handleClick={() => setToggleCart((prev) => !prev)} />
      </OptionsContainer>
      {togglecart && <CartDropDown close={() => setToggleCart(false)} />}
    </HeaderContainer>
  );
}
const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
  };
};
export default connect(mapStateToProps)(Header);
