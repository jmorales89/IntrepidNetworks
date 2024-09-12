import { create } from "zustand";
import Markers from "../types/markers";

type MarkersStore = {
  markers: Markers[];

  setMarkers: (markers: Markers[]) => void;
};
export const useMarkerStore = create<MarkersStore>((set) => ({
  markers: [],

  setMarkers: (markers: Markers[]) => {
    set(() => ({
      markers: markers,
      
    }));
  },
}));
