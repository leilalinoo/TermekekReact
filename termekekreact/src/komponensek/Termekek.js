import Termek from "./Termek";
import { termekek } from "../TermekLista";

export default function Termekek(props) {
    
  function kattintasKezeles(index) {
    console.log(index);
    props.kattintasKezeles(index);
  }

  return (
    <div className="termek">
      {termekek.map((elem, index) => {
        return (
          <Termek
            obj={elem}
            key={index}
            index={index}
            //kor={kor}
            //nev={nev}
            kattintasKezeles={kattintasKezeles}
          />
        );
      })}
    </div>
  );
}
