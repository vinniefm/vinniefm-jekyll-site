var playlist = new Playlist();

// Songs
var drugstore = new Song("Drugstore", "The Dwarves", "2:54");
var imForThingsYouDo = new Song("I'm For Things You Do", "The Enfields", "3:16");

// Movies
var starWars = new Movie("Star Wars", 1977, "98:54");

playlist.add(drugstore);
playlist.add(imForThingsYouDo);
playlist.add(starWars);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function(){
  playlist.play();
  playlist.renderInElement(playlistElement);

}

var nextButton = document.getElementById("next");
nextButton.onclick = function(){
  playlist.next();
  playlist.renderInElement(playlistElement);

}
var stopButton = document.getElementById("stop");
stopButton.onclick = function(){
  playlist.stop();
  playlist.renderInElement(playlistElement);

}
