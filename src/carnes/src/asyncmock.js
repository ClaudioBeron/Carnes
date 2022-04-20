const products =[
    {id: 1, name: "vaca" , price: 1000, category: "carne" , stock :100 , description :"nalga" , img:"https://ar.all.biz/img/ar/catalog/75324.png"},
    {id: 2, name: "cerdo" , price: 1000, category: "carne" , stock :100 , description :"bondiola" ,img:"https://www.stock.com.py/images/thumbs/0187242.jpeg"},
    {id: 3, name: "pollo" , price: 1000, category: "carne" , stock :100 , description :"pechuga" ,img:"https://www.ariztiaatucasa.cl/media/catalog/product/cache/3aa1df24426dbabd72ab974cf5ed84b3/2/9/29496bf-01.jpg"},      
    ]  


export const getProducts =() => {
    return new Promise (resolve => {
        setTimeout(()=>{
            resolve( products)
        },2000 )
    })
}

export const getProductsById =(id) => {
    return new Promise (resolve => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === 4))
        },2000 )
    })
}
