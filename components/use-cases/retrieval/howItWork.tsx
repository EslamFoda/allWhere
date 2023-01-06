import HeaderWithSubtitle from "../../common/headerWithSubtitle";
import Container from "../../ui/container";
import CardSubTitle from "../../ui/text/cardSubTitle";
import CardTitle from "../../ui/text/cardTitle";
import { motion } from "framer-motion";
function HowItWork() {
  const data = [
    {
      title: "Share your info",
      id: 1,
      subTitle:
        "Tell us a litte bit about yourself, including your email address.",
    },
    {
      title: "Share your employee’s info",
      id: 2,
      subTitle:
        "Tell us about your employee. Don’t worry about tracking down the address. We’ll reach out and get that directly from them.",
    },
    {
      title: "Tell us about the device(s)",
      id: 3,
      subTitle:
        "List which devices need to be returned and what we should do with them (store, sell, recycle, or donate).",
    },
    {
      title: "Pay for the retrieval",
      id: 4,
      subTitle: "Check out using a secure Stripe checkout form.",
    },
  ];
  return (
    <Container className="pt-0">
      <HeaderWithSubtitle
        title="How it works"
        subTitle="Try a retrieval. No need to sign up or incur a refurring fee. Just pay for how many retrievals you need."
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-14 gap-10">
        {data.map((item, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              key={item.id}
              viewport={{ once: true, amount: 0.1 }}
              className="text-center"
            >
              <CardTitle
                className="!text-3xl font-medium"
                text={`0 ${i + 1}`}
              />
              <div className="w-full my-6 h-[1px] bg-black/20"></div>
              <div className="space-y-2">
                <CardTitle text={item.title} />
                <CardSubTitle text={item.subTitle} />
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="flex items-center justify-center py-5">
      <button className="bg-[#f9c54d]   transition-all mt-6 drop-shadow-md  py-2 hover:bg-[#131414] hover:text-white px-6 rounded-full font-bold text-lg">
          START DEVICE RETURN
        </button>
      </div>
    </Container>
  );
}

export default HowItWork;
