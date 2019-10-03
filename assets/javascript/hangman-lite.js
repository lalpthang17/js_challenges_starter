(function(){

    document.write("hello from hangman-lite.js");

    let word = 'pineapple'
    let letter = 'p'

    var str = "pineapple";

    function count(string,char) {
        var re = new RegExp(char,"gi");
        return string.match(re).length;
       }
       
       var str = 'pineapple';
       console.log(count(str,'p'));



})();