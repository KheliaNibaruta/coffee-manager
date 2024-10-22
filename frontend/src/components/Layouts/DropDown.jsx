import { useNavigate } from "react-router-dom"; // Utiliser useNavigate
import styles from "../../styles/styles";

const DropDown = ({ categoriesData, setDropDown }) => { // Déstructurer les props ici
  const navigate = useNavigate(); // Utilisation de useNavigate

  const handleSubmit = (i) => {
    navigate(`/products?category=${i.title}`); // Naviguer vers la nouvelle URL
    setDropDown(false); // Fermer le dropdown
    window.location.reload(); // Recharger la page (facultatif, à utiliser avec prudence)
  };

  return (
    <div className="pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm">
      {categoriesData && categoriesData.length > 0 ? (
        categoriesData.map((i, index) => (
          <div
            key={index}
            className={`${styles.normalFlex}`}
            onClick={() => handleSubmit(i)}
          >
            <img
              src={i.image_Url}
              style={{
                width: "25px",
                height: "25px",
                objectFit: "contain",
                marginLeft: "10px",
                userSelect: "none",
              }}
              alt={i.title}
            />
            <h3 className="m-3 cursor-pointer select-none">{i.title}</h3>
          </div>
        ))
      ) : (
        <p className="m-3 cursor-pointer select-none">No categories available</p>
      )}
    </div>
  );
};

export default DropDown;
