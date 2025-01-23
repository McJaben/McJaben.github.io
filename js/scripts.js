$(document).ready(function () {

    /***************** Waypoints ******************/

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide"
    });

    /***************** Initiate Fancybox ******************/

    $('.single_image').fancybox({
        padding: 4
    });

    $('.fancybox').fancybox({
        padding: 4,
        width: 1000,
        height: 800
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /***************** Header BG Scroll ******************/

    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $('section.navigation').addClass('fixed');
                $('header').css({
                    "border-bottom": "none",
                    "padding": "6px 0"
                });
                $("header .member-actions").css({ top: "35px" }),
                $('header .navicon').css({
                    "top": "34px",
                });
            } else {
                $('section.navigation').removeClass('fixed');
                $('header').css({
                    "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                    "padding": "20px 0"
                });
                $("header .member-actions").css({ top: "50px" }),
                $('header .navicon').css({
                    "top": "48px",
                });
            }
        });
    });
    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 110
                    }, 2000);
                    return false;
                }
            }
        });

    });

    /*********************** Contador  *************************************/
    // Fecha de la boda (configúrala)
    var fechaBoda = new Date("2025-03-09T12:00:00").getTime();
    var Dias = document.getElementById('days');
    var Horas = document.getElementById('hours');
    var Minutos = document.getElementById('minutes');
    var Segundos = document.getElementById('seconds');

    function actualizarCuentaAtras() {
      var ahora = new Date().getTime();
      var diferencia = fechaBoda - ahora;

      if (diferencia < 0) {
        document.getElementById("contador").innerText = "¡Felicidades, hoy es el día de la boda! 🎉";
        return;
      }

      // Calcular días, horas, minutos y segundos
      var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

      // Mostrar el resultado
      Dias.innerHTML = dias;
      Horas.innerHTML = horas;
      Minutos.innerHTML = minutos;
      Segundos.innerHTML = segundos;
      
    }

    // Actualizar cada segundo
    setInterval(actualizarCuentaAtras, 1000);

    // /********************** Social Share buttons ***********************/
    // var share_bar = document.getElementsByClassName('share-bar');
    // var po = document.createElement('script');
    // po.type = 'text/javascript';
    // po.async = true;
    // po.src = 'https://apis.google.com/js/platform.js';
    // var s = document.getElementsByTagName('script')[0];
    // s.parentNode.insertBefore(po, s);

    // for (var i = 0; i < share_bar.length; i++) {
    //     var html = '<iframe allowtransparency="true" frameborder="0" scrolling="no"' +
    //         'src="https://platform.twitter.com/widgets/tweet_button.html?url=' + encodeURIComponent(window.location) + '&amp;text=' + encodeURIComponent(document.title) + '&amp;via=ramswarooppatra&amp;hashtags=ramandantara&amp;count=horizontal"' +
    //         'style="width:105px; height:21px;">' +
    //         '</iframe>' +

    //         '<iframe src="//www.facebook.com/plugins/like.php?href=' + encodeURIComponent(window.location) + '&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21&amp;appId=101094500229731&amp;width=150" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:150px; height:21px;" allowTransparency="true"></iframe>' +

    //         '<div class="g-plusone" data-size="medium"></div>';

    //     // '<iframe src="https://plusone.google.com/_/+1/fastbutton?bsv&amp;size=medium&amp;url=' + encodeURIComponent(window.location) + '" allowtransparency="true" frameborder="0" scrolling="no" title="+1" style="width:105px; height:21px;"></iframe>';

    //     share_bar[i].innerHTML = html;
    //     share_bar[i].style.display = 'inline-block';
    // }

    // /********************** Embed youtube video *********************/
    // $('.player').YTPlayer();


    /********************** Toggle Map Content **********************/
    $('#btn-show-map').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });
    $('#btn-show-content').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });

    /********************** Add to Calendar **********************/
    // var myCalendar = createCalendar({
    //     options: {
    //         class: '',
    //         // You can pass an ID. If you don't, one will be generated for you
    //         id: ''
    //     },
    //     data: {
    //         // Event title
    //         title: "Boda de Brisa y Benja",

    //         // Event start date
    //         start: new Date('March 09, 2025 12:00'),

    //         // Event duration (IN MINUTES)
    //         // duration: 120,

    //         // You can also choose to set an end time
    //         // If an end time is set, this will take precedence over duration
    //         // end: new Date('March 09, 2025 20:00'),

    //         // Event Address
    //         address: 'Olascoaga y Percy Clark, Plottier, Neuquén',

    //         // Event Description
    //         description: "¡No podemos esperar a verte en nuestro gran día!"
    //     }
    // });

    // $('#add-to-cal').html(myCalendar);

      


    /********************** RSVP **********************/
    // $('#rsvp-form').on('submit', function (e) {
    //     e.preventDefault();
    //     var data = $(this).serialize();

    //     $('#alert-wrapper').html(alert_markup('info', '<strong>¡Espere un segundo!</strong> Estamos guardando los detalles.'));

    //     if (MD5($('#invite_code').val()) !== 'b0e53b10c1f55ede516b240036b88f40'
    //         && MD5($('#invite_code').val()) !== '2ac7f43695eb0479d5846bb38eec59cc') {
    //         $('#alert-wrapper').html(alert_markup('danger', '<strong>¡Disculpas!</strong> Su código de invitado es incorrecto.'));
    //     } else {
    //         $.post('https://script.google.com/macros/s/AKfycbyo0rEknln8LedEP3bkONsfOh776IR5lFidLhJFQ6jdvRiH4dKvHZmtoIybvnxpxYr2cA/exec', data)
    //             .done(function (data) {
    //                 console.log(data);
    //                 if (data.result === "error") {
    //                     $('#alert-wrapper').html(alert_markup('danger', data.message));
    //                 } else {
    //                     $('#alert-wrapper').html('');
    //                     $('#rsvp-modal').modal('show');
    //                 }
    //             })
    //             .fail(function (data) {
    //                 console.log(data);
    //                 $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. '));
    //             });
    //     }
    // });

});

