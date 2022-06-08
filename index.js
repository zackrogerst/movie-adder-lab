
function addMovie(event) {
    event.preventDefault();
    let inputField = document.querySelector("input");
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span");
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

const deleteMovie = event => event.target.parentNode.remove()

const crossOffMovie = event => event.target.classList.toggle("checked");

document.querySelector("form").addEventListener("submit", addMovie);
