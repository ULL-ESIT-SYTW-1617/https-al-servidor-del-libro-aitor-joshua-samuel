#Practica HTTPS para el servidor del libro

```openssl genrsa -des3 -out localhost.key 1024```

* Ponemos password

```openssl req -new -key localhost.key -out localhost.csr```

* Ponemos pass

```openssl x509 -req -days 365 -in localhost.csr -signkey localhost.key -out localhost.crt```

* Ponemos pass

* Los certificados ya vienen generados con cada servidor.

##Autores

1. [Aitor Bernal Falcón](http://chinegua.github.io/)
2. [Samuel Ramos Barroso](http://losnen.github.io/)
3. [Joshua Pérez García](http://joshuape.github.io/)

##Repositorio

* [Repositorio de entrega del main](https://github.com/ULL-ESIT-SYTW-1617/practica-plugins-heroku-aitor-joshua-samuel)
* [Repositorio de entrega del plugin iaas](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-iaas-ull-es-aitor-joshua-samuel)
* [Enlace a NPM del main](https://www.npmjs.com/package/gitbook-start-aitor-joshua-samuel)
* [Enlace a NPM del plugin iaas](https://www.npmjs.com/package/gitbook-start-iaas-ull-es-aitor-joshua-samuel)

##Enlaces de interés
* [La práctica en gitbook](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicassl.html)
