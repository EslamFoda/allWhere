import { useRef } from "react";
import HeaderWithSubtitle from "../../common/headerWithSubtitle";
import Container from "../../ui/container";
import Image from "next/image";
import Paragraph from "../../ui/text/paragraph";
import { useInView } from "react-intersection-observer";
function PerfectSetup() {
  const imageRef = useRef(null);

  const { ref: firstContainer, inView: firstInView } = useInView({
    threshold: 0.5,
  });

  const { ref: secondContainer, inView: secondInView } = useInView({
    threshold: 0.5,
  });

  const { ref: thirdContainer, inView: thirdInView } = useInView({
    threshold: 0.5,
  });
  const { ref: fourthContainer, inView: fourthInView } = useInView({
    threshold: 0.5,
  });
  const getImage = () => {
    if (firstInView) return "/parellex1.webp";
    if (secondInView) return "/parellex2.webp";
    if (thirdInView) return "/parellex3.webp";
    if (fourthInView) return "/parellex4.webp";
    return "/blank-img.png";
  };

  const animate = () => {
    if (firstInView) return "translate-y-0 opacity-100";
    if (secondInView) return " translate-y-14 opacity-100";
    if (thirdInView) return " translate-y-16 opacity-100";
    if (fourthInView) return " translate-y-0 opacity-100";
    return "translate-y-0 translate-x-100 opacity-0";
  };

  const perfectSetupData = [
    {
      id: 1,
      title: "Choose your own (equipment) adventure",
      subTitle:
        "Get your new hire excited to join by giving them the chance to choose their own supplies and accessories, from their laptop and phone down to their office furniture.",
      img: "/parellex1.webp",
      containerRef: firstContainer,
    },
    {
      id: 2,
      title: "Timely delivery",
      subTitle:
        "First impressions count, and a messy onboarding can get both employer and employee started on the wrong foot. We’ll ensure that your new hire’s complete setup is signed, sealed, and delivered ahead of their start date.",
      img: "/parellex2.webp",
      containerRef: secondContainer,
    },
    {
      id: 3,
      title: "Overnight upgrades and replacements",
      subTitle:
        "When hardware fails, we step in with overnight solutions that ensure your team can keep their stress levels minimal and their productivity high.",
      img: "/parellex3.webp",
      containerRef: thirdContainer,
    },
    {
      id: 4,
      title: "Everything you need, all in one place",
      subTitle:
        "Employees can browse hardware, equipment, swag, wellness, and more, and employers can access real-time data on their team’s activity and habits. All in a custom-built store built with your company’s branding.",
      img: "/parellex4.webp",
      containerRef: fourthContainer,
    },
  ];

  return (
    <Container>
      <div className="max-w-4xl mx-auto text-center">
      <HeaderWithSubtitle
      paragraphClass='max-w-xl text-center  mx-auto'
        title="The perfect setup for success"
        subTitle="For distributed teams, the right equipment is key. We make sure you and your team are always prepared."
      />
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-20">
        <div className="lg:block md:block hidden">
          <Image
            ref={imageRef}
            className={`sticky aspect-video border-main-black border-2 border-solid rounded-xl overflow-hidden object-cover top-40 ${animate()} transition-all  duration-700`}
            alt="sticky img"
            src={getImage()}
            width={1000}
            height={400}
          />
        </div>
        <div className="lg:hidden md:hidden block">
          <Image
            className={` aspect-video border-main-black border-2 border-solid rounded-xl overflow-hidden object-cover  `}
            alt="sticky img"
            src={"/parellex1.webp"}
            width={1000}
            height={400}
          />
        </div>
        <div className="flex flex-col lg:gap-80 md:gap-40 gap-8">
          {perfectSetupData.map((data) => {
            return (
              <div className="space-y-4" key={data.id}>
                {" "}
                <div className="space-y-4" ref={data.containerRef}>
                  <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold">
                    {data.title}
                  </h2>
                  <Paragraph text={data.subTitle} />
                </div>
                <div className="lg:hidden md:hidden block">
                  <Image
                    className={` aspect-video border-main-black border-2 border-solid rounded-xl overflow-hidden object-cover  `}
                    alt="sticky img"
                    src={data.img}
                    width={1000}
                    height={400}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default PerfectSetup;
