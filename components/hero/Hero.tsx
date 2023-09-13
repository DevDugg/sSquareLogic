import Container from "../Container";
import HeroSwiper from "./HeroSwiper";
import Link from "next/link";
import Title from "./Title";

const Hero = () => {
  return (
    <div className="hero flex flex-col gap-[120px]">
      <Container>
        <Title />
      </Container>
      <div className="flex flex-col gap-6">
        <HeroSwiper />
        <Container>
          <div className="flex justify-between gap-10 items-center">
            <h4 className="text-WHITE text-base text-center">Recent projects</h4>
            <Link href={"/projects"} className="text-WHITE text-base text-center underline">
              See more
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Hero;
