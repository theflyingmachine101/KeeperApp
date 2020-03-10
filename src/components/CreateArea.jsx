import React from "react";
function CreateArea(props) {
  const [note, SetNote] = React.useState({ title: "", content: "" });

  function ChangeNote(event) {
    const key = event.target.name,
      value = event.target.value;
    SetNote(prevNote => {
      return { ...prevNote, [key]: value };
    });
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={ChangeNote} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={ChangeNote}
        />
        <button
          onClick={event => {
            props.HandleAdd(note);
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
