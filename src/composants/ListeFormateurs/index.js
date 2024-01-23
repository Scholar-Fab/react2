
import './index.css';
import Formateur from '../Formateur';
import { useState, useEffect} from 'react';
import dataFormateurs from '../../data/dataFormateurs.js';


function ListeFormateurs() {
    const [formateur, setFormateur] = useState("");
    const [ count, setCount]= useState(0);
    const [logoMatiere, setLogoMatiere] = useState("");
    const [tabFormateurs, setTabFormateurs] = useState(dataFormateurs);

    useEffect(() => {
        document.title = "clicks : " + count;
    },[count])

    function handleSubmit(e){
        e.preventDefault();
        console.log(formateur);
        console.log(logoMatiere);
        setTabFormateurs([...tabFormateurs, {nom: formateur, icone: logoMatiere}]);
        setFormateur("");
        setLogoMatiere("");
    }

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
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="formateur">Formateur</label>
                <input type="text" value={formateur} 
                onChange={(e) => setFormateur(e.target.value)}/>
                <br/>
                <label htmlFor="formateur">Logo Matière</label>
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