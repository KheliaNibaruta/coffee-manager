import { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BiMenuAltLeft } from "react-icons/bi";
import Menya from "../../assets/Menya.png";
import DropDown from "./DropDown";
import Navbar from "./Navabar";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      {loading ? null : (
        <div>
          <div className={`${styles.section}`}>
            <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
              <div>
                <Link to="/">
                  <img
                    src={Menya}
                    alt="Logo"
                    style={{ width: "200px", height: "auto" }}
                  />
                </Link>
              </div>

              {/* Search box */}
              <div className="w-[50%] relative">
                <input
                  type="text"
                  placeholder="Search Product..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                />
                <AiOutlineSearch
                  size={30}
                  className="absolute right-2 top-1.5 cursor-pointer"
                />
                {searchData && searchData.length !== 0 ? (
                  <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                    {searchData &&
                      searchData.map((i, index) => {
                        const d = i.name;

                        const Product_name = d.replace(/\s+/g, "-");
                        return (
                          // eslint-disable-next-line react/jsx-key
                          <Link to={`/product/${Product_name}`}>
                            <div className="w-full flex items-start-py-3">
                              <img
                                src={`${i.image_Url[0]?.url}`}
                                alt=""
                                className="w-[40px] h-[40px] mr-[10px]"
                              />
                              <h1>{i.name}</h1>
                            </div>
                          </Link>
                        );
                      })}
                  </div>
                ) : null}
              </div>
              <div className={`${styles.button}`}>
                <Link to="/seller">
                  <h1 className="text-[#fff] flex items-center">
                    Become Seller
                    <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`${
              active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
            } transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
          >
            <div
              className={`${styles.section} relative ${styles.normalFlex} justify-between`}
            >
              {/* categories */}
              <div>
                <div className="relative h-[60px] mt-[10px] w-[270px] 1000px:block">
                  <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
                  <button
                    className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
                    onClick={() => setDropDown(!dropDown)}
                  >
                    All categories
                  </button>
                  <IoIosArrowDown
                    size={20}
                    className="absolute right-2 top-5 cursor-pointer"
                    onClick={() => setDropDown(!dropDown)}
                  />
                  {dropDown ? (
                    <DropDown
                      categoriesData={categoriesData}
                      setDropDown={setDropDown}
                    />
                  ) : null}
                </div>
              </div>
              {/* navItems */}
              <div className={`${styles.normalFlex}`}>
                <Navbar active={activeHeading} />
              </div>
              <div className="flex">
                <div className={`${styles.normalFlex}`}>
                  <div className="relative cursor-pointer mr-[15px]">
                    <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                    <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                      0
                    </span>
                  </div>
                </div>
                <div className={`${styles.normalFlex}`}>
                  <div className="relative cursor-pointer mr-[15px]">
                    <AiOutlineShoppingCart
                      size={30}
                      color="rgb(255 255 255 / 83%)"
                    />
                    <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                      1
                    </span>
                  </div>
                </div>
                <div className={`${styles.normalFlex}`}>
                  <div className="relative cursor-pointer mr-[15px]">
                    {isAuthenticated ? (
                      <Link to="/profile">
                        <img
                          src={`${backend_url}${user.avatar}`}
                          className="w-[35px] h-[35px] rounded-full"
                          alt=""
                        />
                      </Link>
                    ) : (
                      <Link to="/login">
                        <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
