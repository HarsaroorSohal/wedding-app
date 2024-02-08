import { weddingGiftItems } from "./data";
export const removeItem = (giftItems: any, item: any) => {
  const updatedWeddingGiftItems = giftItems.filter((giftItem: any) => {
    return giftItem.itemName !== item.itemName;
  });
  return updatedWeddingGiftItems;
};
