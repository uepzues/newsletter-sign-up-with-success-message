import './NewsLetterComp.css'

export function NewsLetterComp({ header, children }) {
  return (
    <div>
      <h1> {header}</h1>
      <p> {children}</p>
    </div>
  );
}
