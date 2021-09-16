import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [code, setCode] = useState("");
  const [adresse, setAdresse] = useState("");

  const [tab, setTab]= useState([]);

  useEffect(() => {
    console.log(tab);
  }, [tab]);



  function add(e) {
    e.preventDefault();

    const id = Date.now();

    const obj = {id, nom, prenom, code, adresse};

    let  tab1 = tab.slice();

    let count = tab1.push(obj);

    setTab(tab1);

    


  }

  


  return (
    <div className="list">
        <div className="titre">
            <div className="le-titre"><h1>Mes coachs</h1></div>
        </div>

          <form className="formulaire-ajout" onSubmit={add}>
            <div>
              <input type="text" placeholder="Nom"  onChange={(e)=>setNom(e.target.value)} />

              <input type="text" placeholder="Code postal"  onChange={(e)=>setCode(e.target.value)} />
            </div>

            <div>
              <input type="text" placeholder="Prenom" onChange={(e)=>setPrenom(e.target.value)} />

              <input type="text" placeholder="Adresse" onChange={(e)=>setAdresse(e.target.value)} />
            </div>
                <button>Ajouter</button> 
          </form>

         
      
    </div>
  );
}

export default App;
