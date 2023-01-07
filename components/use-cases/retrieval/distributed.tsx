import HeaderWithSubtitle from "../../common/headerWithSubtitle";
import DashboardCard from "../../home/dashboard/dashboardCard";
import Container from "../../ui/container";

function Distributed() {
  const dashboardData = [
    {
      id: 1,
      title: "Everything you need, right in the box",
      desc: "Our boxes are recyclable and padded for safety. We include enough room for a laptop and accessories, plus packing materials, instructions, and a prepaid return label.",
      img: "https://assets.website-files.com/637be80ebdeb9e966b7a84cd/637be80ebdeb9e046b7a85bd_Hands%2520on%2520Box%2520Long-p-2000.jpg",
    },
    {
      id: 2,
      title: "Real-time tracking and updates",
      desc: "We’ll notify you through every step of the dispatch and delivery process, and keep you posted on any communications between us and your employee.",
      img: "https://assets.website-files.com/637be80ebdeb9e966b7a84cd/637be80ebdeb9ec2657a85c5_4%20Card%20Grid%20Image%206.webp",
    },
    {
      id: 3,
      title: "All equipment, anywhere",
      desc: "We support procurement and retrieval operations globally, with average US-based retrieval times of less than a week. Need it faster, or interested in an international retrieval? Let us know, and we’ll provide a custom quote for you.",
      img: "https://assets.website-files.com/637be80ebdeb9e966b7a84cd/637be80ebdeb9edc347a8562_4%20Card%20Grid%20Image%207.webp",
    },
    {
      id: 4,
      title: "Hand off communication to our team",
      desc: "We’ll save time for your team by notifying your employee when their kit is dispatched, delivered, and received. If things are running slower than expected, we’ll send reminders accordingly.",
      img: "https://assets.website-files.com/637be80ebdeb9e966b7a84cd/637be80ebdeb9e449c7a85b0_spot-illo__email.webp",
    },
  ];

  return (
    <Container className='pt-0'>
      <HeaderWithSubtitle
        title="Distributed teams trust allwhere for remote device retrievals"
        subTitle="We make offboarding seamless, helping you save on time and cost."
      />
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
        {dashboardData.map((item, i) => {
          return <DashboardCard key={i} item={item} i={i} />;
        })}
      </div>
    </Container>
  );
}

export default Distributed;
