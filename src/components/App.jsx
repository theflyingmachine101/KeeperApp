import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Notes, SetNotes] = React.useState([]);
  function HandleAdd(note) {
    SetNotes(prevNotes => {
      return [...prevNotes, note];
    });
  }
  function HandleDelete(index) {
    SetNotes(prevNotes => {
      return prevNotes.filter((note, ind) => {
        return ind !== index;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea HandleAdd={HandleAdd} />
      {Notes.map((note, index) => {
        return (
          <Note
            key={index}
            index={index}
            title={note.title}
            content={note.content}
            HandleDelete={HandleDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
