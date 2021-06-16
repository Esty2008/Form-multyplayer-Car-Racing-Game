class Form{
    constructor(){

    }

    display(){
        var title = createElement('h1')
        title.html('car racing game')
        title.position(400,100)

        var input = createInput('Name')
        var button = createButton('PLAY')
        var greeting = createElement('h5')
        input.position(300,200)
        button.position(300,270)
        button.mousePressed(function(){
            button.hide()
            input.hide()
            //storing input value or "name" inside of name variable
            var name = input.value()
            //Incrementing playerCount variable by 1
            playerCount = playerCount + 1;
            player.update(name);
            player.updateCount(playerCount)
            greeting.html('Welcome to Car Racing Game ' + name)
            greeting.position(300,200);
        })

        
    }
}