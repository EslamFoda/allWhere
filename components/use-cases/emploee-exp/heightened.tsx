import React from "react";
import Cta from "../../common/cta";
import Container from "../../ui/container";

function Heightened() {
  return (
    <div className="px-6">
    <Container
      style={{ backgroundImage: "url(/heightened.webp)" }}
      className=" rounded-3xl m-8  bg-cover bg-no-repeat bg-center relative after:bg-black/70 after:absolute after:top-0 after:right-0 after:overflow-hidden after:rounded-3xl after:w-full after:h-full lg:py-28  md:py-28 py-10 lg:px-6 md:px-6 px-2"
    >
      <Cta
        paragraphClassName="text-white"
        containerClassName="space-y-10 z-20 relative"
        titleClassName="text-white lg:!text-4xl max-w-4xl font-bold"
        title="Interested in bringing a heightened employee experience to your distributed team?"
        paragraph="Learn how allwhere can help you create a workplace that’s connected, productive, and engaged."
      />
    </Container>
    </div>
  );
}

export default Heightened;
