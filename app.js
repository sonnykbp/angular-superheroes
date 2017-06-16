let heroesData = [
  {name: "Spider-Man",number: 111, comic: "Marvel", image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Web_of_Spider-Man_Vol_1_129-1.png/250px-Web_of_Spider-Man_Vol_1_129-1.png"},
  {name: "Captain America",number: 211, comic: "Marvel", image_url: "https://vignette2.wikia.nocookie.net/marvelcinematicuniverse/images/d/d2/CACW_Steve_Textless_Poster.jpg/revision/latest/scale-to-width-down/350?cb=20160527050609"},
  {name: "Deadpool", number: 311, comic: "Marvel", image_url: "https://s3.foxmovies.com/foxmovies/production/films/103/images/featured_content/111-front.jpg"},
  {name: "Wonder Woman",number: 411, comic: "DC", image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Wonder_Woman.jpg/250px-Wonder_Woman.jpg"},
  {name: "Batman",number: 511, comic: "DC", image_url: "https://static.comicvine.com/uploads/scale_small/11128/111283887/5436234-9421608823-latest"},
  {name: "Aquaman",number: 611, comic: "DC", image_url: "https://upload.wikimedia.org/wikipedia/en/0/0a/Aquaman_issue_1%2C_the_new_52.jpg"}
]



angular
.module("heroesApp", [])
.controller("HeroesController", [HeroesControllerFunc])

function HeroesControllerFunc() {
  this.heroes = heroesData
  this.findHero = function () {
    let hero = {name: this.findHeroName}
  }
}
