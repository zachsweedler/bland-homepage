"use client";
import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import globeJson from "./countries_110m.json";
import hexRgb from "hex-rgb";
import * as THREE from 'three';

function Earth() {

   const globeEl = useRef();

   const pointsData = [
      {
         startLat: 29.953204744601763,
         startLng: -90.08925929478903,
         endLat: 28.621322361013092,
         endLng: 77.20347613099612,
         color: "#ffffff",
         stroke: 0.25,
         gap: 1,
         dash: 1,
         scale: 0.25,
         time: 2000,
      },
      {
         startLat: 28.621322361013092,
         startLng: 77.20347613099612,
         endLat: -43.1571459086602,
         endLng: 172.72338919659848,
         color: "#ffffff",
         stroke: 0.25,
         gap: 1,
         dash: 1,
         scale: 0.25,
         time: 1500,
      },
      {
         startLat: -43.1571459086602,
         startLng: 172.72338919659848,
         endLat: 37.7749,
         endLng: -122.4194,
         color: "#ffffff",
         stroke: 0.25,
         gap: 1,
         dash: 1,
         scale: 0.25,
         time: 1500,
      },
      {
         startLat: 37.7749,
         startLng: -122.4194,
         endLat: 35.6895,
         endLng: 139.6917,
         color: "#ffffff",
         stroke: 0.25,
         gap: 1,
         dash: 1,
         scale: 0.25,
         time: 2000,
      },
      {
         startLat: 35.6895,
         startLng: 139.6917,
         endLat: 51.5074,
         endLng: -0.1278,
         color: "#ffffff",
         stroke: 0.25,
         gap: 1,
         dash: 1,
         scale: 0.25,
         time: 1500,
      },
      {
         startLat: 40.7128,
         startLng: -74.0060,
         endLat: 37.8688,
         endLng: -122.2093,
         color: "#ffffff",
         stroke: 0.25,
         gap: 1,
         dash: 1,
         scale: 0.25,
         time: 1200,
      },
      {
         startLat: -33.8688,
         startLng: 151.2093,
         endLat: 55.7558,
         endLng: 37.6176,
         color: "#ffffff",
         stroke: 0.25,
         gap: 1,
         dash: 1,
         scale: 0.25,
         time: 2000,
      },
      {
         startLat: 70.297744,
         startLng: -104.6641,
         endLat: -28.359,
         endLng: -62.476631,
         color: "#ffffff",
         stroke: 0.25,
         gap: 1,
         dash: 1,
         scale: 0.25,
         time: 1000,
      },
      {
         startLat: 34.481992,
         startLng: -118.429081,
         endLat: -9.459533,
         endLng: 149.87069,
         color: "#ffffff",
         stroke: 0.25,
         gap: 1,
         dash: 1,
         scale: 0.25,
         time: 2000,
      },
   ];
   
   const ringsData = pointsData.map((point) => {
      return {
         lat: point.startLat,
         lng: point.startLng,
         radius: 5,
         color: "#ffffff",
         speed: 2, 
         repeat: 1000,
      };
   });

   useEffect(() => {
      globeEl.current.controls().enabled = false;
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.7;
      globeEl.current.pointOfView({ lat: 15, lng: -90.5, altitude: 1.7 });
   }, []);

   return (
      <Globe
         ref={globeEl}

         // Basic
         globeImageUrl="/blurple.svg"
         backgroundColor="rgba(0,0,0,0)"
         atmosphereColor="#ddd5ff"
         color
         height={1100}

         // Arcs
         arcsData={pointsData}
         arcColor="color"
         arcStroke="stroke"
         arcDashGap="gap"
         arcDashLength="dash"
         arcAltitudeAutoScale="scale"
         arcDashAnimateTime="time"

         // Land
         hexPolygonsData={globeJson.features}
         hexPolygonColor={(geometry) => {
            return ["#8F74FF", "#CCC2F3", "#CCC2F3", "#CCC2F3"][
               geometry.properties.abbrev_len % 4
            ];
         }}
         hexPolygonAltitude={0.03}

         // Rings
         ringsData={ringsData}
         ringMaxRadius="radius"
         ringColor={(ring) => (t) => {
            const { red, green, blue } = hexRgb(ring.color);
            return `rgba(${red},${green},${blue},${Math.sqrt(1 - t)})`;
         }}
         ringPropagationSpeed="speed"
         ringRepeatPeriod="repeat"
         ringAltitude={0.03}

         // Stars
         customLayerData={[...Array(500).keys()].map(() => ({
            lat: (Math.random() - 1) * 360,
            lng: (Math.random() - 1) * 360,
            altitude: Math.random() * 2,
            size: Math.random() * 0.5,
            color: '#ffffff',
          }))}
          customThreeObject={(data) => {
            const { size, color } = data;
            return new THREE.Mesh(new THREE.SphereGeometry(size), new THREE.MeshBasicMaterial({ color }));
          }}
          customThreeObjectUpdate={(obj, data) => {
            const { lat, lng, altitude } = data;
            return Object.assign(obj.position, globeEl.current?.getCoords(lat, lng, altitude));
          }}
         
      />
   );
}

export default Earth;
