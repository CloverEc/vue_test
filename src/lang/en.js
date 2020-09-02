module.exports = {
    local:'en',
    navBar_home: "Home",
    navBar_deposit: "Deposit",
    navBar_borrow: "Borrow",
    navBar_history: "History",
    navBar_liquidation: "Liquidation",
    navBar_faq: "FAQ",
    current_market_size: "Current market size",
    dark_theme:"Dark theme",
    detail: 'Details',
    home_list_sort_header:[{
        text: 'Assets',
        id: 1,
        sort: true,
        sortType: 'asc'
    }, {
        text: 'Market size',
        id: 2,
        sort: false
    }, {
        text: 'Total borrowed',
        id: 3,
        sort: true
    }, {
        text: 'Deposit APY',
        id: 4,
        sort: true
    },
    {
        tip: 'Variable',
        text: 'Borrow APR',
        id: 5,
        sort: true
    }, {
        tip: 'Stable',
        text: 'Borrow APR',
        id: 6,
        sort: true
    }],
    deposit_switch: `All|Stable Coins`,
    deposit_explain: `To make a deposit, transfer any of these assets to your wallet.
    `,
    deposit_list_tit: [{
        text: 'Asset',
        id: 1,
        sort: false,
        sortType: 'asc'
    }, {
        text: 'Your wallet balance',
        id: 2,
        sort: false
    }, {
        text: 'Your balance in Aave',
        id: 3,
        sort: false
    }, {
        text: 'APY',
        id: 4,
        sort: false
    },
    {
        text: '',
        id: 5,
        sort: false
    }],
    borrow_switch: `All|Stable Coins`,
    borrow_explain: `To borrow, deposit any of these assets into your wallet.
    `,
    borrow_list_tit: [{
        text: 'Asset',
        id: 1,
        sort: false,
        sortType: 'asc'
    }, {
        text: 'Available for you',
        id: 2,
        sort: false
    }, {
        text: 'Variable APR',
        id: 3,
        sort: false
    }, {
        text: 'Stable APR',
        id: 4,
        sort: false
    },
    {
        text: '',
        id: 5,
        sort: false
    }],
    search_for_address:"Search for address",
    liquidation_asset: 'Asset',
    liquidation_amount: 'Amount',
    liquidation_sortArr: [{
        text: 'Address',
        id: 1,
        sort: false,
        sortType: 'asc'
    }, {
        text: 'Health factor',
        id: 2,
        sort: false
    }, {
        text: 'Debt to cover',
        id: 3,
        sort: false
    }, {
        text: 'Total collateral',
        id: 4,
        sort: false
    },
    {
        tip: '浮动利率',
        text: 'Collateral composition',
        id: 5,
        sort: false
    }]
    
}