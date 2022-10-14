//import Image from 'next/image'
import { useEffect, useState } from 'react'
import Adopted from '../components/Adopted'
import PageLayout from '../components/PageLayout'
import styles from '../styles/Home.module.css'

export default function Home() {

  const URL = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_t9ei2ufWHghhOvjfwrxRKBcu30kaWTfBbnC1lsFtijceiHlGVxTQBTjgZK1keMMo'
  const [cats, setCats] = useState()
  const fetchCats = async () =>{
    const response = await fetch(URL)
    const responseJSON =await response.json()
    setCats(responseJSON)
  }

  useEffect(() => {
    fetchCats()
  }, [])

  return (
    <div className={styles.container}>
      <PageLayout title="Pet's Shop">
        <div className={styles.grid}>
          {!cats && <h2>Cargando...</h2>}
          {cats && cats.map(cat =>{
            return <Adopted img={cat.url} race={cat.breeds.map(race => {
               return race.name
            })} origin={cat.breeds.map(origin =>{
              return origin.origin
            })} link={cat.breeds.map(url => {
              return url.wikipedia_url
            })} id={cat.id}></Adopted>
          })}
        </div>
      </PageLayout>
    </div>
  )
}
