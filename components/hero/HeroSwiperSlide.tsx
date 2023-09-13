// "use client";

import Image from "next/image";
import Link from "next/link";

interface Props {
  img: string;
  link: string;
}
const HeroSwiperSlide = ({ img, link }: Props) => {
  return (
    <Link href={link}>
      <Image src={img} alt={img} width={360} height={400} className="w-[360px] h-[400px] object-cover" />
    </Link>
  );
};
export default HeroSwiperSlide;
