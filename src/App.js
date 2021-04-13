import './App.css';

import { useEffect, useReducer, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"

import { updateScore } from "./reducers/updateScore"
import { updateChapter } from "./reducers/updateChapter"
import { updateActions } from "./reducers/updateActions"

import Modals from './components/Modals';
import Header from "./components/Header";
import Scale from './components/Scale';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Footer from './components/Footer';

function App() {
  const [initActions, setInitActions] = useState([])
  const [score, setScore] = useReducer(updateScore, 50)
  const [chapter, setChapter] = useReducer(updateChapter, "")
  const [actions, setActions] = useReducer(updateActions, [])
  const [display, setDisplay] = useState({
    logModal: false,
    regModal: false
})
  
  useEffect(()=>{
    const fetchData = async () => {
      const module = await import('./localAPI/actions.json')
      const data = module.Actions
      setInitActions(data)
  }
    fetchData()
  }, [])
  useEffect(()=>{
    setActions({type: chapter, data: initActions})
  }, [chapter, initActions])

  const pullModal = (ev) => {
    switch(ev.target.id){
        case "login":
            setDisplay({ ...display, logModal: true })
            break;
        case "register":
            setDisplay({ ...display, regModal: true })
            break;
        case "":
            console.log("clicked the nav")
            break;
        default:
            throw Error("Navigation Item Not Found")
    }
}

  const closeModal = (ev) => {
    if(ev.target.id === "log_close"){
      setDisplay({ ...display, logModal: false })
    } else if(ev.target.id === 'reg_close') {
      setDisplay({ ...display, regModal: false })
    } else if(ev.target.id === "registry_link") {
      setDisplay({logModal: false, regModal: true})
    }
  }

  const validateUserCredentials = (data) => {
    console.log("Username: " + data.logUser);
    console.log("Password: " + data.logPass);
    setDisplay({...display, logModal: false})
  }

  const registerNewUser = (data) => {
    console.log("Username: " + data.regUser)
    console.log("Password: " + data.regPass)
    console.log("First Name: " + data.regFirstName)
    console.log("Last Name: " + data.regLastName)
    console.log("Email Address: " + data.regEmail)
    console.log("Phone Number: " + data.regPhoneNumber)
    setDisplay({...display, regModal: false})
  }

  return (
    <Router>
    <div className="primary-cont">
      <Modals validateUser={(data)=>validateUserCredentials(data)} registerUser={(data)=>registerNewUser(data)} display={display} changeDisplay={(ev)=>closeModal(ev)}/>
      <Header pullModal={(ev)=>pullModal(ev)}/>
      <div className="scale-cont">
        <Scale karmaStatus={score} currentKarma={score <= 40 ? "Bad" : score > 40 && score <= 60 ? "Neutral" : score > 60 && "Good"} />
      </div>
      <div className="body-cont">
        <Sidebar changeChapter={(location)=>setChapter({type: location})}/>
        <Feed 
          actions={actions} 
          chapterName={chapter} 
          changeScore={
            (isChecked, chapterKarma, karmaValue)=>{
              setScore(
                isChecked ? {type: "BOX_CHECKED", karma: {type: chapterKarma, value: karmaValue}} 
                : {type: "BOX_UNCHECKED", karma: {type: chapterKarma, value: karmaValue}}
              )
            }
          } 
        />
      </div>
      <>
        <Footer />
      </>
    </div>
    </Router>
  );
}

export default App;
