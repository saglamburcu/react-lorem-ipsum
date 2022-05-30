import data from "./data";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [sliceParagraphs, setSliceParagraphs] = useState([]);

  const onChangeParagraph = (e) => {
    e.preventDefault();

    let amount = parseInt(number);

    if (number <= 0) {
      amount = 1;
    };

    if (number > 8) {
      amount = 8;
    }

    let newParagraph = data.slice(0, amount);
    setSliceParagraphs(newParagraph);
  }

  return (
    <main className="container">
      <section className="title">
        TIRED OF BORING LOREM IPSUM?
      </section>
      <section className="form">
        <form onSubmit={(e) => onChangeParagraph(e)}>
          <label>Paragraphs:</label>
          <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
          <button type="submit">GENERATE</button>
        </form>
      </section>
      <section className="paragraphs">
        {
          sliceParagraphs.map((sliceParagraph, index) => {
            return <p key={index} >{sliceParagraph}</p>
          })
        }
      </section>
    </main >
  );
};

export default App;
