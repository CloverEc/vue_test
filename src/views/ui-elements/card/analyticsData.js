export default {
    lineOptions: {
        tooltip: {              //设置tip提示
            // trigger: 'item'
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: { right: '4%', top: '12%', bottom: '12%' },
        xAxis: {
            data: ['8/21', '8/22', '8/23', '8/24', '8/25', '8/26', '8/27',],
        },
        yAxis: {
            nameTextStyle: {
                fontSize: 12,
            },
            type: 'value',
            min: 0,
            max: 300,
            splitNumber: 4
        }
    }
}