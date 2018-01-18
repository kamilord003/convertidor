# Convertor

este convertor es echo para la clase de [fundamentos de javascript](https://platzi.com/js) de [platzi](https://platzi.com)

## Descripcion del Convertor

con este paquete podras convertir unidades de medida segun necesites.solo
tendras que colocar como parametro lo que necesitas convertirlas

en el paquete se podra hacer estas conversiones:

-Libras a Kilogramos y viceversa.
-kilometros a metros y viceversa.

## Instalacion

```
npm install convertidor--1
```

## Uso

para que nos funcione tenemos que poner como primer parametro lo que
queramos convertir y como segundo parametro entre comillas ponemos si
queremos de libraAkilogramo, kilogramoAlibra, metroAkilometro o kilometroAmetro
depende de lo que quieras convertir ejemplo:
```
import convector from 'convector'

convertidor(2, "libraAkilogramo") // 0.91kg
convertidor(2, "kilogramoAlibra") // 4.4lb
convertidor(1000, "metroAkilometro") // 1kl
convertidor(2, "kilometroAmetro") // 2000m

```

## Creditos

-Cristian barbosa

## Licencia

[MIT](https://opensource.org/licenses/MIT)
