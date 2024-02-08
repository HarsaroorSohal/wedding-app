"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AddItemDialog({ buttonText }: { buttonText: string }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("form submitted", { name, description, link });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{buttonText} </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new gift request to the registry</DialogTitle>
          <DialogDescription>
            {`Make changes to your profile here. Click save when you're done.`}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="PS5"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                placeholder="Second hand is fine"
                className="col-span-3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="imageLink" className="text-right">
                Image Link
              </Label>
              <Input
                id="Image Link"
                placeholder="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/819Q2yyI-bL._SL1500_.jpg"
                className="col-span-3"
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="link" className="text-right">
                Link
              </Label>
              <Input
                id="link"
                placeholder="https://amzn.eu/d/1S6lSfZ"
                className="col-span-3"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
          </div>
          <Button type="submit">Save changes</Button>
        </form>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
