import './App.css';

import { useEffect, useReducer, useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { updateScore } from "./reducers/updateScore"

import Modals from './components/Modals';
import Header from "./components/Header";
import Scale from './components/Scale';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Footer from './components/Footer';
// import ThemeContextProvider from './contexts/themeContext';

function App() {
  const [score, setScore] = useReducer(updateScore, 50)
  const [actions, setActions] = useState([])
  useEffect(()=>{
    const fetchData = async () => {
      const module = await import('./localAPI/actions.json')
      const data = module.Actions
      setActions(data)
    }
    fetchData()
  }, [])
  return (
    <Router>
    <div className="primary-cont">
      <Modals />
      <Header />
      <div className="scale-cont">
        <Scale karmaStatus={score}/>
      </div>
      <div className="body-cont">
        <Sidebar />
        <Feed listItem={actions.map((act)=>(<li key={act.id} style={{color:"white"}}>{act.title}</li>))}/>
      </div>
      <>
        <Footer />
      </>
    </div>
    </Router>
  );
}

export default App;
