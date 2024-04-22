'use client'
import React, { useCallback, useRef } from "react";
import styles from "./waveplayer.module.css";
import Image from "next/image";
import { useWavesurfer } from "@wavesurfer/react";

function WavePlayer() {
   const containerRef = useRef(null);

   const { wavesurfer, isPlaying } = useWavesurfer({
      container: containerRef,
      height: 200,
      waveColor: "#CECEC9",
      progressColor: "#5A36EC",
      url: "https://upload.wikimedia.org/wikipedia/en/d/d0/Rick_Astley_-_Never_Gonna_Give_You_Up.ogg",
      barWidth: 3,
      barGap: 5,
      barRadius: 4,
   });

   const onPlayPause = useCallback(() => {
      wavesurfer && wavesurfer.playPause();
   }, [wavesurfer]);

   return (
      <div className={styles.wrapper}>
         <button className={styles.playpause} onClick={onPlayPause}>
            {isPlaying ? (
               <Image src="features/voice-lang/pause.svg" alt="pause" width="15" height="13"  />
            ) : (
               <Image src="features/voice-lang/play.svg" alt="play" width="15" height="13" />
            )}
         </button>
         <div ref={containerRef} className={styles.wavesurfer}/>
      </div>
   );
}

export default WavePlayer;
