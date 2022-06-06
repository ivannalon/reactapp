import { Header } from "./components/Header";
import { Post } from "./components/Post";
import "./global.css"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          <Post 
            author="Ivan" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laboriosam repudiandae atque? Corporis quasi, molestiae nostrum suscipit consequuntur nam fugiat aspernatur aliquam. Perferendis laudantium architecto animi necessitatibus. Saepe, temporibus perspiciatis!"
          />

          <Post 
            author="Ivan" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laboriosam repudian"
          />    
        </main>
      </div>
    </>
  )
}