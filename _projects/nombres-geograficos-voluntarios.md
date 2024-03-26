---
title: NGIGEV
image: https://geoidmx.github.io/ngigev-website/assets/img/map.jpg
description: Herramienta tecnológica para la integración de Información Geográfica Voluntaria en la actualización de nombres geográficos.
group:
  title: Historias de Éxito
  text: Promoción de la cartografía colaborativa, la socialización de datos abiertos, y el uso de tecnología libre.
---

## NGIGEV
> Herramienta tecnológica para la integración de Información Geográfica Voluntaria en la actualización de nombres geográficos.

En el marco del Programa de Asistencia Técnica (PAT) del 2022 del Instituto Panamericano de Geografía e Historia (IPGH) en la modalidad de proyectos semilla, se realizó el desarrollo de una maqueta web que visualiza las diferencias de objetos geográficos y de atributos principales incluyendo nombres, entre la base de datos oficiales de un país participante del proyecto de los Estados Miembros del IPGH, y la de OpenStreetMap (OSM), mediante el desarrollo de las funcionalidades y acciones siguientes:

- Exploración de las fuentes WFS de los países participantes.
- Selección de las fuentes más completas. 
- Realización de una prueba en forma de mapa web no publicado, que compare visualmente como superposición de capas, los objetos geoespaciales de ambas bases de datos.
- Dinámica participativa de recolección de retroalimentación por parte de las instituciones participantes, y de definición de necesidades para representarse en la maqueta final.
- Desarrollo de la maqueta web de uno o dos países que permita visualizar claramente las diferencias de extensión de la cartografía.


### Visión General

Los institutos geográficos de cada país participante en el proyecto cuenta con una metodología establecida para creación de cartografía y asignación de nombres oficiales, no obstante, cada uno de ellos ha realizado esfuerzos distintos en relación con la interoperabilidad de sus datos y desarrollo de plataformas tecnológicas utilizadas para su consumo. En este sentido, uno de los retos del proyecto fue definir una base homologada que permita incluir a todos los países (dependiendo de sus capacidades) al ejercicio de la utilización de cartografía colaborativa y nombres colaborativos.

A su vez, la exploración de los datos y la retroalimentación de los países  participantes permite el entendimiento de las necesidades de cada instituto lo que fortalece la creación del producto, no obstante, dado el alcance del mismo es importante visualizar las posibles aplicaciones del ejercicio para su escalamiento en un proyecto robusto.

### Resultados
Con el desarrollo de la maqueta logramos establecer una base homologada de los requerimientos necesarios para realizar la comparación entre los datos de fuentes oficiales y de OSM. Sin embargo, cada instituto geográfico tiene establecido su propio procedimiento de integración de nombres oficiales, por lo que bajo la visión de integración de nombres geográficos voluntarios, cada uno de ellos valorará los resultados de la comparación para su integración a fuentes oficiales. 

A su vez, los resultados que se obtienen del análisis comparativo tanto de puntos como de líneas, debe complementarse con la visualización de capas base de ambas fuentes, vialidades y poblados respectivamente,  considerando que OSM está complementando información de manera constante.


**Del análisis comparativo línea a línea**

El procesamiento de líneas nos otorga una visión de las diferencias existentes entre las cartografías, no obstante, la calidad de los resultados dependerá de la calidad de las fuentes de información, debido a que los servicios WFS/OSM no siempre cuentan con la información necesaria para comparar nombres. 

Así también, es importante definir el tag de comparación de OSM, para entender los resultados obtenidos, OSM establece varios valores para la red vial, lo que facilita clasificar la cartografía de acuerdo a sus características.  

En la siguiente imágenes se presentan ambos resultados, en el caso A, se resaltan los elementos de la cartografía disponible en el WFS, vialidades, que no se encuentran en los trazos de OSM, para el caso B, se resaltan los elementos que existen en OSM y que no están en la cartografía del Instituto.


**Del análisis comparativo punto a punto**

El proceso comparativo punto - punto, es un acercamiento a una comparación espacial, sin embargo depende totalmente de la posición relativa de los poblados, hay que considerar que el método para trazar los hexágonos puede tomar puntos cercanos que no coinciden, o el caso contrario, puntos que coinciden pero que están en hexágonos vecinos, se buscó el método óptimo para abarcar un rango apropiado, sin embargo pueden resultar casos especiales en donde haya puntos excluyentes. Y también es importante reiterar que los resultados dependen de qué tan completa esté la información de ambas fuentes, si hay nombres en los dos medios puede darse un proceso comparativo completo.

**De la maqueta NGIGEV**

La maqueta NGIGEV al ser un sistema distribuido; que se puede acceder desde https://ngigevapp.geoid.mx, que permite la comparación de fuentes oficiales de un estado miembro del IPGH participante en el proyecto y datos de OSM, a partir de las siguientes implementaciones funcionales:

- *Registro de Usuarios:* para la gestión de registro de servicios WFS.
- *Registro de Servicios WFS:* para publicar el acceso a la carga de capas WFS, debe existir un registro previo del mismo, que contenga los datos necesarios para hacer posible una comparación.
- *Carga de capa WFS:* a través del registro previo, la maqueta se conecta, obtiene y muestra en el mapa los datos solicitados de acuerdo al área de visualización del mapa, si la conexión no es posible se envía un mensaje de error en la carga de los datos.
- *Carga de capa SHP:* debido al acceso limitado mediante los servicios WFS, en las reuniones con el equipo participante se determinó la posibilidad de generar la comparación mediante archivos SHP, que facilita a los usuarios cargar y visualizar la capa de manera temporal para realizar el ejercicio. 
- *Comparar fuentes:* de acuerdo al tipo de objetos la maqueta muestra las opciones de comparación:
    1. Líneas, se muestra las diferencias entre la fuente oficial vs OSM y las diferencias entre OSM vs la fuente oficial, 
    2. Puntos, muestra las diferencias de las fuentes de datos mediante indexación H3. 
- *Descargar comparación:* Si el proceso de comparación de fuentes se concreta exitosamente, la maqueta activa el botón de descargar, que permite obtener los resultados en archivo JSON, para su manipulación en gabinete por el usuario, en caso contrario el botón no se activa.