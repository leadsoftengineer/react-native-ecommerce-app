//leadsoftengineer SERHII SMOLKO 13.01.2020
import React, { Component } from "react";
import { Box, Text } from "react-native-design-utility";
import { images } from "../constants/images";
import { Image } from "react-native";

const OnboardingLogo = () => (
  <Box center>
    <Box mb="sm">
      <Image source={images.logo} />
    </Box>
    <Text size="2xl">
      ONLINE
      <Text color="green" size="2xl" style={{ paddingLeft: "2px" }}>
        BOOKING
      </Text>
    </Text>
    <Text>apartments for rent...</Text>
  </Box>
);
export default OnboardingLogo;
