var URL = 'http://localhost:5000/amigos';

let verAmigos = function () {
    $('#lista').empty();
    $.get(`${URL}`, function (friends) {
        friends.forEach(el => {
            $('#lista').append(`<li id="${el.id}">${el.name} <button onclick="eliminarAmigo(${el.id})">X</button></li>`);
        });

    })
};

let buscarAmigo = function () {
    let id = $('#input').val();
    if (id) {
        $.get(`${URL}/${id}`, function (friend) {
            $('#amigo').text("");
            $('#amigo').text(`${friend.name} ${friend.age} ${friend.email}`);
            $('#input').val("")
        })
    }else{
        $('#amigo').text("Debe ingresar un id");
    }

};

let eliminarAmigo = function(idCruz){
    let id;
    if (typeof idCruz === 'number') {
        id = idCruz;
    }else{
        id = $('#inputDelete').val();
    }
    let friend;
    if (id) {
        $.get(`${URL}/${id}`, function (f) {
            friend = f;
        });
        $.ajax({
            url: `${URL}/${id}`,
            type: 'DELETE',
            success: function() {
                $('#success').text(`Tu amigo, ${friend.name} fue eliminado`);
                $('#inputDelete').val("");
                verAmigos();
            }
        });
    }else{
        $('#success').text("Debe ingresar un id");
    }
}


$('#boton').click(verAmigos);
$('#search').click(buscarAmigo);
$('#delete').click(eliminarAmigo);