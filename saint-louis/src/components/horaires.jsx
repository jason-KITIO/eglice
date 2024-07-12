import React from 'react'

export const Horaires=()=>{
  return (
    <div className='horaire'>
        <h2 className='h'>HORAIRES DES MESSES</h2>
        <p>Nous disposons de messe en français et en anglais programmer à la <br/>même heure</p>
        <div className='heures'>
            <div>
                <p className='date'>LUNDI à VENDREDI</p>
                <div className='underline'></div>
                <p>06H 15 MIN - 12H 30 MIN - 18H 30</p>
                <hr/>
                <p className='date'>SAMEDI</p>
                <div className='underline'></div>
                <p>06H 15 MIN - 18H 30 (anticipée)</p>
            </div>
            <div>
                <p className='date'>DIMANCHE</p>
                <div className='underline'></div>
                <p>05H 30 MIN - 06H 30 MIN - 07H 30 (English) - 08h 00 - 09h 30 - 11H 00 - 17h 30</p>
                <hr/>
                <p className='date'>BAPTEMES DES BEBES</p>
                <div className='underline'></div>
                <p>Tous les derniers samedi du mois</p>
            </div>
        </div>
    </div>
  )
}
