//const main = (params) => {
    //var characters = params
    var characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var size = [3, 4, 5];
    var word = '';
    var splitWord = '';
    var reverseWord = '';
    var palindrome = 0;
    var result = []
    
    for ( var i = 0 ; i < 10000 ; i++ ) {
        var randomSize = size[Math.floor(Math.random()*size.length)];
    
        for ( var j = 0 ; j < randomSize ; j++){
        word += characters[Math.floor(Math.random()*characters.length)];
        } 

        splitWord = word.split('').join();
        reverseWord = word.split('').reverse().join();

        // console.log(splitWord)
        // console.log(reverseWord)
        if(splitWord == reverseWord){
                
                palindrome++;
                result.push(word);
            }
      
   	word = ''
    splitWord = ''
    reverseWord = ''
    
   }
    
    console.log(palindrome)
    console.log(result)
   
//}