import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackBtn from "../components/BackBtn";
import Loader from "../components/Loader";
import RepositoryS from "../components/RepositoryS";
import { RepositoryProps } from "../types/repository";
import styles from "../components/Styles/Repository.module.css";

const Repository = () => {
    const { username } = useParams();

    const [repository, setRepository] = useState<RepositoryProps[] | [] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [sortOrder, setSortOrder] = useState<"stars" | "name">("stars");

    useEffect(() => {
        const loadRepository = async function (username: string) {
            setIsLoading(true);

            const res = await fetch(`https://api.github.com/users/${username}/repos`);
            const data = await res.json();

            setIsLoading(false);

            let orderedRepos;

            if (sortOrder === "stars") {
                orderedRepos = data.sort((a: RepositoryProps, b: RepositoryProps) =>
                    b.stargazers_count - a.stargazers_count
                );
            } else {
                orderedRepos = data.sort((a: RepositoryProps, b: RepositoryProps) =>
                    a.name.localeCompare(b.name)
                );
            }

            setRepository(orderedRepos);
        };

        if (username) {
            loadRepository(username);
        }
    }, [username, sortOrder]);

    const toggleSortOrder = () => {
        if (sortOrder === "stars") {
            setSortOrder("name");
        } else {
            setSortOrder("stars");
        }
    };

    if (!repository && isLoading) return <Loader />;

    return (
        <div className={styles.text}>
            <BackBtn />
            <h2>Explore os repositórios do usuário {username}</h2>
            {repository && repository.length > 0 && (
                <button onClick={toggleSortOrder} className={styles.sortButton}>
                    Ordenar por {sortOrder === "stars" ? "Nome" : "Estrelas"}
                </button>
            )}
            <div className={styles.repository}>
                {repository && repository.length === 0 && <p>Não há repositórios</p>}
                {repository && repository.length > 0 && (
                    <div className={styles.repository_container}>
                        {repository.map((repo: RepositoryProps) => (
                            <div key={repo.name} className={styles.repository_item}>
                                <RepositoryS {...repo} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Repository;

