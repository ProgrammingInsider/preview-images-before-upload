const images = document.getElementById("file");
const previewContainer = document.getElementById("previewContainer");

var srcArray;
var src;

// Image
const imgCard = (src,x) => {
    return `<div class="image">`+
    ` <div class="close"><img src="./img/close.svg" alt="" onclick="removeSelectedImage(${x})" class="closeImg"></div>`+
     `<img src=${src} alt="">`+
`</div>`
}

// preview Image
const displayPreview = (srcArray) => {
    previewContainer.innerHTML = "";
   const length = srcArray.length;
    for(let x = 0; x<length;x++){
        const src = URL.createObjectURL(srcArray[x]) 
        previewContainer.innerHTML += imgCard(src,x)
    }
}

// remove specific Image
const removeSelectedImage = (index) => {
    srcArray.splice(index,1);
    displayPreview(srcArray) 
}

// onchange
images.onchange = (e) => {
    srcArray = Array.from(images.files);
   displayPreview(srcArray) 
}

