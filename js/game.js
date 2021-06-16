class Game{
constructor(){

}
getState(){
    //fetching value from database
    var gamstateRef=database.ref('gamestate')
    //listining for changes in gamestateRef and fetches value inside data variable 
    //and storing insode gamestate variable
    gamstateRef.on('value',function( data){
        gamestate=data.val()
    })

}
update(state){
    database.ref('/').update({
        gamestate:state
        //Update all changes into database in gamestate variable with whatever is passed into sate
    })
}
start(){
    if(gamestate===0){
        player=new Player()
        player.getCount() 
        form=new Form()
        form.display()   
    }
}
}