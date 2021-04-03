import { useEffect, useState } from "react"

import './App.css';

import Modals from './components/Modals';
import Header from "./components/Header";
import Scale from './components/Scale';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Footer from './components/Footer';
// import ThemeContextProvider from './contexts/themeContext';

function App() {
  const [score, setScore] = useState(0)
  useEffect(()=>{
    const fetchData = async () => {
      const module = await import('./localAPI/actions.json')
      const data = module.Actions
      console.log("Worth One Point: " + data.Good.One)
    }
    fetchData()
  }, [])
  return (
    <div className="primary-cont">
      <Modals />
      <Header />
      <div className="scale-cont">
        <Scale />
      </div>
      <div className="body-cont">
        <Sidebar />
        <Feed />
      </div>
      <>
        <Footer />
      </>
    </div>
  );
}

export default App;
