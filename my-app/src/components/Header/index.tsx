import { Button as LoginButton } from "../shared/Button";
import { NavBar } from "./Navbar";

export interface HeaderProps {
  borderColor: string;
  flexDirection?: string;
}
export const Header = ({ borderColor, flexDirection }: HeaderProps) => {
  return (
    <div
      className={`${borderColor} border-b-2  py-2 flex ${flexDirection} justify-between  items-center`}
    >
      <LoginButton bgColor={"bg-indigo-500"} label={"Login"} disabled={false} />
      <NavBar />
    </div>
  );
};
