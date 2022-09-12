import React from "react";
import CardProyect from "../../components/CardProyect/CardProyect";

import "./home.css";

function Home() {
  return (
    <div className="container">
      <h1 id="title">Proyect List</h1>
      <CardProyect />
    </div>
  );
}

export default Home;
