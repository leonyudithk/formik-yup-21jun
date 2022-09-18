# Pasos Maquetación - cuando ya esté capturando la información por consola - realizo proceso sincrónico con redux
        
### crear carpetas redux
___
/                             
     types

     reducers

     store

     actions

- **definir (en mi cabecita) quienes van a hacer mis tipos de acciones (agregar, editar, listar, eliminar, sumar, restar, login
, logout)**    
- ### creo un archivo types.js y agrego mis tipos                                    
           export const typesAgendar = {                                        
           add: '[Agendar-citas] agregar',                                        
           list: '[Agendar-citas, list]',                                        
           delete: '[Agendar-citas] eliminar',                                        
           edit : '[Agendar-citas] edit',                            
           }        
- ### crear el reducers  por cada typesAgendar 
realizo un reducers y por  cada tipo realizo un caso dentro del switch (es importante recordar que el reducers es una función pura que recibe dos parametro
 un estado y una accion y devuelve el estado ya modificado)     
 
- ### (SE CREA UNA SOLA VEZ POR CADA PROYECTO/APP

este almacena los estados que envio de los reducers  y los tengo de forma global.         
es  importarte definir primero si voy a trabajar solo de forma sincrónica o Asincrónica (software intermedio un Middleware (thunk ))  ,
 debo definir una combinación de  y cada vez que yo construya un nuevo reducers debo venir a la store y creer el estado para ese reducers
                    
       const  reducers  = combineReducers
       ({                            
             agendarCitaStore : citasReducers ,                            
             loginStore : loginReducers,                             
             registerStore: registerReducers

       })                        
       export const  store = createStore (                           
           reducers,                            
           composeEnhancers(applyMiddleware(thunk)                         
       ))   

- ### Ir al index.js y
 debo indicarle que las rutas de salidas a view deben Proveerse de Redux  como lo hago asi:  Provider store ={Store}                                                                     
- ### actiones:
existen dos tipos de acciones las sincrónicas y las Asincrónicas          
- **las Sincrónicas** es la creación de estado en REDUX  de forma local-Store
          
--**Asincrónicas** va realiza la conexion
 por fuera de mi aplicativo, debo realizar una configuracion
 (firebaseConfig) de aquí debo llamar a mis acciones sincronicas-- como conectar con los componentes...        
 puedo llamar         
(boton agregar)
accion dispatch a la accion


# Autenticación firebase
/auth
           
**getAuth**
traela información del usuario actual

# Base de Datos con Colleciones firebase/firestore
/      
Doc
 / collection (configuracion Con al APP(BD en firebaseConfig), "nombre de esa colleccion en FIrestore)
                        
- getDoc: trae el documento                        
- deleteDoc: eliminar                        
- updateDoc: modificar                        
- addDoc: agrega
 
