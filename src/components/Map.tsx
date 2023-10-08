import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ lat, lng }: { lat: number; lng: number }) => {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      style={{ width: "600px", height: "400px", borderRadius: "20px", marginTop: "40px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default Map;
