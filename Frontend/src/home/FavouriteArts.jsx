import { useEffect, useState } from "react"
import ArtCard from "../components/ArtCard"

const FavouriteArts = () => {
    const [arts, setArts] = useState([])
   
    useEffect(()=> {
      fetch('http://localhost:5000/all-arts').then(res => res.json()).then(data => setArts(data))
    }, [])

  return (
    <div className="bg-gray-100">
      <ArtCard arts={arts} headline="Fresh recommendations"/>
    </div>
  )
}

export default FavouriteArts