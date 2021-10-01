const beastToDestroy = [
  {
    name: "Oeuf d'alien",
    picture: "https://st.depositphotos.com/thumbs/1795881/image/2347/23476086/api_thumb_450.jpg",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    protection: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Chupa cabra",
    picture: "https://st3.depositphotos.com/thumbs/1695244/image/33600/336005272/api_thumb_450.jpg",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    protection:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Data Analyst",
    picture: "https://st2.depositphotos.com/thumbs/1010613/image/5216/52164615/api_thumb_450.jpg",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    protection:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Zombaby",
    picture: "https://st2.depositphotos.com/thumbs/1606463/image/8079/80792684/api_thumb_450.jpg",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    protection:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Arachnide",
    picture: "https://images.pexels.com/photos/2665108/pexels-photo-2665108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    protection:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Samara",
    picture: "https://st3.depositphotos.com/thumbs/1006542/image/12890/128904568/api_thumb_450.jpg",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    protection:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Sinok",
    picture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    protection:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Noiraude",
    picture: "https://st.depositphotos.com/thumbs/1787196/image/1330/13301832/api_thumb_450.jpg",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    protection:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Demogorgon",
    picture: "https://st3.depositphotos.com/thumbs/7477192/image/17597/175972944/api_thumb_450.jpg",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    protection:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "It",
    picture: "https://images.unsplash.com/photo-1601513445498-5dbffc8d5d5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    protection:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Chucky",
    picture: "https://images.unsplash.com/photo-1611787640592-ebf78080d96e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    protection:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Ch'tulu",
    picture: "https://img2.freepng.fr/20180511/bxw/kisspng-the-rats-in-the-walls-the-call-of-cthulhu-the-cats-5af61c86287cd0.6832657115260785981658.jpg",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    protection:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const beasts = document.querySelector(".beasts");

function createBeast(title, imageUrl, index) {
  const beast = document.createElement("div");
  beast.classList.add("beast");
  beast.id = index;
  beasts.appendChild(beast);

  const beastImg = document.createElement("div");
  beastImg.style.backgroundImage = `url(${imageUrl})`;
  beastImg.classList.add("beast-img");
  beast.appendChild(beastImg);

  const beastName = document.createElement("h3");
  beastName.classList.add("beast-name");
  beastName.innerHTML = title;
  beast.appendChild(beastName);
}

for (let i = 0; i < beastToDestroy.length; i++) {
  createBeast(beastToDestroy[i]["name"], beastToDestroy[i]["picture"], i);
}

function fillBeastCard(title, image, presentation, protection) {
  const beastDetailName = document.querySelector(".beast-detail-name");
  beastDetailName.innerHTML = title;
  const beastDetailImg = document.querySelector(".beast-detail-img");
  beastDetailImg.style.backgroundImage = `url(${image})`;
  const beastDetailDescription = document.querySelector(
    ".beast-detail-description"
  );
  beastDetailDescription.innerHTML = presentation;
  const beastDetailProtection = document.querySelector(
    ".beast-detail-protection"
  );
  beastDetailProtection.innerHTML = protection;
}

const beastDetail = document.querySelector(".beast-detail");

const beastclic = document.querySelectorAll('.beast');
for (let i = 0; i < beastclic.length; i++) {
  beastclic[i].addEventListener("click",  function(){
    const item = beastToDestroy[i]
    console.log(item);
    fillBeastCard(item.name, item.detailPicture, item.description, item.protection)
    beastDetail.style.display = "flex";
    beasts.style.display = "none";
  })
}

const quitButton = document.querySelector(".quit-button");

quitButton.addEventListener("click", function () {
  beastDetail.style.display = "none";
  beasts.style.display = "flex";
});
