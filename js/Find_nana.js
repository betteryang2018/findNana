// JavaScript Document

var index=0,
	content=document.getElementById("content"),
	tip=document.getElementById("tip"),
	pics=content.getElementsByTagName("div"),
	times=0;     
	len=pics.length;

function FindNana(){
	var num=prompt("How many friends do you want?(Please write down a number between 1~20)");
    nanaIndex=Math.floor(Math.random()*num);
	for(var i=0;i<len;i++){
	    // 为每张图片添加一个id索引
		pics[i].id=i;
		if(i<num){
			pics[i].style.display="block";
		}
		pics[i].onclick=function(){
			index=this.id;
			times++;        // 用于计算图片被点击的次数
			if(index==nanaIndex){
				checked();
				return;
			}else{
				unchecked();
			}
		}
	}
}


// 未选中unchecked()
function unchecked(){
	pics[index].innerHTML='<img src="image/friends.jpg"/>';
	tip.innerHTML='Oops! Nana is not here.';
}

// 选中checked()
function checked(){
	pics[nanaIndex].innerHTML='<img src="image/nana.jpg"/>';
	tip.innerHTML='Congratulations, Nana is here!' +'<br>'+
'It takes you'+'&nbsp'+times+'&nbsp'+'times to find out Nana.';
}


FindNana();

