import styles from './Projetos.module.css'

function Projetos(props) {
    return (
        <div className={styles.cards}>
            <div className={styles.imgCard}>
                <img src={"/imagens/"+props.foto} alt="imgsFelipe" />
            </div>
            <div className={styles.textCard}>
                <h1>{props.tituloCard}</h1>
                <p>{props.textoCard}</p>
                <h3 className={styles.tecnologias} ><strong>Tecnologias</strong></h3>
                <div className={styles.imgs}>
                    <img src={"/imagens/"+props.img1} alt='imagem Pojeto'></img>
                    <img src={"/imagens/"+props.img2} alt='imagem projeto'></img>
                    <img src={"/imagens/"+props.img3} alt=''></img>
                    <img src={"/imagens/"+props.img4} alt=''></img>
                </div>
                <p><a  href={props.repositorio}>{props.link}</a></p>
            </div>
        </div>
    )
}

export default Projetos
