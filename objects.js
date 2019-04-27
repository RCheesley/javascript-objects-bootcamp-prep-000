var playlist = {name:"title"};

function updatePlaylist(playlist,name,title){
  Object.assign({}, playlist, { name: ['name'], title: ['title']})
  return playlist;
}
