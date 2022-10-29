import Weather from "./Weather";
import SourceOfProject from "./SourceOfProject";

export default function App() {
  return (
    <div className="App">
      <div className="Main">
        <h1>Weather App</h1>
      <Weather />
      </div>
      <div className="SourceOfProject">
        <SourceOfProject />
      </div>
    </div>
  );
}
