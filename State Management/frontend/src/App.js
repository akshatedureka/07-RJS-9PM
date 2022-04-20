import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {productsActions} from "./actions/productsActions";
import Loading from "./components/Loading";
import Display from "./components/Display";
import MessageBox from "./components/MessageBox";
function App() {
  
  const res = useSelector(state=>state);

  const {loading,products,error} = res;


  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(productsActions());
  },[]);
 
  return (
    <div className="grid-container">
        <header className="my_header">
           <div className="logo">
              MiniProject
           </div>

           <div>
              <i className="fa fa-cart-arrow-down"></i>
              <i class="fa fa-user-circle-o"></i>
              <i className="fa fa-sign-out"></i>
           </div>
        </header>

        <main>
          {!loading?<Loading></Loading>:error=="Network Error"?<MessageBox>{error}</MessageBox>:<Display products={products}></Display>}

        </main>

        <footer>
          copyright@miniproject.com
        </footer>
        
    </div>
  );
}

export default App;