/********************** Extras **********************/

// // Google map
// function initMap() {
//     var location = {lat: -38.950136807251646, lng: -68.25136732002765};
//     // -38.950136807251646, -68.25136732002765
//     var map = new google.maps.Map(document.getElementById('map-canvas'), {
//         zoom: 15,
//         center: location,
//         scrollwheel: false
//     });

//     var marker = new google.maps.Marker({
//         position: location,
//         map: map
//     });
// }

// function initBBSRMap() {
//     var la_fiesta = {lat: -38.950136807251646, lng: -68.25136732002765};
//     var map = new google.maps.Map(document.getElementById('map-canvas'), {
//         zoom: 15,
//         center: la_fiesta,
//         scrollwheel: false
//     });

//     var marker = new google.maps.Marker({
//         position: la_fiesta,
//         map: map
//     });
// }

/***************** Confirmaciones de invitación ********************/
// // Muestro los invitados en el HTML
// function renderInvitados(invitados) {
//     var container = document.getElementById("invitados-container");
//     container.innerHTML = ""; // Limpia el contenido previo
  
//     invitados.forEach((invitado) => {
//       var row = document.createElement("div");
//       row.innerHTML = `
//         <p>${invitado.invitado} (Grupo: ${invitado.grupo})</p>
//         <button onclick="updateConfirmacion('${invitado.id}', 'Confirmado')">Confirmar asistencia</button>
//         <button onclick="updateConfirmacion('${invitado.id}', 'No asistirá')">Confirmar inasistencia</button>
//         <button onclick="updateConfirmacion('${invitado.id}', 'Pendiente')">Marcar como pendiente</button>
//       `;
//       container.appendChild(row);
//     });
// }

