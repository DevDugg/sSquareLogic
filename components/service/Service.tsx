import Container from "../Container";
import ServiceCard from "./ServiceCard";
import service from "@/settings/data/service";
import { v4 } from "uuid";

const Service = () => {
  return (
    <section className="service">
      <Container className="flex flex-col gap-20">
        <h2 className="text-WHITE font-bold text-[48px] text-center">{service.title}</h2>
        <div className="grid grid-cols-2 gap-20">
          {service.items.map((item, index) => (
            <ServiceCard
              description={item.description}
              link={item.link}
              name={item.name}
              number={index + 1}
              key={v4()}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Service;
