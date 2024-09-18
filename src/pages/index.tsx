import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HomePage from "@/component/home/HomePage";
import Intoduction from "@/component/home/Intoduction";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <HomePage/>
      <Intoduction/>
    </div>
  );
}
