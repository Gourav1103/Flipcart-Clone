import { paytmMarchentKey, paytmparams } from "../index.js"
import PaytmChecksum from "../paytm/PaytmChecksum.js"
export const addPaymentGateway= async(request,response)=>{
   let paytmChecksum=await PaytmChecksum.generateSignature(paytmparams,paytmMarchentKey);
   try{
     let params={
         ...paytmparams,'CHECKSUMHASH':paytmChecksum
     }
     response.json(params);
   }catch(error){
       console.log(error)
   }
}
export const paymentresponse=()=>{
  
}