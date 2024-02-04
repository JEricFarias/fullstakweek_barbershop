"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  const router = useRouter();
  const handleBookingClick = () => {
    router.push(`/barbershops/${barbershop.id}`);
  };

  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl ">
      <CardContent className="p-0">
        <div className="relative h-[159px] w-full">
          <Badge className=" group absolute left-2 top-2 z-10 flex items-center justify-center gap-1 bg-secondary opacity-90">
            <StarIcon
              size={12}
              className="fill-primary text-primary group-hover:fill-white group-hover:text-white"
            />
            <span>5,0</span>
          </Badge>
          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt={barbershop.name}
            src={barbershop.imageUrl}
            className="rounded-2xl px-1"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="px-3 pb-3">
          <h2 className="line-clamp-1 font-bold">{barbershop.name}</h2>
          <p className="line-clamp-1 text-sm text-gray-400">
            {barbershop.address}
          </p>

          <Button
            variant="secondary"
            className="mt-3 w-full"
            onClick={handleBookingClick}
          >
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
