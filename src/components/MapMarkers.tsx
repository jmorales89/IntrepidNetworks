import { useMarkerStore } from "../store/marker-store";
import Markers from "../types/markers";
import VideocamIcon from "@mui/icons-material/Videocam";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import FlagIcon from "@mui/icons-material/Flag";
import { DataScroller } from "primereact/datascroller";

export default function MapMarkers() {
  const markers = useMarkerStore((state) => state.markers);
  const selectedMarker = useMarkerStore((state) => state.selectedMarker);
  const { setCenterFocus, setSelectedMarker } = useMarkerStore();

  const centerMapOnMarker = (marker: Markers) => {
    setCenterFocus(marker);
    setSelectedMarker(marker);
  };

  const itemTemplate = () => {
    return (

      markers &&
        markers.map((marker) => {
          return (
            <div
              className={`flex marker-list-items items-center keepSize ${selectedMarker === marker && "selected-marker" } `}
              onClick={() => {
                centerMapOnMarker(marker);
              }}
              key={marker.id}
            >
              <div className="grid grid-cols-8 w-full h-full ">
                <div className="col-span-1 flex items-center">
                  <FlagIcon fontSize={`medium`} className="flagIcon xl:ml-4 lg:ml-2 md:ml-1 ml-3 p-1" />
                </div>
                <div className="marker-border col-span-6 h-full flex items-center font-semibold">
                  <div>{marker.title}</div>
                </div>
  
                <div className="flex flex-col col-span-1 pl-1">
                  {marker.hasVideo === true && (
                    <>
                      <div>
                        <VideocamIcon
                          className="icons p-1"
                          fontSize={`small`}
                        />
                      </div>
                    </>
                  )}
                  {marker.hasAttachment === true && (
                    <>
                      <div>
                        <AttachFileIcon
                          className="icons p-1"
                          fontSize={`small`}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })
    )
  }

  return (
    <>
      <h1 className="bg-white pl-3 font-semibold ">MARKERS</h1>
     
      <DataScroller className="p-datascroller" value={markers} itemTemplate={itemTemplate} rows={1} inline scrollHeight="95vh" />

    </>
  );
}
