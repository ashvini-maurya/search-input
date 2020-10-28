/*
 * Problem Statement -
 * Create an input box where users can type their search.
 * Display suggestions in a drop down. Suggestions should be fetched and displayed while typing
 * The input for the getSuggestion API will be the current word that is being typed not the whole search. The output for the getSuggestion API will be only for the current word.
 * getSuggestions API returns a promise which can get resolved or rejected at any time ranging from 0 - 200 ms.
 */
import React from "react";

import Objective from "./Objective";
/*
 * Uncomment following line to call suggestions function
 */
//import { getSuggestions } from "./server";

import "./styles.css";
import SearchInput from "./component/SearchInput"
export default function App() {
  return (
    <div className="App">
      <Objective />
      <SearchInput />
    </div>
  );
}
