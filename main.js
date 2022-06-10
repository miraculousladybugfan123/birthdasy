var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.image.fromUrl('BirthdayImage.jpg', function (img)){
    block_image_object = Img;
}
block_image_object.ScaleToWidth(700);
block_image_object.ScaleToHeight(510);
	block_image_object({
        top:0,
        left:0
    });
    canvas.add(block_image_object);
});
    
}

function playSound(){
    x.play();
	
}
