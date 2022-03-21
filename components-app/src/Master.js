import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function Master(){
    return(
        <React.Fragment>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </React.Fragment>
    )
}
export default Master;