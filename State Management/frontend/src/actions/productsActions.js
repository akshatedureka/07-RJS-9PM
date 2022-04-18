import { PRODUCTS_LIST,
         PRODUCTS_LIST_SUCCESS,
         PRODUCTS_LIST_FAIL } from "../constants/productsConstants";
import axios from "axios";
export const productsActions = ()=>{
    return async (dispatch)=>{
        dispatch({
            type:PRODUCTS_LIST,
            products:[],
            error:"",
            loading:false
        });
        try{
            const {data} = await axios.get(`http://workshopbackend-env.eba-zhgxczni.ap-south-1.elasticbeanstalk.com/products`);
            dispatch({
                type:PRODUCTS_LIST_SUCCESS,
                products:data,
                error:"",
                loading:true
            })
        }catch(err){
            dispatch({
                type:PRODUCTS_LIST_FAIL,
                products:[],
                loading:true,
                error:err.message
            })
        }
    }
}