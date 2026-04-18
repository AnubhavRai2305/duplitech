import './App.css'
import CelebrityFavorites from './components/Celebrityfavorites'
import Footer from './components/Footer'
import HeroBanner from './components/Herobanner'
import LookingFor from './components/LookingFor'
import MakeupFestBanner from './components/Makeupfestbanner'
import Navbar from './components/Navbar'
import NewArrivals from './components/Newarrivals'
import OfferBanner from './components/OfferBanner'
import PilgrimCode from './components/Pilgrimcode'
import SaveWithSets from './components/Savewithsets'
import ShopByCategories from './components/Shopbycategories'
import ShopByCategoryAndIngredients from './components/Shopbycategoryandingredients'
import SkincareInfusedMakeup from './components/Skincareinfusedmakeup'
import TrendingNow from './components/Trendingnow'

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
