import "./BoxHeader.css";

function BoxFoo({ title }) {
  return (
    <div className="container-box-header">
      <h3 className="title-box-header">{title}</h3>
      <div className="box-header">
        <input min={0} max={100} step={5} type="range" />
      </div>
    </div>
  );
}

export default BoxFoo;
