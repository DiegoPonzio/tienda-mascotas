import { useRouter } from 'next/router'
import styles from '../styles/Adopted.module.css'

export default function Adopted({id=0 ,link = 'link', race = 'raza', origin = 'Origen', img ='https://buscafuska.com/uploads/pet/file/26313/d_5c64e997-320a-40cb-91cb-6bbab34fd670.JPG'}){
    
    const router = useRouter()

    return(
        <div className={styles.conatiner}>
            <div className={styles.card}>
                <img src={img} alt={`Imagen de: ${id}`} className={styles.imgr}></img>
                <span className={styles.tag}>{race}</span>
                <span className={styles.tag}>{origin}</span>
                <div className={styles.name}><a href={link}>Conoceme Mejor!!</a></div>
                <br />
                <button type="submit" className={styles.button} onClick={() => router.push(`/gatitos/${id}`)}>Learn more...</button>
            </div>
        </div>
    )

}