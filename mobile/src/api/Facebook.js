//leadsoftengineer SERHII SMOLKO 23.01.2020
import * as Facebook from "expo-facebook";
import Constants from "expo-constants";

const permissions = ['public_profile', 'email'];

const loginAsync = async () => {
    try {
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(Constants.manifest.facebookAppId, { permissions })

        if (type == 'success') {
            return Promise.resolve(token);
        } return Promise.reject('No success')
    } catch (error) {
        return Promise.reject(error);

    }
};

export const FacebookApi = {
    loginAsync
}