# TET Proyecto 1

### 4. ¿Qué tecnologías de desarrollo utilizó?

- #### 4.1. ¿En el backend?
> NodeJS, Express, MongoDB

- #### 4.2. ¿En el frontend?
> Vue, Buefy (Bulma)

### 5. ¿Cuáles son y cuál es la especificación de los servicios API REST del backend?
> El backend cuenta con 5 servicios API REST los cuales son:
>
> - POST /api/users/ --> Para crear un usuario. Acceso público.
> - GET /api/users/:id --> Para acceder a la información de un usuario. Acceso privado.
> - DELETE /api/users/:id --> Para eliminar. Acceso privado.
> - POST /api/users/:id/data --> Crear una entrada en en los datos del usuario. Accesso privado.


### 6. ¿Cómo realizó la autenticación de los servicios API REST?
> Todavía no hay.

### 7. ¿Cuáles son las principales dificultades que tuvo al desarrollar el proyecto?
> Principalmente se dio en elementos de desarrollo web, tanto en el backend como en el frontend, con los que no tenía familiaridad ya que no había necesitado de ellos en el pasado. Estos se explican en los siguientes numerales.

- #### 7.1. ¿Por desconocimiento de la tecnología?
> Manejar el estado en Vue con Vuex y combinarlo con Vue Router. Cuando se hacía algún cambio en la URL los contenidos no actializaban de acuerdo a lo que había en la *store*, lo cual tomó un tiempo para entender completamente su funcionamiento y arreglarlo.

- #### 7.2. ¿Qué conceptos o fundamentos no sabe para poder desarrollar este proyecto?
> Hasta ahora sólo había trabajado con una contraseña hasheada para seguridad con usuarios, nunca había tenido que poner seguridad en los servicios REST API o realizar autenticación con tokens.

- #### 7.3. ¿Qué habilidades de desarrollo le faltan para poder terminar el proyecto?
> Autenticación.

- #### 7.4. ¿Qué otras cosas le faltó para poder desarrollar el proyecto?
> Sin contar la anterior diría que ninguna.
