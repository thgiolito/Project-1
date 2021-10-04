const beastToDestroy = [
  {
    name: "Oeuf d'alien",
    picture: "https://st.depositphotos.com/thumbs/1795881/image/2347/23476086/api_thumb_450.jpg",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description: "Protège un infâme crabe surnommé calineur de visage qui sussure des 'Miss, t'es charmante' dès qu'une femme passe à proximité. Risque d'attaque faciale, s'accroche à l'aide de ses pattes arachnéennes en quémandant un zéro-six.",
    protection: "Curez-vous le nez ostensiblement, cela devrait les maintenir à distance un moment.",
  },
  {
    name: "Chupa cabra",
    picture: "https://st3.depositphotos.com/thumbs/1695244/image/33600/336005272/api_thumb_450.jpg",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Créature fantastique sans poil ayant des yeux rouges et une bouche avec des crocs saillants vers le haut et vers le bas. Se nourrit en suçant le sang des animaux de ferme, en faisant des trous parfaitement circulaires dans le cou jusqu'au cervelet.",
    protection:
      "Eloignez au plus vite vos animaux de ferme : veaux, vaches, cochons, chèvre...",
  },
  {
    name: "Data Analyst",
    picture: "https://st2.depositphotos.com/thumbs/1010613/image/5216/52164615/api_thumb_450.jpg",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Responsable du recueil et de l’analyse de la donnée d’une entreprise, le data analyst communique avec ses pairs par télépathie et voue un culte au Big Data auquel il sacrifie des tables de données les soirs de pleine lune.",
    protection:
      "Mettez un casque anti-bruit et tenez-vous hors de portée de ses ondes mentales. L'efficacité du chapeau en aluminium reste à prouver.",
  },
  {
    name: "Zombaby",
    picture: "https://st4.depositphotos.com/thumbs/1006593/image/27793/277937394/api_thumb_450.jpg",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Créature rampante parfois équipée de bras, le zombaby est un être pleurnichard qui se nourrit de cerve-lait.",
    protection:
      "Evitez tout contact avec sa bouche, l'éventuelle absence de dent ne la rend pas moins dangereuse. Si possible, attrapez-le avec une pince à biberon et enfermez-le dans un parc.",
  },
  {
    name: "Arachnide",
    picture: "https://st4.depositphotos.com/thumbs/5946506/image/20003/200038184/api_thumb_450.jpg",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Créature extra-terrestre ovipare très agressive ressemblant à un insecte géant. Les arachnides vivent en communautés régies sous l'absolue dictature de leur reine et sont en conflit ouvert avec la Fédération terrienne.",
    protection:
      "Recouvrez-vous des excréments que vous venez d'expulser, creusez un trou dans le sol et cachez-vous dedans.",
  },
  {
    name: "Sadako",
    picture: "https://st3.depositphotos.com/thumbs/1006542/image/12890/128904568/api_thumb_450.jpg",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Esprit vengeur vêtu d'une chemise de nuit blanche et fuyant les salons de coiffure. Lorsqu'elle était humaine, elle fut assassinée et jetée dans un puits. Depuis, elle se demande ce qu'on a tous à lui mettre la rage.",
    protection:
      "Eteignez la télévision et placez-vous à l'intérieur d'un cercle protecteur constitué de peignes.",
  },
  {
    name: "Lego®",
    picture: "https://images.assetsdelivery.com/compings_v2/korolkoff/korolkoff2002/korolkoff200200065.jpg",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Petite brique de construction en plastique de couleur. Apparaît spontanément dans les foyer équipés d'enfants ou d'adulescents et se glisse insidieusement sous leurs pieds.",
    protection:
      "Mettez des chaussures à semelle rigide et équipez-vous de sachets zippables.",
  },
  {
    name: "Noiraude",
    picture: "https://images.assetsdelivery.com/compings_v2/kouzins/kouzins1903/kouzins190300016.jpg",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Petites boules de suie d'à peine quelques centimètres de diamètre que l'on retrouve généralement par petits paquets amassés. Elles n'ont pas de personnalité et peuvent être comparées à un groupe d'insectes.",
    protection:
      "Ouvrez les volets, allumez vos lampes à U.V. et riez très fort.",
  },
  {
    name: "Démogorgon",
    picture: "https://st3.depositphotos.com/thumbs/7477192/image/17597/175972944/api_thumb_450.jpg",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Créature humanoïde grande et mince à la peau visqueuse. Ses membres digitigrades allongés se terminent par des griffes et sa tête s'ouvre sur une immense bouche entourée de pétales dentés sentant la pivoine.",
    protection:
      "Jetez-lui un Raider®, un walkman ou un mulet. Demandez-lui s'il est de la famille d'Ahmon-Ibor, le Prince des Démons, Seigneur de Tout ce qui Nage dans les Ténèbres.",
  },
  {
    name: "Ça",
    picture: "https://images.unsplash.com/photo-1601513445498-5dbffc8d5d5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Entité extraterrestre métamorphe éternelle et plus ancienne que l'univers prenant généralement la forme d'un clown. Egalement connue sous le nom de Pennywise, elle cible les enfants de manière cyclique.",
    protection:
      "Jetez-lui des enfants ou des balles de jonglage.",
  },
  {
    name: "Chucky",
    picture: "https://images.unsplash.com/photo-1611787640592-ebf78080d96e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Poupée possédée par l'esprit d'un tueur en série grâce à un rituel vaudou. Fasciné par les grands couteaux de cuisine.",
    protection:
      "Passez-lui quelques épisodes de Ken le survivant, jetez-lui des allumettes (allumées).",
  },
  {
    name: "Chtulhu",
    picture: "https://img2.freepng.fr/20180511/bxw/kisspng-the-rats-in-the-walls-the-call-of-cthulhu-the-cats-5af61c86287cd0.6832657115260785981658.jpg",
    hiddenPicture: "https://i.ibb.co/BNwhCDP/ImgTD2.png",
    detailPicture: "https://i.ibb.co/M2kb2y4/ImgTD1.png",
    description:
      "Gigantesque créature extraterrestre de forme vaguement humanoïde à tête de seiche, tentacules de pieuvre et ailes de dragon. Théoriquement endormie depuis des millénaires dans la cité de Phoo à R'lyeh engloutie sous l'océan Pacifique. Souvent accompagnée de culturistes.",
    protection:
      "Fuyez, pauvres fous !",
  },
];

