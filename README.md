# Sistema de Registro y Sorteo – Amigo Secreto

Aplicación web sencilla para *registrar nombres* y *sortear un “amigo secreto”* sin repetir ganadores hasta agotar la lista.  
Proyecto enfocado en practicar *lógica de programación*.

## Funcionalidades

- *Agregar nombres* a una lista (evita vacíos y duplicados).
- *Visualizar* en pantalla los amigos añadidos.
- *Sortear* un amigo al azar, *sin repetir* hasta cubrir a todos.
- *Limpieza* automática del input tras cada registro.
- *Mensajes de estado* claros (validación, éxito, agotamiento de sorteos).

## Tecnologías 

- *HTML5* 
- *CSS3* 
- *JavaScript*

## Estructura sugerida del proyecto

> Puedes modificar nombres y carpetas a tu gusto. El código JS se los dejo en la capeta app.js.

## Comportamiento y reglas
- un nombre vacio o con solo espacios no se agrega
- un nombre duplicado no se agrega (Se le informa al usuario)
- En el sorteo no se repiten ganadores, cada persona solo puede ser sorteado una vez
- Al agotarse se informa "Ya se sortearon todos los nombres"
