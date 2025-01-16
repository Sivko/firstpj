import Image from "next/image";
import HeaderDesctop from "./components/Header-desctop";
import HeaderMobile from "./components/Header-mobile";
import ViewTest from "./components/ViewTest";

export default function Home() {
  return (
    <div>
      <HeaderDesctop/>
      <ViewTest />
      <HeaderMobile />
    </div>
  );
}
