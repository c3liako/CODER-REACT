import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'
import {useState, useEffect} from 'react'
import { gFetch } from './gFetch'
export const saludo = () => console.log('saludo')
import Item from './Item'






const ItemListContainer2 = ( { saludo = 'saludo por defecto'}) => {

        return(
        <section>
            <br /><br />
            {Item()}
        </section>
    )

}



    export default ItemListContainer2