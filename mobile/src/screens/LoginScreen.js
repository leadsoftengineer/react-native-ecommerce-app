//leadsoftengineer SERHII SMOLKO 05.02.2020

import React, { Component } from "react";
import { Box, Text } from "react-native-design-utility";
import OnboardingLogo from "../commons/OnboardingLogo";
import { TouchableOpacity, Image, Alert, Animated } from "react-native";
import { inject } from 'mobx-react/native';

import LoginButton from "../commons/LoginButton";
import { GoogleApi } from "../api/Google";
import { FacebookApi } from "../api/Facebook";

const BoxAnimated = Animated.createAnimatedComponent(Box);
@inject('currentUser')
export class LoginScreen extends Component {
  state = {
    opacity: new Animated.Value(0),
    position: new Animated.Value(0)
  };

  componentDidMount() {
    this.opacityAnim();
    this.positionAnim();
  }

  opacityAnim = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 2000,
      delay: 50
    }).start();
  };

  positionAnim = () => {
    Animated.timing(this.state.position, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true
    }).start();
  };

  onGooglePress = async () => {
    try {
      const token = await GoogleApi.loginAsync();
      console.log("token", token);
    } catch (error) {
      console.log("error", error);
    }
  };
  onFacebookPress = async () => {
    try {
      const token = await FacebookApi.loginAsync();
      console.log('token', token);
    } catch (error) {
      console.log('error', error);

    }

  };
  render() {
    const { opacity } = this.state;

    const logoTranslate = this.state.position.interpolate({
      inputRange: [0, 1],
      outputRange: [230, 0]
    });
    return (
      <Box f={1} center bg="white">
        <BoxAnimated
          f={1}
          style={{
            transform: [
              {
                translateY: logoTranslate
              }
            ]
          }}
        >
          <Box f={1} center>
            <OnboardingLogo />
          </Box>
        </BoxAnimated>

        <BoxAnimated f={0.9} w="100%" style={{ opacity }}>
          <LoginButton onPress={this.onGooglePress} type="google">
            Continue with Google
          </LoginButton>
          <LoginButton onPress={this.onFacebookPress} type="facebook">
            Continue with Facebook
          </LoginButton>
        </BoxAnimated>
      </Box>
    );
  }
}

export default LoginScreen;
