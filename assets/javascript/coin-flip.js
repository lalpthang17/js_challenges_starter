(function(){
    let whatdouthink = prompt ("head or tail?")
    let coinfliper = document.querySelector ("#coinfliper")
    
    coinfliper.addEventListener("click", function(){
        if (Math.random() > .5){
            console.log("heads");
        }
        else{
            console.log("tails");
        }
    })
})();