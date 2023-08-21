import "./ButtonComp.css";
export function ButtonComp({ name }) {
  return (
    <div>
      <button type="submit">{name}</button>
    </div>
  );
}
