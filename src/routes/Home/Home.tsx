import { UserProps } from "../../types/user.ts";
import Search from "../../components/Search/index.tsx";
import User from '../../components/User/index.tsx';
import Error from "../../components/Error/Error.tsx"

import { useState } from "react"
import Loader from "../../components/Loader/index.tsx";

const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const loadUser = async (userName: string) => {
        try {
            setIsLoading(true)
            setError(false)
            setUser(null)

            const res = await fetch(`https://api.github.com/users/${userName}`)

            if(res.status !== 200) throw Error()

            const { avatar_url, login, location, followers, following, email, bio } = await res.json();

            const userData: UserProps = {
                avatar_url,
                login,
                location,
                followers,
                following,
                email,
                bio
            };

            setUser(userData);
        }
        catch (err) {
            setError(true);
            console.log(err)
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <Search loadUser={loadUser} />
            {isLoading && <Loader />}
            {user && <User {...user} />}
            {error && <Error />}
        </div>
    )
}

export default Home;