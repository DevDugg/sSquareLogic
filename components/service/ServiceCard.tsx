import Btn from "../Btn";

interface Props {
  name: string;
  description: string;
  link: string;
  number: number;
}
const ServiceCard = ({ number, description, link, name }: Props) => {
  return (
    <div className="service-card flex flex-col gap-8">
      <div className="flex items-center gap-10">
        <span className="service-number text-MAIN text-[32px]">{number < 0 ? number : `0${number}`}</span>
        <h3 className="text-WHITE text-[32px] font-bold">{name}</h3>
      </div>
      <p className="text-base text-WHITE">{description}</p>
      <Btn link={link} name="See more" />
    </div>
  );
};
export default ServiceCard;
