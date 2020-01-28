//leadsoftengineer SERHII SMOLKO 16.01.2020
import * as Google from "expo-google-app-auth";
import Constants from "expo-constants";

const scopes = ["profile", "email"];

const loginAsync = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId: Constants.manifest.extra.googleAppId.android,
      scopes
    });

    if (result.type == "success") {
      return Promise.resolve(result.accessToken);
    }

    return Promise.reject("No success");
  } catch (error) {
    return Promise.reject(error);
  }
};

export const GoogleApi = {
  loginAsync
};
