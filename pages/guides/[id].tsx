import { useRouter } from "next/router";

function guide() {
  const {
    query: { id },
  } = useRouter();

  const guideData = [
    {
      dataId: "seamless-offboarding",
      hero: {
        heroImg: "/seamless-hero.png",
        title: "Your Guide to Seamless Offboarding",
        subTitle:
          "Learn how to build a cohesive and efficient offboarding strategy that's adaptable to your distributed team.",
      },
    },
    {
      dataId: "sdsd",
      hero: {
        heroImg: "/seamless-hero.png",
        title: "Your Guide to Seamless Offboarding",
        subTitle:
          "Learn how to build a cohesive and efficient offboarding strategy that's adaptable to your distributed team.",
      },
    },
  ];
  const findData = guideData.find((item) => item.dataId === id);
  console.log(findData);
  return <div>{id}</div>;
}

export default guide;
