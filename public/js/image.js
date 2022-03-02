const searchImg = document.querySelector("#searchImage");
const imgInput = document.querySelector("#image-input");
const imgResults = document.querySelector("#img-results");

searchImg.addEventListener("click", () => {
    const getImageSearch = () => {
        const data = imgInput.value;
        const options = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: data,
        };
        fetch('/searchImages', options)
        .then(data => data.json())
        .then(data => generateSearchImages(data.hits))
    };

    getImageSearch();
})


const generateSearchImages = (arr) => {
    arr.forEach(ele => {
        const imgCont = document.createElement("div");
        imgCont.classList.add("img");
        imgResults.appendChild(imgCont);

        const img = document.createElement("img");
        img.src = ele.largeImageURL;
        imgCont.appendChild(img);
    });
}

