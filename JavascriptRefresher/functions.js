function listArrayItems(arr) {
    for(var i=0; i< arr.length; i++) {
        if(arr[i] === 'red') {
            console.log(i*100, 'Tomato!');
        } else{
            console.log(i*100, arr[i]);
        }
        

    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);
