import React from 'react';
import Atividade from './Atividade';

export default function AtividadeLista(props) {
    return (
        <div className="mt-3">
            {props.atividades.map((ativ) => (
                <Atividade key={ativ.id}
                    ativ={ativ}
                    excluir={props.excluir}
                    editar={props.editar}
                />
            ))}

        </div>
    )
}
