import duo from "./assets/duo.svg";
import fire from "./assets/fire.svg";
import Image from "next/image";

export default function principal() {
  return (
    <>
      <div className="grid grid-cols-6 items-center px-[200px] border border-black h-[40vh]">
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
      <div className="grid grid-rows-4 border border-black h-[60vh]">
        <div className="rows-span-1 grid grid-cols-1 items-center border">
          <h5 className="border text-center font-bold text-xl">
            Why you’ll love learning with Duolingo
          </h5>
        </div>
        <div className="row-span-3 grid grid-cols-4 border border-black">
          <div className="row-span-1 col-span-1 grid grid-rows-2 grid-cols-9 border border-black">
            <Image
              className="col-span-1"
              src={fire}
              alt="fire"
              width={43}
              height={43}
            />
            <div className="border col-span-8 border-black">
              <h5 className="font-bold ">Efective and efficient</h5>
              <p>
                Our courses effectively and efficiently teach reading,
                listening, and speaking skills. Check out our latest research!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
