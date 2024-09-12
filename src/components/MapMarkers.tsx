import { useMarkerStore } from "../store/marker-store";


export default function MapMarkers() {
  const markers = useMarkerStore((state) => state.markers);


  return (
    <>
      <h1>MARKERS</h1>

      {markers &&
        markers.map((marker) => {
          return (
           <div key={marker.id} >{marker.title}</div>
          );
        })}
    </>
  );
}
