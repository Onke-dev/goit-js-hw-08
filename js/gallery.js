const images = [
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
        description: "Hokkaido Flower",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
        description: "Container Haulage Freight",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
        description: "Aerial Beach View",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
        description: "Flower Blooms",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
        description: "Alpine Mountains",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
        description: "Mountain Lake Sailing",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
        description: "Alpine Spring Meadows",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
        description: "Nature Landscape",
    },
    {
        preview:
            "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
        original:
            "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
        description: "Lighthouse Coast Sea",
    },
];

const refs = {
    gallery: document.querySelector(".gallery"),
    body: document.querySelector("body"),
};

function imageTemplate(image) {
    return `<li class="gallery-item">
  <a class="gallery-link" href="${image.original}">
    <img
      class="gallery-image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`;
}

function imagesTemplate(images) {
    return images.map(imageTemplate).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    const markup = imagesTemplate(images);
    refs.gallery.innerHTML = markup;

    refs.gallery.addEventListener("click", (e) => {
        if (e.target.nodeName === "IMG") {
            e.preventDefault();
        }
        showModal(e.target.src);
    });

    const firstLink = refs.gallery.querySelectorAll(".gallery-link");
    const firstImage = refs.gallery.querySelectorAll(".gallery-image");
    const firstitem = refs.gallery.querySelectorAll(".gallery-item");

    firstitem.forEach((item) => {
        item.style.width = "360px";
        item.style.height = "200px";
    });

    firstLink.forEach((link) => {
        link.style.width = "360px";
        link.style.height = "200px";
    });

    firstImage.forEach((image) => {
        image.style.width = "360px";
        image.style.height = "200px";
    });
});

function showModal(hrefUrl) {
    const instance = basicLightbox.create(`<img src="${hrefUrl}"/>`)

    instance.show()
}

refs.body.style.margin = "0";
refs.gallery.style.display = "flex";
refs.gallery.style.flexDirection = "row";
refs.gallery.style.flexWrap = "wrap";
refs.gallery.style.justifyContent = "center";
refs.gallery.style.columnGap = "24px";
refs.gallery.style.rowGap = "24px";
refs.gallery.style.listStyleType = "none";
refs.gallery.style.padding = "0";
refs.gallery.style.margin = "24px auto";
refs.gallery.style.maxWidth = "1128px";



