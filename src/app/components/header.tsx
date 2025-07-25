import Image from "next/image";
import Button from "./Button";

const Header = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="p-4">
        <Image src="/logo.svg" width={191} height={23} alt={"Logo"} />
      </div>
      <div className="flex flex-row space-x-11 p-4 items-center">
        <p className="text-sm text-[#121417] font-md">How it works</p>
        <p className="text-[#121417] text-sm font-md">Pricing</p>
        <p className="text-[#121417] text-sm font-md">FAQ</p>
        <Button>Upload Portfolio</Button>
      </div>
    </div>
  );
};
export default Header;
