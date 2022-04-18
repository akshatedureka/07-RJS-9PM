import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {productsActions} from "./actions/productsActions";
function App() {
  
  const res = useSelector(state=>state);

  const {loading,products,error} = res;


  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(productsActions());
  },[]);
 
  return (
    <div>
        {JSON.stringify(loading)}....{JSON.stringify(products)}.....{error}
    </div>
  );
}

export default App;
