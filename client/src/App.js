import Footer from "./components/Footer";
import {BrowserRouter} from "react-router-dom"
import AppRouter from "./components/AppRouter"
import Consultate from "./components/Consultate"
import NavBar from './components/NavBar'
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import './App.css'
import ScrollButton from "./components/ScrollButton";
import ContactUs from "./components/ContactUs";



const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.querySelector("body").style.opacity = "1";
  }, []);


  useEffect(()=>{
      check().then(data => {
        user.setUser(data)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation="grow" variant="info" className='spin'/>
  }


  return (
  <BrowserRouter>
    <Consultate />
    <NavBar/>
    <AppRouter />
    <ContactUs />
    <ScrollButton />
    <Footer/>
  </BrowserRouter>


  );
});

export default App;
