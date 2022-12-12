import CssBaseline from '@mui/material/CssBaseline';
import { useEffect } from "react"
import HomePage from "./pages/homepage/HomePage"

function App() {

useEffect(() => {
  document.title = "Commerce App"
}, []);


  return (
    <div className="App">
      <CssBaseline/>
      <HomePage/>
    </div>
  );
}

export default App;
