import styles from './CarDetails.module.css';

const CarDetails = ({name, color}) => {
  return (
    <div>
        <h2 className={styles.name_car}>{name}</h2>
        <p className={styles.detail_car}>{color}</p>
    </div>
  )
}

export default CarDetails;