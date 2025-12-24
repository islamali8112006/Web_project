import HeaderComponent from "./Header/header"
import TopBar  from './Top-header'
import HeroComponent from './HeroComponent'
import AnimalHospital from  './SecoundPage.jsx'
import ThirdSection  from './page3'
import Page4 from './page4'
import MainPage  from './page1'
import  Home from  './FourAndThree'
import Footer from './FFooter.jsx'
import VisitUs from './VisitUs.jsx'

function ContainerComponent() {


  return (
    <>
      
      <MainPage />
      <AnimalHospital />
      <Home />  
      <VisitUs />
      <Footer />
    </>
  )
}

export default ContainerComponent
