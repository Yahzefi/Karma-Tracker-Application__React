import './App.css';
import Feed from './components/Feed';
import Header from "./components/Header"
import Sidebar from './components/Sidebar';
// import ThemeContextProvider from './contexts/themeContext';

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
