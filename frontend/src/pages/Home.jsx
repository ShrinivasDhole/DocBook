import Banner from '../components/Banner'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDocters from '../components/TopDocters'
const Home = () => {
  return (
    <div>
        <Header/>
        <SpecialityMenu/>
        <TopDocters/>
        <Banner/>
    </div>
  )
}

export default Home