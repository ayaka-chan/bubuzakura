//================================================
//
//	フォトギャラリー（テキストP.183）
//
//================================================

//アルバムデータの作成（降順で追加）
let album=[
	{src:'img/2021/210412_1.jpg', alt:'2021年4月12日　カムパネルラ収録（魚眼レンズ）'},
	{src:'img/2020/201226_1.jpg', alt:'2020年12月26日　クリスマス会（魚眼レンズ）'},
	{src:'img/2020/200906_1.jpg', alt:'2020年9月6日　Pritender収録'},
	{src:'img/2020/200801_2.jpg', alt:'2020年8月1日　カメレオン・アーミー収録（魚眼レンズ）'},
	{src:'img/2020/200801_1.jpg', alt:'2020年8月1日　あー夏休み収録（魚眼レンズ）'},
	{src:'img/2019/191214_1.jpg', alt:'2019年12月14日　クリスマス会'},
	{src:'img/2019/190629_1.jpg', alt:'2019年6月29日　U.S.A収録'},
	{src:'img/2019/190601_1.jpg', alt:'2019年6月1日　ルパン三世のテーマ収録'},
	{src:'img/2017/171209_1.jpg', alt:'2017年12月9日　クリスマス会'},
	{src:'img/2016/161224_1.jpg', alt:'2016年12月24日　クリスマス会'},
	{src:'img/2015/150405_2.jpg', alt:'2015年4月5日　にんじゃりばんばん'},
];

//最初のデータを表示しておく
//<img src="" alt="">
let mainImage=document.createElement('img');
mainImage.setAttribute('src',album[0].src);
mainImage.setAttribute('alt',album[0].alt);

//<p>キャプション</p>
let mainAlt=document.createElement('p');
mainAlt.innerText=mainImage.alt;

let mainFlame=document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage,null);
mainFlame.insertBefore(mainAlt,null);

//サムネイル画像の表示
let thumbFlame=document.querySelector('#gallery .thumb');
for (let i=0; i<album.length; i++) {
	//<img src="" alt="">
	let thumbImage=document.createElement('img');
	thumbImage.setAttribute('src', album[i].src);
	thumbImage.setAttribute('alt', album[i].alt);
	thumbFlame.insertBefore(thumbImage, null);
}

//クリックした画像をメインに表示する
thumbFlame.addEventListener('click', function(event) {
	if(event.target.src) {
		mainImage.src=event.target.src;
		mainAlt.innerText=event.target.alt;
	}
});
