let sat =document.getElementById('li1');
let con=document.getElementById('2');
let bri=document.getElementById('3');
let sep=document.getElementById('4');
let  gray=document.getElementById('5');
let blur=document.getElementById('6');
let hue=document.getElementById('7');
let download=document.getElementById('down');
let reset=document.getElementById('re');
let img=document.getElementById('img');
let upload=document.getElementById('f');
let imgBox=document.querySelector(".img-box");
let canvas=document.getElementById("canvas");
let context=canvas.getContext('2d');
let container=document.getElementsByClassName("container")[0];
let control=document.getElementsByClassName("control")[0];
function Reset()
{
    context.filter='none';
    context.drawImage(img,0,0,canvas.width,canvas.height);
    sat.value="100";
    con.value="100";
    bri.value="100";
    sep.value="0";
    gray.value="0";
blur.value=0;
hue.value=0;
}
download.onclick=()=>
{
download.href=canvas.toDataURL();
}
onload=()=>
{
    download.style.display="none";
    reset.style.display="none";
    imgBox.style.display="none";
  
}
upload.onchange=()=>
{
    Reset();
    control.style.display="block";
    container.style.height="auto";
    download.style.display="block";
    reset.style.display="block";
    imgBox.style.display="block";
let file =new FileReader();
file.readAsDataURL(upload.files[0]);
file.onload=()=>
{
img.src=file.result;
}
img.onload=()=>
{
    canvas.width=img.width;
    canvas.height=img.height;
    context.drawImage(img,0,0,canvas.width,canvas.height);
    img.style.display='none'

}
}
let filters=document.querySelectorAll("ul li input");
filters.forEach(filter => {
    filter.addEventListener('input', function() {
        context.filter = `
            saturate(${sat.value}%)
            contrast(${con.value}%)
            brightness(${bri.value}%)
            sepia(${sep.value}%)
            grayscale(${gray.value})
            blur(${blur.value}px)
            hue-rotate(${hue.value}deg)
        `;
        context.drawImage(img,0,0,canvas.width,canvas.height);
    });
});
