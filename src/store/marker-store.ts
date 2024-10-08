import { create } from "zustand";
import Markers from "../types/markers";
import Center from "../types/center";

type MarkersStore = {
  markers: Markers[];
  defaultCenter: Center;
  centerFocus: Center | null;
  selectedMarker: Markers;
  zoom: number | null;
  markerPopUpVisible: boolean;
  setDefaultCenter: (marker: Markers) => void;
  setZoom: (zoom: number | null) => void;
  setCenterFocus: (marker: Markers | null) => void;
  setSelectedMarker: (marker: Markers) => void;
  setMarkers: (markers: Markers[]) => void;
  setMarkerPopUp: (markerPopUpVisible: boolean) => void;
};
export const useMarkerStore = create<MarkersStore>((set) => ({
  markers: [],
  defaultCenter: {
    lat: 28.538336,
    lng: -81.379234,
  },
  centerFocus: {
    lat: 28.538336,
    lng: -81.379234,
  },
  selectedMarker: {
    createdDate: "",
    description: "",
    hasAttachment: false,
    hasVideo: false,
    id: -1,
    lastUpdated: "",
    latitude: 0,
    longitude: 0,
    title: "",
  },
  markerPopUpVisible: false,
  zoom: 15,
  setDefaultCenter: (marker: Markers) => {
    set(() => ({
      defaultCenter: {
        lat: marker.latitude,
        lng: marker.longitude,
      },
      zoom: 15,
    }));
  },
  setMarkers: (markers: Markers[]) => {
    set(() => ({
      markers: markers
    }));
  },
  setZoom: (zoom: number | null) => {
    set(() => ({
      zoom: zoom,
    }));
  },
  setCenterFocus: (marker: Markers | null) => {
    set(() => ({
      centerFocus: marker
        ? {
            lat: marker.latitude,
            lng: marker.longitude,
          }
        : null,
      
    }));
  },
  setSelectedMarker: (marker: Markers) => {
    set(() => ({
      selectedMarker: marker,
      zoom: 15,
    }));
  },
  setMarkerPopUp: (markerPopUpVisible: boolean) => {
    set(() => ({
      markerPopUpVisible: markerPopUpVisible,
    }));
  },
}));
