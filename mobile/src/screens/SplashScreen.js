//leadsoftengineer SERHII SMOLKO 13.01.2020

import React, { Component } from "react";
import OnboardingLogo from "../commons/OnboardingLogo";
import { Box, Text } from "react-native-design-utility";

export class SplashScreen extends Component {
  state = {};

  componentDidMount() {
    this.checkAuth();
  }

  checkAuth = () => {
    setTimeout(() => {
      this.props.navigation.navigate("Auth");
    }, 2000);
  };

  render() {
    return (
      <Box f={1} center>
        <OnboardingLogo />
      </Box>
    );
  }
}

export default SplashScreen;
