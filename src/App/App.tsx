import { Outlet } from "react-router-dom";
import style from './styles.module.css';


function App() {

  return (
      <div className={style.app}>
        <h1>GitHub Dropz</h1>
        <Outlet />
      </div>
  )
}

export default App
