"use client"

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart, House, Package, ShoppingBag, ShoppingBasket } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

const Links = () => {
  const { theme } = useTheme();
  return (
    <ul
      className={cn(
        "w-fit sm:!px-2 sm:!py-6 !px-1 !py-5 flex items-center justify-between gap-4",
        buttonVariants({ variant: theme === "dark" ? "secondary" : "outline" })
      )}
    >
      {[{
        name: "home",
        icon: <House />
      }, {
        name: "components",
        icon: <Package className="fill-secondary stroke-primary" />
      }, {
        name: "card",
        icon: <ShoppingBag className="fill-secondary stroke-primary" />
      }, {
        name: "liked",
        icon: <Heart className="fill-secondary stroke-primary" />
      }].map((item) => (
        <li key={item.name}>
          <Link href={`/${item.name}`}>
            <Button
              variant={"default"}
              className="flex items-center justify-center sm:!px-4 sm:!py-2 !px-2 !py-0"
            >
              {item.icon}{" "}
              <span
                className={"sm:flex hidden"
                }
              >
                {item.name}
              </span>
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;
