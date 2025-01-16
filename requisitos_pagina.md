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

Para estructurar tu hoja de cálculo de manera que puedas generar links únicos para cada grupo de invitados y listar a todos los integrantes de ese grupo en tu página web, puedes seguir estos pasos:

### Estructura de la Hoja de Cálculo

1. **Columna "Invitado"**: Nombre del invitado.
2. **Columna "Código de Invitación"**: Código único generado para el grupo de invitados.
3. **Columna "Grupo"**: Identificador único para el grupo de invitados (puede ser un número o un UUID).
4. **Columna "Parentesco"**: Relación del invitado con el grupo (opcional, pero puede ser útil).
5. **Columna "Estado"**: Estado de la confirmación (Confirmar, Rechazar, Pendiente).

Aquí tienes un ejemplo de cómo podría verse tu hoja de cálculo:

| Invitado       | Código de Invitación | Grupo | Parentesco | Estado   |
|----------------|----------------------|-------|------------|----------|
| Juan Pérez     | ABC123              | 1     | Padre      | Pendiente|
| María López    | ABC123              | 1     | Madre      | Pendiente|
| Carlos Pérez   | ABC123              | 1     | Hijo       | Pendiente|
| Laura Pérez    | ABC123              | 1     | Hija       | Pendiente|
| Ana Pérez      | ABC123              | 1     | Hija       | Pendiente|
| Pedro Gómez    | XYZ456              | 2     | Padre      | Pendiente|
| Sofía Gómez   | XYZ456              | 2     | Madre      | Pendiente|

### Generar Códigos de Invitación Únicos

Puedes generar códigos de invitación únicos utilizando UUIDs. Aquí tienes un ejemplo de cómo hacerlo en Google Apps Script:

```javascript
function generarUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function asignarCodigosDeInvitacion() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('NombreDeTuHoja');
  var data = sheet.getDataRange().getValues();
  var codigos = {};

  for (var i = 1; i < data.length; i++) { // Empezar desde 1 para saltar la fila de encabezado
    var grupo = data[i][2]; // Columna "Grupo"
    if (!codigos[grupo]) {
      codigos[grupo] = generarUUID();
    }
    sheet.getRange(i + 1, 2).setValue(codigos[grupo]); // Columna "Código de Invitación"
  }
}
```

### Modificar la Función `doGet` para Filtrar por Código de Invitación

Modifica la función `doGet` en Google Apps Script para filtrar los datos según el código de invitación:

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

### Consumir los Datos en tu Página Web

En tu página HTML, utiliza JavaScript para hacer una solicitud a la URL de la aplicación web que creaste en Google Apps Script, pasando el código de invitación como un parámetro en la URL:

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
    async function fetchInvitados(codigo) {
      const response = await fetch(`URL_DE_TU_APLICACIÓN_WEB?codigo=${codigo}`);
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

    // Obtener el código de invitación de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const codigoInvitacion = urlParams.get('codigo');

    if (codigoInvitacion) {
      fetchInvitados(codigoInvitacion);
    } else {
      document.getElementById('invitados').innerHTML = 'Código de invitación no válido.';
    }
  </script>
</body>
</html>
```

### Generar Links Únicos

Para generar links únicos para cada grupo de invitados, simplemente incluye el código de invitación en la URL. Por ejemplo:

```
https://tu-pagina-web.com/invitacion.html?codigo=ABC123
```

Con esta estructura, cada grupo de invitados tendrá un link único que les permitirá ver a todos los integrantes de su grupo y confirmar, rechazar o marcar su asistencia como pendiente.