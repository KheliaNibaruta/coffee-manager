import Faq from "../components/Faq/Faq";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layouts/Header";

const FaqPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  );
};

export default FaqPage;
