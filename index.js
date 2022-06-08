
let message = document.querySelector("#message");

function addMovie(event) {
    event.preventDefault();
    let inputField = document.querySelector("input");
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span");

    if (inputField.value === "" || inputField.value === " ") {
        message.textContent = `"${inputField.value}" is not a valid entry`;
        revealMessage()
    } else {
        movieTitle.textContent = inputField.value;
        movieTitle.addEventListener("click", crossOffMovie)
        movie.appendChild(movieTitle);
    
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.addEventListener("click", deleteMovie);
        movie.appendChild(deleteBtn);
    
        document.querySelector("ul").appendChild(movie);
        inputField.value = "";
    }
}

const deleteMovie = event => {
    event.target.parentNode.remove();
    // message.textContent = `${event.target.parentNode.childNodes[0].textContent} Deleted`;
    message.textContent = `"${event.target.parentNode.firstChild.textContent}" deleted`;
    revealMessage()
}

const crossOffMovie = event => {
    event.target.classList.toggle("checked");
    if (event.target.classList.contains("checked")) {
        message.textContent = `Marked "${event.target.textContent}" as watched`;
    } else {
        message.textContent = `Marked "${event.target.textContent}" as un-watched`;
    }

    revealMessage()
}

document.querySelector("form").addEventListener("submit", addMovie);



function revealMessage() {
    message.classList.remove('hide');
    setTimeout(() => {
        message.classList.add('hide');
    }, '1500')
}