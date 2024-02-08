import { CarouselDemo } from "@/components/custom/carousel-demo";
import { HomePageComponent } from "@/components/home-page-component";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col  min-h-screen items-center justify-center p-24">
      <HomePageComponent>
      </HomePageComponent>
    </main>
  );
}
