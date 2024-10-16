import styles from '../../../styles/styles'
import coffees from "../../../assets/coffees.jpg"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
        <div 
            className={`relative min-h-[70vh] 800px:min-h[80vh] w-full bg-no-repeat ${styles.normalFlex}`}
            style={{
                backgroundImage:`url(${coffees})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
        <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
            <h1 className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d33a3a3a] font-[600] capitalize`}>
                Best collections of <br /> Green Coffee
            </h1>
            {/* <p className="pt-5 text-[20px] font-[Poppins] font-[400] text-[#000000]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> 
                Nulla egestas libero vitae sem porta, nec vehicula nibh pellentesque.<br /> 
                Curabitur nec bibendum nibh, id finibus ante. Proin quis blandit quam. <br /> 
                Morbi pulvinar auctor lectus, ornare eleifend odio dictum quis. <br /> 
            </p> */}
            <Link to="/products" className='inline-block'>
                <div className={`${styles.button} mt-5`}>
                    <span className="text-[#fff] font-[Poppins] text-[18px]">
                        Shop Now
                    </span>
                </div>
            </Link>
        </div>
        </div>
    </>
  )
}

export default Hero