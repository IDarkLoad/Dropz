import { FaSpinner } from 'react-icons/fa';
import styles from '../Loader/styles.module.css'

const Loader = () => {
  return (
    <>
    <FaSpinner className={styles.loader} />
    </>
  )
}

export default Loader