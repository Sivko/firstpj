import Image from "next/image";
import HeaderDesctop from "./components/Header-desctop";
import HeaderMobile from "./components/Header-mobile";

export default function Home() {
  return (
    <div>
      <HeaderDesctop/>
      <br />
      <HeaderMobile />
    </div>
  );
}
