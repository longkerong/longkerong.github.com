window.onscroll=window.onload=function(){
	var oHeadnav=document.querySelector('.headnav');
	var oA=document.querySelectorAll('#headnav li a');
	var oBox=document.querySelector('.box');
	for (var i = 0; i < oA.length; i++) {
		oA[i].onmouseover=function(){
			move1(oBox,this.offsetLeft);
		};
	}
	var left=0;
	var timer=null;
	var speed=0;
	function move1(obj,Target){
		clearInterval(timer);
		timer=setInterval(function(){
			speed+=(Target-obj.offsetLeft)/3;
			speed*=0.5;
			left+=speed;
			obj.style.left=Math.round(left)+'px';
			if(speed<1 && Target==obj.offsetLeft){//停止条件
               clearInterval(timer);
            }
		},30);
	};
	var oZuop=document.getElementById('zuop');
	var oI1=document.getElementById('i1');
	var oI2=document.getElementById('i2');
	var oI3=document.getElementById('i3');
	var oI4=document.getElementById('i4');
	var oJies=document.getElementById('jies');
	var oB1=document.getElementById('b1');
	var oB2=document.getElementById('b2');
	var oB3=document.getElementById('b3');
	var oB4=document.getElementById('b4');
	oZuop.onmouseover=function(){
		oI1.style.transition='0.2s';
		oI2.style.transition='0.2s';
		oI3.style.transition='0.2s';
		oI4.style.transition='0.2s';
		oI1.style.opacity=1;
		oI2.style.opacity=1;
		oI3.style.opacity=1;
		oI4.style.opacity=1;
		oI1.style.transform='translateX(229px)';
		oI2.style.transform='translateX(-302px)';
		oI3.style.transform='translateY(-201px)';
		oI4.style.transform='translateY(198px)';
	};
	oZuop.onmouseout=function(){
		oI1.style.opacity=0;
		oI2.style.opacity=0;
		oI3.style.opacity=0;
		oI4.style.opacity=0;
		oI1.style.transform='translateX(0px)';
		oI2.style.transform='translateX(60px)';
		oI3.style.transform='translateY(50px)';
		oI4.style.transform='translateY(70px)';
	};
	oJies.onmouseover=function(){
		oB1.style.transition='0.2s';
		oB2.style.transition='0.2s';
		oB3.style.transition='0.2s';
		oB4.style.transition='0.2s';
		oB1.style.opacity=1;
		oB2.style.opacity=1;
		oB3.style.opacity=1;
		oB4.style.opacity=1;
		oB1.style.transform='translateX(229px)';
		oB2.style.transform='translateX(-202px)';
		oB3.style.transform='translateY(-201px)';
		oB4.style.transform='translateY(198px)';
	};
	oJies.onmouseout=function(){
		oB1.style.opacity=0;
		oB2.style.opacity=0;
		oB3.style.opacity=0;
		oB4.style.opacity=0;
		oB1.style.transform='translateX(0px)';
		oB2.style.transform='translateX(60px)';
		oB3.style.transform='translateY(50px)';
		oB4.style.transform='translateY(70px)';
	};
	var aLi=document.getElementById('ol1').children;
	var oSpan=document.querySelectorAll('.span1');
	for (var i = 0; i < aLi.length; i++) {
		(function(index){
			aLi[i].onmouseenter=function(){
				move(oSpan[index],{top:0},{duration:500})
			};
			aLi[i].onmouseleave=function(){
				move(oSpan[index],{top:180},{duration:500})
			};
		})(i)
	}
	// var map = new BMap.Map("container");         // 创建地图实例  
	// var point = new BMap.Point(121.4571, 31.1454);  // 创建点坐标  
	// map.centerAndZoom(point, 15);
	
	// var opts = {type: BMAP_NAVIGATION_CONTROL_LARGE}    
	// map.addControl(new BMap.NavigationControl(opts));
	
	// //map.addControl(new BMap.OverviewMapControl()); 
	// map.addControl(new BMap.ScaleControl());   // 初始化地图，设置中心点坐标和地图级别 1-20  
	var clienTh=document.documentElement.clientHeight;
	var oContact=document.getElementById('Contact');
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var h=document.getElementById('Contact').offsetTop;
	if (scrollTop>250) {
		oContact.className='Contact animated fadeInLeftBig'
	}
}