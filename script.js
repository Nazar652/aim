let score = 0;

let activeSquare;

let scoreText = document.getElementById("score");


function getRandomCell() {
    let x = Math.floor(Math.random() * 5).toString();
    let y = Math.floor(Math.random() * 5).toString();
    let cell = $("#" + x + y);
    return cell;
}

function nextMove() {
    let cell = getRandomCell();
    cell.css("background-color", "blue");
    cell.addClass("active"); 
}

$(function() {
    $(".cell").on("click", function() {
        let cell = $(this);
        if (cell.hasClass("active")) {
            score++;
            cell.css("background-color", "white");
            cell.removeClass("active");
            scoreText.innerHTML = score;
            nextMove();
        } else {
            // TODO кінець гри
        }
    });
})

nextMove();



