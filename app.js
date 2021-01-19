const birthdate = document.querySelector('#birthdate');
const luckyNum = document.querySelector('#lucky-num');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');
const reset = document.querySelector('#reset');
const tweet = document.querySelector('#tweet');

btn.addEventListener('click', function() {
    
    let date = birthdate.value;
    if (date === '') {
        alert('Please, Enter your Birth Date!')
    } else {
        let dateInt = parseInt(date.replaceAll('-', ''));
        let number = luckyNum.value;
        if (number === '') {
            alert('Please, Enter your Lucky Number!')
        } else {
            sumOfDigitsNDivisible(dateInt, number);
        }
    }
});

function sumOfDigitsNDivisible(date, number) {
    let sum = 0;
    while (date > 0) {
        let lastDigit = date % 10;
        sum = sum + lastDigit;
        date = date / 10;
    }
    

    let sumOfDigits = parseInt(sum);

    if (sumOfDigits % number == 0) {
        
        output.innerText = 'Congratulations, your Birthday is a Lucky day!';

    } else {
        
        output.innerText = 'Sorry, Try again next Lifetime 😉';
    }
}

reset.addEventListener('click', function() {
    birthdate.value = '';
    output.innerText = '';
    luckyNum.value = '';
});


tweet.addEventListener("click", function () {
    let message = `I tried the 'Is my Birth Date Lucky App' from @neogcamp
  
  #neogcamp #151daysofcode`;
  
    let finalMessage = encodeURIComponent(message);
  
    let twitterUrl = `https://twitter.com/intent/tweet?text=${finalMessage}`;
    window.open(twitterUrl, "_blank");
  });

  



