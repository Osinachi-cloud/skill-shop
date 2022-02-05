import "./App.css";
import Header from "./components/header/Header";
import Leftbar from "./components/main/LeftBar";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: "0.2" }}>
          <Leftbar />
        </div>
        <div style={{ flex: "0.8", borderTop:'1px solid #ece7e7' }}></div>
      </div>
    </div>
  );
};

export default App;
