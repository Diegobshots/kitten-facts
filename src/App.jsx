import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

  const getKittenPic = async (words) => {
    const response = await fetch(`https://cataas.com/cat/says/${words}?size=50&color=red&json=true`)
    const data = await response.json()

    const { url } = data

    setImageUrl(url)
  }

  const getRandomFact = async () => {
    const response = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await response.json()
    const { fact } = data

    setFact(fact)

    const firstThreeWords = fact.split(' ', 3).join(' ')
    getKittenPic(firstThreeWords)
  }

  useEffect(() => {
    getRandomFact()
  }, [])

  return (
    <div className='App'>
      <h1>Kitten facts</h1>
      {fact && <p>{fact}</p>}
      <img src={`https://cataas.com${imageUrl}`} alt={fact} />
    </div>
  )
}

export default App
