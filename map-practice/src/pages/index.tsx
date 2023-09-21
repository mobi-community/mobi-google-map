import { Inter } from "next/font/google";
import { useLoadScript } from "@react-google-maps/api";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className={`${inter.className} ${styles.main}`}>
      <div className={`${styles.map} ${styles.basic}`}>
        <Link href="/basic-map">1. Basic Map 이동하기</Link>
      </div>
      <div className={`${styles.map} ${styles.places}`}>
        <Link href="/places">2. Place Map 이동하기(지도 ID 검색)</Link>
      </div>
    </div>
  );
}
