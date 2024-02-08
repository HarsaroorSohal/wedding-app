import { AddItemDialog } from "./add-item-dialog";

export const HeadingBanner = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Our Wedding Registry
            </h1>
            <p className="py-6 mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              We are so excited to celebrate our special day with you. Here are
              some gifts that would help us start our new life together.
            </p>
            <AddItemDialog buttonText={"Add new item"}></AddItemDialog>
          </div>
        </div>
      </div>
    </section>
  );
};
