let photo_id=0 

photos = ["mapa Orteliusa.jpg", "Leo Bonhart.jpg", "Geralt i Ciri na schodach w zamku stygga.jfif", "Yennefer.jpg"];
photos_count = photos.length - 1;
function next()
{
	photo_id+=1;
	if (photo_id>photos_count)
		photo_id=0

	img = document.getElementById("photo");
	img.src="img/" + photos[photo_id];

}

function prev()
{
	photo_id-=1;
	if (photo_id<0)
		photo_id=photos.length - 1

	img = document.getElementById("photo");
	img.src="img/" + photos[photo_id];


}