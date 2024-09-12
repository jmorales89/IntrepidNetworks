import { useEffect } from "react";
import "./App.css";
import { fetchAllMarkers } from "./routes/markers";
import WorldMap from "./components/WorldMap";
import MapMarkers from "./components/MapMarkers";
import { useMarkerStore } from "./store/marker-store";

function App() {
  const { setMarkers } = useMarkerStore();

  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const response = await fetchAllMarkers();
        setMarkers(response.data)
        console.log(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchMarkers();
  }, []);

  return (
    <>
    
      <MapMarkers/>
      <WorldMap/>

    </>
  );
}

export default App;
