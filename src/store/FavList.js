import swal from 'sweetalert'

const state = {
    cart: [],
}

const getters = {
    cartLength() {
        return state.cart.length
    }
}

const mutations = {
    ADD_TO_FAV(state, productId) {
        const cart = JSON.parse(localStorage.getItem('cart'))
        if(cart) {
            const existing_cart = JSON.parse(localStorage.getItem('cart'))
            existing_cart.push(productId)
            state.cart = existing_cart
            localStorage.setItem('cart', JSON.stringify(existing_cart))
        }
        else {
            state.cart.push(productId)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
        swal('Success!', 'Added to List', 'success');

    },

    REMOVE_FROM_FAV(state, productId) {
        // remove item from cart
        const existing_cart = JSON.parse(localStorage.getItem('cart'))
        let position = existing_cart.indexOf(productId)
        existing_cart.splice(position, 1)
        state.cart = existing_cart
        localStorage.setItem('cart', JSON.stringify(existing_cart))
        swal('Removed!', ' Removed from List', 'warning');
    },

    LOAD_FAV(state) {
        if(JSON.parse(localStorage.getItem('cart'))) {
            state.cart = JSON.parse(localStorage.getItem('cart'))
        }
        
    },
}

const actions = {
    addToCart({commit}, productId) {
        commit('ADD_TO_FAV', productId)
    },

    removeFromList({commit}, productId) {
        commit('REMOVE_FROM_FAV', productId)
    },

    loadCart({commit}) {
        commit('LOAD_FAV')
    },
}

export default {
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
}