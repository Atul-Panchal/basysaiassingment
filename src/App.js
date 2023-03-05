import "./App.css";
import Navigation from "./Navigation/Navigation";
import Request from "./Request/Request";
function App() {
  return (
    <div className="section-wrapper">
      <div className="navigation">
        <Navigation></Navigation>
      </div>
      <div className="requests">
        <Request />
      </div>
    </div>
  );
}

export default App;
