import './App.css';
import {Route,BrowserRouter,Switch,Redirect} from "react-router-dom"
import {useState,  useEffect} from 'react';
import StaffList from "./componert/StaffList"
import Header from "./componert/heatder"
import Detai from "./componert/Detai"
import Home from "./componert/home"
import News from "./componert/new"
import Footer from "./componert/footer"
import {useSelector, useDispatch} from "react-redux"
import {fecthStaff} from './redux/ActionCreators';



function App() { 
  const staff = useSelector(state => state.staffs.staffs)
  console.log("fetchAPI",staff)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fecthStaff())
  },[])


const StaffId =({match})=>{
  return(
    <Detai staff = {staff.filter((staffId)=> staffId.id === parseInt(match.params.staffId,10))[0]}/>
  )
 
}
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/menu" exact><StaffList staff={staff}/>
        </Route>
        <Route path="/hihi/:staffId">{StaffId} 
        </Route>
        <Route path="/department"><News  />
        </Route>
        <Route path="/salary"><Home  />
        </Route>
        <Redirect to="/menu" />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
