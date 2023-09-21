import { useState, KeyboardEvent } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from './styles.module.css';

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      searchUser();
    }
  }

  const searchUser = async () => {
    try {
      setIsLoading(true);
      await loadUser(userName)
      setIsLoading(false);
    }
    catch (error) {
      setIsLoading(false);
      console.error("Erro ao carregar o usuário:", error);
    }

  }

  return (
    <div className={styles.search}>
      <h2>Buscar usuário:</h2>
      <div className={styles.search_container}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={searchUser}>
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            <BsSearch />
          )}
        </button>
      </div>
    </div>
  )
}

export default Search;
