
import './index.css';
import Formateur from '../Formateur';
import { useState, useEffect} from 'react';

const tabFormateurs = [
    {
        nom: "Guillaume Thiery",
        icone: "fa-brands:symfony"
    },
    {
        nom: "Olivier Ferry",
        icone: "fa-brands:html5"
    },
    {
        nom: "Damien Cherault",
        icone: "fa-brands:php"
    },
    {
        nom: "Flora Fiszlewicz",
        icone: "fa-brands:wordpress"
    },
    {
        nom: "Sandrine Lebaron"
    }
]
function ListeFormateurs() {
    const [formateur, setFormateur] = useState("");
    const [ count, setCount]= useState(0);
    const [logoMatiere, setLogoMatiere] = useState("");

    useEffect(() => {
        document.title = "clicks : " + count;
    },[count])

    return (
        <div>
            <h1>Vous avez cliqué {count} fois sur un formateur</h1>
            <ul className="listeFormateurs" onClick={ () => setCount(count+1)}>
                {
                    tabFormateurs.map((formateur, index) => {
                        return (
                            <Formateur key={index.toString()} nom={formateur.nom} icone={formateur.icone} />
                        )
                    })
                }
            </ul>
            <form>
                <label for="formateur">Formateur</label>
                <input type="text" value={formateur} 
                onChange={(e) => setFormateur(e.target.value)}/>
                <br/>
                <label for="formateur">Logo Matière</label>
                <input type="text" value={logoMatiere} 
                onChange={(e) => setLogoMatiere(e.target.value)}/>
                <br/>
                <input type="submit" value="Créer" />
                <br/>
            </form>
        </div>
    )
}
export default ListeFormateurs;