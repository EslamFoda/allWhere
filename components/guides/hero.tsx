import Image from "next/image";
import Input from "../common/input";
import Paragraph from "../ui/text/paragraph";
import Title from "../ui/text/title";

interface Hero {
  cover: string;
  heroImg: string;
  title: string;
  subTitle: string;
}
interface Props {
  hero: Hero;
}
function GuideHero({ hero }: Props) {
  return (
    <div className="bg-main-blue relative overflow-hidden  rounded-b-[50px]">
      <Image
        src={hero.heroImg}
        className="absolute bottom-0  left-0"
        width={500}
        height={400}
        alt="hero img"
      />
      <div className="mx-auto max-w-6xl px-6 w-full pt-16 lg:pb-20 md:pb-40 pb-44">
        <div className="grid lg:grid-cols-2  grid-cols-1 gap-y-16 gap-10">
          <div>
            <Title className="font-semibold" text={hero.title} />
            <Paragraph text={hero.subTitle} />
          </div>
          <div className="relative lg:w-5/6  md:w-11/12 w-11/12 self-end justify-self-end">
            <div className="absolute w-[97px] h-[124px] lg:-top-12 lg:-left-16 md:-top-12 md:-left-16 -left-8 -top-8">
              <Image
                src={hero.cover}
                alt="cover img"
                className="w-full h-full"
                fill
              />
              <div className="absolute -top-[1px] -left-[1px] bg-main-blue w-4 h-4"></div>
              <Image
                src="/cover.svg"
                className="w-full h-full"
                fill
                alt="cover img"
              />
            </div>
            <div className="border-2 lg:p-10 md:p-10 p-4 drop-shadow-xl  bg-white rounded-xl  border-main-black border-solid space-y-6">
              <h1 className="lg:text-2xl md:text-2xl text-base font-bold">Get your free guide</h1>
              <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                <div>
                  <Input label="First name*" placeholder="First name" />
                </div>
                <div>
                  <Input label="Last name*" placeholder="last name" />
                </div>
              </div>
              <Input label="Company name*" placeholder="Company name" />
              <Input label="Work email*" placeholder="email@work.com" />
              <p className="text-[#647076] text-xs text-center">
                By clicking on "Download Guide", you agree to our{" "}
                <span className="underline cursor-pointer">
                  Terms of Service,
                </span>{" "}
                including our{" "}
                <span className="underline cursor-pointer">
                  Privacy Policy.
                </span>
              </p>
              <button className="hover:bg-[#f9c54d] bg-main-black  w-full transition-all mt-6 drop-shadow-md hover:text-main-black  py-2 text-white px-6 rounded-full font-bold lg:text-lg  md:text-lg text-md">
                DOWNLOAD GUIDE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideHero;
