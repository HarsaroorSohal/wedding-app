import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { weddingGiftItems } from "@/lib/data";
import Image from "next/image";
import GiftItem from "./custom/gift-item";
import { HeadingBanner } from "./custom/heading-banner";
import { CarouselDemo } from "@/components/custom/carousel-demo";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { AddItemDialog } from "./custom/add-item-dialog";
import { FooterBanner } from "./custom/footer-banner";
import { GiftItemsContainer } from "./custom/gift-items-container";

export function HomePageComponent() {
  return (
    <>
      <HeadingBanner></HeadingBanner>
      <GiftItemsContainer></GiftItemsContainer>
      <FooterBanner></FooterBanner>
    </>
  );
}
