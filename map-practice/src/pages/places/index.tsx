import { useLoadScript } from "@react-google-maps/api";
import PlaceMap from "@/components/PlaceMap";

export default function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ["places"], // places 라이브러리 추가
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <PlaceMap />;
}
