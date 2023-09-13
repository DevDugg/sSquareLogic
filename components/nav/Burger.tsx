import Image from "next/image";

const Burger = () => {
  return (
    <div className="burger">
      <Image
        loading="eager"
        src={"/burger.svg"}
        alt="Burger"
        width={48}
        height={48}
        className="w-12 h-12 object-contain"
      />
    </div>
  );
};
export default Burger;
