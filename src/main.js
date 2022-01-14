
let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string1 = `
    /*您好，我是梁旭光
    *我最近在学习CSS绘画
    *来看看我是怎么画出来的吧
    *首先先去掉烦人的内边距和外边距
    *再设置盒模型定为border-box
    **/
    #wrapper *{
        box-sizing: border-box;
        padding: 0;
        margin: 0; 
    }
    /*我打算画个八卦
    *所以它得是个圆的
    *先加点阴影好人让您看见
    **/
    #bagua{
        position: relative;
        overflow: hidden;
        -webkit-box-shadow: 0px 0px 34px 1px rgba(117,117,117,1);
        box-shadow: 0px 0px 34px 1px rgba(117,117,117,1);
        border-radius: 50%;
        animation: xz 5s  linear infinite;
       
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
    *如果是手机，还是改回来吧
    **/
    @media (max-width:500px){
        #text{
            font-size: 1em;
            margin-top: 0.5em;
        }
    }
    /*开始上色
    *把半个圆涂成黑色先
    **/
    #bagua>div:nth-child(1){
        position: absolute;
        background: black;
        width: 50%;
        height: 100%; 
        left: 0;
    }
    /*
    *再把另一边涂成白色
    **/
    #bagua>div:nth-child(2){
        position: absolute;
        background: white;
        width: 50%;
        height: 100%;        
        right: 0;
    }
    /*画出阴阳鱼的阴鱼
    *手机看别着急呀
    **/
    #bagua>div:nth-child(3){
        position: absolute;
        background: black;
        width: 200px;
        height: 200px;
        left: 50%;
        margin-left: -100px;
        border-radius: 50%;
    }
    /*
    *来啦来啦
    **/
    @media (max-width:500px){
        #bagua>div:nth-child(3){
        width: 100px;
        height: 100px;
        margin-left: -50px;
        }
    }
    /*再画出阴阳鱼的阳鱼
    *手机看别着急呀
    **/
    #bagua>div:nth-child(4){
        background: white; 
        position: absolute;
        width: 200px;
        height: 200px;
        right: 50%;
        bottom: 0%;
        margin-right: -100px;   
        border-radius: 50%;
    }
    /*
    *来啦来啦
    **/
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
        background: white;
        width: 50px;
        height: 50px;
        left: 50%;
        top: 75px;
        margin-left: -25px;
        border-radius: 50%;
    }
    /*
    *来啦来啦
    **/
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
        background: black;
        width: 50px;
        height: 50px;
        left: 50%;
        bottom: 75px;
        margin-left: -25px;
        border-radius: 50%;
    }
    /*
    *来啦来啦
    **/
    @media (max-width:500px){
        #bagua>div:nth-child(6){
            width: 25px;
            height: 25px;
            left: 50%;
            bottom: 37.5px;
            margin-left: -12.5px;
        }
    }
    /*我画的还是个会动的哩
    *来，让图形转起来
    **/
    @keyframes xz{
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
    /*控制一下显示格式
    *居中展示吧
    **/
    #bagua-wrapper{  
        /* viewpoint height */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh; 
    }
    /*
    *写点字把
    **/
    #text{
        display:block;
        color:#0f0;
        margin-top: 1em;
        font-size: 2em;
    }
`;
let string2 = "";
let n = 1;
let time = 100
const run=() => {
        n+=1
        if(n>string1.length){
            window.clearInterval(id)
            return
        }
        if (string1[n] === "\n") {
            string2 += "<br>"
            n+=4
        }else {
            string2 += string1[n]
        }
        //将回车变成html中的<br>
        style.innerHTML = string1.substring(0, n);

        html.innerHTML = string2.substring(0, n);
        window.scrollTo(0,99999);
        html.scrollTo(0,99999);
}
const play =()=>{
   return setInterval(run,time)
}
let id = play()

btnPause.onclick=()=>{
    window.clearInterval(id)
}

btnPlay.onclick=()=>{
    id = play()
}

btnSlow.onclick=()=>{
    window.clearInterval(id)
    time=200
    id = play()
}

btnNormal.onclick=()=>{
    window.clearInterval(id)
    time = 100
    id = play()
}

btnFast.onclick=()=>{
    window.clearInterval(id)
    time = 20
    id = play()
}