import { RepositoryProps } from "../../types/repository"

import { BsCodeSlash } from 'react-icons/bs'
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai"
import {RiGitRepositoryLine} from "react-icons/ri"

import styles from "./styles.module.css"

const RepositoryS = ({
    name,
    language,
    html_url,
    forks_count,
    stargazers_count,
    description
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
            <h6>{description}</h6>
            <a href={html_url} target="_blank" className={styles.repository_btn}>
            <span className={styles.verCodigo}>Ver código</span>
            <RiGitRepositoryLine />
            </a>
        </div>
    )
};

export default RepositoryS