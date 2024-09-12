import { useEffect } from "react";
import "./App.css";
import { fetchAllMarkers } from "./routes/markers";
import WorldMap from "./components/WorldMap";

function App() {
  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const response = await fetchAllMarkers();
        console.log(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchMarkers();
  }, []);

  return (
    <>
      <div>hello</div>
      <WorldMap />
    </>
  );
}

export default App;
