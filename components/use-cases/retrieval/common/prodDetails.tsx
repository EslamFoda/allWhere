import CardSubTitle from "../../../ui/text/cardSubTitle";
import CardTitle from "../../../ui/text/cardTitle";
import Title from "../../../ui/text/title";
import FitsDesc from "./fitsDesc";

function ProdDetails() {
  return (
    <div>
      <div className="space-y-2 ">
        <CardTitle text="Laptop retrieval service" />
        <Title text="Starting at $99" className="font-bold" />
        <CardSubTitle text="allwhere makes it easy to retrieve devices like laptops and accessories from employees, no matter where they are." />
      </div>
      <div className="w-full my-6 h-[1px] bg-black/20"></div>
      <div>
        <h3 className="font-bold text-lg">What fits in the box</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2 mt-3">
            <h4 className="text-xs font-semibold">1 device</h4>
            <h4 className="text-xs font-semibold">
              2 compartments for peripherals
            </h4>
            <h5 className="text-xs">Ex: charger, mouse, keyboard</h5>
          </div>
          <div className="space-y-2 mt-3">
            <h4 className="text-xs">15.25" W x 10.25" L x 1" D</h4>
            <h4 className="text-xs">16" W x 4" L x 1.25" D and 16" W x </h4>
            <h4 className="text-xs">7.5" L x 1.25" D</h4>
          </div>
        </div>
        <div className="w-full my-6 h-[1px] bg-black/20"></div>
        <div>
          <h3 className="font-bold mb-3 text-lg">What fits in the box</h3>
          <FitsDesc text="Best-in-class packaging shipped straight to your employee, with a prepaid return label, shipping instructions, and tape - all 100% insured" />
          <FitsDesc text="End-to-end tracking of your kit and your employee’s equipment, from initial ship date to final return" />
          <FitsDesc text="Customer service and support for you and your team" />
        </div>
        <button className="bg-[#f9c54d] transition-all mt-6 drop-shadow-md w-full  py-2 hover:bg-[#131414] hover:text-white px-4 rounded-full font-bold text-lg">
          START DEVICE RETURN
        </button>
      </div>
    </div>
  );
}

export default ProdDetails;
