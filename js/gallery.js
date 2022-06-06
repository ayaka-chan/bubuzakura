//アルバムデータの作成（降順で追加）
let album=[
	//{src:'●画像のパス●', alt:'●写真説明●'},
	{src:'img/2021/210412_1.jpg', alt:'2021年04月10日　カムパネルラ収録（魚眼レンズ）'},
	{src:'img/2020/201226_1.jpg', alt:'2020年12月26日　クリスマス会（魚眼レンズ）'},
	{src:'img/2020/200906_1.jpg', alt:'2020年09月05日　Pritender収録'},
	{src:'img/2020/200801_1.jpg', alt:'2020年08月01日　あー夏休み収録（魚眼レンズ）'},
	{src:'img/2020/200801_2.jpg', alt:'2020年07月04日　カメレオン・アーミー収録（魚眼レンズ）'},
	{src:'img/2019/191214_1.jpg', alt:'2019年12月14日　クリスマス会'},
	{src:'img/2019/190629_1.jpg', alt:'2019年06月29日　U.S.A収録'},
	{src:'img/2019/190601_1.jpg', alt:'2019年06月01日　ルパン三世のテーマ収録'},
	{src:'img/2017/171209_1.jpg', alt:'2017年12月09日　クリスマス会'},
	{src:'img/2016/161224_1.jpg', alt:'2016年12月24日　クリスマス会'},
	{src:'img/2015/150405_2.jpg', alt:'2015年04月05日　にんじゃりばんばん'},
];



//画像の表示
//================================================
//	<div class="col-sm-6">
//		<div class="imgflame">
//			<img src="●画像のパス●" alt="●写真説明●">
//			<p>●写真説明●</p>
//		</div>
//	</div>
//================================================

let thumbFlame=document.querySelector('#gallery .thumb');
for (let i=0; i<album.length; i++) {
	//<div class="col-sm-6"></div>
	let colFlame=document.createElement('div');
	colFlame.setAttribute('class', 'col-sm-6');
	thumbFlame.insertBefore(colFlame, null);

	//<div class="imgflame"></div>
	let imgFlame=document.createElement('div');
	imgFlame.setAttribute('class', 'imgflame');
	colFlame.insertBefore(imgFlame, null);

	//<img src="img/2015/150405_2.jpg" alt="2015年4月5日　にんじゃりばんばん">
	let thumbImage=document.createElement('img');
	thumbImage.setAttribute('src', album[i].src);
	thumbImage.setAttribute('alt', album[i].alt);
	imgFlame.insertBefore(thumbImage, null);

	//<p>キャプション</p>
	let thumbAlt=document.createElement('p');
	thumbAlt.innerText=thumbImage.alt;
	imgFlame.insertBefore(thumbAlt,null);
}

