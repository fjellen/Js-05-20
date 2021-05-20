const ourURL= "https://aws.random.cat/meow";
const catDiv =document.getElementById("cat-here");

function printObjekt(obj) {
    console.log(obj.file)

    const catImg=document.createElement("img");
    catImg.src=obj.file;
    catDiv.appendChild(catImg);

}

function whenRequestFinished(response) {
    response.json().then(printObjekt);
}


fetch(ourURL).then(whenRequestFinished);