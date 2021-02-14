const getJokesBtn = document.querySelector('.get-jokes');
const outputJokes = document.querySelector('.jokes');

getJokesBtn.addEventListener('click', getJokes);

function getJokes(e) {
    let output = '';
    const numberOfJokes = document.getElementById('number').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);
    xhr.onload = function() {
        if (this.status === 200 && this.readyState === 4) {
            const response = JSON.parse(this.responseText);
            response.value.forEach(function(joke, index) {
                output += `<li>${joke.joke}</li><hr>`;
            });
        } else {
            output += 'Something Went Wrong ...';
        }
        outputJokes.innerHTML = output;
    }
    xhr.send();
    e.preventDefault();
}