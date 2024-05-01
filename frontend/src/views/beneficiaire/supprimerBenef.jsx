import axios from 'axios';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton';

// Composant SupprimerBenef
const SupprimerBenef = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const [token, setToken] = useState('');

    // Effet pour vérifier si l'utilisateur est connecté au chargement du composant
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (!storedToken) {
            enqueueSnackbar('Vous devez être connecté pour effectuer cette action', { variant: 'error' });
            navigate('/login');
        } else {
            setToken(storedToken);
        }
    }, [enqueueSnackbar, navigate]);

    const handleSupprimerBenef = () => {
        axios
            .delete(`https://ebank-back.vercel.app/beneficiaire/supprimerBenef/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(() => {
                enqueueSnackbar('Bénéficiaire supprimé avec succès', { variant: 'success' });
                navigate('/beneficiaire');
            })
            .catch((error) => {
                enqueueSnackbar('Erreur lors de la suppression du bénéficiaire', { variant: 'error' });
                console.log(error);
            });
    };

    return (
        <div className='p-4'>
            <BackButton />
            <div className="modal fade" id="profilModal" tabIndex="-1" role="dialog" aria-labelledby="profilModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="profilModalLabel">Voulez-vous supprimer ce bénéficiaire ?</h3>
                        <button type="button" onClick={() => navigate('/solde')} className="filled-button-secondary" data-dismiss="modal"> Annuler</button>
                        <button type="button" onClick={handleSupprimerBenef} className="filled-button-secondary" data-dismiss="modal"> Oui, supprimer</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SupprimerBenef;
