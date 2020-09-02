module.exports = {
    local:'zh',
    navBar_home: "主页",
    navBar_deposit: "存款",
    navBar_borrow: "借贷",
    navBar_history: "历史记录",
    navBar_liquidation: "清算",
    navBar_faq: "常见问题",
    current_market_size: "当前市场规模",
    dark_theme:"夜晚模式",
    detail: '详 情',    
    home_list_sort_header:[{
        text: '资产',
        id: 1,
        sort: true,
        sortType: 'asc'
    }, {
        text: '市场规模',
        id: 2,
        sort: false
    }, {
        text: '总借入额',
        id: 3,
        sort: true
    }, {
        text: '存款年化',
        id: 4,
        sort: true
    },
    {
        tip: '浮动利率',
        text: '贷款年化',
        id: 5,
        sort: true
    }, {
        tip: '固定利率',
        text: '借贷年化',
        id: 6,
        sort: true
    }],
    deposit_switch: `所有|稳定货币`,
    deposit_explain: `如要进行存款，请将这些货币中的任何一种转到您的钱包中。
    `,
    deposit_list_tit: [{
        text: '资产',
        id: 1,
        sort: false,
        sortType: 'asc'
    }, {
        text: '市场规模',
        id: 2,
        sort: false
    }, {
        text: '总借入额',
        id: 3,
        sort: false
    }, {
        text: '存款年化',
        id: 4,
        sort: false
    },
    {
        text: '',
        id: 5,
        sort: false
    }],
    borrow_switch: `所有|稳定货币`,
    borrow_explain: `如要去进行借贷，请先将这些货币中的任何一种转到您的钱包中。
    `,
    borrow_list_tit: [{
        text: '资产',
        id: 1,
        sort: false,
        sortType: 'asc'
    }, {
        text: '提供给您',
        id: 2,
        sort: false
    }, {
        text: '浮动利率 年化',
        id: 3,
        sort: false
    }, {
        text: '固定利率 年化',
        id: 4,
        sort: false
    },
    {
        text: '',
        id: 5,
        sort: false
    }],
    search_for_address:"搜索地址",
    liquidation_asset: '资产',
    liquidation_amount: '金额',
    liquidation_sortArr: [{
        text: '资产',
        id: 1,
        sort: false,
        sortType: 'asc'
    }, {
        text: '市场规模',
        id: 2,
        sort: false
    }, {
        text: '总借入额',
        id: 3,
        sort: false
    }, {
        text: '存款年化',
        id: 4,
        sort: false
    },
    {
        tip: '浮动利率',
        text: '贷款年化',
        id: 5,
        sort: false
    }]
}