// // Función para mostrar los invitados en una tabla
// function renderInvitados(invitados) {
//     const container = document.getElementById("invitados-container");
//     container.innerHTML = ""; // Limpia el contenido previo
  
//     // Crear la tabla
//     const table = document.createElement("table");
//     table.className = "table table-striped";

//     // Crear encabezados
//     table.innerHTML = `
//         <thead>
//             <tr>
//                 <th>Invitado</th>
//                 <th>Grupo</th>
//                 <th>Confirmación</th>
//             </tr>
//         </thead>
//         <tbody>
//         </tbody>
//     `;

//     const tbody = table.querySelector("tbody");

//     // Crear una fila por cada invitado
//     invitados.forEach((invitado) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${invitado.invitado}</td>
//             <td>${invitado.grupo}</td>
//             <td>
//                 <select onchange="updateConfirmacion('${invitado.id}', this.value)">
//                     <option value="" disabled selected>Selecciona una opción</option>
//                     <option value="Confirmado">Confirmado</option>
//                     <option value="No asistirá">No asistirá</option>
//                     <option value="Pendiente">Pendiente</option>
//                 </select>
//             </td>
//         `;
//         tbody.appendChild(row);
//     });

//     container.appendChild(table);
// }
  
// // Envío solicitud POST a Google Scripts para registrar las confirmaciones
// async function updateConfirmacion(id, confirmacion) {
//     if (!confirmacion) return;
//     var codigoInvitacion = getInviteCodeFromURL();
//     var url = `https://script.google.com/macros/s/AKfycbxGdA8ynY_IuDD7q4F7yVjpWnI3e-d1iAdSZkypWYihCkihxnokN98iEefmTbGEZ9_V/exec`;
//     var response = await fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: new URLSearchParams({
//         codigo_invitacion: codigoInvitacion,
//         id: id,
//         confirmacion: confirmacion
//       })
//     });
  
