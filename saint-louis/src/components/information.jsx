import React from 'react'

export const Information=()=>{
  return (
    <div className='informations'>
            <h2>Autres informations</h2>
            <div className='grid'>
                    <div className='a'>
                        <h4>Baptêmes et Mariages :</h4><br />
                        <p><div className='dot-list'></div>&nbsp; Pour les baptêmes, la catéchèse s'effectue en français et en anglais. Le programme est communiqué par la paroisse.</p><br/>
                        <p><div className='dot-list'></div>&nbsp;Les mariages nécessitent une préparation minimale de trois mois. Pour les formalités, veuillez consulter le secrétariat.</p><br/>
                    </div>

                    <div className='b'></div>
                    <div className='c'></div>
                    <div className='d'>
                        <h4>Visites des Malades et Confessions :</h4><br />
                        <p> <div className='dot-list'></div>&nbsp;Pour les visites des malades, veuillez consulter le secrétariat pour programmer un rendez-vous avec le prêtre</p><br/>
                        <p><div className='dot-list'></div>&nbsp;Les confessions ont lieu après les messes du matin, du lundi au samedi</p><br/>
                    </div>
            </div>
        </div>
  )
}
