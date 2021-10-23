//object property shorthand

const name = 'Lelac'
const userAge = 22

const user = {
    name,
    age: userAge,
    location: 'Philippines'

}
console.log(user)

const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined

}
// const {label: productlabel, stock} = product
// console.log(productlabel)
// console.log(stock)

const transaction = (type, { label, stock }) => {
    console.log(type, label,stock)

}
 transaction('order', product)