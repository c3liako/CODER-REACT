//PROP

export const saludar = () => console.log('saludo')

cont ItemListContainer = ( {saludo} )=> {

    return(
        <section>
            ItemListContainer
            <br />
            <label> {saludo} </label>
        </section>
    )
}

//DOS FORMAS
//1* 
function app() {
    return (
        <>
        <navBar />
        <ItemListContainer saludo={'saludo'} />
        </>
    )
}

//*2
function app()