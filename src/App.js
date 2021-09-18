import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";
import Definations from "./components/Definations/Definations";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setmeanings] = useState([]);
  const [category, setCategory] = useState("en");

  const dictApi = async () => {
    try {
      const data = await axios.get(`/api/v2/entries/${category}/${word}`);
      console.log(data);
      setmeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(meanings);

  useEffect(() => {
    dictApi();
  }, [word, category]);
  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />

        {meanings && (
          <Definations word={word} meanings={meanings} category={category} />
        )}
      </Container>
    </div>
  );
}

export default App;

// https://api.dictionaryapi.dev/api/v2/entries/en/plane
