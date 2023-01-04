import Container from "../../ui/container";
import ProdDetails from "./common/prodDetails";
import ProdGallery from "./common/prodGallery";
import { motion } from "framer-motion";
function Starting() {
  return (
    <Container className="pt-8">
      <div className="grid lg:grid-cols-2  grid-cols-1 lg:gap-20 gap-10">
        <div>
          <ProdGallery />
        </div>
        <motion.div
          initial={{ opacity: 0, translateY: 80 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProdDetails />
        </motion.div>
      </div>
    </Container>
  );
}

export default Starting;
