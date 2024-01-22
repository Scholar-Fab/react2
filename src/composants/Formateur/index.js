import './index.css';
import { Icon } from '@iconify/react';

function Formateur({nom, icone}){

    function clickFormateur(e,nom){
        const span = e.target;
        if(span.classList.contains("rouge")){
            span.classList.remove("rouge");
        }
        else{
            span.classList.add("rouge");
        }
        alert(`Vous avez cliqué sur ${nom}`);
    }
    return(
        <li className="formateur"  >
                            <span className="nomFormateur" onClick={ (e) => clickFormateur(e,nom)}> {nom} </span>
                        { icone && <Icon icon={icone} /> }
                        </li>
    )
}

export default Formateur;