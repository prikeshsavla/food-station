import Fuse from 'fuse.js'

export const state = () => {
  return {
    items: [
      {
        name: 'Floral Digital Print',
        code: '100',
        price: 100,
        category_id: '6efddd01-f7f1-4056-a02d-2227c36cd5db',
      },

      {
        name: 'Black Oxford Checks',
        code: '101',
        price: 101,
        category_id: '6efddd01-f7f1-4056-a02d-2227c36cd5db',
      },

      {
        name: 'Blue Cut-Work Dobby',
        code: '102',
        price: 102,
        category_id: '6efddd01-f7f1-4056-a02d-2227c36cd5db',
      },

      {
        name: 'Rust Cyan Twill Checks',
        code: '103',
        price: 103,
        category_id: '6efddd01-f7f1-4056-a02d-2227c36cd5db',
      },

      {
        name: 'Violet Digital Print',
        code: '104',
        price: 104,
        category_id: '6efddd01-f7f1-4056-a02d-2227c36cd5db',
      },

      {
        name: 'Blue Millange Chex',
        code: '105',
        price: 105,
        category_id: '51ba70f5-2dc8-4388-bd4e-936bcd3646f1',
      },

      {
        name: 'Blue Beige Print',
        code: '106',
        price: 106,
        category_id: '51ba70f5-2dc8-4388-bd4e-936bcd3646f1',
      },

      {
        name: 'Dark Green Digital Print',
        code: '107',
        price: 107,
        category_id: '51ba70f5-2dc8-4388-bd4e-936bcd3646f1',
      },

      {
        name: 'Fusia Tesssr Micro Chex',
        code: '108',
        price: 108,
        category_id: '51ba70f5-2dc8-4388-bd4e-936bcd3646f1',
      },

      {
        name: 'Beize Itlian Linan Stripe',
        code: '109',
        price: 109,
        category_id: '51ba70f5-2dc8-4388-bd4e-936bcd3646f1',
      },

      {
        name: 'Denium Blue Digital Floral',
        code: '110',
        price: 110,
        category_id: '51ba70f5-2dc8-4388-bd4e-936bcd3646f1',
      },
    ],
  }
}

export const actions = {
  fetchItems({ commit, state, getters }) {
    return true
  },
  search({ state }, { query }) {
    const options = {
      includeScore: true,
      keys: ['name', 'code'],
    }
    const fuse = new Fuse(state.items, options)
    return fuse.search(query)
  },
}
