//アルバムデータの作成（降順で追加）
let album=[
	//{src:'●画像のパス●', alt:'●写真説明●'},
	{src:'img/2024/241005_1.jpg', alt:'2024年10月05日　ラッパと娘収録'},
	{src:'img/2023/231202_1.jpg', alt:'2023年12月02日　クリスマス会'},
	{src:'img/2023/230415_1.jpg', alt:'2023年04月15日　365日の紙飛行機収録'},
	{src:'img/2022/221217_1.jpg', alt:'2022年12月17日　クリスマス会'},
	{src:'img/2022/220910_2.jpg', alt:'2022年09月10日　ゆずれない願い収録（魚眼レンズ）'},
	{src:'img/2022/220910_1.jpg', alt:'2022年09月10日　ゆずれない願い収録'},
	{src:'img/2021/211225_1.jpg', alt:'2021年12月25日　クリスマス会'},
	{src:'img/2021/210412_1.jpg', alt:'2021年04月10日　カムパネルラ収録（魚眼レンズ）'},
	{src:'img/2020/201226_1.jpg', alt:'2020年12月26日　クリスマス会（魚眼レンズ）'},
	{src:'img/2020/200906_1.jpg', alt:'2020年09月05日　Pritender収録'},
	{src:'img/2020/200801_1.jpg', alt:'2020年08月01日　あー夏休み収録（魚眼レンズ）'},
	{src:'img/2020/200704_1.jpg', alt:'2020年07月04日　カメレオン・アーミー収録（魚眼レンズ）'},
	{src:'img/2019/191214_1.jpg', alt:'2019年12月14日　クリスマス会'},
	{src:'img/2019/190629_1.jpg', alt:'2019年06月29日　U.S.A収録'},
	{src:'img/2019/190601_1.jpg', alt:'2019年06月01日　ルパン三世のテーマ収録'},
	{src:'img/2018/181222_1.jpg', alt:'2018年12月22日　クリスマス会'},
	{src:'img/2017/171209_1.jpg', alt:'2017年12月09日　クリスマス会'},
	{src:'img/2016/161224_1.jpg', alt:'2016年12月24日　クリスマス会'},
	{src:'img/2015/150404_1.jpg', alt:'2015年04月04日　にんじゃりばんばん'},
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
