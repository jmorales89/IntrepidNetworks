import { Dialog } from "primereact/dialog";
import { useMarkerStore } from "../store/marker-store";

export default function DialogPopUp() {
  const selectedMarker = useMarkerStore((state) => state.selectedMarker);
  const markerPopUpVisible = useMarkerStore(
    (state) => state.markerPopUpVisible
  );
  const { setMarkerPopUp } = useMarkerStore();

  return (
    <Dialog
      className="dialog shadow-lg"
      visible={markerPopUpVisible}
      onHide={() => {
        if (!markerPopUpVisible) return;
        setMarkerPopUp(false);
      }}
    >
      <div className="flex">
        <p className="font-bold mr-1">Location:</p>
        <p>{` ${
          selectedMarker.title
            ? selectedMarker.title
            : "No location name available"
        }`}</p>
      </div>

      <div className="flex">
        <p className="font-bold mr-1">Description:</p>
        <p>{` ${
          selectedMarker.description
            ? selectedMarker.description
            : "No description available"
        }`}</p>
      </div>

      <div className="flex">
        <p className="font-bold mr-1">Created:</p>
        <p>{` ${
          selectedMarker.createdDate
            ? selectedMarker.createdDate
            : "No date not available"
        }`}</p>
      </div>

      <div className="flex">
        <p className="font-bold mr-1">Last Updated:</p>
        <p>{` ${
          selectedMarker.lastUpdated
            ? selectedMarker.lastUpdated
            : "No updates have been made"
        }`}</p>
      </div>

      <div className="flex">
        <p className="font-bold mr-1">Latitude:</p>
        <p>{` ${
          selectedMarker.latitude
            ? selectedMarker.latitude
            : "Latitude not available"
        }`}</p>
      </div>

      <div className="flex">
        <p className="font-bold mr-1">Longitude:</p>
        <p>{` ${
          selectedMarker.longitude
            ? selectedMarker.longitude
            : "Longitude not available"
        }`}</p>
      </div>
    </Dialog>
  );
}
