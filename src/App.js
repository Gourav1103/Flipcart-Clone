import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import  {TemplateProvider}  from "./templates/TemplateProvider.js";
import ContextProvider from "./context/ContextProvider";
import DetailView from "./components/product/DetailView";
import { Box } from "@material-ui/core";
function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
   <BrowserRouter>
      <Header/>
      <Box style={{marginTop:54}}>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/Cart" component={Cart}/>
         <Route exact path="/product/:id" component={DetailView}/>
       </Switch>
       </Box>
      </BrowserRouter>
      </ContextProvider>
      </TemplateProvider>
  );
}

export default App;
