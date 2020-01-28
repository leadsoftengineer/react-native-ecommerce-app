//leadsoftengineer SERHII SMOLKO 27.01.2020

import { Router } from 'express';

import { create, getUserinfo } from './customer.controller';

import { customerAuth } from './customer';

const routes = Router();

routes.post('/', create);

routes.get('/me', customerAuth, getUserinfo);

export default routes;