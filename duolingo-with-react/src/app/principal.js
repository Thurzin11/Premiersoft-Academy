import duo from "./assets/duo.svg";
import Image from "next/image";

export default function principal() {
  return (
    <>
      <div className="grid grid-cols-6 items-center px-[200px] border border-black ">
        <Image
          className="col-span-1 my-[20px]"
          src={duo}
          alt="duo"
          width={185}
          height={145}
        />
        <div className="col-span-5 ms-[48px]">
          <h5 className="mb-[24px] font-bold">
            The world’s #1 way to learn a language
          </h5>
          <p className="">
            Learning with Duolingo is fun, and research shows that it works!
            With quick, bite-sized lessons, you’ll earn points and unlock new
            levels while gaining real-world communication skills.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-6 items-center px-[200px] border-b border-black ">
        <Image
          className="col-span-1 my-[20px]"
          src={duo}
          alt="duo"
          width={185}
          height={145}
        />
        <div className="col-span-5 ms-[48px]">
          <h5 className="mb-[24px] font-bold">
            The world’s #1 way to learn a language
          </h5>
          <p className="">
            Learning with Duolingo is fun, and research shows that it works!
            With quick, bite-sized lessons, you’ll earn points and unlock new
            levels while gaining real-world communication skills.
          </p>
        </div>
      </div>
    </>
  );
}
