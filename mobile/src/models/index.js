//leadsoftengineer SERHII SMOLKO 30.01.2020
import { CurrentUser } from './CurrentUser';

const CurrentUser = CurrentUser.create();

export const store = {
    CurrentUser
};

window.MobxStore = store;