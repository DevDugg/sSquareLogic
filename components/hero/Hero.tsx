import Container from "../Container";
import Title from "./Title";

const Hero = () => {
  return (
    <div className="hero">
      <Container className="flex flex-col gap-[120px]">
        <Title />
      </Container>
    </div>
  );
};
export default Hero;
