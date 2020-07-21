let html = document.querySelector("#html");
let style = document.querySelector('#style');
let div = document.querySelector('#div');
let n = 0;
let string = `/*您好，我是一名前端新人，
*接下来让我来展示自己的前端功底，
*下面我会画一个阴阳图，看好喽
*首先需要准备一个div：
*/
#div{
    width:200px;
    height:200px;
    border:1px solid red;
}
/*然后将div变成一个圆*/
#div{
    border-radius: 50%;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    border:none;
}
/*太极生两仪，两仪生四象，四象生八卦，两仪指的就是一阴一阳*/
#div{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*无极而太极，太极动而生阳，动极而静，静而生阴，分阴分阳，两仪立焉，请您细品：*/
#div::before {
    width: 100px;
    height: 100px;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 20%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 100%);
}
#div::after {
    width: 100px;
    height: 100px;
    transform: translateX(50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 20%, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 1) 100%);
}
好啦，我的展示完毕，谢谢观看^--^
`;
let string2 = '';
let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += '<br>';
        } else if (string[n] === ' ') {
            string2 += '&nbsp;';
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        window.scrollTo(0, 9999);
        html.scrollTo(0, 9999);
        style.innerHTML = string.substring(0, n);
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 50);
};
step();