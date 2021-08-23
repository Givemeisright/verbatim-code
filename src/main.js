let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string1 = `
    /*您好，我是梁旭光
    *我最近在学习CSS绘画
    *来看看我是怎么画出来的吧
    *首先先去掉烦人的内边距和外边距
    *再设置盒模型定为border-box
    **/

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0; 
    }
    /*背景太白啦
    *让我改改颜色，灰色就挺好
    **/
    body{
        background: lightgray;
    }
    /*我画的还是个会动的哩
    *来，让图形转起来
    *当然现在还看不到hh
    **/
    @keyframes xz{
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
    /*我打算画个八卦
    *所以它得是个圆的
    *先加点阴影好人让您看见
    **/
    #bagua{
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        animation: xz 5s  linear infinite;
        -webkit-box-shadow: 0px 0px 34px 1px rgba(117,117,117,1);
        box-shadow: 0px 0px 34px 1px rgba(117,117,117,1);
    }
    /*也不知道您用什么设备看的
    *兼容一下手机吧
    **/
    @media (max-width:500px){
        #bagua{
            width: 200px;
            height: 200px;
        }
    }
    /*
    *字体太小了改大点
    **/
    #text{
        margin-top: 1em;
        font-size: 2em;
    }
    @media (max-width:500px){
        #text{
            margin-top: 0.5em;
            font-size: 1em;
        }
    }
    /*开始上色
    *把半个圆涂成黑色先
    **/
    #bagua>div:nth-child(1){
        width: 50%;
        height: 100%;
        position: absolute;
        left: 0;
        background: black;
    }
    /*
    *再把另一边涂成白色
    **/
    #bagua>div:nth-child(2){
        
        width: 50%;
        height: 100%;
        position: absolute;
        right: 0;
        background: white;
    }
    /*画出阴阳鱼的阴鱼
    **/
    #bagua>div:nth-child(3){
        position: absolute;
        width: 200px;
        height: 200px;
        left: 50%;
        margin-left: -100px;
        border-radius: 50%;
        background: black;
    }
    @media (max-width:500px){
        #bagua>div:nth-child(3){
        width: 100px;
        height: 100px;
        margin-left: -50px;
        }
    }
    /*再画出阴阳鱼的阳鱼
    *别给阳鱼点上鱼眼
    **/
    #bagua>div:nth-child(4){
        position: absolute;
        width: 200px;
        height: 200px;
        right: 50%;
        bottom: 0%;
        margin-right: -100px;   
        border-radius: 50%;
        background: white; 
    }
    @media (max-width:500px){
        #bagua>div:nth-child(4){
        width: 100px;
        height: 100px;
        margin-right: -50px;  
        }
    }
    /*
    *给阴鱼点上鱼眼
    **/
    #bagua>div:nth-child(5){
        position: absolute;
        width: 50px;
        height: 50px;
        left: 50%;
        top: 75px;
        margin-left: -25px;
        border-radius: 50%;
        background: white;
    }
    @media (max-width:500px){
        #bagua>div:nth-child(5){
        width: 25px;
        height: 25px;
        left: 50%;
        top: 37.5px;
        margin-left: -12.5px;
        }
    }
    /*
    *给阳鱼点上鱼眼
    **/
    #bagua>div:nth-child(6){   
        position: absolute;
        width: 50px;
        height: 50px;
        left: 50%;
        bottom: 75px;
        margin-left: -25px;
        border-radius: 50%;
        background: black;
    }
    @media (max-width:500px){
        #bagua>div:nth-child(6){
            width: 25px;
            height: 25px;
            left: 50%;
            bottom: 37.5px;
            margin-left: -12.5px;
        }
    }
    /*控制一下显示格式
    *居中展示吧
    **/
    #bagua-wrapper{  
        height: 100vh; 
        /* viewpoint height */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`;
let string2 = "";
let n = 0;

let steps = () => {
    setTimeout(() => {
        if (string1[n] === "\n") {
            string2 += "<br>"
        } else if (string1[n] === " ") {
            string2 += "&nbsp"
        } else {
            string2 += string1[n]
        }
        //将回车变成html中的<br>
        html.innerHTML = string2;
        style.innerHTML = string1.substring(0, n);
        window.scrollTo(0, 9999);
        html.scrollTo(0, 9999);
        if (n < string1.length - 1) {
            steps();
            n += 1;
        }
    }, 50); //设置变化时间
};

steps();
