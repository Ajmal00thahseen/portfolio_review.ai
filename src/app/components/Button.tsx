import { ReactNode } from "react";
const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="bg-[#248CF2] rounded-[8px] p-2 text-sm text-white font-bold">
      {children}
    </button>
  );
};
export default Button;
