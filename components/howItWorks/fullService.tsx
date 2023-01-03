import Image from "next/image";
import { fullServiceData } from "../../constant";
import Container from "../ui/container";
import CardSubTitle from "../ui/text/cardSubTitle";
import CardTitle from "../ui/text/cardTitle";
import Title from "../ui/text/title";
import OnboardCards from "../use-cases/onboarding/common/onboardCards";
import { motion } from "framer-motion";

function FullService() {
  const admin = [
    "Build your white-labeled allwhere store",
    "Configure custom kits with everything your employees need for work",
    "Automate on/offboarding with HRIS & IT process integrations",
    "Manage equipment, wellness, and perks all in one system",
    "Maintain an all-in-one view of budgets and status updates",
  ];
  const employee = [
    'Receive allwhere"s invite to your curated company store',
    "Select the equipment, benefits, or services needed",
    "View real-time status updates and tracking with your employee dashboard",
    "Schedule pick-up and delivery windows that work for you",
    "Get real-time access to our team’s delivery support",
  ];
  return (
    <Container className="space-y-4">
      <div className="max-w-3xl  text-center mx-auto">
        <Title
          text="Your full-service concierge for work and life."
          className="font-bold   text-center"
        />
      </div>
      <div className="grid lg:grid-cols-2 py-20 md:grid-cols-2 grid-cols-1 gap-10">
        {fullServiceData.map((data, i) => {
          return <OnboardCards key={data.id} data={data} i={i} />;
        })}
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 1 * 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-4"
        >
          <CardTitle
            text="For the administrator"
            className="lg:text-2xl md:text-2xl text-xl "
          />
          <div className="space-y-1">
            {admin.map((data, i) => {
              return (
                <div key={i} className="flex items-center gap-4">
                  <Image
                    alt="done icon"
                    src="https://assets.website-files.com/637be80ebdeb9e966b7a84cd/637be80ebdeb9e58157a856f_Checklist%20Check.svg"
                    width={17}
                    height={17}
                  />
                  <CardSubTitle text={data} />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 2 * 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-4"
        >
          <CardTitle
            text="For the employee"
            className="lg:text-2xl md:text-2xl text-xl "
          />
          <div className="space-y-1">
            {employee.map((data, i) => {
              return (
                <div key={i} className="flex items-center gap-4">
                  <Image
                    alt="done icon"
                    src="https://assets.website-files.com/637be80ebdeb9e966b7a84cd/637be80ebdeb9e58157a856f_Checklist%20Check.svg"
                    width={17}
                    height={17}
                  />
                  <CardSubTitle text={data} />
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Container>
  );
}

export default FullService;
