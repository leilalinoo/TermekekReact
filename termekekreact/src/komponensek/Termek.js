export default function Termek(props) {
  function kattintasKezeles() {
    console.log(props.index);
    props.kattintasKezeles(props.index);
  }

  return (
    <div className="termek">
      <h1>{props.obj.nev}</h1>
      <p>{props.obj.kor}</p>
      <img src={props.obj.kep} alt="" />
      <button type="button" onClick={kattintasKezeles}>
        Click Me!
      </button>
    </div>
  );
}
