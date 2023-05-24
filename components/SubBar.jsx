import { BiSearch } from "react-icons/bi";

const SubBar = () => {
  return (
    <div className="flex items-center justify-center p-5 md:justify-end ">
      <div className="flex items-center justify-center gap-5">
        <div className="text-[#969696] font-[300] text-[12px] sm:text-[16px]">
          <span>View Store</span>
          <span className="mx-5 text-zinc-950">|</span>
          <span>Login</span>
          <span className="mx-5 text-zinc-950">|</span>
          <span>Register</span>
        </div>
        <div className="flex">
          <BiSearch />
        </div>
      </div>
    </div>
  );
};
export default SubBar;
