import "./App.css";
import ArrowFunction from "./ArrowFunction/arrowFunction";
import MapFuction from "./MapFunction/mapFuction";
import DestructingArrays from "./DestructingArrays/destructingArrays";
import Props from "./Props/props";

function App() {
  return (
    <div className="App">
      <ArrowFunction />
      <hr></hr>
      <MapFuction />
      <hr></hr>
      <DestructingArrays />
      <Props/>
    </div>
  );
}

export default App;
