import { RepositoryProps } from "../types/repository"

import { BsCodeSlash } from 'react-icons/bs'
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai"
import {RiGitRepositoryLine} from "react-icons/ri"

import styles from "./Styles/RepositoryBox.module.css"

const RepositoryS = ({
    name,
    language,
    html_url,
    forks_count,
    stargazers_count
}: RepositoryProps) => {
    return (
        <div className={styles.repository_Box}>
            <h3>{name}</h3>
            <p className={styles.language}>
                <BsCodeSlash />
                <span>{language}</span>
            </p>
            <div className={styles.stats}>
                <div>
                    <AiOutlineStar />
                    <span>{stargazers_count}</span>
                </div>
                <div>
                    <AiOutlineFork />
                    <span>{forks_count}</span>
                </div>
            </div>
            <a href={html_url} target="_blank" className={styles.repository_btn}>
            <span className={styles.verCodigo}>Ver código</span>
            <RiGitRepositoryLine />
            </a>
        </div>
    )
};

export default RepositoryS