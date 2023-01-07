import { useRouter } from "next/router";
import Success from "../../components/common/success";
import GuideHero from "../../components/guides/hero";
import LearnHow from "../../components/guides/learnHow";

function guide() {
  const {
    query: { id },
  } = useRouter();

  const guideData = [
    {
      dataId: "seamless-offboarding",
      hero: {
        cover: "/seamless-guide.jpg",
        heroImg: "/seamless-hero.png",
        title: "Your Guide to Seamless Offboarding",
        subTitle:
          "Learn how to build a cohesive and efficient offboarding strategy that's adaptable to your distributed team.",
      },
      how: {
        title:
          "Many companies are struggling to manage offboarding in a work from anywhere world.",
        firsDesc:
          "Keep your company ahead of the curve, increasing future retention and turning former employees into advocates.",
        secDesc:
          "allwhere has created a free guide to building the right offboarding strategy for your team, no matter how distributed.",
        howData: [
          {
            id: 1,
            title:
              "Build an offboarding strategy that's compliant and efficient",
            img: "/seamless1.png",
          },
          {
            id: 2,
            title: "Plan for retrieval of equipment",
            img: "/seamless2.png",
          },
          {
            id: 3,
            title: "Communicate effectively with employees",
            img: "/seamless3.png",
          },
        ],
      },
      allWhere: {
        img: "/allwhere1.png",
      },
    },
    {
      dataId: "remote-employee-onboarding",
      hero: {
        cover: "/remote-cover.jpg",
        heroImg: "/remote-employee-hero.png",
        title: "The Definitive Guide to Remote Employee Onboarding",
        subTitle:
          "Learn how to onboard distributed teams in a way that sets them up for success with your company — whether hybrid or remote.",
      },
      how: {
        title:
          "With teams more distributed than ever, and HR partners struggling to juggle procurement from a variety of vendors, remote onboarding can be difficult on both sides.",
        firsDesc:
          "Onboarding starts before your new hire’s first day and goes way beyond finalizing paperwork and setting up an email account.",
        secDesc:
          "Our team at allwhere have created a free guide to setting up your remote employees for success, from onboarding to their first day, to building culture and setting up a routine.",
        howData: [
          {
            id: 1,
            title: "Start onboarding your new hire before their start date",
            img: "/remote1.png",
          },
          {
            id: 2,
            title: "Create a memorable first week for new hires.",
            img: "/remote2.png",
          },
          {
            id: 3,
            title: "Ensure remote team members are set up for success",
            img: "/remote3.png",
          },
        ],
      },
      allWhere: {
        img: "/allwhere2.jpg",
      },
    },
    {
      dataId: "lifecycle-management",
      hero: {
        cover: "/life-cover.jpg",
        heroImg: "/life-cycle-hero.png",
        title: "Full Lifecycle Management in a Remote World",
        subTitle:
          "Learn how to build a full lifecycle management strategy that’s adaptable to your team, no matter how distributed.",
      },
      how: {
        title:
          "With teams more distributed than ever, and IT partners struggling to juggle day-to-day tasks with upgrades and decommissions, the remote world presents IT teams with a new set of challenges.",
        firsDesc:
          "Many companies are struggling to manage offboarding, maintain assets effectively, and build procurement strategies.",
        secDesc:
          "allwhere has created a free guide to building the right full lifecycle management strategy for your team, from onboarding, to upgrades and maintenance, to decommissions and equipment retrievals.",
        howData: [
          {
            id: 1,
            title: "Build a procurement strategy that emphasizes efficiency",
            img: "/life1.png",
          },
          {
            id: 2,
            title: "Be ready for any unexpected hardware issues",
            img: "/life2.png",
          },
          {
            id: 3,
            title:
              "Build an offboarding strategy that’s respectful of both employee & company needs",
            img: "/life3.png",
          },
        ],
      },
      allWhere: {
        img: "/allwhere3.jpg",
      },
    },
  ];
  const findData = guideData.find((item) => item.dataId === id);
  return (
    <div>
      {findData && (
        <>
          <GuideHero hero={findData?.hero} />
          <LearnHow how={findData?.how} />
          <Success title="allwhere makes setting your team up for success easy" btnText="BOOK A DEMO" subTilte="Ready to get started?" img={findData.allWhere.img}/>
        </>
      )}
    </div>
  );
}

export default guide;
