import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import GOOGLE_API_KEY from "../utils/google-map-api";
import { useMarkerStore } from "../store/marker-store";
import Markers from "../types/markers";
import DialogPopUp from "./DialogPopUp";
import useScreenSize from "../customHooks/detectScreenSize";

export default function WorldMap() {
  const { setZoom, setCenterFocus, setSelectedMarker, setMarkerPopUp } = useMarkerStore();

  const markers = useMarkerStore((state) => state.markers);
  const centerFocus = useMarkerStore((state) => state.centerFocus);
  const defaultCenter = useMarkerStore((state) => state.defaultCenter);
  const zoom = useMarkerStore((state) => state.zoom);
  const screenSize = useScreenSize();


  const displayData = (marker: Markers) => {
    setSelectedMarker(marker);
    setMarkerPopUp(true)
  };
  const unlockMap = () => {
    setCenterFocus(null);
  };
  const unlockZoom = () => {
    setZoom(null);
  };
  return (
    <div>
      <APIProvider apiKey={GOOGLE_API_KEY}>
        <Map
          onDrag={unlockMap}
          style={{ width: "100%", height: `${screenSize.width > 768 ? "100vh": "77vh"}` }}
          defaultCenter={defaultCenter}
          center={centerFocus ? centerFocus : null}
          defaultZoom={15}
          zoom={zoom}
          onZoomChanged={unlockZoom}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          
        >
          {markers &&
            markers.map((marker: Markers) => {
              return (
                <div key={marker.id}>
                  <Marker
                  onClick={() => {
                    displayData(marker);
                  }}
                    position={{ lat: marker.latitude, lng: marker.longitude }}
                  />
                  <DialogPopUp/>
                </div>
              );
            })}
        </Map>
      </APIProvider>
    </div>
  );
}
