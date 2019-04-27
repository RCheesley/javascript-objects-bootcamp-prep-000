var playlist = {artistName:"songTitle"};

function updatePlaylist(playlist,artistName,songTitle){
  Object.assign({}, playlist, { name: ['name'], title: ['title']})
  return playlist;
}
