randomImage_array1 = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png','dice5.png', 'dice6.png']

function get_random_image1(){
    randomNumber1 = Math.floor(Math.random()*randomImage_array1.length);

    selected_image1 = randomImage_array1[randomNumber1]

    document.querySelector('.img1').src = `./images/${selected_image1}`

}



randomImage_array2 = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png','dice5.png', 'dice6.png']

function get_random_image2(){
    randomNumber2 = Math.floor(Math.random()*randomImage_array2.length);

    selected_image2 = randomImage_array2[randomNumber2]

    
    document.querySelector('.img2').src = `./images/${selected_image2}`

}


window.onload = get_random_image1() 
window.onload = get_random_image2()


if(selected_image1 > selected_image2) {
    document.querySelector('h1').innerHTML = "Player 1 wins!";
} 
else if (selected_image2 > selected_image1) {
    document.querySelector('h1').innerHTML = "Player 2 wins!";
} 
else if (selected_image1 === selected_image2){
    document.querySelector('h1').innerHTML = "Draw!";
}

