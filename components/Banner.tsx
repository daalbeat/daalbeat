// NextJS
import Image from "next/image";
import Hero from "../public/hero.jpg";

export default function Example() {
  return (
    <div className="px-20 mt-40">
      <div className="mx-auto rounded-lg md:container">
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
