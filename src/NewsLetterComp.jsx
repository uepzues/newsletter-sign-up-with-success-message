import { InfoComp } from "./InfoComp";
import './NewsLetterComp.css'

export function NewsLetterComp({ header, text }) {
  return (
    <div>
      <h1> {header}</h1>
      <p> {text}</p>
    </div>
  );
}
