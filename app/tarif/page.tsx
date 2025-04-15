import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = await createClient();

  const { data: services } = await supabase.from("service").select("*");

  return (
    <div className="relative">
      {services?.map((service) => (
        <div key={service.id}>
          <h1>{service.name}</h1>
          <p>{service.description}</p>
          <h2>{service.price} €</h2>
        </div>
      ))}
    </div>
  );
}
