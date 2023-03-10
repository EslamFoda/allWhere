import Cta from "../../common/cta";

function Hero() {
  return (
    <div
      style={{ backgroundImage: "url(/employee-exp.webp)" }}
      className="bg-main-blue border-main-black border-2 rounded-xl m-8 object-contain bg-no-repeat bg-bottom bg-contain lg:py-28  md:py-28 py-10 lg:px-6 md:px-6 px-2"
    >
      <Cta
        containerClassName="space-y-10"
        smallBtn
        btnClassName="bg-[#131414] transition-all hover:text-main-black hover:bg-[#f9c54d] text-white"
        title="Make your workplace a great place to work."
        paragraph="Every team looks different. We curate an experience that works for your company, so your employees can love where they work."
      />
    </div>
  );
}

export default Hero;
