console.log("Welcome to LiveNews");

// API key b167c52fd68b4a049d93c49f204548b6

let newsAccordion = document.getElementById("newsAccordion");

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://gnews.io/api/v4/top-headlines?country=in&category=general&apikey=2d84aa985a99a546067585e5a62a3d48`,
  true
);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles)

    let newsHtml = "";
    articles.forEach(function(element, index) {
        // console.log(element,index)
    for (let news in articles) console.log(articles[news]);
    let news = `<div class="card">
          <div class="card-header" id="heading${index}">
            <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
              <b> Breaking News: ${index+1}</b> ${element["title"]}
              <br>
              <br>
              Published At : ${ element["publishedAt"]}
              </button>
            </h2>
          </div>
      
          <div id="collapse ${index}" class="collapse show" aria-labelledby="heading${index}" data-parent="#newsAccordion">
            <div class="card-body">${element["content"]}.<a href="${element["url"]}"target="_blank">Read more here</a>
            </div>
          </div>
            </div>`;
             newsHtml+=news; 
        });
        newsAccordion.innerHTML = newsHtml;
    }
   else {
    console.error("Error occured");
  }
};
xhr.send();

