# Torneos de Padel App

Aplicación para facilitar la gestión y creación de los torneos de padel.

NOTA: Falta estilizar. ¿Qué colores seerán los propios de esta aplicación? Estos colores, junto con tamaños de fuente y cosas estándar, ¿los ponemos todos en un mismo fichero?

## Development

`npm start`
`expo start -a`

## Componentes

### Common

_HomeButton_
Botón de navegación estándar, usado para ver los torneos activos o para unirse a uno.

_Tag_
Componente usado para reflejar a los participantes de un torneo de una manera estilizada.

- Si estamos en modo edición de torneo, estas tags tendrán un botón/icono de una papelera para poder eliminarlo de manera sencilla.

_FuncButton_
Botón estilizado con una funcionalidad específica.

_NavigationButton_
Botón de navegación entre "formularios" de creación.

_SeeTournament_
Botón de navegación para ver mis torneos activos.

_Modal_
Modal que aparece al clickar determinados botones. Actualmente este modal está para poder meter participantes en parejas. El algoritmo que ejecutará este componente está por definir.

### Home

_Home_
Componente principal de HomeScreen. Desde aquí podrás navegar a distintos componentes. Este componente deberá ser actualizado cuando haya más clientes, ya que hasta que no haya muchos torneos públicos activos, no tiene sentido poner el botón de ver más torneos (aunque este botón lo mantenemos en la versión DEV para ver placeholders).

_Tournaments_
Componente donde se listan todos los torneos activos de un mismo usuario. Este componente hará llamadas a la API para recibir todos los datos relacionados con este usuario.

- Si el usuario no ha creado ningún torneo, pondrá un texto como el siguiente: "¡Todavía no has creado ningún torneo! Clicka 'aquí' para comenzar uno ahora".
- Para que no haya "user interference", habrá un loadder mientras se cargan todos los torneos (TODO: poner un elemento animado típico).

_TournamentDetails_
Componente que muestra los detalles del torneo clickado. ¿Llamará a la API o con la llamada del componente anterior ya tenemos todo? -> Hay que estudiarlo.

## Screens

_Home_
Pantalla principal de la aplicación. Aquí el usuario podrá:

- unirse a torneos
- crear Torneos
- ver torneos públicos activos

_Add_
Pantalla para crear tu propio torneo

_User_
Pantalla para ver tu usuario y las preferencias

## Insights

- Como me dijo Sergio -> quizá facilitar el contacto de las ONGs que quieren hacer torneos solidarios, ponerlos en contacto con los ayuntamientos (en Pozuelo, el propio ayuntamiento financia las pistas que se utilizan) -> ¿qué requisitos piden? INVESTIGAR
