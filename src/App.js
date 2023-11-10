import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import UserAnalysis from "./Pages/UserAnalysis";
import { Routes, Route } from "react-router-dom";
import { client } from "../src/Client";
import { ApolloProvider } from '@apollo/client';

function App() {
  const [activePage, setActivePage] = useState(2);
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Home activePage={activePage} setActivePage={setActivePage} />} />
        <Route path="/user-analysis" element={<UserAnalysis activePage={activePage} setActivePage={setActivePage} />} />
      </Routes>
    </ApolloProvider>

  );
}

export default App;
