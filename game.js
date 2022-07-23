  var timerFunction = null;
  var time = null;
  var key = 0;
  var score;
  var s = '0';
  var live;
  var DXup5 = 3;
  var DYup5 = 0;
  var dbx1=2;
  var dby1=2;
var dbx2=-2;
  var dby2=2;
var dbx3=3;
  var dby3=-3;
var dbx4=2;
  var dby4=3;
var dbx5=-1;
  var dby5=3;
var a=0;

  var sprite = new Image();
  sprite.src = "face.png";
  //建立畫布
  var canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  //調整畫布大小
  canvas.width = 775;
  canvas.height = 585;
  <!-- 顯示結束畫面-->
  function lose() {
      var lo = document.getElementById('lose');
      
      lo.style.display = 'block';
      
  }

if(s>5000){DXup5=4;}

function win(){
var wi = document.getElementById('winner');
wi.style.display = 'none';
}
  <!--執行程式-->
  function startAnimation() {
      setInterval(win);
     var music=document.getElementById("m");
      m.play();
      if (timerFunction == null) {
          timerFunction = setInterval(animate,10);
      }
    
      window.addEventListener('keydown', changeway, true);
      score = document.getElementById("span_score");
      span_score.innerText = s;
      live = document.getElementById("span_live");
      span_live.innerText = "3";
  }

  function stopAnimation() {
      if (timerFunction != null) {
          clearInterval(timerFunction);
          timerFunction = null;
      }
  }

  function animate() {
      //主球運動方向
      var rect = document.getElementById("CAT");
      var x = rect.getAttribute("x");
      var y = rect.getAttribute("y");
      var newX5 = parseInt(x);
      var newY5 = parseInt(y);
      
      newX5 += DXup5;
      newY5 += 0;
      
      rect.setAttribute("x", newX5);
      rect.setAttribute("y", newY5);
      //分數計算
        span_score.innerText = parseInt(s) + 5;
                s = parseInt(s) + 5;
      //球1運動方向
      var bb1 = document.getElementById("ball1");
      var x1 = bb1.getAttribute("x");
      var y1 = bb1.getAttribute("y");
      var newlx = parseInt(x1);
      var newly = parseInt(y1);
      newlx += dbx1;
      newly += dby1;
      bb1.setAttribute("x", newlx);
      bb1.setAttribute("y", newly);
      var bx=dby1,by=dbx1;
      if(newlx <= 175 || newlx + 10 >= 475){dbx1=-bx;dby1=by;}
      else if(newly <= 200 || newly + 10 >= 450){dbx1=bx;dby1=-by;}
      
      if(newlx<=175&&newly <= 200){ bb1.setAttribute("x", newlx+4);
      bb1.setAttribute("y", newly+4);}
      if( newlx + 10 >= 475&&newly <= 200){ bb1.setAttribute("x", newlx-4);
      bb1.setAttribute("y", newly+4);}
      if(newlx<=175&&newly + 10 >= 450){ bb1.setAttribute("x", newlx+4);
      bb1.setAttribute("y", newly-4);}
      if(newlx + 10 >= 475&&newly + 10 >= 450){ bb1.setAttribute("x", newlx-4);
      bb1.setAttribute("y", newly-4);}
      
      //球2運動方向
      if(s>2000){var bb = document.getElementById('ball2');
      
             bb.style.display = 'block';
      var bb2 = document.getElementById("ball2");
      var x2 = bb2.getAttribute("x");
      var y2 = bb2.getAttribute("y");
      var newlx2 = parseInt(x2);
      var newly2 = parseInt(y2);
      newlx2 += dbx2;
      newly2 += dby2;
      bb2.setAttribute("x", newlx2);
      bb2.setAttribute("y", newly2);
      var bx2=dby2,by2=dbx2;
      if(newlx2 <= 175 || newlx2 + 10 >= 475){dbx2=-bx2;dby2=by2;}
      else if(newly2 <= 200 || newly2 + 10 >= 450){dbx2=bx2;dby2=-by2;}
      
      if(newlx2<=175&&newly2 <= 200){bb2.setAttribute("x", newlx2+4);
      bb2.setAttribute("y", newly2+4);}
      if( newlx2 + 10 >= 475&&newly2 <= 200){  bb2.setAttribute("x", newlx2-4);
      bb2.setAttribute("y", newly2+4);}
      if(newlx2<=175&&newly2 + 10 >= 450){  bb2.setAttribute("x", newlx2+4);
      bb2.setAttribute("y", newly2-4);}
      if(newlx2 + 10 >= 475&&newly2 + 10 >= 450){  bb2.setAttribute("x", newlx2-4);bb2.setAttribute("y", newly2-4);}
                }
      
      
      //球3運動方向
      
      if(s>4000){var bbbb = document.getElementById('ball3');
      
             bbbb.style.display = 'block';
      var bb3 = document.getElementById("ball3");
      var x3 = bb3.getAttribute("x");
      var y3 = bb3.getAttribute("y");
      var newlx3 = parseInt(x3);
      var newly3 = parseInt(y3);
      newlx3 += dbx3;
      newly3 += dby3;
      bb3.setAttribute("x", newlx3);
      bb3.setAttribute("y", newly3);
       var bx3=dby3,by3=dbx3;
      if(newlx3 <= 175 || newlx3 + 10 >= 475){dbx3=-bx3;dby3=by3;}
      else if(newly3 <= 200 || newly3 + 10 >= 450){dbx3=bx3;dby3=-by3;} 
      
      if(newlx3<=175&&newly3 <= 200){bb3.setAttribute("x", newlx3+4);
      bb3.setAttribute("y", newly3+4);}
      if( newlx3 + 10 >= 475&&newly3 <= 200){bb3.setAttribute("x", newlx3-4);
      bb3.setAttribute("y", newly3+4);}
      if(newlx3<=175&&newly3 + 10 >= 450){bb3.setAttribute("x", newlx3+4);
      bb3.setAttribute("y", newly3-4);}
      if(newlx3 + 10 >= 475&&newly3 + 10 >= 450){bb3.setAttribute("x", newlx3-4);bb3.setAttribute("y", newly3-4);}
                }
      
      if(s>6000){
          //球4運動方向
         var bbb = document.getElementById('ball4');
      
             bbb.style.display = 'block';
          
      var bb4 = document.getElementById("ball4");
      var x4 = bb4.getAttribute("x");
      var y4 = bb4.getAttribute("y");
      var newlx4 = parseInt(x4);
      var newly4 = parseInt(y4);
      newlx4 += dbx4;
      newly4 += dby4;
      bb4.setAttribute("x", newlx4);
      bb4.setAttribute("y", newly4);
       var bx4=dby4,by4=dbx4;
      if(newlx4 <= 175 || newlx4 + 10 >= 475){dbx4=-bx4;dby4=by4;}
      else if(newly4 <= 200 || newly4 + 10 >= 450){dbx4=bx4;dby4=-by4;} 
      
      if(newlx4<=175&&newly4 <= 200){bb4.setAttribute("x", newlx4+4);
      bb4.setAttribute("y", newly4+4);}
      if( newlx4 + 10 >= 475&&newly4 <= 200){bb4.setAttribute("x", newlx4-4);
      bb4.setAttribute("y", newly3+4);}
      if(newlx4<=175&&newly4 + 10 >= 450){bb4.setAttribute("x", newlx4+4);
      bb4.setAttribute("y", newly4-4);}
      if(newlx4 + 10 >= 475&&newly4 + 10 >= 450){bb4.setAttribute("x", newlx4-4);bb4.setAttribute("y", newly4-4);}
      
      }
      
       //球5運動方向
      if(s>8000){var bb55 = document.getElementById('ball5');
      
             bb55.style.display = 'block';
      var bb5 = document.getElementById("ball5");
      var x5 = bb5.getAttribute("x");
      var y5 = bb5.getAttribute("y");
      var newlx5 = parseInt(x5);
      var newly5 = parseInt(y5);
      newlx5 += dbx5;
      newly5 += dby5;
      bb5.setAttribute("x", newlx5);
      bb5.setAttribute("y", newly5);
      var bx5=dby5,by5=dbx5;
      if(newlx5 <= 175 || newlx5 + 10 >= 475){dbx5=-bx5;dby5=by5;}
      else if(newly5 <= 200 || newly5 + 10 >= 450){dbx5=bx5;dby5=-by5;}
      
      if(newlx5<=175&&newly5 <= 200){bb5.setAttribute("x", newlx5+4);
      bb5.setAttribute("y", newly5+4);}
      if( newlx5 + 10 >= 475&&newly5 <= 200){  bb5.setAttribute("x", newlx5-4);
      bb5.setAttribute("y", newly5+4);}
      if(newlx5<=175&&newly5 + 10 >= 450){  bb5.setAttribute("x", newlx5+4);
      bb5.setAttribute("y", newly5-4);}
      if(newlx5 + 10 >= 475&&newly5 + 10 >= 450){  bb5.setAttribute("x", newlx5-4);bb5.setAttribute("y", newly5-4);}
                }
      
      //判斷結束條件
      if (newX5 <= 175 || newX5 + 20 >= 475 || newY5 <= 200 || newY5 + 20 >= 450) {
          clearInterval(timerFunction);
          timerFunction=setInterval(lose);
      }
      var number1=Math.abs(Math.pow(newlx+5-newX5-10,2)+Math.pow(newly+5-newY5-10,2));
      var number2=Math.abs(Math.pow(newlx2+5-newX5-10,2)+Math.pow(newly2+5-newY5-10,2));
      var number3=Math.abs(Math.pow(newlx3+5-newX5-10,2)+Math.pow(newly3+5-newY5-10,2));
      var number4=Math.abs(Math.pow(newlx4+5-newX5-10,2)+Math.pow(newly4+5-newY5-10,2));
      var number5=Math.abs(Math.pow(newlx5+5-newX5-10,2)+Math.pow(newly5+5-newY5-10,2));
      
       if(Math.pow(number1,0.5)<=15){clearInterval(timerFunction);
          timerFunction=setInterval(lose);}
      if(Math.pow(number2,0.5)<=15){clearInterval(timerFunction);
          timerFunction=setInterval(lose);}
      if(Math.pow(number3,0.5)<=15){clearInterval(timerFunction);
          timerFunction=setInterval(lose);}
      if(Math.pow(number4,0.5)<=15){clearInterval(timerFunction);
          timerFunction=setInterval(lose);}
      if(Math.pow(number5,0.5)<=15){clearInterval(timerFunction);
          timerFunction=setInterval(lose);}
      
      
      
  }
//改變方向
  function changeway() {
      DXup5 = -DXup5;
  }

 