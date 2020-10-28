import React from "react";

export default function Objective() {
  return (
    <>
      <h2>Problem Statement</h2>
      <ul>
        <li>Create an input box where users can type their search.</li>
        <li>
          Display suggestions in a drop down. Suggestions should be fetched and
          displayed while typing
        </li>
        <li>
          The input for the getSuggestion API will be the current word that is
          being typed not the whole search. The output for the getSuggestion API
          will be only for the current word.
        </li>
        <li>
          getSuggestions API returns a promise which can get resolved or
          rejected at any time ranging from 0 - 200 ms.
        </li>
      </ul>
    </>
  );
}
