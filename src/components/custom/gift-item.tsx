"use client";
import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import styled from "styled-components";
import { ItemData } from "@/lib/types";
import { removeItem } from "@/lib/service";

const ActionButtons = styled.div`
  display: flex;
  flex-drection: row;
  justify-content: space-between;
`;
const CardContainer = styled(Card)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 220px;
  width: fit-content;
  max-width: 800px;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const temp =
  "https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/819Q2yyI-bL._SL1500_.jpg";

const GiftItem = ({
  handleDibs,
  handleRemove,
  hasButtons,
  data,
}: {
  handleDibs?: any;
  handleRemove?: any;
  hasButtons: boolean;
  data: ItemData;
}) => {
  return (
    <CardContainer>
      <Image src={temp} alt="test" width={300} height={200}></Image>
      <StyledCardContent>
        <div className="py-4"> {data.itemName} </div>
        <div className="py-4"> {data.itemDescription} </div>
        {hasButtons && (
          <ActionButtons>
            <Button onClick={() => handleDibs(data)}>Call Dibs</Button>
            <Button onClick={() => handleRemove(data)}> Remove </Button>
          </ActionButtons>
        )}
      </StyledCardContent>
    </CardContainer>
  );
};

export default GiftItem;
