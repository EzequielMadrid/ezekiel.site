"use client";
import dynamic from "next/dynamic";

//* Dynamically import react-lottie without rendering on the server
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export default Lottie;
