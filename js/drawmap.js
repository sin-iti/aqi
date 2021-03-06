define(["jquery","./classcities"],function ($,classCity) {        
    return function (citiesAqi) {
        var option = {
            geo:{//地图组件
                type:"map",
                map:"china",
                roam:true,
                scaleLimit:{
                    min:0.3,
                    max:9
                },
                label:{
                    normal:{
                        show:false
                    },
                    emphasis:{
                        show:false
                    }
                },
                itemStyle:{
                    normal:{
                        color:"blue",
                        showColor:"black",
                        shadowBlur:1
                    },
                    emphasis:{
                        color:"rgb(180,20,20)"
                    }
                },
                silent:true
            },
            series:[
                {
                    type:"scatter",
                    name:"优",
                    coordinateSystem:"geo",
                    symbol:"circle",
                    symbolSize:16,
                    itemStyle:{
                        normal:{
                            color:"#00E400"
                        },
                        emphasis:{
                            color:"red"
                        }
                    },
                    data: classCity("优",citiesAqi)
                },
                {
                    type:"scatter",
                    name:"良",
                    coordinateSystem:"geo",
                    symbol:"circle",
                    symbolSize:18,
                    itemStyle:{
                        normal:{
                            color:"#FFFF00"
                        },
                        emphasis:{
                            color:"red"
                        }
                    },
                    data: classCity("良",citiesAqi)
                },
                {
                    type:"scatter",
                    name:"轻度污染",
                    coordinateSystem:"geo",
                    symbol:"circle",
                    symbolSize:20,
                    itemStyle:{
                        normal:{
                            color:"#FF7E00"
                        },
                        emphasis:{
                            color:"red"
                        }
                    },
                    data: classCity("轻度污染",citiesAqi)
                },
                {
                    type:"scatter",
                    name:"中度污染",
                    coordinateSystem:"geo",
                    symbol:"circle",
                    symbolSize:25,
                    itemStyle:{
                        normal:{
                            color:"pink"
                        },
                        emphasis:{
                            color:"#FF0000"
                        }
                    },
                    data: classCity("中度污染",citiesAqi)
                },
                {
                    type:"scatter",
                    name:"重度污染",
                    coordinateSystem:"geo",
                    symbol:"circle",
                    symbolSize:30,
                    itemStyle:{
                        normal:{
                            color:"#99004C"
                        },
                        emphasis:{
                            color:"red"
                        }
                    },
                    data: classCity("重度污染",citiesAqi)
                },
                {
                    type:"effectScatter",
                    name:"严重污染",
                    coordinateSystem:"geo",
                    symbol:"circle",
                    symbolSize:35,
                    itemStyle:{
                        normal:{
                            color:"#7E0023"
                        },
                        emphasis:{
                            color:"red"
                        }
                    },
                    data: classCity("严重污染",citiesAqi)
                }
            ],
            tooltip:{//信息框
                show:true,
                confine:true,
                formatter:function (params,ticket) {
                    var tpls = " " 
                    + "<div class='acb'><h3 class='fl'>" 
                    + params.name 
                    + "</h3><div class='fr bigfont'>"
                    + params.value[2] 
                    + "</div></div>" 
                    + "<div><p>等级：" 
                    + params.value[3] 
                    + "</p><p>AQI：" 
                    + params.value[4] 
                    + "</p><p>主要污染物：" 
                    + params.value[5] 
                    + "</p></div>";
                    return tpls;
                },
                backgroundColor:"black",
                padding:[5,10]
            },
            title:{//标题
                text:"全国空气质量地图",
                textStyle:{
                    color:"#739",
                    fontStyle:"normal",
                    fontWeight:"bolder",
                    fontSize:24
                },
                x:"center",
                y:50
            },
            legend:{
                bottom:5,
                left:20,
                backgroundColor:"rgba(255,255,255,0.7)",
                padding:[15,20],
                orient:"vertical",
                data:[
                    {
                        name:"优",
                        icon:"circle",
                        textStyle:{
                            color:"#00E400"
                        }
                    },
                    {
                        name:"良",
                        icon:"circle",
                        textStyle:{
                            color:"#FFFF00"
                        }
                    },
                    {
                        name:"轻度污染",
                        icon:"circle",
                        textStyle:{
                            color:"#FF7E00"
                        }
                    },
                    {
                        name:"中度污染",
                        icon:"circle",
                        textStyle:{
                            color:"#FF0000"
                        }
                    },
                    {
                        name:"重度污染",
                        icon:"circle",
                        textStyle:{
                            color:"#99004C"
                        }
                    },
                    {
                        name:"严重污染",
                        icon:"circle",
                        textStyle:{
                            color:"#7E0023"
                        }
                    }
                ]
            },
            backgroundColor:"cyan"
        };
        return option;
    }
});