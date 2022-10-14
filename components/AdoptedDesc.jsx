import styles from '../styles/Adopted.module.css'

export default function AdoptedDesc({temper = 'Nombre', live = 'vida', race = 'raza', origin= 'Genero', desc = 'Descripcion', img ='https://buscafuska.com/uploads/pet/file/26313/d_5c64e997-320a-40cb-91cb-6bbab34fd670.JPG'}, adopt = 'holi'){
    return(
        <div className={styles.conatiner}>
            <div className={styles.card}>
                <img src={img} alt={`Imagen de: ${live}`} className={styles.imgr}></img>
                <span className={styles.tag}>{race}</span>
                <span className={styles.tag}>{origin}</span>
                <span className={styles.tag}>{live}</span>
                <div className={styles.name}>{temper}</div>
                <p className={styles.ptext}>{desc} 
                    <br />
                    <a href={adopt}>Adoptame !!</a> 
                </p>                
            </div>
        </div>
    )
}