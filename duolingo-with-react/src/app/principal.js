import duo from "./assets/duo.svg";
import fire from "./assets/fire.svg";
import group from "./assets/group.svg";
import laptop from "./assets/Illustration.svg";
import woman from "./assets/woman.svg";
import king from "./assets/Vectors.svg";
import Image from "next/image";

export default function principal() {
  return (
    <>
      <div className="grid grid-cols-6 items-center px-[200px]   h-[40vh]">
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
      <div className="grid grid-rows-3   h-[60vh]">
        <div className="row-span-3 grid grid-rows-3 grid-cols-3 border px-[100px]">
          <h5 className="text-center self-center font-bold text-xl col-span-3">
            Why you’ll love learning with Duolingo
          </h5>
          <div className="row-span-2 grid grid-cols-1">
            <div className="row-span-1 col-span-1 grid grid-cols-9">
              <Image
                className="col-span-1  "
                src={fire}
                alt="fire"
                width={43}
                height={43}
              />
              <div className="col-span-8 ">
                <h5 className="font-bold ">Efective and efficient</h5>
                <p className="w-[215px] h-[96]">
                  Our courses effectively and efficiently teach reading,
                  listening, and speaking skills. Check out our latest research!
                </p>
              </div>
            </div>
            <div className="row-span-1 col-span-1 grid grid-cols-9">
              <Image
                className="col-span-1  "
                src={group}
                alt="fire"
                width={43}
                height={43}
              />
              <div className=" col-span-8 ">
                <h5 className="font-bold ">Personalized learning</h5>
                <p className="w-[245px] h-[96px]">
                  Combining the best of AI and language science, lessons are
                  tailored to help you learn at just the right level and pace.
                </p>
              </div>
            </div>
          </div>
          <div className="row-span-2 grid grid-cols-1 ">
            <div className="row-span-1 col-span-1 grid grid-cols-9">
              <Image
                className="col-span-9 self-center mx-auto"
                src={laptop}
                alt="fire"
                width={245}
                height={161}
              />
            </div>
          </div>
          <div className="row-span-2 grid grid-cols-1 ">
            <div className="row-span-1 col-span-1 grid grid-cols-9">
              <Image
                className="col-span-1 "
                src={king}
                alt="king"
                width={43}
                height={43}
              />
              <div className="col-span-8 ">
                <h5 className="font-bold ">Stay motivated</h5>
                <p className="w-[325.51px] h-[96]">
                  We make it easy to form a habit of language learning, with
                  game-like features, fun challenges, and reminders from our
                  friendly mascot, Duo the owl.
                </p>
              </div>
            </div>
            <div className="row-span-1 col-span-1 grid grid-cols-9">
              <Image
                className="col-span-1 "
                src={woman}
                alt="woman"
                width={43}
                height={43}
              />
              <div className=" col-span-8 ">
                <h5 className="font-bold ">Have fun with it!</h5>
                <p className="w-[325.51px] h-[96]">
                  Effective learning doesn’t have to be boring! Build your
                  skills each day with engaging exercises and playful
                  characters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
