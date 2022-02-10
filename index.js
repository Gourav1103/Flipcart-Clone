import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from './default.js';
import bodyParser from 'body-parser';
import Cors from 'cors';
import Router from './routers/routes.js';
import {v4 as uuid} from "uuid";
dotenv.config();
const app = express();
app.use(bodyParser.json({extended  : true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(Cors());
app.use('/',Router);
const PORT =8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username,password);
app.listen(PORT,()=>console.log(`server is successfully run on port ${PORT}`));
//data transerfer into database
DefaultData();
export let paytmMarchentKey= process.env.PAYTM_MERCHENT_KEY;
export let paytmparams={};
    paytmparams['MID']=process.env.PAYTM_MID;
    paytmparams['WEBSITE']=process.env.PAYTM_WEBSITE;
    paytmparams['CHANNEL_ID']=process.env.PAYTM_CHANNEL_ID;
    paytmparams['INDUSTRY_TYPE_ID']=process.env.PAYTM_INDUSTRY_TYPE_ID;
    paytmparams['ORDER_ID']=uuid();
    paytmparams['CUSTOMER_ID']=process.env.PAYTH_CUSTOMER_ID;
    paytmparams['TXN_AMOUNT']='500';
    //  paytmparams['CALLBACK_URL']='http://localhost:8000/callback';
    paytmparams['EMAIL']='gr63234@gmail.com';
    paytmparams['MOBILE_NO']='123456781';