//     var data = await response.json();
//     if (data.result === "success") {
//     //   alert("Confirmación actualizada correctamente.");
//       $('#alert-wrapper').html('');
//       $('#rsvp-modal').modal('show');
//       location.reload(); // Refresca la página para mostrar los cambios
//     } else {
//       alert(data.message);
//     }
//   }

    // Primero obtengo el código de invitación de la URL
    function getInviteCodeFromURL() {
        var params = new URLSearchParams(window.location.search);
        return params.get("codigo_invitacion");
    }
    
    // Consumo el endpoint de la API para listar los invitados
    async function fetchInvitados(codigoInvitacion) {
        var url = `https://script.google.com/macros/s/AKfycbxGdA8ynY_IuDD7q4F7yVjpWnI3e-d1iAdSZkypWYihCkihxnokN98iEefmTbGEZ9_V/exec?codigo_invitacion=${codigoInvitacion}`;
        var response = await fetch(url);
        var data = await response.json();
      
        if (data.result === "success") {
          return data.invitados;
        } else {
          alert(data.message);
          return [];
        }
    }
    

    // Función para mostrar los invitados con radio buttons
    function renderInvitados(invitados) {
        const container = document.getElementById("invitados-container");
        container.innerHTML = ""; // Limpia el contenido previo
        
        // Crear la tabla
        const table = document.createElement("table");
        // table.className = "table table-striped";
        table.className = "table styled-table";

        // Crear encabezados
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Invitado</th>
                    <th>Confirmación</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;

        const tbody = table.querySelector("tbody");

        // Crear una fila por cada invitado con opciones de radio
        invitados.forEach((invitado, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${invitado.invitado}</td>
                <td>
                    <div class="form-check">
                        <input type="radio" name="confirmacion-${index}" value="Confirmado" id="confirmado-${index}" class="form-check-input">
                        <label for="confirmado-${index}" class="form-check-label">Asistirá</label>
                    </div>
                    <div class="form-check">
                        <input type="radio" name="confirmacion-${index}" value="No asistirá" id="no-asistira-${index}" class="form-check-input">
                        <label for="no-asistira-${index}" class="form-check-label">No asistirá</label>
                    </div>
                    <div class="form-check">
                        <input type="radio" name="confirmacion-${index}" value="Pendiente" id="pendiente-${index}" class="form-check-input" checked>
                        <label for="pendiente-${index}" class="form-check-label">Pendiente</label>
                    </div>
                </td>
            `;
            row.setAttribute("data-id", invitado.id);
            tbody.appendChild(row);
        });

        container.appendChild(table);

        // Mostrar el botón de "Enviar respuestas"
        document.getElementById("submit-confirmation").style.display = "block";
        document.getElementById("submit-confirmation").addEventListener("click", () => {
            Swal.fire({
                title: '¿Estás seguro?',
                text: "Se guardarán tus respuestas y se dará aviso a los novios.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#e28d7a',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, enviar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Aquí ejecutas el envío de las respuestas
                    submitConfirmations(); // Asegúrate de tener esta función definida
                } else {
                    Swal.fire({
                        title: 'Cancelado',
                        text: 'Tus respuestas no han sido enviadas.',
                        icon: 'cancel'
                    });
                }
            });
        });
        
    }

    // Función para enviar todas las confirmaciones
    async function submitConfirmations() {
        const codigoInvitacion = getInviteCodeFromURL();
        const rows = document.querySelectorAll("#invitados-container tr");
        const url = `https://script.google.com/macros/s/AKfycbxGdA8ynY_IuDD7q4F7yVjpWnI3e-d1iAdSZkypWYihCkihxnokN98iEefmTbGEZ9_V/exec`;
        const updates = [];

        // Recorre todas las filas y recoge los valores seleccionados
        rows.forEach((row) => {
            const id = row.getAttribute("data-id");
            const selectedOption = row.querySelector("input[type='radio']:checked");
            const confirmacion = selectedOption ? selectedOption.value : "Pendiente";
            if (id) {
                updates.push(
                    fetch(url, {
                        method: "POST",
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: new URLSearchParams({
                            codigo_invitacion: codigoInvitacion,
                            id: id,
                            confirmacion: confirmacion
                        })
                    }).then((response) => response.json())
                );
            }
        });

        // Espera a que se completen todas las solicitudes
        const results = await Promise.all(updates);
        if (results.every((res) => res.result === "success")) {
            Swal.fire({
                title: '¡Listo!',
                text: 'Tus confirmaciones han sido enviadas con éxito.',
                icon: 'success',
                confirmButtonColor: '#e28d7a',
                confirmButtonText: 'Ok',
            }).then((result) => {
                if (result.isConfirmed) {
                    const heartIcon = 
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" fill="currentColor"/></svg>';
                    Swal.fire({
                        title: '¡Gracias!',
                        iconHtml: heartIcon,
                        iconColor: '#e28d7a',
                        confirmButtonColor: '#d17b68',
                        timer: 3500,
                    });
                }
                // setTimeout(3000);
                // location.reload();
            });

            // alert("Confirmaciones enviadas correctamente.");
            // location.reload();
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema con algunas confirmaciones. Por favor, intenta de nuevo.',
                icon: 'error'
            });
            // alert("Hubo un problema con algunas confirmaciones. Por favor, intenta de nuevo.");
        }
    }

// var Swal = require('sweetalert2');

// // alert_markup
// function alert_markup(alert_type, msg) {
//     return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
// }

// MD5 Encoding
var MD5 = function (string) {

    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }

    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    }

    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }

    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }

    function H(x, y, z) {
        return (x ^ y ^ z);
    }

    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }

    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    };

    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    };

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    };

    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;

    string = Utf8Encode(string);

    x = ConvertToWordArray(string);

    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;

    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }

    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);

    return temp.toLowerCase();
};