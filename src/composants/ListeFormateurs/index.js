
import './index.css';
import Formateur from '../Formateur';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import slugify from '@sindresorhus/slugify';
import { FormateursContexte } from '../../contexte/FormateursContexte.js';
import { tab } from '@testing-library/user-event/dist/tab.js';

function ListeFormateurs() {
    const [formateur, setFormateur] = useState("");
    const [ count, setCount]= useState(0);
    const [logoMatiere, setLogoMatiere] = useState("");
    const {tabFormateurs, setTabFormateurs} = useContext(FormateursContexte);

    useEffect(() => {
        document.title = "clicks : " + count;
    },[count])

    function handleSubmit(e){
        e.preventDefault();
        console.log(formateur);
        console.log(logoMatiere);
        setTabFormateurs([...tabFormateurs, 
            {
                slug: slugify(formateur),
                nom: formateur,
                icone: logoMatiere
            }
        ]);
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
                            <Link to={"/formateurs/" + formateur.slug} >   
                                <Formateur key={index.toString()} nom={formateur.nom} icone={formateur.icone} />
                            </Link>
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