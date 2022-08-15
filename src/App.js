import "./App.css";
import Header from "../src/Components/Header/Header";
import Journals from "../src/Components/Journals/Journals";
import journalData from "./data";

function App() {
  const journals = journalData.map((journal) => {
    return <Journals key={journal.id} {...journal} />;
  });

  return (
    <div className="App">
      <Header />
      {journals}
    </div>
  );
}

export default App;
