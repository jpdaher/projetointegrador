function trocarLike() {
    var likeImagem = document.getElementById("like");
    if (likeImagem.src.endsWith("like_desativado.png")) {
        likeImagem.src = "like.png";
    } else {
        likeImagem.src = "like_desativado.png";
    }
}

function trocarLike2() {
    var likeImagem = document.getElementById("like2");
    if (likeImagem.src.endsWith("like_desativado.png")) {
        likeImagem.src = "like.png";
    } else {
        likeImagem.src = "like_desativado.png";
    }
}