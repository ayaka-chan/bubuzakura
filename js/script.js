//================================================
//
//	3本線が×になるハンバーガーメニュー
//
//================================================
$(function () {
	$('.js-btn').on('click', function () {				// js-btnクラスをクリックすると、
		$('.menu , .btn-line').toggleClass('open');	// メニューとバーガーの線にopenクラスをつけ外しする
	})
});



//================================================
//
//	桜を降らせる
//
//================================================
particlesJS("particles-js", {
	"particles":{
		"number":{
			"value":30,//この数値を変更すると桜の数が増減できる
			"density":{
				"enable":true,
				"value_area":1121.6780303333778
			}
		},
		"color":{
			"value":"#fff"
		},
		"shape":{
			"type":"image",//形状は画像を指定
			"stroke":{
				"width":0,
			},
			"image":{
				"src":"img/flower.png",//【重要】画像を指定！桜の画像を設定してください。
				"width":120,
				"height":120
			}
		},
		"opacity":{
			"value":0.06409588744762158,
			"random":true,
			"anim":{
				"enable":false,
				"speed":1,
				"opacity_min":0.1,
				"sync":false
			}
		},
		"size":{
			"value":8.011985930952697,
			"random":true,//サイズをランダムに
			"anim":{
				"enable":false,
				"speed":4,
				"size_min":0.1,
				"sync":false
			}
		},
		"line_linked":{
			"enable":false,
		},
		"move":{
			"enable":true,
			"speed":7,//この数値を小さくするとゆっくりな動きになる
			"direction":"bottom-right",//右下に向かって落ちる
			"random":false,//動きはランダムにしない
			"straight":false,//動きをとどめない
			"out_mode":"out",//画面の外に出るように描写
			"bounce":false,//跳ね返りなし
			"attract":{
				"enable":false,
				"rotateX":281.9177489524316,
				"rotateY":127.670995809726
			}
		}
	},
	"interactivity":{
		"detect_on":"canvas",
		"events":{
			"onhover":{
				"enable":false,
			},
			"onclick":{
				"enable":false,
			},
			"resize":true
		}
	},
	"retina_detect":false
});



//================================================
//
//	マウスカーソルを●に変える
//
//================================================
//PC限定で一番最後に実行
if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
	document.addEventListener("DOMContentLoaded", function() {
		//準備
		let cursorR = 40;  //カーソルの半径
		const cursor = document.getElementById('cursor');  //カーソル用のdivを取得

		//上記のdivタグをマウスに追従させる処理
		document.addEventListener('mousemove', function (e) {
		    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
		});

		//aタグとbuttonタグにclass付与
		const linkElem = document.querySelectorAll('a,button,label');//マウスオーバーで変化させたい要素
		for (let i = 0; i < linkElem.length; i++) {
			linkElem[i].addEventListener('mouseover', function (e) {
				cursor.classList.add('hover');
			});
			linkElem[i].addEventListener('mouseout', function (e) {
				cursor.classList.remove('hover');
			});
		}
	});
}



//================================================
//
//	ページ内リンクアニメーション
//
//================================================

$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^="#"]').click(function(){
    // 移動先を50px上にずらす
    var adjust = 20;
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    var position = target.offset().top - adjust;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

