import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/Contact'

const ContactComponent = ({contact}) => {
    return (
        <div>
            <h1>
            Contacto:
            </h1>
            <h2>
                Nombre: {contact.name} 
            </h2>
            <h2>
                Apellido: {contact.lastName}
            </h2>

            <h2>
                Email: {contact.email}
            </h2>
            <h2>
                Estado: Contacto {contact.connected ? 'En Línea' : 'No Disponible'} 
            </h2>
        </div>
    )
}

ContactComponent.propTypes = {
    contact:PropTypes.instanceOf(Contact)
}

export default ContactComponent;