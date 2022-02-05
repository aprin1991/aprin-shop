import React from "react";
import Directory from "./directory/Directory.component";
import "./homepage.style.scss";
import { HomePageContainer } from "./menu-item/Homepage.style";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
