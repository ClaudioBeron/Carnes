const products =[
    {id: 1, name: "vaca" , price: 1000, category: "carne" , stock :100 , description :"nalga" , img:"https://ar.all.biz/img/ar/catalog/75324.png"},
    {id: 2, name: "cerdo" , price: 1000, category: "carne" , stock :100 , description :"bondiola" ,img:"https://www.stock.com.py/images/thumbs/0187242.jpeg"},
    {id: 3, name: "pollo" , price: 1000, category: "carne" , stock :100 , description :"pechuga" ,img:"https://www.ariztiaatucasa.cl/media/catalog/product/cache/3aa1df24426dbabd72ab974cf5ed84b3/2/9/29496bf-01.jpg"},      
    ] 
const productsById = [
    {id: 4, nombre: "vaca" , price: 1000, category: "carne" , stock :100 , description :"nalga" , img:"https://ar.all.biz/img/ar/catalog/75324.png"},
]     


export const getProducts =(categoryId) => {
    return new Promise (resolve => {
        setTimeout(()=>{
            resolve( categoryId ? products.filter(prod => prod.category === categoryId ) : products)
        },2000 )
    })
}

