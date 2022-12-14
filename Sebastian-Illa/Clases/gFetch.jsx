const products = [
    {id:'1', name:'Producto1', cat:'Categoria1', stock:'00', precio: '100'},
    {id:'2', name:'Producto2', cat:'Categoria2', stock:'05', precio: '200'},
    {id:'3', name:'Producto3', cat:'Categoria3', stock:'10', precio: '300'},
    {id:'4', name:'Producto4', cat:'Categoria4', stock:'15', precio: '400'}
]
export const gFetch = (nro) => {
    return new Promise((resolve, reject) => {
    //acciones
    const condition = true
    setTimeout(() => {
    if(condition){
    resolve(products)
}   else  {
    reject('error')
}
}, 3000)

})
}