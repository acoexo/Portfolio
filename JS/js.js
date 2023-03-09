function populateHeader(obj) {
  const header = document.querySelector('header'); 
  const myH1 = document.createElement('h1');
  myH1.textContent = obj['title'];
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = `${obj.company}`;
  header.appendChild(myPara);
}

function populateHeroes(obj) {
  const section = document.querySelector('section');
  const clients = obj.members;

  for (const client of clients) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myImg = document.createElement("img");
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myPara4 = document.createElement('p');
    const myPara5 = document.createElement('p');
    const myPara6 = document.createElement('p');
    const myPara7 = document.createElement('p');

    myH2.textContent = client.name;
    myPara1.textContent = `Full name: ${client.name} ${client.surname}`;
    myPara2.textContent = `DNI: ${client.dni}`;
    myPara3.textContent = `Direction: ${client.direction}`;
    myPara4.textContent = `Birth date: ${client.birthDate}`;
    myPara5.textContent = `Ban strikes: ${client.banStrikes}`;
    myPara6.textContent = `Register date: ${client.registerDate}`;
    myPara7.textContent = `Register code: ${client.registerCode}`;
    myImg.src = client.img;

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myPara6);
    myArticle.appendChild(myPara7);
    myArticle.appendChild(myImg);
    

    section.appendChild(myArticle);
  }
}
const requestURL = './JSON/Json.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function() {
  const superHeroesText = request.response;
  const superHeroes = JSON.parse(superHeroesText);
  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}

