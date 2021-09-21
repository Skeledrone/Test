const songlist = document.querySelector('#song-list');

function renderSongs(doc)
{
    let li = document.createElement('li');
    let artistname = document.createElement('span');
    let songname = document.createElement('span');
    let genre = document.createElement('span');

    li.setAttribute('data-id',doc.id);
    artistname.textContent = doc.data().artistname;
    songname.textContent = doc.data().songname;
    genre.textContent = doc.data().genre;

    li.appendChild(artistname);
    li.appendChild(songname);
    li.appendChild(genre);

    songlist.appendChild(li);
}

db.collection('songs').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderSongs(doc);
    });

})
