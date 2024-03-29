"use client";

import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeft, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopInfoProps {
  barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Button
          size="icon"
          variant="outline"
          className="absolute left-4 top-4 z-50"
          onClick={handleBackClick}
        >
          <ChevronLeft />
        </Button>

        <Button
          size="icon"
          variant="outline"
          className="absolute right-4 top-4 z-50"
        >
          <MenuIcon />
        </Button>

        <Image
          src={barbershop?.imageUrl}
          fill
          alt={barbershop?.name}
          style={{ objectFit: "cover" }}
          className="opacity-75"
        />
      </div>

      <div className="border-b border-solid border-secondary px-5 py-3 pb-6">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>
        <div className="item-center mt-2 flex gap-1">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>
        <div className="item-center mt-2 flex gap-1">
          <StarIcon className="text-primary" size={18} />
          <p className="text-sm">5,0 (899 avaliações)</p>
        </div>
      </div>
    </div>
  );
};

export default BarbershopInfo;
