import Cta from "../../common/cta";
import Image from "next/image";
import Container from "../../ui/container";
function Supporting() {
  return (
    <div>
      <Container className='!py-10'>
        <Cta
          smallBtn
          title="Supporting your team, from day one onwards."
          paragraph="From onboarding to offboarding, we ensure your team has everything they need to excel — from equipment to wellness benefits."
        />
      </Container>
      <div className="flex pb-10 px-4 lg:gap-10 md:gap-8 sm:gap-4 gap-2 items-center w-full">
        <div className="relative rounded-full overflow-hidden aspect-[4/5] h-[16vw]">
          <Image src="/laptop.webp" alt="laptop img" fill />
        </div>
        <div className="relative rounded-full overflow-hidden h-[16vw] aspect-square">
          <Image
            className="object-cover"
            src="/customer-service.jpg"
            alt="customer service img"
            fill
          />
        </div>
        <div className="relative rounded-full overflow-hidden h-[16vw] aspect-video">
          <Image
            src="/meeting.webp"
            alt="meeting img"
            width={367}
            height={206}
          />
        </div>
        <div className="relative rounded-full overflow-hidden h-[16vw] aspect-square">
          <Image
            className="object-cover object-right"
            src="/foucs-women.webp"
            alt="customer service img"
            fill
          />
        </div>
        <div className="relative rounded-full overflow-hidden aspect-[4/5] h-[16vw]">
          <Image fill src="/earth.webp" alt="laptop img" />
        </div>
      </div>
    </div>
  );
}

export default Supporting;
