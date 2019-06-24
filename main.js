var difMoods = ['mad','happy','annoyed','sad', 'hangry']
var button= $('button');
var moods = $('.moods');

button.on('click', randomizer);

function randomizer (){

  var random = Math.floor(Math.random()*(difMoods.length));
  var newmood = difMoods[random];
  moods.text(newmood);
}
