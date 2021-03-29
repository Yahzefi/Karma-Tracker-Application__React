import './App.css';
import Header from "./components/Header"
import ThemeContextProvider from './contexts/themeContext';

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <Header />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
