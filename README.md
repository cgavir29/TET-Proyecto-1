# TET Proyecto 1

### 4. ¿Qué tecnologías de desarrollo utilizó?
> Se utilizo un conjunto de frameworks, los primeros se mencionan en el numeral *4.1* y *4.2*. No obstante para que todo funcionara adecuadamente tambien fueron usadas bibliotecas como *cors, mongoose, config, bcrypt y jsonwebtoken*.

- #### 4.1. ¿En el backend?
> NodeJS, Express, MongoDB Atlas.

- #### 4.2. ¿En el frontend?
> Vue, Buefy (Bulma).

### 5. ¿Cuáles son y cuál es la especificación de los servicios REST API del backend?
> El backend cuenta con 4 servicios API REST los cuales son:
>
> - POST /api/users/ --> Para crear un usuario. Acceso público.
> - GET /api/users/ --> Para acceder a la información de un usuario. Acceso privado.
> - DELETE /api/users/ --> Para eliminar la cuenta. Acceso privado.
> - POST /api/users/data --> Crear una entrada en en los datos del usuario. Accesso privado.

### 6. ¿Cómo realizó la autenticación de los servicios REST API?
> La autenticación de los REST API se desarrolló utilizando JWT, donde sólo se encripta el *id* para acceder a estos de forma más sencilla, 

### 7. ¿Cuáles son las principales dificultades que tuvo al desarrollar el proyecto?
> Principalmente se dio en elementos de desarrollo web, tanto en el backend como en el frontend, con los que no tenía familiaridad ya que no había necesitado de ellos en el pasado. Estos se explican en los siguientes numerales.

- #### 7.1. ¿Por desconocimiento de la tecnología?
> Manejar el estado en Vue con Vuex y combinarlo con Vue Router. Cuando se hacía algún cambio en la URL los contenidos no actializaban de acuerdo a lo que había en la *store*, lo cual tomó un tiempo para entender completamente su funcionamiento y arreglarlo.

- #### 7.2. ¿Qué conceptos o fundamentos no sabe para poder desarrollar este proyecto?
> Hasta ahora sólo había trabajado con una contraseña hasheada para seguridad con usuarios, nunca había tenido que poner seguridad en los servicios REST API o realizar autenticación con tokens.

- #### 7.3. ¿Qué habilidades de desarrollo le faltan para poder terminar el proyecto?
> conociendo más sobre la forma de asegurar servicios web se podría haber hecho una apliación más segura. 

- #### 7.4. ¿Qué otras cosas le faltó para poder desarrollar el proyecto?
> Diría que los objetivos de la actividad se lograron, sin embargo, hay cosas que se pueden mejorar, por ejemplo, los tokens de autenticación pueden tener tiempo de expiración y el acceso a los servicios REST API podría hacerse a través de una API Key. También en la parte del cliente se podría tener más retroalimentación con el usuario para mejorar la usabilidad.
