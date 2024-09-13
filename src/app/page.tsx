import Image from "next/image";
import banner from "../../public/medias/jolibcare_banner.png";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <main className="flex items-center justify-center w-full h-full">
        <Image
          className="m-auto"
          src={banner}
          alt="Next.js logo"
          priority
        />
      </main>
    </div>
  );
}
