import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import AdoptedDesc from '../../components/AdoptedDesc'
import PageLayout from '../../components/PageLayout'
import styles from '../../styles/Home.module.css'

const AdoptedD = () => {
    const router = useRouter()
    const { id } = router.query

    const URL404  = 'https://http.cat/404.jpg'
    const URL = `https://api.thecatapi.com/v1/images/${id}`
    const [cat, setCat] = useState()
    const fetchCat = async () => {
        const response = await fetch(URL)
        const responseJSON = await response.json()
        setCat(responseJSON)
    }

    useEffect(() => {
        fetchCat()
    }, [])

    return <div className={styles.container}><PageLayout title={`Perrito no. ${id}`}><button  style={{
        border: 'none',
        padding: '12px 24px',
        borderRadius: '50px',
        fontWeight: '600',
        color: '#0077ff',
        backgroundColor: '#e0efff',
        margin: '0 auto',
        display: 'block',
        cursor: 'pointer'
    }} onClick={() => router.push(`/`)}>Regresar</button>
    {!cat && <img src={URL404}></img>}
    {cat && <AdoptedDesc img={cat.url} race= {cat.breeds.map(race => {
        return race.name
    })} origin= {cat.breeds.map(origin =>{
        return origin.origin
    })} live= {cat.breeds.map(live =>{
        return live.life_span
    })} temper= {cat.breeds.map(temper =>{
        return temper.temperament
    })} desc= {cat.breeds.map(desc => {
        return desc.description
    })} adopt= {cat.breeds.map(link =>{
        return link.cfa_url
    })}/>}
    </PageLayout></div>

}

export default AdoptedD