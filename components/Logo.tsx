import profile from "@/settings/data/profile";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="logo flex items-center gap-4">
      <Image
        loading="eager"
        src={"/logo.svg"}
        alt="Logo"
        height={24}
        width={56}
        className="w-14 h-6 object-contain"
      />
      <h1 className="text-WHITE text-lg font-bold">{profile.name}</h1>
    </Link>
  );
};
export default Logo;
