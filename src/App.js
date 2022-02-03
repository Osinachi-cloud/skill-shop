import { AppBar } from '@material-ui/core';
import './App.css';
import Header from './components/header/Header';
import NavAppBar from './components/header/HeaderChildren.jsx/NavAppBar';

const App =()=> {
  return (
    <div className="App">
        <Header/>
        {/* <NavAppBar/> */}
    </div>
  );
}

export default App;
