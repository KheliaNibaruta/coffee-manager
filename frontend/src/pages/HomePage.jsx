import Header from '../components/Layouts/Header'
import Hero from "../components/Route/Hero/Hero"
import Categories from "../components/Route/Hero/Categories.jsx"

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <Hero />
        <Categories />
    </div>
  )
}

export default HomePage