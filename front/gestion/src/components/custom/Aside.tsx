import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "../ui/tooltip";
import {
  Home,
  LineChart,
  Package,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";

import { Label } from "../ui/label";
//import { useState } from "react";

interface AsideProps {
  num: string;
  setNum: (newNum: string) => void;
}

export default function Aside({ num, setNum }: AsideProps) {
  const contentTable = [
    "Home",
    "Orders",
    "Products",
    "Customers",
    "Analytics",
  ] as string[];

  const componentTable = [
    <Home className="h-5 w-5"></Home>,
    <ShoppingCart className="h-5 w-5"></ShoppingCart>,
    <Package className="h-5 w-5"></Package>,
    <Users2 className="h-5 w-5"></Users2>,
    <LineChart className="h-5 w-5"></LineChart>,
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 py-4">
        {contentTable.map((content, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Label
                  onClick={() => {
                    setNum(index.toString());
                    num = index.toString();
                  }}
                  className={`${
                    //numero
                    num === index.toString() && "bg-accent"
                  } flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
                >
                  {componentTable[index]}

                  <span className="sr-only">{content}</span>
                </Label>
              </TooltipTrigger>
              <TooltipContent side="right">{content}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Label className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Label>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
}
