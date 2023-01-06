import Container from "../../ui/container";
import Title from "../../ui/text/title";
import Expand from "../../ui/disclosure";
import Image from "next/image";
function Frequently() {
  const freqData = [
    {
      id: 1,
      btn: "What are my storage options?",
      desc: "You can choose to have your retrieval delivered back to your home or office, or, if you prefer, we can store it for you at our allwhere Depot. Devices stored at our Depot can be disbursed again any time you or an employee need them.",
    },
    {
      id: 2,
      btn: "Can you dispose of the device if it is no longer needed?",
      desc: "Yes - we can facilitate reselling, recycling, or donating the device. We can also provide certificates of destruction or sanitization upon request. When completing the order, select “allwhere Depot” as the return location to select one of these options.",
    },
    {
      id: 3,
      btn: "Does the price include shipping?",
      desc: "Yes! All of our kits come equipped with everything your employee needs to properly return their device, and that includes a prepaid shipping label.",
    },
    {
      id: 4,
      btn: "I’d like to retrieve something else, like a piece of furniture or a monitor. Is this a service you offer?",
      desc: "Yes. Just let us know, and we’ll organize this for you.",
    },
  ];
  return (
    <Container>
      <div className="bg-main-blue border-main-black border-2 rounded-xl">
        <div className="lg:p-28 md:p-16 p-6">
          <div className="pb-14">
            <Title text="Frequently Asked Questions" className="font-medium" />
            <button className="hover:bg-[#f9c54d] bg-main-black lg:w-auto sm:w-auto md:w-auto w-full transition-all mt-6 drop-shadow-md hover:text-main-black  py-2 text-white px-6 rounded-full font-bold lg:text-lg  md:text-lg text-md">
              START DEVICE RETURN
            </button>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-10 gap-x-24">
            <div>
              {freqData.map((freq) => {
                return (
                  <Expand key={freq.id} btn={freq.btn} panelText={freq.desc} />
                );
              })}
            </div>
            <div>
              <Image src='/freq.webp' alt='freq img' width={400} height={400} className='object-contain w-full' />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Frequently;
