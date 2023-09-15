import FooterLink from "./FooterLink";
import footer from "@/settings/data/footer";
import profile from "@/settings/data/profile";
import { v4 } from "uuid";

const FooterBottom = () => {
  return (
    <div className="footer-bottom flex items-center gap-10 justify-between">
      <div className="flex items-center gap-6 text-WHITE text-lg">
        <span>{footer.subTitle}</span>
        <a href={`mailto:${profile.email}`} className="font bold underline">
          {profile.email}
        </a>
      </div>
      <ul className="flex items-center gap-14 text-WHITE text-lg">
        {profile.links.map((link) => (
          <FooterLink link={link.link} name={link.name} key={v4()} />
        ))}
      </ul>
    </div>
  );
};
export default FooterBottom;
