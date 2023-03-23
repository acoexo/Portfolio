function getTittle(obj) {
    const header = document.querySelector('.frontintro'); 
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.title;
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = `${obj.user}`;
    header.appendChild(myPara);
}

function getChilds(obj) {
    const section = document.querySelector('.images');
    const proyects = obj.proyects;

    for (const proyects of proyects) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myImg = document.createElement("img");
      const myPara1 = document.createElement('p');

      myH2.textContent = proyects.name;
      myPara1.textContent = `Proyect name: ${proyects.name}`;
      myImg.src = proyects.img;

      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myImg);
      

      section.appendChild(myArticle);
    }
  }
  const requestURL = './../json.json';
  const request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'text';
  request.send();
  
  request.onload = function() {
    const myProyectsText = request.response;
    const myProyects = JSON.parse( myProyectsText);
    getTitle(myProyects);
    getChilds(myProyects);
  }

