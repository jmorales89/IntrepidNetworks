import { APIProvider, Map } from "@vis.gl/react-google-maps";
import GOOGLE_API_KEY from "../utils/google-map-api";

export default function WorldMap() {
  return (
    <div>
      <APIProvider apiKey={GOOGLE_API_KEY}>
        <Map
          style={{ width: "100%", height: "100vh" }}
          defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
          defaultZoom={15}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        ></Map>
      </APIProvider>
    </div>
  );
}
