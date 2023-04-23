import Navbar from "./components/Navbar"
import Place from "./components/Place"
import data from './assets/data'


function App() {
  const places = data.map(place =>
    <Place
      //item={place}
      //title= {place.title}
      {...place}
    />

  )


  return (
    <div className="App">
      <Navbar />
      <section className="places-list">
        {places}

      </section>


    </div>
  )
}

export default App
