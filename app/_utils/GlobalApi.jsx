const { default: axios } = require("axios")

const axiosClient = axios.create({
    baseURL: 'http://192.168.1.17:1337/api'
})

function getBolivares(){
    return 36.5
}

const getCategory = () => axiosClient.get('/categories?populate=*');

const getSliders = () => axiosClient.get('/sliders?populate=*').then(resp => {
    return resp.data.data;
});

const getPromo = () => axiosClient.get('/promos?populate=*').then(resp => {
    return resp.data.data;
});

const getCategoryList = () => axiosClient.get('/categories?populate=*').then(resp => {
        return resp.data.data;
})

const getAllProducts = () => axiosClient.get('/productos?populate=*').then(resp => {
    return resp.data.data;
})

const getProductsByCategory = (categoria) => axiosClient.get(`/productos?filters[categories][[name][$in]=${categoria}&populate=*`).then(resp => {
    return resp.data.data;
})

const registerUser = (username,email,password) => axiosClient.post('/auth/local/register', {
    username,
    email,
    password
})

const signIn = (email,password) => axiosClient.post('/auth/local', {
    identifier:email,
    password:password
})

const addToCart=(data,jwt)=>axiosClient.post('/user-carts',data,{
    headers:{
        Authorization:'Bearer '+jwt
    }
});

const getCartItems=(userId,jwt)=>axiosClient.get('/user-carts?filters[userId][$eq]='+userId+'&populate=*',
    {
        headers:{
            Authorization:'Bearer '+jwt
        }
    }).then(resp=>{
        const data=resp.data.data;
        // console.log('data: '+data)
        const cartItemsList=data.map((item,index)=>({
            name:item.attributes.productos?.data[0].attributes.name,
            quantity:item.attributes.quantity,
            amount:item.attributes.amount,
            image:item.attributes.products?.data[0].attributes.images.data[0].attributes.url,
            // attributes.image.data[0].attributes.url
            actualPrice:item.attributes.productos?.data[0].attributes.mrp,
            id:item.id,
            product:item.attributes.productos?.data[0].id
        }))
    
        return cartItemsList
        // return resp.data.data
    });

const deleteCartItem=(id,jwt)=>axiosClient.delete('/user-carts/'+id,{
    headers:{
        Authorization:'Bearer '+jwt
    }
}).then(resp=>{
    return resp.data.data
})

export default {
    getBolivares,
    getCategory,
    getSliders,
    getCategoryList,
    getAllProducts,
    getProductsByCategory,
    registerUser,
    signIn,
    addToCart,
    getCartItems,
    deleteCartItem,
    getPromo
}