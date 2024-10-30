import { THeaderProps } from "./types";

export const Header = ({ title }: THeaderProps) => {
  return (
    <h1 className="w-full text-3xl font-bold text-center mb-10">{title}</h1>
  );
};
