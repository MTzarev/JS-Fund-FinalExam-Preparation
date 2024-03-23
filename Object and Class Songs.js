function songs(input) {
let songsNum=input.shift();
let typeSongs = input.pop();

class Song  {
    constructor(type, name, time){
        this.type=type;
        this.name=name;
        this.time=time;
    }
}
let finalList = []

for (let i=0; i<songsNum; i++){
    let [type, name, time] = input[i].split(`_`);
    let song =new Song(type, name, time);
    finalList.push(song)
}
if (typeSongs === `all`){
    finalList.forEach((i)=>console.log(i.name));
}else{
    let filtered = finalList.filter((i)=>i.type === typeSongs);
    filtered.forEach((i)=>console.log(i.name))
}
    console.log();
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );
