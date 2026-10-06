import "./App.css";
import Card from "./card";

// ALT Shift O (organize import)
// ALT Shift F (format)

function App() {
  return (
    <>
      <div>
        <h1>Youtube Videos</h1>
        <div className="Cardconteiner">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
