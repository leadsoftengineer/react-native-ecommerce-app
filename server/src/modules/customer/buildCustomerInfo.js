//leadsoftengineer SERHII SMOLKO 24.01.2020
export const buildCustomerInfo = (info, providerName) => {
    let user = {
        email: '',
        firstName: '',
        lastName: '',
        avatarUrl: '',
        provider: {
            uid: '',
            type: ''
        }
    }

    if (providerName == 'GOOGLE') {
        user.provider.uid = info.id;
        user.firstName = info.given_name;
        user.lastName = info.family_name;
        user.email = info.email;
        user.avatarUrl = info.picture;
        user.provider.type = provider;
    } else if (providerName == 'FACEBOOK') {
        const [firstName, ...lastName] = info.name.split(' ');

        user.firstName = firstName;
        user.lastName = lastName.join(' ');
        user.provider.uid = info.id;
        user.avatarUrl = info.picture.data.url;
        user.email = info.email;
        user.provider.type = providerName;

    }
    return user;
}