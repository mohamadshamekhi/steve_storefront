'use client';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import { useState } from 'react';

interface IconDefaultPrototypeFix {
    _getIconUrl?: () => string;
}

delete (L.Icon.Default.prototype as IconDefaultPrototypeFix)._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: iconRetinaUrl,
    iconUrl: iconUrl,
    shadowUrl: shadowUrl
});

type Props = {
    center: [number, number];
    zoom?: number;
    className?: string;
    width?: string;
    height?: string;
};

const ClickHandler = ({ onClick }: { onClick: (latlng: L.LatLng) => void }) => {
    useMapEvents({
        click(e) {
            onClick(e.latlng);
        }
    });
    return null;
};

const LeafletMap = ({ center, zoom = 13, className = '', width = '300px', height = '300px' }: Props) => {
    const [markerPosition, setMarkerPosition] = useState<L.LatLng | null>(L.latLng(center[0], center[1]));

    return (
        <MapContainer
            className={className}
            center={center}
            zoom={zoom}
            scrollWheelZoom={true}
            style={{ height: height, width: width }}
            attributionControl={false}
            zoomControl={false}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <ClickHandler onClick={(latlng) => setMarkerPosition(latlng)} />

            {markerPosition && (
                <Marker position={markerPosition}>
                    <Popup>مکان انتخاب‌شده</Popup>
                </Marker>
            )}
        </MapContainer>
    );
};

export default LeafletMap;
