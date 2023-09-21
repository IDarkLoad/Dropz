import { UserProps } from "../types/user";
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styles from "./Styles/User.module.css";


const User = ({
    avatar_url,
    login,
    location,
    followers,
    following,
    email,
    bio,
}: UserProps) => {
    return (
        <div className={styles.user}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            <h4>{bio}</h4>
            {email ? (
                <p>{email}</p>
            ) : (
                <p>Email não disponível</p>
            )}
            {location && (
                <p className={styles.location}>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            )}
            <div className={styles.stats}>
                <div>
                    <p>Seguidores:</p>
                    <p className={styles.number}>{followers}</p>
                </div>
                <div>
                    <p>Seguindo:</p>
                    <p className={styles.number}>{following}</p>
                </div>
            </div>
            <Link to={`/repos/${login}`}>Ver os melhores projetos</Link>
        </div>
    )
}

export default User