import { Icon } from '@iconify/react';

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
    return (
        <div>
            <ul>
                {
                    tabFormateurs.map((formateur, index) => {
                        return (<li key={index.toString()}>{formateur.nom} 
                        {/* { formateur.icone ? <Icon icon={formateur.icone} />: null } */}
                        {/* ou */}
                        { formateur.icone && <Icon icon={formateur.icone} /> }
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}
export default ListeFormateurs;