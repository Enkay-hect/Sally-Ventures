import VuexPersist from 'vuex-persist'


const vuexlocal = new VuexPersist({
    key:"id",
    storage : window.localStorage
  })

  export default {
    state: { 
        products: [
            {
        id: 1,
        product: 'Hamburger',
        productImage: "hamburger.jpg",
        inventory: 5,
        price: 'N3,000',
        productDesc: '',
        reviews: '',
        tag: '',
        count: 0,
        },
        
        {
        id: 2,
        product: 'Eggroll',
        productImage: "eggroll.jpg",
        inventory: 0,
        price: 'N11,000',
        productDesc: '',
        reviews: '',
        tag: '',
        count: 0,
        },

        {
        id: 3,
        product: 'Eggport',
        productImage: "eggport.jpg",
        inventory: 5,
        price: 'N1,500',
        productDesc: '',
        reviews: '',
        tag: '',
        count: 0,
        },

        {
        id: 4,
        product: 'Piccata',
        productImage: "piccata.jpg",
        inventory: 0,
        price: 'N100,000',
        productDesc: '',
        reviews: '',
        tag: '',
        count: 0,
        },

        {
        id: 5,
        product: 'Rice',
        productImage: "rice.jpg",
        inventory: 5,
        price: 'N7,000',
        productDesc: '',
        reviews: '',
        tag: '',
        count: 0,
        },

        {
        id: 6,
        product: 'Beeflettuce',
        productImage: "beeflettuce.jpg",
        inventory: 0,
        price: 'N11,000',
        productDesc: '',
        reviews: '',
        tag: '',
        count: 0,
        },
        {
        id: 7,
        product: 'lettuce',
        productImage: "beeflettuce.jpg",
        inventory: 0,
        price: 'N91,000',
        productDesc: '',
        reviews: '',
        tag: '',
        count: 0,  
        },
        {
        id: 8,
        product: 'Rice',
        productImage: "rice.jpg",
        inventory: 0,
        price: 'N22,000',
        productDesc: '',
        reviews: '',
        tag: '',
        count: 0,  
        },
    ],
    },
    mutations: { 
        setProductList: (state, value) => {
            state.productList = value;
        }
    },
    actions: { 
        setProductList:({commit}, item) => {
            commit("setProductList", item)
        }
    },
    getters: {
        productList: (state) => {
            return state.productList;
        }
    },
    plugins:[vuexlocal.plugin]
  }