const product = [
    {id:'1', name:'Producto1', category:'Category1', stock:'00', price: '100', img: ''},
    {id:'2', name:'Producto2', category:'Category2', stock:'05', price: '200', img: ''},
    {id:'3', name:'Producto3', category:'Category1', stock:'10', price: '300', img: ''},
    {id:'4', name:'Producto4', category:'Category2', stock:'15', price: '400', img: ''}
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