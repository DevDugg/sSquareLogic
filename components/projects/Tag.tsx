interface Props {
  name: string;
}
const Tag = ({ name }: Props) => {
  return <p className="p-2 rounded-lg bg-MAIN text-WHITE w-fit">{name}</p>;
};
export default Tag;
