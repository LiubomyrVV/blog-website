import { useNavigate } from 'react-router-dom'
import styles from './logo.module.css'
import { PAGES } from '../../router/routes'

export const Logo = () => {
    const navigate = useNavigate()
    const redirect = () => {
        navigate(PAGES.HOME)
    }
    return (
        <div className={styles.logo} onClick={redirect}>
            <img src="logo.svg" alt='Zarrin' />
            <h1> Zarrin </h1>
        </div>
    )
}
