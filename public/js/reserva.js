var url = 'http://localhost/';
var label_lugar="";
function listado_lugares() {

    var row = [
        {
            "id": 1,
            "label": "Pardos Chicken Aeropuerto",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-aeropuerto",
            "slug": "pardos-chicken-aeropuerto",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 2,
            "label": "Pardos Chicken Bellavista",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-bellavista",
            "slug": "pardos-chicken-bellavista",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 3,
            "label": "Pardos Chicken Benavides",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-benavides",
            "slug": "pardos-chicken-benavides",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 4,
            "label": "Pardos Chicken Caminos del Inca",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-caminos-del-inca",
            "slug": "pardos-chicken-caminos-del-inca",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 5,
            "label": "Pardos Chicken Canadá",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-canada",
            "slug": "pardos-chicken-canada",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 6,
            "label": "Pardos Chicken Centro Cívico",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-centro-civico",
            "slug": "pardos-chicken-centro-civico",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 7,
            "label": "Pardos Chicken Centro Histórico de Lima",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-centro-historico-de-lima",
            "slug": "pardos-chicken-centro-historico-de-lima",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 8,
            "label": "Pardos Chicken Chiclayo",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-chiclayo",
            "slug": "pardos-chicken-chiclayo",
            "check_delivery": 1,
            "province": null
        },
        {
            "id": 9,
            "label": "Pardos Chicken Chorrillos",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-chorrillos",
            "slug": "pardos-chicken-chorrillos",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 10,
            "label": "Pardos Chicken Garzón",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-garzon",
            "slug": "pardos-chicken-garzon",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 11,
            "label": "Pardos Chicken Jockey Plaza",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-jockey-plaza",
            "slug": "pardos-chicken-jockey-plaza",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 12,
            "label": "Pardos Chicken La Molina",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-la-molina",
            "slug": "pardos-chicken-la-molina",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 13,
            "label": "Pardos Chicken Larcomar",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-larcomar",
            "slug": "pardos-chicken-larcomar",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 15,
            "label": "Pardos Chicken Mall Aventura Plaza Trujillo",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-trujillo",
            "slug": "pardos-chicken-trujillo",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 16,
            "label": "Pardos Chicken MegaPlaza",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-mega-plaza",
            "slug": "pardos-chicken-mega-plaza",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 17,
            "label": "Pardos Chicken Piura",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-open-plaza-piura",
            "slug": "pardos-chicken-open-plaza-piura",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 18,
            "label": "Pardos Chicken Plaza San Martín",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-plaza-san-martin",
            "slug": "pardos-chicken-plaza-san-martin",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 19,
            "label": "Pardos Chicken Plaza San Miguel",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-plaza-san-miguel",
            "slug": "pardos-chicken-plaza-san-miguel",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 20,
            "label": "Pardos Chicken Pueblo Libre",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-pueblo-libre",
            "slug": "pardos-chicken-pueblo-libre",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 21,
            "label": "Pardos Chicken Real Plaza Primavera",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-real-plaza-primavera",
            "slug": "pardos-chicken-real-plaza-primavera",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 22,
            "label": "Pardos Chicken Royal Plaza",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-royal-plaza",
            "slug": "pardos-chicken-royal-plaza",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 23,
            "label": "Pardos Chicken Salaverry",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-salaverry",
            "slug": "pardos-chicken-salaverry",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 24,
            "label": "Pardos Chicken San Borja",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-san-borja",
            "slug": "pardos-chicken-san-borja",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 25,
            "label": "Pardos Chicken San Isidro",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-san-isidro",
            "slug": "pardos-chicken-san-isidro",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 26,
            "label": "Pardos Chicken San Juan de Lurigancho",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-san-juan-de-lurigancho",
            "slug": "pardos-chicken-san-juan-de-lurigancho",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 27,
            "label": "Pardos Chicken San Miguel",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-san-miguel",
            "slug": "pardos-chicken-san-miguel",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 28,
            "label": "Pardos Chicken Santa Anita",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-santa-anita",
            "slug": "pardos-chicken-santa-anita",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 29,
            "label": "Pardos Chicken Santa Cruz",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-santa-cruz",
            "slug": "pardos-santa-cruz",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 30,
            "label": "Pardos Chicken Surco",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-surco",
            "slug": "pardos-chicken-surco",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 31,
            "label": "Pardos Chicken Surquillo",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-surquillo",
            "slug": "pardos-chicken-surquillo",
            "check_delivery": 0,
            "province": null
        },
        {
            "id": 32,
            "label": "Pardos Chicken Trujillo Real Plaza",
            "value": "https://www.pardoschicken.pe/restaurantes/pardos-chicken-trujillo-real-plaza",
            "slug": "pardos-chicken-trujillo-real-plaza",
            "check_delivery": 0,
            "province": null
        }

    ];
    var source =
    {
        localdata: row,
        datatype: "array"
    };

    var dataAdapter = new $.jqx.dataAdapter(source);
    $("#combo_lugares").jqxDropDownList({ source: dataAdapter, displayMember: "id", valueMember: "label", placeHolder: "Seleccione Lugar", width: '100%', height: 30 });
}
$("#reservar").on('click', function () {
    reservar();
});
$("#distrito").on('change',function(event){
    label_lugar="";
    if (event.args) {
        var item = event.args.item;
        if (item) {
            ot_2 = item.value;
            label_lugar = item.label;
        }
    }
})
function reservar() {
    $.ajax({
        type: 'POST',
        url: 'http://localhost/PardosChicken/public/api/crearreserva',
        dataType: 'json',
        data: {
            varNom:$("#nombre").val(),
            varApe:$("#apellidos").val(),
            varEmai:$("#mail").val(),
            intTel:parseInt($("#telefono").val()),
            dateRes:$("#fecha").val(),
            timeRes:$("#hora").val(),
            varLugar:label_lugar,
            intCant:parseInt($("#personas").val()),
            varCom:$("#comentarios").val(),
        },
        error: function (xhr, ajaxOptions, thrownError) {
        },
        success: function (responses) {

        }
    });
}
$("#verificarreservar").on('click', function () {
    $("#lista_errores").html('');
    $.ajax({
        type: 'POST',
        url: 'http://localhost/PardosChicken/public/api/verificarreserva',
        dataType: 'json',
        data: {
            varNom: $("#nombre").val(),
            varApe: $("#apellidos").val(),
            varCodeReserva: $("#codigo").val(),

        },
        error: function (xhr, ajaxOptions, thrownError) {
        },
        success: function (responses) {
            if (responses.errores.length > 0) {

                var lista = "";
                for (var i = 0; responses.errores.length > i; i++) {
                    lista += '<li>' + responses.errores[i] + '</li>';
                    $("#lista_errores").append(lista);
                }
                $("#lista_errores").html(lista);
            } else {
                $("#lista_errores").html('');
                if (responses.mensaje.length > 0) {
                    Swal.fire(
                        'El estado de su reserva',
                        responses.mensaje[0]['varEstado'],
                        'success'
                    )
                    $("#nombre").val('');
                    $("#apellidos").val('');
                    $("#codigo").val('');
                } else {
                    $("#nombre").val('');
                    $("#apellidos").val('');
                    $("#codigo").val('');
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No cuenta con una reserva',
                        footer: '<a href>¿Desea Reservar?</a>'
                    })
                }

            }
        }
    });
});