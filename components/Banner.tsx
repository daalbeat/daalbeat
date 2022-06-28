// NextJS
import Image from "next/image";
import Hero from "../public/hero.jpg";

export default function HeroImage() {
  return (
    <div className="px-4 mt-20 lg:mt-40 lg:px-20 ">
      <div className="px-4 pb-6 mx-auto max-w-7xl sm:px-10">
        <Image
          src={Hero}
          className="rounded-lg"
          alt="Ethnicity"
          placeholder="blur"
        />
      </div>
    </div>
  );
}
