import React from "react";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

const App = () => {
  return (
    <div>
      <Notification />
      <AnecdoteForm />
      <hr />
      <Filter />
      <AnecdoteList />
    </div>
  );
};

export default App;
