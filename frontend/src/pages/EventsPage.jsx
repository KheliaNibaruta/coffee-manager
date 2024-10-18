import Header from "../components/Layouts/Header";
import EventCard from "../components/Events/EventCard";
import Footer from "../components/Layout/Footer";

const EventsPage = () => {
  return (
    <div>
      <Header activeHeading={4} />
      <EventCard active={true} />
      <EventCard active={false} />
      <Footer />
    </div>
  );
};

export default EventsPage;
