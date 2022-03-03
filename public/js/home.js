const imageInit = document.querySelector("#img-results");


fetch("/Imagedata")
.then(data => data.json())
.then(data => data.hits)
.then(data => generateImages(data))

const generateImages = (arr) => {
        imageInit.innerHTML = "";
    arr.forEach(ele => {
        const imgCont = document.createElement("div");
        imgCont.classList.add("img");
        imageInit.appendChild(imgCont);

        const img = document.createElement("img");
        img.src = ele.largeImageURL;
        imgCont.appendChild(img);
    });
}