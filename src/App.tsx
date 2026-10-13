import Button from "./Button";
import Card from "./Card";
import List from "./List";
import Syles from "./App.module.css";
// ALT Shift O (organize import)
// ALT Shift F (format)

function App() {
  return (
    <>
      <div>
        <h1 className={Syles.h1}>Youtube Videos</h1>
        <div className={Syles.Cardcontainer}>
          <Card Title="Video 1" Text="infos zu Video 1" img="https://picsum.photos/200/300" />
          <Card Title="Video 2" Text="infos zu Video 2" img="https://picsum.photos/200/300"/>
          <Card Title="Video 3" Text="infos zu Video 3" img="https://picsum.photos/200/300"/>
          <Card Title="Video 4" Text="infos zu Video 4" img="https://picsum.photos/200/300"/>
        </div>
        <div className= {Syles.ButtonContainer}>
          <Button label="YouTube" url="https://www.youtube.com" />
          <Button label="Wikipedia" url="https://www.wikipedia.org" />
          <Button label="Google" url="https://www.google.com" />
          <Button label="React-Doku" url="https://react.dev" />
        </div>
        <div className= {Syles.ListContainer}>
          <List />
          <List />
          <List />
          <List />

        </div>
      </div>
    </>
  );
}

export default App;