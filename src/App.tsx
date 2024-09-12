import { useEffect } from "react";
import "./App.css";
import { fetchAllMarkers } from "./routes/markers";
import WorldMap from "./components/WorldMap";
import MapMarkers from "./components/MapMarkers";
import { useMarkerStore } from "./store/marker-store";

function App() {
  const { setMarkers, setDefaultCenter, setCenterFocus } = useMarkerStore();
  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const response = await fetchAllMarkers();
        setMarkers(response.data);
        setDefaultCenter(response.data[0]);
        setCenterFocus(response.data[0]);
      } catch (e) {
        console.error(e);
      }
    };
    fetchMarkers();
  }, [setMarkers, setDefaultCenter, setCenterFocus]);

  return (
    <>
      <div className="md:grid md:grid-cols-8">
        <div className="w-full col-span-2">
          <MapMarkers />
        </div>
        <div className="col-span-6">
          <WorldMap />
        </div>
      </div>
    </>
  );
}

export default App;
