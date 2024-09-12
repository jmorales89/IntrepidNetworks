import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import GOOGLE_API_KEY from "../utils/google-map-api";
import { useMarkerStore } from "../store/marker-store";
import Markers from "../types/markers";

export default function WorldMap() {
  const markers = useMarkerStore((state) => state.markers);

  return (
    <div>
      <APIProvider apiKey={GOOGLE_API_KEY}>
        <Map
          style={{ width: "100%", height: "100vh" }}
          defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
          defaultZoom={15}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          {markers &&
            markers.map((marker: Markers) => {
              return (
                <div key={marker.id}>
                  <Marker
                    position={{ lat: marker.latitude, lng: marker.longitude }}
                  />
                </div>
              );
            })}
        </Map>
      </APIProvider>
    </div>
  );
}
