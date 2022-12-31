const product = [
    {id:'1', name:'Producto1', categoria:'Categoria1', stock:'0', precio: '100', foto: ''},
    {id:'2', name:'Producto2', categoria:'Categoria2', stock:'05', precio: '200', foto: ''},
    {id:'3', name:'Producto3', categoria:'Categoria1', stock:'10', precio: '300', foto: ''},
    {id:'4', name:'Producto4', categoria:'Categoria2', stock:'15', precio: '400', foto: ''}
]
export const gFetch = (nro) => {
    return new Promise((resolve, reject) => {
    //acciones
    const condition = true
    setTimeout(() => {
    if(condition){
    resolve(product)
}   else  {
    reject('error')
}
}, 1000)

})
}