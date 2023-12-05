import "./App.css";
import { useState } from "react";
import { termekek } from "./TermekLista";
import "bootstrap/dist/css/bootstrap.min.css";
import Termekek from "./komponensek/Termekek";

function App() {
  const [aktTermek, setaktTermek] = useState(0);

  function kattintasKezeles(index) {
    console.log("katt", index);
    setaktTermek(index);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>can i get a hoooooowyeeeeeeahhhhh</h1>
      </header>
      <section><Termekek obj={termekek[aktTermek]} /></section>
      <article>
        <Termekek kattintasKezeles={kattintasKezeles} />
      </article>
      <footer>leia</footer>
    </div>
  );
}

export default App;
