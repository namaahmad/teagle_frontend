import React, { useState, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import { feature } from "topojson-client";
import worldData from "world-atlas/countries-110m.json";
import type { FeatureCollection } from "geojson";
import type { Geometry, GeoJsonProperties } from "geojson";

type MarkerType = {
  id: string;
  name: string;
  coordinates: [number, number];
};

const sampleMarkers: MarkerType[] = [
  // { id: "btc", name: "Bitcoin (NY)", coordinates: [-74.006, 40.7128] },
  // { id: "eth", name: "Ethereum (London)", coordinates: [-0.1276, 51.5074] },
  // { id: "tokyo", name: "Tokyo Node", coordinates: [139.6917, 35.6895] },
];

export default function WorldMap({ markers = sampleMarkers }: { markers?: MarkerType[] }) {
  const [tooltip, setTooltip] = useState("");

  const geographies = useMemo(() => {
    const objectKey =
      worldData.objects.countries ||
      worldData.objects.land;

   const geoJson = feature(worldData as any, objectKey as any) as any;
   return geoJson.features;
  }, []);

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
      <ComposableMap projection="geoEqualEarth" width={1000} height={600}>
        <ZoomableGroup>
          <Geographies geography={{ type: "FeatureCollection", features: geographies }}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() =>
                    setTooltip(geo.properties.name || geo.properties.NAME)
                  }
                  onMouseLeave={() => setTooltip("")}
                  style={{
                    default: {
                      fill: "#E0E7FF",
                      stroke: "#6070A6",
                      strokeWidth: 0.4,
                    },
                    hover: {
                      fill: "#A7B8FF",
                    },
                    pressed: {
                      fill: "#8A9BFF",
                    },
                  }}
                />
              ))
            }
          </Geographies>

          {markers.map((m) => (
            <Marker key={m.id} coordinates={m.coordinates}>
              <circle r={5} fill="#FF4D4D" stroke="#FFF" strokeWidth={1.5} />
              <text
                x={8}
                y={4}
                style={{ fontFamily: "system-ui", fill: "#333", fontSize: 12 }}
              >
                {m.name}
              </text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* <div style={{ marginTop: 8, minHeight: 20 }}>
        {tooltip ? <strong>Country: {tooltip}</strong> : "Hover a country"}
      </div> */}
    </div>
  );
}
