import './App.css'
import CelebrityFavorites from './components/Celebrityfavorites.jsx'
import Footer from './components/Footer.jsx'
import HeroBanner from './components/Herobanner.jsx'
import LookingFor from './components/LookingFor.jsx'
import MakeupFestBanner from './components/Makeupfestbanner.jsx'
import Navbar from './components/Navbar.jsx'
import NewArrivals from './components/Newarrivals.jsx'
import OfferBanner from './components/Offerbanner.jsx'
import PilgrimCode from './components/Pilgrimcode.jsx'
import SaveWithSets from './components/Savewithsets.jsx'
import ShopByCategories from './components/ShopByCategories.jsx'
import ShopByCategoryAndIngredients from './components/Shopbycategoryandingredients.jsx'
import SkincareInfusedMakeup from './components/Skincareinfusedmakeup.jsx'
import TrendingNow from './components/TrendingNow.jsx'


function App() {


  return (
    <>
      <Navbar />
      <HeroBanner />
      <ShopByCategories />
      <TrendingNow />
      <OfferBanner />
      <LookingFor />
      <MakeupFestBanner />
      <SkincareInfusedMakeup />
      <NewArrivals />
      <SaveWithSets />
      <ShopByCategoryAndIngredients />
      <CelebrityFavorites />
      <PilgrimCode />
      <Footer />
    </>
  )
}

export default App
