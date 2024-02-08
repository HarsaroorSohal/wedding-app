import * as React from "react";
import Image from "next/image";
import styled from "styled-components";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { weddingGiftItems } from "@/lib/data";

const CarouselContainer = styled.div`
  display: flex;
  width: 600px;
  height: 600px;
`;
export function CarouselDemo() {
  return (
    <CarouselContainer>
      <Carousel className="w-full">
        <CarouselContent>
          {weddingGiftItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    {/* <Image
                    src="https://source.unsplash.com/random/800x600"
                    alt="Temp image"
                    width={400}
                    height={400}
                  ></Image> */}
                    <span className="text-4xl font-semibold">
                      {item.itemName}
                    </span>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-between p-5">
                <Button> Go to Item Page </Button>
                <Button> Remove </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </CarouselContainer>
  );
}
