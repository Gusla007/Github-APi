import {useState} from 'react'
import axios from 'axios'
import './App.css'

type GithubData = {
  name: string
  bio: string
  avatar_url: string
}

function App() {
  const [avata_url, setAvataURL] = useState("Loading...")
  const [name, setName] = useState("Loading...")
  const [bio, setBio] = useState("Loading...")
  const [username, setUsername] = useState("")

const handlePesquisar = () => {
axios.get<GithubData>(`https://api.github.com/users/${username}`). then ((response) => 
{setName(response.data.name) 
setBio(response.data.bio) 
setAvataURL(response.data.avatar_url ) 
})
}

  return (
  <div className="container-geral">
    <div className="container">
      <header className="header-top">
        Projeto EMIDES3AM
      </header>
      <main>
        <div className="form">
          <h1 >PESQUISAR GITHUB</h1>
          <input type="text" placeholder="digite o usuário" onChange={(e) => setUsername(e.target.value)} />
          <button onClick={handlePesquisar}>Consultar</button>
          </div>

          <div className="conteudo">
            <div>
              <img src={avata_url} alt="" />
              <h1>{name}</h1>
              <p>{bio}</p>
            </div>

        </div>
      </main>
    </div>
  </div>
  )
}

export default App
