import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Movies from "./components/movies";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Chennai Express", genre: "Comedy, Romance", stock: "Limited", rate: 4 },
    { id: 2, title: "3 Idiots", genre: "Comedy, Romance", stock: "Limited", rate: 5 },
    { id: 3, title: "Laggan", genre: "Social, Historical", stock: "Limited", rate: 8 },
  ]);

  const handleDelete = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.stock}</td>
            <td>{movie.rate}</td>
            <td>
              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
                onClick={() => handleDelete(movie.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
console.log("hello world");
export default App;
