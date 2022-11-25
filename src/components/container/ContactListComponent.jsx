import React from 'react'
import { Contact } from '../../models/Contact'
import ContactComponent from '../pure/ContactComponent'

const ContactListComponent = () => {
    
    const defaultContact = new Contact('Pedro', 'Colmenares','pedrojcolmenal@gmail.com',true);
    
    return (
        <div>
            <ContactComponent contact={defaultContact}/>
            </div>
    )
}


export default ContactListComponent