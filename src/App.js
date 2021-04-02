import './App.css';
import Feed from './components/Feed';
import Header from "./components/Header"
import Scale from './components/Scale';
import Sidebar from './components/Sidebar';
// import ThemeContextProvider from './contexts/themeContext';

function App() {
  return (
    <div className="primary-cont">
      <Header />
      <div className="scale-cont">
        <Scale />
      </div>
      <div className="body-cont">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
