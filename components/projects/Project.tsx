import Image from "next/image";
import Tag from "./Tag";
import { v4 } from "uuid";

interface Props {
  name: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}
const Project = ({ description, link, name, tags, title, image }: Props) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-10 justify-between">
      <div className="project flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 text-BLACK pr-[20%]">
            <h5 className="font-normal text-2xl">{name}</h5>
            <h4 className="text-[40px] font-bold">{title}</h4>
            <p className="text-lg">{description}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          {tags.map((tag) => (
            <Tag name={tag} key={v4()} />
          ))}
        </div>
      </div>
      <div className="max-w-[40%] w-full">
        <Image src={image} alt={name} width={540} height={600} className="object-contain w-full max-h-[600px] h-full" />
      </div>
    </a>
  );
};
export default Project;
