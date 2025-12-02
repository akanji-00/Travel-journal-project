import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import dataEntries from "./data.js";

function App() {
  const entryElements = dataEntries.map((data) => {
    return (
      <Entry
        key={data.id}
        {...data}
        // ...data just means:
        // img={data.img}
        // title={data.title}
        // country={data.country}
        // googleMapsLink={data.googleMapsLink}
        // dates={data.dates}
        // text={data.text}
      />
    );
  });

  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
}

export default App;
