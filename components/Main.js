import React from 'react'
import Image from 'next/image'
import ImageMain from '../img/main.jpg'

function Mains() {
    const inscrire = "S'inscrire"
  return (
    <div className='container-main'>
        <div className='alert-msg'>
            <h2>Voulez vous rendre votre sevice numerique ?</h2>
            <p>Contacter un developpeur(se) web ou un marketeur(se) digital qui vous contient pour que votre entreprise soit numerisée comme vous y pensez.</p>
            <div className="inscription">{inscrire}</div>
        </div>
        <Image src={ImageMain} alt="image of main page" className='main_img' />
        <div className='floot'></div>
    </div>
  )
}

export default Mains