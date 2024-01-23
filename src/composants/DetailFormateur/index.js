import React from 'react';
import { useContext } from 'react';
import Formateur from '../Formateur';
import { useParams } from 'react-router-dom';
import { FormateursContexte } from '../../contexte/FormateursContexte';

function DetailFormateur(props){
    const { slug } = useParams();
    const {tabFormateurs, setTabFormateurs} = useContext(FormateursContexte);
    const formateur = tabFormateurs.find(formateur => formateur.slug === slug);
    return (
        <Formateur nom={formateur.nom} icone={formateur.icone} />
    );

}

export default DetailFormateur;