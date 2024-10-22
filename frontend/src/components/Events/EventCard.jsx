import styles from "../../styles/styles";
import CountDown from "./CountDown.jsx";

const EventCard = (active) => {
  return (
    <div className={`w-full block bg-white rounded-lg ${active ? "unset" : "-scroll-mb-12"} lg:flex p-2`}>
      <div className="w-full lg:w-[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/256gb</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas
          libero vitae sem porta, nec vehicula nibh pellentesque. Curabitur nec
          bibendum nibh, id finibus ante. Proin quis blandit quam. Morbi
          pulvinar auctor lectus, ornare eleifend odio dictum quis. Nullam
          efficitur luctus risus, ac laoreet lorem hendrerit vitae. Donec
          convallis lacus id tellus accumsan vestibulum. In at laoreet nunc. Sed
          bibendum sem quis nulla laoreet, eu dictum arcu consectetur.
          Suspendisse porta dui et molestie suscipit.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              1099$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              999$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            120 kg left
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};

export default EventCard;
