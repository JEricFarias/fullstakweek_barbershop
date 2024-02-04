import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershops-info";
import ServiceItem from "./_components/service-item";

interface BarbershopsDetailPageProps {
  params: {
    id?: string;
  };
}

const BarbershopsDetailPage = async ({
  params,
}: BarbershopsDetailPageProps) => {
  if (!params.id) {
    // TODO: redireciona para a home page.
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      Services: true,
    },
  });

  if (!barbershop) {
    // TODP: redirecionar para home page

    return null;
  }

  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />

      <div className="flex flex-col gap-4 px-5 py-6">
        {barbershop.Services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default BarbershopsDetailPage;
