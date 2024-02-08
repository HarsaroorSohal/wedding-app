"use client";
import GiftItem from "./gift-item";
import { useState } from "react";
import { weddingGiftItems } from "@/lib/data";
import { removeItem } from "@/lib/service";
import styled from "styled-components";
import { ItemData } from "@/lib/types";

import { CarouselDemo } from "@/components/custom/carousel-demo";

export const GiftItemsContainer = () => {
  const [giftItems, setGiftItems] = useState(weddingGiftItems);
  const [bookedItems, setBookedItems] = useState<Array<ItemData>>([]);
  const handleRemove = (giftItem: any) => {
    setGiftItems(removeItem(giftItems, giftItem));
  };
  const handleDibs = (giftItem: any) => {
    setBookedItems([...bookedItems, giftItem]);
    setGiftItems(removeItem(giftItems, giftItem));
  };

  const GiftsContainer = styled.div``;
  return (
    <>
      <section className="w-full py-8 md:py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl py-6 font-bold tracking-tighter sm:text-5xl">
            Gifts for the Home
          </h2>
          {/* <CarouselDemo></CarouselDemo> */}
          <GiftsContainer className="flex flex-col gap-6 mt-8">
            {!!giftItems.length
              ? giftItems.map((giftItem, index) => (
                  <GiftItem
                    handleDibs={handleDibs}
                    handleRemove={handleRemove}
                    hasButtons
                    key={giftItem.id}
                    data={giftItem}
                  ></GiftItem>
                ))
              : "No more"}
          </GiftsContainer>
        </div>
      </section>
      <section className="w-full py-8 md:py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Booked Gifts
          </h2>
          <GiftsContainer className="flex flex-col gap-6 mt-8">
            {bookedItems.map((giftItem, index) => (
              <GiftItem
                hasButtons={false}
                key={giftItem.id}
                data={giftItem}
              ></GiftItem>
            ))}
          </GiftsContainer>
        </div>
      </section>
    </>
  );
};
