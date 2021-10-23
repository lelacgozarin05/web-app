// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)

// const names = ['Lelac', 'Maricar', 'Ybonne']
// const shortNames = names.filter((names) => {
//     return names.length <= 4
// })

// const geocode = (address, callbacks) => {
// setTimeout(() => {
//     const data = {
     
//             latitute: 0,
//             longitude: 0
//             }
//            callbacks(data)
//             }, 2000)
//         }

//  geocode('Philadelphia', (data) => {
// console.log(data)
//  })




const add = (a, b, callback) => {
    setTimeout(() => {
            callback(a + b)
    }, 2000)
}
add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})