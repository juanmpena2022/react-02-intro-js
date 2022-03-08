import React from "react";
import { NoteBar } from "./NoteBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NoteBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea placeholder="What happend" className="notes__textarea" />
        <div className="notes__image">
          <img
            alt="Arbol"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Googleplex_HQ_%28cropped%29.jpg/260px-Googleplex_HQ_%28cropped%29.jpg"
          />
        </div>
      </div>
    </div>
  );
};
