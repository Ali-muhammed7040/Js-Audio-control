const songs = ['korean', 'hindi' , 'eng' ,'french'];

songs.forEach(song =>{
    const btn = document.createElement('button')
    btn.classList.add('btn'); 
    btn.innerText= song

    btn.addEventListener('click',()=>
    {
        stopSongs()
        document.getElementById(song).play()
    })
    document.getElementById('button').appendChild(btn)
})

function stopSongs()
{
    songs.forEach(song=>{
        const audio= document.getElementById(song)
        audio.pause();
        audio.currentTime= 0;

    })
}