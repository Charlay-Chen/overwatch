'use strict';
(function(){
    //向服务端接口localhost:3000/index发送ajax请求，获得返回的数组对象
      ajax({
        url:"http://localhost:8080/index",
        type:"get",
        dataType:"json"//让ajax自动将json字符串转为对象，可直接使用
      })//当ajax请求完成后
      .then(function(result){//result就是服务端返回的结果
        // console.log(result);
        var html=``;
        for (const lists of result) {
          // console.log(key);
          // console.log(key.hid);

          html+=`
            <li class="hero-list" data-hero-id="${lists.hid}">
              <a href="" class="hero-portrait">
                <div class="hero-portrait-image-mask">
                    <div class="hero-portrait-image" style="background-image: url('${lists.hsimg}')"></div>
                </div>
                <span class="hero-portrait-label">${lists.hname}</span>
              </a>
            </li>`
            document.getElementById("hero-list").innerHTML=html;
            
        }
        var $heroList=$(".hero-list");
          $heroList.mouseover(function(){
          var $heroList=$(this);
          var i=$heroList.attr("data-hero-id");
          for (const des of result) {
            if(i==des.hid){
              $("#hero-des").html(`
              <div class="index-list-body-bg">
                <div class="index-list-body-detail">
                  <h2>${des.hname}</h2>
                  <p>${des.hdetail}</p>
                </div>
              </div>
              <div class="index-list-body-hero">
                  <div class="index-list-body-hero-img" style="background-image: url('${des.himg}')"></div>
              </div>
              `)
          }
        }
        
        // console.log(i);
        // alert(i);
        })
        
        // for (const des of result) {
        //   if()
        // }
        // $("hero-list-li").mouseover(function(){
        //   var num=document.querySelector("[]")
          // $("hero-des").html(`
          // <div class="index-list-body-bg">
          //   <div class="index-list-body-detail">
          //     <h2>D.Va</h2>
          //     <p>${key.hdetail}</p>
          //   </div>
          // </div>
          // <div class="index-list-body-hero">
          //     <div class="index-list-body-hero-img" style="background-image: url('img/index/dva.png')"></div>
          // </div>
          // `)
        // })



        // //加载第一个商品
        // //获得第一个商品对象:
        // var p1=result[0];
        // //将商品对象的各个属性，填充到HTML片段中
        // var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
        //   <div class="card-body d-flex flex-column align-items-start">
        //     <h5 class="d-inline-block mb-2">${p1.title}</h5>
        //     <h6 class="mb-5">
        //       <a class="text-dark" href="javascript:;">${p1.details}</a>
        //     </h6>
        //     <span class="text-primary">¥${p1.price.toFixed(2)}</span>
        //     <a class="btn btn-primary" href="${p1.href}">查看详情</a>
        //   </div>
        //   <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${p1.pic}" data-holder-rendered="true">
        // </div>`;
        // //将填充好的HTML片段，放入页面中指定的父元素下
        // document.getElementById("p1").innerHTML=html;
    
        // //加载第二个商品
        // //先获得第二个商品对象
        // var p2=result[1];
        // //填充第二个商品的html片段
        // var html=`<div class="card border-0 flex-md-row box-shadow h-md-250">
        //   <div class="card-body d-flex flex-column align-items-start">
        //     <h5 class="d-inline-block mb-2">${p2.title}</h5>
        //     <h6 class="mb-5">
        //       <a class="text-dark" href="javascript:;">${p2.details}</a>
        //     </h6>
        //     <span class="text-primary">¥${p2.price.toFixed(2)}</span>
        //     <a class="btn btn-primary" href="${p2.href}">查看详情</a>
        //   </div>
        //   <img class="card-img-right flex-auto d-none d-md-block mt-5" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="${p2.pic}" data-holder-rendered="true">
        // </div>`;
        // //将第二个商品的html片段填充回指定父元素下
        // document.getElementById("p2").innerHTML=html;
      })
      
    })()
    