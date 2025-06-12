import { SERVICES_DATA } from "@/constants/index";

export default function Page() {
  return (
    <div className="relative">
      {SERVICES_DATA.map((service, index) => (
        <div key={index}>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <h2>{service.priceRange}</h2>
        </div>
      ))}
    </div>
  );
}
