import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOMServer from "react-dom/server";
import shipIcon from "../assets/ship.svg";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
  Tooltip,
  GeoJSON,
} from "react-leaflet";
import bezierspline from "@turf/bezier-spline";
import { LatLngTuple } from "leaflet";
import * as helpers from "@turf/helpers";

type Props = {};

const Map = (props: Props) => {
  const position: LatLngTuple = [6.121986, 1.26845];
  const line = helpers.lineString(
    [
      [6.121986, 1.26845],
      [6.12294, 1.25754],
      [6.10886, 1.22888],
      [6.10331, 1.19626],
      [6.08254, 1.15657],
      [6.05888, 1.10876],
    ].map((latlng) => [latlng[1], latlng[0]])
  );
  const line1 = helpers.lineString(
    [
      [6.05888, 1.10876],
      [6.03661, 1.08729],
      [5.87513, 1.02927],
      [5.70517, 0.65048],
      [5.69963, 0.3701],
      [5.68723, 0.07585],
      [5.66588, 0.05353],
      [5.64572, 0.02967],
      [5.6341, 0.01662],
      [5.6174, 0.0],
    ].map((latlng) => [latlng[1], latlng[0]])
  );

  const redIcon = new L.Icon({
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
  });

  const curved = bezierspline(line);
  const curved1 = bezierspline(line1);
  const geoJSONStyle = {
    color: "red", // Change color to blue, you can replace it with any other color
    weight: 2, // Change weight if needed
    dashArray: "5, 5",
  };

  return (
    <MapContainer
      className="w-[100%] h-[70vh]"
      center={position}
      zoom={8}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={curved} />
      <GeoJSON data={curved1} style={geoJSONStyle} />
      <Marker
        position={[5.69963, 0.3701]}
        icon={
          new L.DivIcon({
            className: "ship-icon",
            html: ReactDOMServer.renderToString(
              <img src={shipIcon} className="w-10 h-10 mt-[-1rem]" />
            ),
          })
        }
        zIndexOffset={1000}
      >
        <Tooltip>Vercel</Tooltip>
      </Marker>
      <Marker position={position}>
        <Popup>Skytrain</Popup>
        <CircleMarker
          center={[6.12294, 1.25754]}
          pathOptions={{ color: "red" }}
        >
          <Tooltip>Tooltip for Marker</Tooltip>
        </CircleMarker>
        <Tooltip>Tooltip for Marker</Tooltip>
      </Marker>

      <Marker position={[5.6174, 0.0]} icon={redIcon}>
        <Tooltip>Your destination</Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default Map;
