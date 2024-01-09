import {CustomerReviews, PopularProduct, Footer, Hero, Services, SuperQuality, Subscribe, SpesialOffers} from './sections/index'
import Nav from './components/Nav'

function App() {
  return (
    <main className="relative">
    <Nav/> 
    <section className="xl: padding-l wide:padding-r padding-b" >
      <Hero/>
    </section>
    <section className="padding">
    <PopularProduct/>
    </section>
    <section className="padding">
    <SuperQuality/>
    </section>
    <section className="padding-x py-10">
    <Services/>
    </section>
    <section className="padding">
    <SpesialOffers/>
    </section>
    <section className="padding-x padding-t pb-8 bg-black">
    <Footer/>
    </section>
  </main>
  )
}

export default App