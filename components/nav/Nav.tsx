import Container from "../Container";
import Logo from "../Logo";
import Burger from "./Burger";

const Nav = () => {
  return (
    <nav className="nav">
      <Container className="flex items-center justify-between gap-10 py-[52px]">
        <Logo />
        <Burger />
      </Container>
    </nav>
  );
};
export default Nav;
