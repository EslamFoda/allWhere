import Success from "../../components/common/success";
import Found from "../../components/teams/hr/foundHr";
import Hero from "../../components/teams/hr/hero";
import Lifecycle from "../../components/teams/hr/lifecycle";

const Hr = () => {
  return (
    <>
      <Hero />
      <Lifecycle />
      <Found />
      <Success
        titleClassName="lg:!text-5xl font-medium"
        btnText="GET STARTED"
        img="/hr.webp"
        title="Ready to win back hours and enhance your employees’ experience?"
        subTilte="Learn how allwhere can help you create a workplace that’s connected, productive, and engaged."
      />
    </>
  );
};

export default Hr;
