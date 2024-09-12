import { useMarkerStore } from "../store/marker-store";
import Markers from "../types/markers";

export default function MapMarkers() {
  const markers = useMarkerStore((state) => state.markers);

  const { setCenterFocus, setSelectedMarker } = useMarkerStore();

  const centerMapOnMarker = (marker: Markers) => {
    setCenterFocus(marker);
    setSelectedMarker(marker);
  };
  return (
    <>
      <h1>MARKERS</h1>
      {markers &&
        markers.map((marker) => {
          return (
            <div
              key={marker.id}
              onClick={() => {
                centerMapOnMarker(marker);
              }}
            >
              {marker.title}
            </div>
          );
        })}
    </>
  );
}
