import { useState } from "react";

import Navbar from "./Components/Navbar";
import styles from "./Styles/App.module.css";
import TextContainer from "./Components/Bio";



function App() {
  const [currentView, setCurrentView] = useState<string>("default");

  return (
    <div className={styles.pageDiv}>
      <div className={styles.bgDiv}></div>
      <div className={styles.navbar}>
        <Navbar setCurrentView={setCurrentView} />
      </div>
      <div className={styles.bodyDiv}>
        <TextContainer currentView={currentView}/>
      </div>
    </div>
  );
}

export default App;
