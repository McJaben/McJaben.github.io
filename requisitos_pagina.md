## Lo que debe tener la página
[ x ] Home: Boda ByB + fecha + horario
[ x ] Ubicación: Dirección y link a Google Maps.
[ x ] Frase.
[  ] Fotos de bebés.
[ x ] Fotos del compromiso.
[  ] Lista de regalos + CBU/CVU.
[  ] Componente Confirmación.
[ x ] fix de fondo principal cortándose en mobile.
[ x ] fix de sección de regalos encimándose en el mapa en mobile.

// Falta RSVP.

Para entender cómo funciona la clase que envía el mail
https://developers.google.com/apps-script/reference/mail/mail-app?hl=es-419

// Posible solución para traer datos de Google Sheets:

Sí, es posible traer datos de Google Sheets y mostrarlos en tu página web utilizando Google Apps Script. Puedes crear una función en Google Apps Script que lea los datos de tu hoja de cálculo y los devuelva en formato JSON, que luego puedes consumir en tu página web utilizando JavaScript.

Aquí tienes una guía paso a paso para lograrlo:

### Paso 1: Configurar Google Apps Script

1. **Abre tu Google Sheets** y ve a `Extensiones` > `Apps Script`.
2. **Crea una nueva función** en el editor de Apps Script para leer los datos de la hoja de cálculo. Aquí tienes un ejemplo de cómo hacerlo:

```javascript
function doGet(e) {
  var sheet = SpreadsheetApp.openById('TU_ID_DE_HOJA_DE_CÁLCULO').getSheetByName('NombreDeTuHoja');
  var data = sheet.getDataRange().getValues();
  var json = JSON.stringify(data);
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}
```

3. **Despliega tu script como una aplicación web**:
   - Ve a `Publicar` > `Desplegar como aplicación web`.
   - Configura los permisos y obtén la URL de la aplicación web.

### Paso 2: Consumir los datos en tu página web

1. **En tu página HTML**, utiliza JavaScript para hacer una solicitud a la URL de la aplicación web que creaste en Google Apps Script. Aquí tienes un ejemplo de cómo hacerlo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Invitación de Boda</title>
</head>
<body>
  <div id="invitados"></div>

  <script>
    async function fetchInvitados() {
      const response = await fetch('URL_DE_TU_APLICACIÓN_WEB');
      const data = await response.json();
      mostrarInvitados(data);
    }

    function mostrarInvitados(data) {
      const invitadosDiv = document.getElementById('invitados');
      data.forEach(invitado => {
        const invitadoDiv = document.createElement('div');
        invitadoDiv.innerHTML = `
          <p>${invitado[0]}</p>
          <select>
            <option value="confirmar">Confirmar</option>
            <option value="rechazar">Rechazar</option>
            <option value="pendiente">Pendiente</option>
          </select>
        `;
        invitadosDiv.appendChild(invitadoDiv);
      });
    }

    fetchInvitados();
  </script>
</body>
</html>
```

### Paso 3: Generar y validar el código de invitación

1. **Genera un código de invitación** para cada invitado en tu hoja de cálculo.
2. **Valida el código de invitación** en tu página web antes de mostrar los datos de los invitados. Puedes hacer esto modificando la función `doGet` en Google Apps Script para filtrar los datos según el código de invitación.

Aquí tienes un ejemplo de cómo podrías modificar la función `doGet` para filtrar por código de invitación:

```javascript
function doGet(e) {
  var sheet = SpreadsheetApp.openById('TU_ID_DE_HOJA_DE_CÁLCULO').getSheetByName('NombreDeTuHoja');
  var data = sheet.getDataRange().getValues();
  var codigoInvitacion = e.parameter.codigo;
  var invitadosFiltrados = data.filter(row => row[1] === codigoInvitacion); // Suponiendo que el código de invitación está en la columna B
  var json = JSON.stringify(invitadosFiltrados);
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}
```

Y en tu página web, puedes pasar el código de invitación como un parámetro en la URL:

```html
<script>
  async function fetchInvitados(codigo) {
    const response = await fetch(`URL_DE_TU_APLICACIÓN_WEB?codigo=${codigo}`);
    const data = await response.json();
    mostrarInvitados(data);
  }

  // Llama a la función con el código de invitación
  fetchInvitados('CODIGO_DE_INVITACIÓN');
</script>
```

Con estos pasos, deberías poder traer los datos de los invitados desde Google Sheets y mostrarlos en tu página web, permitiendo a los invitados confirmar, rechazar o marcar su asistencia como pendiente.