const beasts = document.querySelector(".beasts");

function createBeast(title, imageUrl) {
  const beast = document.createElement("div");
  beast.classList.add("beast");
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
  createBeast(beastToDestroy[i]["name"], beastToDestroy[i]["picture"]);
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
const bestiaryTitle = document.querySelector(".bestiary-title");

const beastclic = document.querySelectorAll('.beast');
for (let i = 0; i < beastclic.length; i++) {
  beastclic[i].addEventListener("click",  function(){
    const item = beastToDestroy[i]
    fillBeastCard(item.name, item.picture, item.description, item.protection)
    beastDetail.style.display = "flex";
    beasts.style.display = "none";
    bestiaryTitle.style.display = "none";
  })
}

const quitButton = document.querySelector(".quit-button");

quitButton.addEventListener("click", function () {
  beastDetail.style.display = "none";
  beasts.style.display = "flex";
  bestiaryTitle.style.display = "block";
});

// const leftButton = document.querySelector(".left-button");
// for (let i = 0; i < beastToDestroy.length; i++) {
//   leftButton.addEventListener("click", function () {
//     const item = beastToDestroy[i-1]
//     fillBeastCard(item.name, item.picture, item.description, item.protection)
//   })
// }

// const rightButton.document.querySelector(".right-button");
// for (let i = 0; i < beastToDestroy.length; i++) {
//   rightButton.addEventListener("click", function () {
//     const item = beastToDestroy[i-1]
//     fillBeastCard(item.name, item.picture, item.description, item.protection)
//   })
// }
