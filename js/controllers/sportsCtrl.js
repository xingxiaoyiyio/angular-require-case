

define(["echart"],function(echart){
    function homeCtrl($rootScope,$scope) {
        $scope.title='这里是运动评估！'
        $("#testBtn").click(function(){
            alert("你点击了")
        })
        var myChart = echart.init(document.getElementById('chart'));
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 插件引入案例示范'
            },
            tooltip: {},
            xAxis: {
                data: ["体重秤","跑步机","瑜伽垫","健身球","动感单车","仰卧起坐机"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 60, 10, 10, 20]
            }]
        };
            myChart.setOption(option);


    }

    return homeCtrl;
});