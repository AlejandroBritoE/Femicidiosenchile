// Variables globales
let femicideData = [];
let ageChart, yearChart, regionChart;
let allCitiesByRegion = {};

// Datos de ejemplo
const embeddedData = [
  {
    "Nombre_Victima": "Gladys Videla Jara",
    "Edad": "58",
    "Ciudad": "Valparaíso",
    "Region": "Valparaíso",
    "Fecha": "1/3/10",
    "Tipo": "apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Ingrid Del Carmen Fernandez Vasquez",
    "Edad": "21",
    "Ciudad": "Curicó",
    "Region": "El Maule",
    "Fecha": "1/4/10",
    "Tipo": "baleada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Carola Cecilia Cortés González",
    "Edad": "41",
    "Ciudad": "Pudahuel",
    "Region": "Metropolitana",
    "Fecha": "1/13/10",
    "Tipo": "baleada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Maritza Cleopatra Pérez Santander",
    "Edad": "46",
    "Ciudad": "Cauquenes",
    "Region": "El Maule",
    "Fecha": "1/21/10",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Noemí Emelina Medina Torres",
    "Edad": "33",
    "Ciudad": "Temuco",
    "Region": "La Araucanía",
    "Fecha": "1/25/10",
    "Tipo": "baleada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "María Elizabeth Lorca Mateluna",
    "Edad": "53",
    "Ciudad": "La Florida",
    "Region": "Metropolitana",
    "Fecha": "2/1/10",
    "Tipo": "baleada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Yasna Verónica Gonzalez Rozas",
    "Edad": "42",
    "Ciudad": "Temuco",
    "Region": "La Araucanía",
    "Fecha": "2/4/10",
    "Tipo": "Asfixiada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Melva Rosa Morales Donayre",
    "Edad": "46",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "2/6/10",
    "Tipo": "apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Valentina Del Pilar Jofré Carvajal",
    "Edad": "20",
    "Ciudad": "El Monte",
    "Region": "Metropolitana",
    "Fecha": "2/8/10",
    "Tipo": "apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Carolina Lisset Arias González",
    "Edad": "22",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "2/8/10",
    "Tipo": "apuñalada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Karen Andrea Pinilla Beltrán",
    "Edad": "27",
    "Ciudad": "Quellón",
    "Region": "Los Lagos",
    "Fecha": "2/26/10",
    "Tipo": "degollada",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Ana Margarita Figueroa Benavides",
    "Edad": "41",
    "Ciudad": "Yumbel",
    "Region": "Biobío",
    "Fecha": "3/4/10",
    "Tipo": "apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Rosalía del Carmen Aravena Ortega",
    "Edad": "48",
    "Ciudad": "Hualqui",
    "Region": "Biobío",
    "Fecha": "3/4/10",
    "Tipo": "baleada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Jocelyn Dinamarca",
    "Edad": "23",
    "Ciudad": "La Pintana",
    "Region": "Metropolitana",
    "Fecha": "3/21/10",
    "Tipo": "estrangulada",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Miriam Luz Rojas Valencia",
    "Edad": "42",
    "Ciudad": "La Serena",
    "Region": "Coquimbo",
    "Fecha": "3/30/10",
    "Tipo": "baleada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Loreto De Los Angeles López",
    "Edad": "39",
    "Ciudad": "Placilla",
    "Region": "Valparaíso",
    "Fecha": "4/6/10",
    "Tipo": "estrangulada",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Andrea Guape Pinto",
    "Edad": "43",
    "Ciudad": "Placilla",
    "Region": "Valparaíso",
    "Fecha": "4/6/10",
    "Tipo": "estrangulada",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Lorena Navarro Díaz",
    "Edad": "27",
    "Ciudad": "Calbuco",
    "Region": "Los Lagos",
    "Fecha": "4/17/10",
    "Tipo": "apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Mónica Jérez Henríquez",
    "Edad": "33",
    "Ciudad": "Lo Espejo",
    "Region": "Metropolitana",
    "Fecha": "4/19/10",
    "Tipo": "estrangulada",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Iris Del Carmen Maldonado Quezada",
    "Edad": "45",
    "Ciudad": "Melipilla",
    "Region": "Metropolitana",
    "Fecha": "5/1/10",
    "Tipo": "baleada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Magdalena Maribel Reyes Castro",
    "Edad": "33",
    "Ciudad": "Temuco",
    "Region": "La Araucanía",
    "Fecha": "5/3/10",
    "Tipo": "apuñalada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Elizabeth Parra Márquez",
    "Edad": "20",
    "Ciudad": "Osorno",
    "Region": "Los Lagos",
    "Fecha": "5/8/10",
    "Tipo": "estragulada y apuñalada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Bernarda Fernández Fuentes",
    "Edad": "36",
    "Ciudad": "San Nicolás",
    "Region": "Biobío",
    "Fecha": "5/11/10",
    "Tipo": "Degollada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Andrea Viveros Bustos",
    "Edad": "20",
    "Ciudad": "Angol",
    "Region": "La Araucanía",
    "Fecha": "5/24/10",
    "Tipo": "estrangulada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Paola Jessica Ferrada Avendaño",
    "Edad": "37",
    "Ciudad": "San Miguel",
    "Region": "Metropolitana",
    "Fecha": "5/28/10",
    "Tipo": "baleada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Marìa Orfelina Neguipan Quintuman",
    "Edad": "37",
    "Ciudad": "Panguipulli",
    "Region": "Los Ríos",
    "Fecha": "5/31/10",
    "Tipo": "golpes y estrangulamiento",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Marta Monica Jiménez Jimenez",
    "Edad": "48",
    "Ciudad": "Calama",
    "Region": "Antofagasta",
    "Fecha": "6/12/10",
    "Tipo": "apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Daniela Mejías Gonzàlez",
    "Edad": "23",
    "Ciudad": "Quilicura",
    "Region": "Metropolitana",
    "Fecha": "6/13/10",
    "Tipo": "apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Jocelyn Vargas Muñoz",
    "Edad": "23",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "6/17/10",
    "Tipo": "apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Pamela del Rosario Lagos Mora",
    "Edad": "16",
    "Ciudad": "Colina",
    "Region": "Metropolitana",
    "Fecha": "6/17/10",
    "Tipo": "estrangulada",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Sonia Faundez Inostroza",
    "Edad": "59",
    "Ciudad": "Rancagua",
    "Region": "O'Higgins",
    "Fecha": "6/24/10",
    "Tipo": "Golpes con martillo",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Claudia Marcela Yañez Méndez",
    "Edad": "22",
    "Ciudad": "La Unión",
    "Region": "Los Ríos",
    "Fecha": "6/24/10",
    "Tipo": "apuñalada y enterrada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Luz Marlen Durán Roa",
    "Edad": "21",
    "Ciudad": "Curanilahue",
    "Region": "Biobío",
    "Fecha": "7/18/10",
    "Tipo": "apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Natalia Zuñiga Medel",
    "Edad": "25",
    "Ciudad": "San Bernardo",
    "Region": "Metropolitana",
    "Fecha": "7/20/10",
    "Tipo": "apuñalada y quemada",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Lorena Elizabeth Pineda Vargas",
    "Edad": "27",
    "Ciudad": "Aysén",
    "Region": "Aysén",
    "Fecha": "7/23/10",
    "Tipo": "golpeada y estrangulada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Martina Contreras Arias",
    "Edad": "77",
    "Ciudad": "Los Ángeles",
    "Region": "Biobío",
    "Fecha": "7/29/10",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Nieto"
  },
  {
    "Nombre_Victima": "Magdalena De Las Mercedes Moraga Peñaloza",
    "Edad": "47",
    "Ciudad": "Macul",
    "Region": "Metropolitana",
    "Fecha": "7/30/10",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Marisol Briceño Ríos",
    "Edad": "46",
    "Ciudad": "Coquimbo",
    "Region": "Coquimbo",
    "Fecha": "8/1/10",
    "Tipo": "Golpes con fierro",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Carmina Veronica Echeñique Salinas",
    "Edad": "44",
    "Ciudad": "Lanco",
    "Region": "Los Ríos",
    "Fecha": "8/10/10",
    "Tipo": "baleada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Enriqueta Fierro Castro",
    "Edad": "56",
    "Ciudad": "Cañete",
    "Region": "La Araucanía",
    "Fecha": "9/6/10",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Susana Del Carmen Reyes Espinoza",
    "Edad": "50",
    "Ciudad": "Rauco",
    "Region": "El Maule",
    "Fecha": "9/7/10",
    "Tipo": "baleada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Rosa Díaz Collao",
    "Edad": "58",
    "Ciudad": "Tal Tal",
    "Region": "Antofagasta",
    "Fecha": "9/10/10",
    "Tipo": "Golpes",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Luz Marina Amaya Fuica",
    "Edad": "52",
    "Ciudad": "Angol",
    "Region": "La Araucanía",
    "Fecha": "9/11/10",
    "Tipo": "baleada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Jeanette Vargas Vargas",
    "Edad": "49",
    "Ciudad": "Aysén",
    "Region": "Aysén",
    "Fecha": "9/22/10",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Estefanía Alfaro González",
    "Edad": "25",
    "Ciudad": "La Pintana",
    "Region": "Metropolitana",
    "Fecha": "10/6/10",
    "Tipo": "Golpes",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Leongina Del Carmen Sandoval Rámirez",
    "Edad": "50",
    "Ciudad": "San Miguel",
    "Region": "Metropolitana",
    "Fecha": "10/14/10",
    "Tipo": "baleada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Valeria González Muñoz",
    "Edad": "27",
    "Ciudad": "Valparaíso",
    "Region": "Valparaíso",
    "Fecha": "10/16/10",
    "Tipo": "baleada",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Hermandína Díaz",
    "Edad": "72",
    "Ciudad": "San Javier",
    "Region": "El Maule",
    "Fecha": "10/16/10",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Sonia Rodríguez Polanco",
    "Edad": "33",
    "Ciudad": "Punta Arenas",
    "Region": "Magallanes",
    "Fecha": "10/15/10",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Rosa Alejandra Pino Araneda",
    "Edad": "47",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "10/25/10",
    "Tipo": "estrangulada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Marcela Escobar Morales",
    "Edad": "47",
    "Ciudad": "Los Andes",
    "Region": "Valparaíso",
    "Fecha": "11/14/10",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Ericka Rosa Vera Vera",
    "Edad": "69",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "11/26/10",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Javiera Jesús Méndez Méndez",
    "Edad": "6",
    "Ciudad": "San Clemente",
    "Region": "El Maule",
    "Fecha": "11/29/10",
    "Tipo": "Golpes",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Marta Hernandez",
    "Edad": "51",
    "Ciudad": "San Miguel",
    "Region": "Metropolitana",
    "Fecha": "11/2/10",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Cecilia Valenzuela Castañeda",
    "Edad": "42",
    "Ciudad": "San Bernardo",
    "Region": "Metropolitana",
    "Fecha": "12/1/10",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Susana Moscoso Vásquez",
    "Edad": "31",
    "Ciudad": "Neltune",
    "Region": "Los Ríos",
    "Fecha": "12/1/10",
    "Tipo": "Golpe de Hacha",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Tamara Barrios Martínez",
    "Edad": "26",
    "Ciudad": "Vicuña",
    "Region": "Coquimbo",
    "Fecha": "12/5/10",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Teresa Bustos Escalona",
    "Edad": "40",
    "Ciudad": "Quirihue",
    "Region": "Biobío",
    "Fecha": "12/6/10",
    "Tipo": "baleada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Valeria Hernández Rain",
    "Edad": "23",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "12/8/10",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Maria Avalos Manqui",
    "Edad": "17",
    "Ciudad": "Renca",
    "Region": "Metropolitana",
    "Fecha": "12/8/10",
    "Tipo": "baleada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Alejandra Campos Carvajal",
    "Edad": "31",
    "Ciudad": "Arica",
    "Region": "Arica y Parinacota",
    "Fecha": "12/9/10",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Elsa Maria Bernales Tobar",
    "Edad": "90",
    "Ciudad": "Pedro Aguirre Cerda",
    "Region": "Metropolitana",
    "Fecha": "12/10/10",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Mireya Del Carmen Salas Gumero",
    "Edad": "43",
    "Ciudad": "Rengo",
    "Region": "O'Higgins",
    "Fecha": "12/11/10",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Mireya Paredes García",
    "Edad": "65",
    "Ciudad": "Longaví",
    "Region": "El Maule",
    "Fecha": "12/12/10",
    "Tipo": "golpes",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Cecilia Julio Bolados",
    "Edad": "21",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "11/28/10",
    "Tipo": "golpes",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Viviana Briceño Briceño",
    "Edad": "26",
    "Ciudad": "Illapel",
    "Region": "Coquimbo",
    "Fecha": "1/23/11",
    "Tipo": "Baleada",
    "Relación Víctima": "ex Conviviente"
  },
  {
    "Nombre_Victima": "Estefanía Fernândez Fernândez",
    "Edad": "24",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "1/26/11",
    "Tipo": "Apuñalada",
    "Relación Víctima": "ex Conviviente"
  },
  {
    "Nombre_Victima": "Ruth María Salazar Flores",
    "Edad": "52",
    "Ciudad": "Padre Las Casas",
    "Region": "Araucanía",
    "Fecha": "1/26/11",
    "Tipo": "Apuñalada y quemada",
    "Relación Víctima": "Yerno"
  },
  {
    "Nombre_Victima": "Adela Rucalaf Coliñir",
    "Edad": "42",
    "Ciudad": "Nueva Imperial",
    "Region": "Araucanía",
    "Fecha": "1/27/11",
    "Tipo": "Golpes",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Fernanda Lisette Rivas Lavín",
    "Edad": "26",
    "Ciudad": "Copiapó",
    "Region": "Atacama",
    "Fecha": "2/4/11",
    "Tipo": "Estrangulamiento",
    "Relación Víctima": "Cliente sexual"
  },
  {
    "Nombre_Victima": "Jocelyn San Martín Muñoz",
    "Edad": "23",
    "Ciudad": "Loncoche",
    "Region": "Araucanía",
    "Fecha": "2/20/11",
    "Tipo": "Golpes",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Fresia Llanquitrù Ortìz",
    "Edad": "38",
    "Ciudad": "Colina",
    "Region": "Metropolitana",
    "Fecha": "2/26/11",
    "Tipo": "Golpes",
    "Relación Víctima": "desconocido"
  },
  {
    "Nombre_Victima": "Sonia Del Carmen Barrera Bahamondes",
    "Edad": "67",
    "Ciudad": "Estación Central",
    "Region": "Metropolitana",
    "Fecha": "2/28/11",
    "Tipo": "Golpes con fierro",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Corina Pozas Pozas",
    "Edad": "29",
    "Ciudad": "Quilicura",
    "Region": "Metropolitana",
    "Fecha": "3/14/11",
    "Tipo": "Estrangulada y apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Luisa Hortencia Santander",
    "Edad": "81",
    "Ciudad": "Quinta Normal",
    "Region": "Metropolitana",
    "Fecha": "3/14/11",
    "Tipo": "Baleada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Orfelina Ramona Paulino Tatis",
    "Edad": "27",
    "Ciudad": "Punta Arenas",
    "Region": "Magallanes",
    "Fecha": "3/24/11",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Nelly Angela Ortíz Barrera",
    "Edad": "33",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "3/29/11",
    "Tipo": "Apuñalada",
    "Relación Víctima": "ex Conviviente"
  },
  {
    "Nombre_Victima": "Claudia Lorena Carrasco Madariaga",
    "Edad": "35",
    "Ciudad": "Cerro Navia",
    "Region": "Metropolitana",
    "Fecha": "4/3/11",
    "Tipo": "Baleada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Joseline Camberes Cuevas",
    "Edad": "48",
    "Ciudad": "Copiapó",
    "Region": "Atacama",
    "Fecha": "4/21/11",
    "Tipo": "Colisión provocada por agresor",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Marisol Solange Figueroa Sepùlveda",
    "Edad": "30",
    "Ciudad": "Chillán",
    "Region": "Biobío",
    "Fecha": "4/24/11",
    "Tipo": "Baleada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Estrella Farias",
    "Edad": "50",
    "Ciudad": "Colina",
    "Region": "Metropolitana",
    "Fecha": "5/26/11",
    "Tipo": "Golpes",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Madeline Pichuhuinca Pulgar",
    "Edad": "12",
    "Ciudad": "Valdivia",
    "Region": "Los Ríos",
    "Fecha": "5/26/11",
    "Tipo": "Lanzada Barranco",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Miriam Hernández Guerrero",
    "Edad": "60",
    "Ciudad": "San Bernardo",
    "Region": "Metropolitana",
    "Fecha": "6/8/11",
    "Tipo": "Baleada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Betsabé Solar Vergara",
    "Edad": "37",
    "Ciudad": "Los Sauces",
    "Region": "Araucanía",
    "Fecha": "7/9/11",
    "Tipo": "Golpes con un combo metálico",
    "Relación Víctima": "ex Conviviente"
  },
  {
    "Nombre_Victima": "Jéssica Vivanco Cossio",
    "Edad": "21",
    "Ciudad": "Pitrufquén",
    "Region": "Araucanía",
    "Fecha": "7/9/11",
    "Tipo": "Descuartizada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Patricia Cáceres Aravena",
    "Edad": "41",
    "Ciudad": "Linares",
    "Region": "El Maule",
    "Fecha": "8/11/11",
    "Tipo": "Golpes",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Romina Scarlet Campillay Araya",
    "Edad": "11",
    "Ciudad": "Alto del Carmen",
    "Region": "Atacama",
    "Fecha": "8/19/11",
    "Tipo": "Golpes",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Lila Arancibia Diaz de Valdes",
    "Edad": "76",
    "Ciudad": "San Bernardo",
    "Region": "Metropolitana",
    "Fecha": "8/22/11",
    "Tipo": "Baleada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Yessenia Arce",
    "Edad": "19",
    "Ciudad": "Penco",
    "Region": "Biobío",
    "Fecha": "8/26/11",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Magdalena Rodríguez Ruminot",
    "Edad": "38",
    "Ciudad": "Concepción",
    "Region": "Biobío",
    "Fecha": "9/3/11",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Carolina Contreras Cordero",
    "Edad": "23",
    "Ciudad": "Copiapó",
    "Region": "Atacama",
    "Fecha": "9/9/11",
    "Tipo": "Baleada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Camille Elena Sánchez Palma",
    "Edad": "17",
    "Ciudad": "Colina",
    "Region": "Metropolitana",
    "Fecha": "9/18/11",
    "Tipo": "Estrangulada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Catalina Contreras Toledo",
    "Edad": "24",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "9/18/11",
    "Tipo": "Baleada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Elizabeth Zenteno Alvárez",
    "Edad": "51",
    "Ciudad": "Valparaíso",
    "Region": "Valparaíso",
    "Fecha": "10/3/11",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Estrella Manríquez Carrera",
    "Edad": "21",
    "Ciudad": "Lo Prado",
    "Region": "Metropolitana",
    "Fecha": "10/6/11",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Rosa Uribe Saldivia",
    "Edad": "43",
    "Ciudad": "Purranque",
    "Region": "Los Lagos",
    "Fecha": "10/10/11",
    "Tipo": "Hacha",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "María Mondaca",
    "Edad": "30",
    "Ciudad": "Calama",
    "Region": "Antofagasta",
    "Fecha": "10/12/11",
    "Tipo": "Quemada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Roxana Gutièrrez Farìas",
    "Edad": "30",
    "Ciudad": "Melipilla",
    "Region": "Metropolitana",
    "Fecha": "10/12/11",
    "Tipo": "Golpes",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Francisca Janet Torres Salazar",
    "Edad": "38",
    "Ciudad": "Chillán",
    "Region": "Biobío",
    "Fecha": "10/16/11",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Susana Quezada Rojas",
    "Edad": "48",
    "Ciudad": "Curicó",
    "Region": "El Maule",
    "Fecha": "10/16/11",
    "Tipo": "Baleada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Lucia Ràmirez Aguilar",
    "Edad": "47",
    "Ciudad": "Pelarco",
    "Region": "El Maule",
    "Fecha": "10/24/11",
    "Tipo": "Baleada",
    "Relación Víctima": "ex Conviviente"
  },
  {
    "Nombre_Victima": "Berta Lidia Fabres Olivero",
    "Edad": "37",
    "Ciudad": "Maipú",
    "Region": "Metropolitana",
    "Fecha": "11/3/11",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Janett González Capellán",
    "Edad": "38",
    "Ciudad": "La Ligua",
    "Region": "Valparaíso",
    "Fecha": "11/5/11",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Tamara Lepe Vargas",
    "Edad": "21",
    "Ciudad": "San Felipe",
    "Region": "Valparaíso",
    "Fecha": "11/6/11",
    "Tipo": "Golpes",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Pascale Alvarado S.",
    "Edad": "17",
    "Ciudad": "Puchuncaví",
    "Region": "Valparaíso",
    "Fecha": "11/8/11",
    "Tipo": "Se desconoce, cuerpo nunca apareció",
    "Relación Víctima": "Desconocidos"
  },
  {
    "Nombre_Victima": "Maritza Pávez Peña",
    "Edad": "50",
    "Ciudad": "San Bernardo",
    "Region": "Metropolitana",
    "Fecha": "11/13/11",
    "Tipo": "Golpes",
    "Relación Víctima": "ex Conviviente"
  },
  {
    "Nombre_Victima": "Cinthya Sepùlveda Silva",
    "Edad": "28",
    "Ciudad": "Quillota",
    "Region": "Valparaíso",
    "Fecha": "11/16/11",
    "Tipo": "Apuñalada",
    "Relación Víctima": "ex Conviviente"
  },
  {
    "Nombre_Victima": "Mireya Milillanca Milillanca",
    "Edad": "25",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "11/26/11",
    "Tipo": "Lanzada de 9º piso",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "María Honoria Calbucura Calbucura",
    "Edad": "46",
    "Ciudad": "Hualaihué",
    "Region": "Los Lagos",
    "Fecha": "11/27/11",
    "Tipo": "Golpes",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Susana Morales Rojas",
    "Edad": "16",
    "Ciudad": "Talca",
    "Region": "El Maule",
    "Fecha": "12/3/11",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Elizabeth Carmona Zurita",
    "Edad": "27",
    "Ciudad": "Buin",
    "Region": "Metropolitana",
    "Fecha": "12/5/11",
    "Tipo": "Degollada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Oriana García Quezada",
    "Edad": "34",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "12/8/11",
    "Tipo": "Baleada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Sixta Muñoz Retamales",
    "Edad": "19",
    "Ciudad": "Buin",
    "Region": "Metropolitana",
    "Fecha": "12/25/11",
    "Tipo": "Golpes",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Maruti Martínez Illesca",
    "Edad": "43",
    "Ciudad": "Aysén",
    "Region": "Aysén",
    "Fecha": "12/28/11",
    "Tipo": "Golpes con martillo",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "María Magdalena Nuñez Araya",
    "Edad": "31",
    "Ciudad": "Illapel",
    "Region": "Coquimbo",
    "Fecha": "1/1/12",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Flor Nuñez Valdés",
    "Edad": "31",
    "Ciudad": "Talca",
    "Region": "El Maule",
    "Fecha": "1/13/12",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Elsa Curihuanca",
    "Edad": "46",
    "Ciudad": "Recoleta",
    "Region": "Metropolitana",
    "Fecha": "1/24/12",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Rosa Seguel",
    "Edad": "30",
    "Ciudad": "Licantén",
    "Region": "El Maule",
    "Fecha": "1/26/12",
    "Tipo": "Baleada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Martina Parada Seguel",
    "Edad": "5",
    "Ciudad": "Licantén",
    "Region": "El Maule",
    "Fecha": "1/26/12",
    "Tipo": "Baleada",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "María Navarrete Torres",
    "Edad": "61",
    "Ciudad": "Quilicura",
    "Region": "Metropolitana",
    "Fecha": "2/11/12",
    "Tipo": "Golpes",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "María Huerañanco Huenán",
    "Edad": "37",
    "Ciudad": "Panguipulli",
    "Region": "Los Ríos",
    "Fecha": "2/14/12",
    "Tipo": "Golpes",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Marta Del Tránsito Ruíz Vargas",
    "Edad": "38",
    "Ciudad": "Ancud",
    "Region": "Los Lagos",
    "Fecha": "2/15/12",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Teresa González Araya",
    "Edad": "82",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "2/18/12",
    "Tipo": "Baleada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Vanessa Leal Escobar",
    "Edad": "19",
    "Ciudad": "Quilicura",
    "Region": "Metropolitana",
    "Fecha": "2/20/12",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Xiomara Alarcón Miranda",
    "Edad": "38",
    "Ciudad": "Valparaíso",
    "Region": "Valparaíso",
    "Fecha": "2/21/12",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "María Basoalto Peralta",
    "Edad": "44",
    "Ciudad": "Lo Barnechea",
    "Region": "Metropolitana",
    "Fecha": "2/27/12",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Valentina Arriaza",
    "Edad": "8",
    "Ciudad": "Tocopilla",
    "Region": "Antofagasta",
    "Fecha": "2/25/12",
    "Tipo": "Asfixiada",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "María Graciela García",
    "Edad": "69",
    "Ciudad": "La Florida",
    "Region": "Metropolitana",
    "Fecha": "2/26/12",
    "Tipo": "Asfixiada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Macarena Moraga Altamirano",
    "Edad": "8",
    "Ciudad": "San Pedro de la Paz",
    "Region": "Biobío",
    "Fecha": "3/9/12",
    "Tipo": "Estrangulada",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Lissette López Rodríguez",
    "Edad": "30",
    "Ciudad": "Valdivia",
    "Region": "Los Ríos",
    "Fecha": "3/12/12",
    "Tipo": "Baleada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Rosa Elena Letelier López",
    "Edad": "50",
    "Ciudad": "San Joaquín",
    "Region": "Metropolitana",
    "Fecha": "",
    "Tipo": "Golpes",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Lorena Yañez del Río",
    "Edad": "37",
    "Ciudad": "Aysén",
    "Region": "Aysén",
    "Fecha": "4/6/12",
    "Tipo": "Estrangulada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Carol González Cortes",
    "Edad": "43",
    "Ciudad": "Los Andes",
    "Region": "Valparaíso",
    "Fecha": "4/17/12",
    "Tipo": "Degollada y quem",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "María Teresa Caballero Arancibia",
    "Edad": "45",
    "Ciudad": "La Serena",
    "Region": "Coquimbo",
    "Fecha": "4/20/12",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cliente sexual"
  },
  {
    "Nombre_Victima": "Verónica Castro Fredes",
    "Edad": "40",
    "Ciudad": "Rapel",
    "Region": "O'Higgins",
    "Fecha": "5/14/12",
    "Tipo": "Baleada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Patricia Esparza Bustamante",
    "Edad": "37",
    "Ciudad": "La Florida",
    "Region": "Metropolitana",
    "Fecha": "6/3/12",
    "Tipo": "Golpes",
    "Relación Víctima": "Hermano"
  },
  {
    "Nombre_Victima": "Alicia Silva González",
    "Edad": "20",
    "Ciudad": "San Felipe",
    "Region": "Valparaíso",
    "Fecha": "6/5/12",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Oriana Tamara Soledad Jofré Rojas",
    "Edad": "24",
    "Ciudad": "La Serena",
    "Region": "Coquimbo",
    "Fecha": "6/6/12",
    "Tipo": "Estrangulada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "María Ascencio Reyes",
    "Edad": "46",
    "Ciudad": "Entre Lagos",
    "Region": "Los Lagos",
    "Fecha": "6/7/12",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Ana María Ibarra Alcaíno",
    "Edad": "41",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "6/17/12",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Yamile Alarcón Espinoza",
    "Edad": "22",
    "Ciudad": "Coelemu",
    "Region": "Biobío",
    "Fecha": "6/25/12",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Rosario Sandoval Mariano",
    "Edad": "51",
    "Ciudad": "Padre Las Casas",
    "Region": "Araucanía",
    "Fecha": "7/10/12",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Soledad Sánchez Carrasco",
    "Edad": "31",
    "Ciudad": "Labranza",
    "Region": "Araucanía",
    "Fecha": "7/18/12",
    "Tipo": "Estrangulada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Deisy Maulén Gamboa",
    "Edad": "30",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "7/27/12",
    "Tipo": "Calcinada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Vanessa Pastenes Maulen",
    "Edad": "14",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "7/27/12",
    "Tipo": "Calcinada",
    "Relación Víctima": "Padrastro"
  },
  {
    "Nombre_Victima": "Nicole Villablanca Lemus",
    "Edad": "22",
    "Ciudad": "Colina",
    "Region": "Metropolitana",
    "Fecha": "8/3/12",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Luz Patricia Marchione García",
    "Edad": "29",
    "Ciudad": "Quilpué",
    "Region": "Valparaíso",
    "Fecha": "8/11/12",
    "Tipo": "Golpes",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "María Inés Olmeño Gaete",
    "Edad": "67",
    "Ciudad": "Iquique",
    "Region": "Tarapacá",
    "Fecha": "9/22/12",
    "Tipo": "Estrangulada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Karina Benavides Novoa",
    "Edad": "27",
    "Ciudad": "Los Ángeles",
    "Region": "Biobío",
    "Fecha": "9/22/12",
    "Tipo": "Estrangulada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Melania Barrera Otárola",
    "Edad": "35",
    "Ciudad": "Constitución",
    "Region": "El Maule",
    "Fecha": "8/4/12",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Priscila Morales Lara",
    "Edad": "30",
    "Ciudad": "Talcahuano",
    "Region": "Biobío",
    "Fecha": "10/5/12",
    "Tipo": "Golpes",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Rossana López Tenderini",
    "Edad": "30",
    "Ciudad": "Ñuñoa",
    "Region": "Metropolitana",
    "Fecha": "10/21/12",
    "Tipo": "Golpes",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "María Marta Millan Levipani",
    "Edad": "61",
    "Ciudad": "Quellón",
    "Region": "Los Lagos",
    "Fecha": "10/22/12",
    "Tipo": "Hacha",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Carolina Legue Chiguay",
    "Edad": "26",
    "Ciudad": "Coyhaique",
    "Region": "Aysén",
    "Fecha": "10/22/12",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Paulina Miranda Leiva",
    "Edad": "20",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "10/8/12",
    "Tipo": "Baleada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Angélica Sepúlveda Cid",
    "Edad": "49",
    "Ciudad": "Yumbel",
    "Region": "Biobío",
    "Fecha": "12/2/12",
    "Tipo": "Golpes",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Marisol Antonieta Estay Olivares",
    "Edad": "38",
    "Ciudad": "San Felipe",
    "Region": "Valparaíso",
    "Fecha": "12/1/12",
    "Tipo": "Baleada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Myriam Fuentes Blanco",
    "Edad": "31",
    "Ciudad": "Chillán",
    "Region": "Biobío",
    "Fecha": "12/2/12",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "María José Ortiz Salinas",
    "Edad": "17",
    "Ciudad": "Colina",
    "Region": "Metropolitana",
    "Fecha": "12/6/12",
    "Tipo": "Baleada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Nelly Castillo Soto",
    "Edad": "19",
    "Ciudad": "San Bernardo",
    "Region": "Metropolitana",
    "Fecha": "1/1/13",
    "Tipo": "Impacto de bala",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "María Inés Jiménez Paillán",
    "Edad": "42",
    "Ciudad": "Puerto Varas",
    "Region": "Los Lagos",
    "Fecha": "1/15/13",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Cecilia Muñoz Saavedra",
    "Edad": "43",
    "Ciudad": "Pitrufquén",
    "Region": "Araucanía",
    "Fecha": "1/30/13",
    "Tipo": "25 puñaladas",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Karina Isabel Cea Cea",
    "Edad": "19",
    "Ciudad": "Ñiquén",
    "Region": "Biobío",
    "Fecha": "2/8/13",
    "Tipo": "Impacto de bala en el pecho",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Jennifer Herrera Carroza",
    "Edad": "21",
    "Ciudad": "Peñalolén",
    "Region": "Metropolitana",
    "Fecha": "2/26/13",
    "Tipo": "10 puñaladas",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Iris Soledad Romero Arriagada",
    "Edad": "19",
    "Ciudad": "Punitaqui",
    "Region": "Coquimbo",
    "Fecha": "2/27/13",
    "Tipo": "Impacto de bala de escopeta",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Paula Muñoz Márquez",
    "Edad": "26",
    "Ciudad": "Chile Chico",
    "Region": "Aysén",
    "Fecha": "3/9/13",
    "Tipo": "Degollada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Carolina Olate Aguayo",
    "Edad": "30",
    "Ciudad": "Los Alamos",
    "Region": "Biobío",
    "Fecha": "3/14/13",
    "Tipo": "apuñalada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Hilda ester Farfán Chávez",
    "Edad": "32",
    "Ciudad": "Estación Central",
    "Region": "Metropolitana",
    "Fecha": "3/17/13",
    "Tipo": "apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Irma Pacheco Riquelme",
    "Edad": "70",
    "Ciudad": "Conchalí",
    "Region": "Metropolitana",
    "Fecha": "3/17/13",
    "Tipo": "8 puñaladas",
    "Relación Víctima": "Yerno"
  },
  {
    "Nombre_Victima": "Carmen Gloria Vásquez",
    "Edad": "36",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "3/18/13",
    "Tipo": "apuñalada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "NN",
    "Edad": "14",
    "Ciudad": "Puerto Cisnes",
    "Region": "Aysén",
    "Fecha": "3/19/13",
    "Tipo": "2 Impacto de balas",
    "Relación Víctima": "Padrastro"
  },
  {
    "Nombre_Victima": "Karen Soto Farías",
    "Edad": "38",
    "Ciudad": "Maipú",
    "Region": "Metropolitana",
    "Fecha": "3/27/13",
    "Tipo": "Degollada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Rosa Hernández Marín",
    "Edad": "42",
    "Ciudad": "Hualaihué",
    "Region": "Los Lagos",
    "Fecha": "4/5/13",
    "Tipo": "Golpeada con objeto contundente",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Florencia Bella Ester Araya",
    "Edad": "44",
    "Ciudad": "Talca",
    "Region": "El Maule",
    "Fecha": "4/20/13",
    "Tipo": "Murió a golpes",
    "Relación Víctima": "ex Pareja"
  },
  {
    "Nombre_Victima": "Daniela Ayala Cabezas",
    "Edad": "24",
    "Ciudad": "San Bernardo",
    "Region": "Metropolitana",
    "Fecha": "4/20/13",
    "Tipo": "Impacto de bala en la cabeza",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Raquel Suazo",
    "Edad": "43",
    "Ciudad": "Estación Central",
    "Region": "Metropolitana",
    "Fecha": "4/21/13",
    "Tipo": "Impacto de bala",
    "Relación Víctima": "Yerno"
  },
  {
    "Nombre_Victima": "Elizabeth Gutiérrez López",
    "Edad": "49",
    "Ciudad": "La Pintana",
    "Region": "Metropolitana",
    "Fecha": "4/23/13",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Mónica Patricia Soldado Quiloqueo",
    "Edad": "32",
    "Ciudad": "San Javier",
    "Region": "El Maule",
    "Fecha": "4/21/13",
    "Tipo": "estrangulada y apuñalada",
    "Relación Víctima": "desconocido"
  },
  {
    "Nombre_Victima": "Norma Bañados Vásquez",
    "Edad": "26",
    "Ciudad": "Carahue",
    "Region": "Araucanía",
    "Fecha": "5/25/13",
    "Tipo": "Asesinada con golpes de hacha",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Erika Romina Rivera Tagle",
    "Edad": "27",
    "Ciudad": "Peñalolén",
    "Region": "Metropolitana",
    "Fecha": "5/30/13",
    "Tipo": "Asesinada a golpes de pies y puños",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Carla Cristal Escobar Ramírez",
    "Edad": "26",
    "Ciudad": "Batuco",
    "Region": "Metropolitana",
    "Fecha": "5/31/13",
    "Tipo": "apuñalada",
    "Relación Víctima": "ex Pareja"
  },
  {
    "Nombre_Victima": "Ana María Teuquil Barría",
    "Edad": "27",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "5/21/13",
    "Tipo": "Impacto de bala",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Marisol Cuello Rabanal",
    "Edad": "43",
    "Ciudad": "Vallenar",
    "Region": "Atacama",
    "Fecha": "6/6/13",
    "Tipo": "Impacto de bala",
    "Relación Víctima": "Ex Pareja"
  },
  {
    "Nombre_Victima": "Guillermina Pérez Yañez",
    "Edad": "47",
    "Ciudad": "Cauquenes",
    "Region": "El Maule",
    "Fecha": "6/10/13",
    "Tipo": "Impacto de bala",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Katherine Rosales Sandoval",
    "Edad": "25",
    "Ciudad": "La Pintana",
    "Region": "Metropolitana",
    "Fecha": "6/16/13",
    "Tipo": "Violada, Golpeada y ahorcada",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Maria Jose Castillo",
    "Edad": "28",
    "Ciudad": "Viña del Mar",
    "Region": "Valparaíso",
    "Fecha": "6/26/13",
    "Tipo": "apuñalada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Vanessa Gálvez López",
    "Edad": "31",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "5/30/13",
    "Tipo": "Golpeada en el cráneo y calcinada",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Elsa del Carmen Avendaño Pino",
    "Edad": "53",
    "Ciudad": "Independencia",
    "Region": "Metropolitana",
    "Fecha": "7/1/13",
    "Tipo": "Golpes con un fierro",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Mónica R.",
    "Edad": "12",
    "Ciudad": "Lumaco",
    "Region": "Araucanía",
    "Fecha": "7/4/13",
    "Tipo": "Apuñalada en cuello y tórax",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "Alejandra R.",
    "Edad": "14",
    "Ciudad": "Lumaco",
    "Region": "Araucanía",
    "Fecha": "7/4/13",
    "Tipo": "Apuñalada en cuello y tórax",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "María de la Cruz Cisterna",
    "Edad": "51",
    "Ciudad": "Victoria",
    "Region": "Araucanía",
    "Fecha": "7/15/13",
    "Tipo": "Baleada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Carla Andrea Adam Muñoz",
    "Edad": "25",
    "Ciudad": "Valparaíso",
    "Region": "Valparaíso",
    "Fecha": "7/17/13",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Nancy del Carmen Torres Aravena",
    "Edad": "56",
    "Ciudad": "San Ramón",
    "Region": "Metropolitana",
    "Fecha": "7/23/13",
    "Tipo": "estrangulada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Mariela González Valderrama",
    "Edad": "56",
    "Ciudad": "Rallenco",
    "Region": "El Maule",
    "Fecha": "7/25/13",
    "Tipo": "golpes de hacha",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Nadia Varas Cuevas",
    "Edad": "33",
    "Ciudad": "Maipú",
    "Region": "Metropolitana",
    "Fecha": "8/4/13",
    "Tipo": "Estrangulada por esposo",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Sara Javiera Herrera Varas",
    "Edad": "15",
    "Ciudad": "Maipú",
    "Region": "Metropolitana",
    "Fecha": "8/4/13",
    "Tipo": "Estrangulada por padrastro",
    "Relación Víctima": "padrastro"
  },
  {
    "Nombre_Victima": "Gregoria Veizaga Puma",
    "Edad": "22",
    "Ciudad": "Copiapó",
    "Region": "Atacama",
    "Fecha": "8/13/13",
    "Tipo": "Degollada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Carolina Pardo González",
    "Edad": "32",
    "Ciudad": "Doñihue",
    "Region": "O'Higgins",
    "Fecha": "9/15/13",
    "Tipo": "Baleada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Marisol Del Carmen Balcázar Navarro",
    "Edad": "47",
    "Ciudad": "Pudahuel",
    "Region": "Metropolitana",
    "Fecha": "9/19/13",
    "Tipo": "Violada y golpeada por vecino",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Mónica Andrea Cerda Pino",
    "Edad": "35",
    "Ciudad": "San Antonio",
    "Region": "Valparaíso",
    "Fecha": "9/21/13",
    "Tipo": "Golpeada por pareja",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Daniela Cruz",
    "Edad": "4",
    "Ciudad": "Talca",
    "Region": "Biobío",
    "Fecha": "9/28/13",
    "Tipo": "Violada y golpeada por amigo de la familia",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Pamela Villanueva",
    "Edad": "26",
    "Ciudad": "Quinta Normal",
    "Region": "Metropolitana",
    "Fecha": "10/20/13",
    "Tipo": "Baleada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Marta Evelyn Peña Zamorano",
    "Edad": "31",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "10/22/13",
    "Tipo": "Estranguladad, mutilidad y quemada",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Katherine Droguett",
    "Edad": "36",
    "Ciudad": "Valparaíso",
    "Region": "Valparaíso",
    "Fecha": "10/23/13",
    "Tipo": "Golpes",
    "Relación Víctima": "Cliente sexual"
  },
  {
    "Nombre_Victima": "María de los Angeles Rodriguez",
    "Edad": "32",
    "Ciudad": "Conchalí",
    "Region": "Metropolitana",
    "Fecha": "10/27/13",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Ruth Elizabeth Velasquez Vargas",
    "Edad": "33",
    "Ciudad": "Punta Arenas",
    "Region": "Magallanes",
    "Fecha": "10/28/13",
    "Tipo": "Estrangulada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Minerva Altragracia Zorrilla Durán",
    "Edad": "47",
    "Ciudad": "Estación Central",
    "Region": "Metropolitana",
    "Fecha": "11/1/13",
    "Tipo": "Quemada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "María Graciela Vidal",
    "Edad": "67",
    "Ciudad": "Pedro Aguirre Cerda",
    "Region": "Metropolitana",
    "Fecha": "11/15/13",
    "Tipo": "Golpes de martillo",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "NN",
    "Edad": "55",
    "Ciudad": "Conchalí",
    "Region": "Metropolitana",
    "Fecha": "11/14/13",
    "Tipo": "Violada y asesinada",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Ornella Carolina Moroni Beltrán",
    "Edad": "24",
    "Ciudad": "Lo Prado",
    "Region": "Metropolitana",
    "Fecha": "11/17/13",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Ingrid Rosales Muñoz",
    "Edad": "39",
    "Ciudad": "Cartagena",
    "Region": "Valparaíso",
    "Fecha": "11/30/13",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Yolanda Quilapán Cruces",
    "Edad": "44",
    "Ciudad": "Independencia",
    "Region": "Metropolitana",
    "Fecha": "12/3/13",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Ana María Castillo Ibañez",
    "Edad": "40",
    "Ciudad": "Los Ángeles",
    "Region": "Biobío",
    "Fecha": "12/4/13",
    "Tipo": "Baleada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "",
    "Edad": "51",
    "Ciudad": "Vitacura",
    "Region": "Metropolitana",
    "Fecha": "12/13/13",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Julia Castillo Figueroa",
    "Edad": "32",
    "Ciudad": "El Olivar",
    "Region": "O'Higgins",
    "Fecha": "1/3/14",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Carla Alejandra Fonseca Añiñir",
    "Edad": "16",
    "Ciudad": "Huentelolen",
    "Region": "Biobío",
    "Fecha": "1/10/14",
    "Tipo": "Golpes y violacion",
    "Relación Víctima": "Hermanastro"
  },
  {
    "Nombre_Victima": "Sandra Paine Faúndez",
    "Edad": "42",
    "Ciudad": "Talcahuano",
    "Region": "Biobío",
    "Fecha": "1/20/14",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Claudia Castro González",
    "Edad": "28",
    "Ciudad": "Teno",
    "Region": "El Maule",
    "Fecha": "1/28/14",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Orieta Contreras Aguilera",
    "Edad": "38",
    "Ciudad": "Cabrero",
    "Region": "Biobío",
    "Fecha": "1/28/14",
    "Tipo": "Golpes",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Claudia Muñoz Contreras",
    "Edad": "40",
    "Ciudad": "Talca",
    "Region": "El Maule",
    "Fecha": "1/30/14",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Viviana Vilchez Muñoz",
    "Edad": "2 meses",
    "Ciudad": "Talca",
    "Region": "El Maule",
    "Fecha": "1/30/14",
    "Tipo": "",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "María Elena Fuentealba Aravena",
    "Edad": "51",
    "Ciudad": "Paillaco",
    "Region": "Los Ríos",
    "Fecha": "2/1/14",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Gilda Patricia Calvanese Catalán",
    "Edad": "64",
    "Ciudad": "Macul",
    "Region": "Metropolitana",
    "Fecha": "2/1/14",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Rosa Inés Villalobos Álvarez",
    "Edad": "56",
    "Ciudad": "Recoleta",
    "Region": "Metropolitana",
    "Fecha": "2/3/14",
    "Tipo": "apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Ide Mercedes Ruiz Vargas",
    "Edad": "33",
    "Ciudad": "Castro",
    "Region": "Los Lagos",
    "Fecha": "2/18/14",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Rosa Galdames Montenegro",
    "Edad": "54",
    "Ciudad": "Llay Llay",
    "Region": "Valparaíso",
    "Fecha": "2/25/14",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Eliana Bustos Carvajal",
    "Edad": "67",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "3/2/14",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Rosa Dinamarca Astorga",
    "Edad": "45",
    "Ciudad": "San Miguel",
    "Region": "Metropolitana",
    "Fecha": "3/3/14",
    "Tipo": "Apuñaladas",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Lorena Baeza Celis",
    "Edad": "40",
    "Ciudad": "Calera de Tango",
    "Region": "Metropolitana",
    "Fecha": "3/16/14",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Roxana Cisternas Valdés",
    "Edad": "28",
    "Ciudad": "Melipilla",
    "Region": "Metropolitana",
    "Fecha": "3/22/14",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Daniela Pérez Alegría",
    "Edad": "29",
    "Ciudad": "Padre Hurtado",
    "Region": "Metropolitana",
    "Fecha": "4/4/14",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Cecilia Concha Iturra",
    "Edad": "50",
    "Ciudad": "Valparaíso",
    "Region": "Valparaíso",
    "Fecha": "4/26/14",
    "Tipo": "",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Rocío Zuñiga Concha",
    "Edad": "12",
    "Ciudad": "Valparaíso",
    "Region": "Valparaíso",
    "Fecha": "4/26/14",
    "Tipo": "",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Carolina Vega Henríquez",
    "Edad": "28",
    "Ciudad": "Vicuña",
    "Region": "Coquimbo",
    "Fecha": "4/27/14",
    "Tipo": "",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "María Loreto Zenteno Arellano",
    "Edad": "45",
    "Ciudad": "Lota",
    "Region": "Biobío",
    "Fecha": "5/10/14",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Lindsay Elizabeth Betancur Torres",
    "Edad": "16",
    "Ciudad": "El Quisco",
    "Region": "Valparaíso",
    "Fecha": "5/10/14",
    "Tipo": "Impacto de bala",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Paola Andrea Vega Quezada",
    "Edad": "36",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "5/11/14",
    "Tipo": "Golpes y apuñalamiento",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Silvania Andrea Gallegos Gallegos",
    "Edad": "31",
    "Ciudad": "Talcahuano",
    "Region": "Biobío",
    "Fecha": "5/26/14",
    "Tipo": "Quemada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Ivonne Lazo Aldea",
    "Edad": "37",
    "Ciudad": "Calera de Tango",
    "Region": "Metropolitana",
    "Fecha": "5/28/14",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Gladys Zuloaga Silva",
    "Edad": "30",
    "Ciudad": "San Joaquín",
    "Region": "Metropolitana",
    "Fecha": "6/3/14",
    "Tipo": "Apuñalamiento",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Lidia Parra Montiel",
    "Edad": "45",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "6/5/14",
    "Tipo": "Quemada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Rossana Nelly Rojas Pacheco",
    "Edad": "50",
    "Ciudad": "Peñaflor",
    "Region": "Metropolitana",
    "Fecha": "6/9/14",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Andrea Paola Ugarte Hernández",
    "Edad": "24",
    "Ciudad": "Punta Arenas",
    "Region": "Magallanes",
    "Fecha": "6/18/14",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Vania Tarkovsky Navarro",
    "Edad": "41",
    "Ciudad": "Huechuraba",
    "Region": "Metropolitana",
    "Fecha": "6/27/14",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Gloria Ester Saldías Huenchul",
    "Edad": "33",
    "Ciudad": "Osorno",
    "Region": "Los Lagos",
    "Fecha": "6/28/14",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Verónica del Carmen Parra Fuentes",
    "Edad": "43",
    "Ciudad": "Coihueco",
    "Region": "Biobío",
    "Fecha": "6/30/14",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Camila Constanza Oviedo Morales",
    "Edad": "20",
    "Ciudad": "Los Ángeles",
    "Region": "Biobío",
    "Fecha": "7/18/14",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Claudia Reyes Cabrera",
    "Edad": "38",
    "Ciudad": "La Pintana",
    "Region": "Metropolitana",
    "Fecha": "7/21/14",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Nancy Iris Silva Nuñez",
    "Edad": "26",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "7/24/14",
    "Tipo": "",
    "Relación Víctima": "Desconocido; Desconocido"
  },
  {
    "Nombre_Victima": "Ismenia Jerez Valenzuela",
    "Edad": "42",
    "Ciudad": "Traiguén",
    "Region": "Araucanía",
    "Fecha": "7/25/14",
    "Tipo": "",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "María Ruckoldt",
    "Edad": "64",
    "Ciudad": "Viña del Mar",
    "Region": "Valparaíso",
    "Fecha": "8/7/14",
    "Tipo": "Impacto de bala",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "MEDIOS NO INFORMAN",
    "Edad": "28",
    "Ciudad": "Conchalí",
    "Region": "Metropolitana",
    "Fecha": "8/8/14",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Yasmin Correa Guerrero",
    "Edad": "31",
    "Ciudad": "Constitución",
    "Region": "El Maule",
    "Fecha": "8/10/14",
    "Tipo": "Impacto de bala",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Juana María Troncoso Leiva",
    "Edad": "43",
    "Ciudad": "Los Ángeles",
    "Region": "Biobío",
    "Fecha": "8/14/14",
    "Tipo": "Quemada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Jessica Laguna Maliqueo",
    "Edad": "37",
    "Ciudad": "Renca",
    "Region": "Metropolitana",
    "Fecha": "8/26/14",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Cinthia del Carmen Collao Candia",
    "Edad": "27",
    "Ciudad": "Pedro Aguirre Cerda",
    "Region": "Metropolitana",
    "Fecha": "9/3/14",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Erica Hagan",
    "Edad": "22",
    "Ciudad": "Temuco",
    "Region": "La Araucanía",
    "Fecha": "9/5/14",
    "Tipo": "Golpes ahogada",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Clara de las Mercedes Rodríguez Osses",
    "Edad": "53",
    "Ciudad": "Curicó",
    "Region": "El Maule",
    "Fecha": "9/9/14",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Aida Rosa Ahumada Zamora",
    "Edad": "69",
    "Ciudad": "Pudahuel",
    "Region": "Metropolitana",
    "Fecha": "9/24/14",
    "Tipo": "Impacto de bala",
    "Relación Víctima": "Ex conviviente de su hija"
  },
  {
    "Nombre_Victima": "Susana Paola Godoy Ahumada",
    "Edad": "39",
    "Ciudad": "Pudahuel",
    "Region": "Metropolitana",
    "Fecha": "9/24/14",
    "Tipo": "Apañalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Marta Elena Ramírez Palavecino",
    "Edad": "49",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "10/17/14",
    "Tipo": "Impacto de bala",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Jasmina Faúndez Castañeda",
    "Edad": "37",
    "Ciudad": "Valdivia",
    "Region": "Los Ríos",
    "Fecha": "10/28/14",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Yerno"
  },
  {
    "Nombre_Victima": "Claudia Andrea Zúñiga Mancilla",
    "Edad": "37",
    "Ciudad": "Lo Prado",
    "Region": "Metropolitana",
    "Fecha": "10/30/14",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Magaly Parra Guzmán",
    "Edad": "49",
    "Ciudad": "La Florida",
    "Region": "Metropolitana",
    "Fecha": "11/3/14",
    "Tipo": "Asfixia",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Pamela Soledad Díaz Guzmán",
    "Edad": "34",
    "Ciudad": "Lo Barnechea",
    "Region": "Metropolitana",
    "Fecha": "11/4/14",
    "Tipo": "Quemada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Paulina Iturriaga Aguilera",
    "Edad": "26",
    "Ciudad": "Maipú",
    "Region": "Metropolitana",
    "Fecha": "11/10/14",
    "Tipo": "Apuñaalda",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Vannia Monsalves Monsalves",
    "Edad": "27",
    "Ciudad": "Calama",
    "Region": "Antofagasta",
    "Fecha": "11/12/14",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Sandra Hernández Rivas",
    "Edad": "40",
    "Ciudad": "Valdivia",
    "Region": "Los Ríos",
    "Fecha": "11/14/14",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Olga Manríquez Jorquera",
    "Edad": "30",
    "Ciudad": "Talca",
    "Region": "El Maule",
    "Fecha": "11/16/14",
    "Tipo": "",
    "Relación Víctima": "Tío"
  },
  {
    "Nombre_Victima": "Claudia Andrea Muñoz González",
    "Edad": "26",
    "Ciudad": "Talca",
    "Region": "El Maule",
    "Fecha": "11/21/14",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Marta Rivera Millas",
    "Edad": "69",
    "Ciudad": "La Pintana",
    "Region": "Metropolitana",
    "Fecha": "11/30/14",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Hijastro"
  },
  {
    "Nombre_Victima": "Marcela Salazar Quintana",
    "Edad": "45",
    "Ciudad": "Linares",
    "Region": "El Maule",
    "Fecha": "11/30/14",
    "Tipo": "Impacto de bala",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Raquel Guiñez Figueroa",
    "Edad": "33",
    "Ciudad": "Cunco",
    "Region": "Araucanía",
    "Fecha": "1/10/15",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Ana Luisa García",
    "Edad": "36",
    "Ciudad": "Penco",
    "Region": "Biobío",
    "Fecha": "1/18/15",
    "Tipo": "Estrangulada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Stephania Morales Rivera",
    "Edad": "21",
    "Ciudad": "Copiapó",
    "Region": "Atacama",
    "Fecha": "1/23/15",
    "Tipo": "Golpes",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Mercedes Frías Rojas",
    "Edad": "70",
    "Ciudad": "Graneros",
    "Region": "O'Higgins",
    "Fecha": "2/1/15",
    "Tipo": "Golpes",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Elvira Rodríguez López",
    "Edad": "53",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "2/4/15",
    "Tipo": "Estrangulada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Susana Vargas Alegría",
    "Edad": "48",
    "Ciudad": "Rancagua",
    "Region": "O'Higgins",
    "Fecha": "2/6/15",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Cecilia Gallardo",
    "Edad": "23",
    "Ciudad": "La Reina",
    "Region": "Metropolitana",
    "Fecha": "2/9/15",
    "Tipo": "Agredida y violada",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Aída del Carmen Jara Carreño",
    "Edad": "25",
    "Ciudad": "Paine",
    "Region": "Metropolitana",
    "Fecha": "2/14/15",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Ana María Saavedra",
    "Edad": "33",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "2/15/15",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Juana de las Mercedes Vargas",
    "Edad": "49",
    "Ciudad": "Retiro",
    "Region": "El Maule",
    "Fecha": "2/18/15",
    "Tipo": "Impacto de bala ",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "María Magdalena Antivil Quintriqueo",
    "Edad": "29",
    "Ciudad": "Lontué",
    "Region": "El Maule",
    "Fecha": "2/23/15",
    "Tipo": "Golpes",
    "Relación Víctima": "Ex Pareja"
  },
  {
    "Nombre_Victima": "Paola Aguilera Muñoz",
    "Edad": "25",
    "Ciudad": "Talca",
    "Region": "El Maule",
    "Fecha": "3/12/15",
    "Tipo": "Impacto de bala",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Miriam Parada López",
    "Edad": "40",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "3/16/15",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Leyla Sosa Lobos",
    "Edad": "38",
    "Ciudad": "Tal Tal",
    "Region": "Antofagasta",
    "Fecha": "3/17/15",
    "Tipo": "Apuñalada y violada",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Yesenia Durán Castillo",
    "Edad": "28",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "3/28/15",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Juana Cortéz Rubilar",
    "Edad": "69",
    "Ciudad": "Los Ángeles",
    "Region": "Biobío",
    "Fecha": "4/12/15",
    "Tipo": "Golpes",
    "Relación Víctima": "Cliente sexual"
  },
  {
    "Nombre_Victima": "Sara Luján Jimenez",
    "Edad": "31",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "4/15/15",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "María Elizabeth Orellana Hernández",
    "Edad": "28",
    "Ciudad": "La Unión",
    "Region": "Los Ríos",
    "Fecha": "5/4/15",
    "Tipo": "Golpes y violacion",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Susana Bustillos Silva",
    "Edad": "38",
    "Ciudad": "Maipú",
    "Region": "Metropolitana",
    "Fecha": "5/18/15",
    "Tipo": "Golpes y asfixia",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "María de Lourdes Donoso Díaz",
    "Edad": "7",
    "Ciudad": "La Florida",
    "Region": "Metropolitana",
    "Fecha": "5/20/15",
    "Tipo": "",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "Ma Jesús Donoso Díaz",
    "Edad": "2",
    "Ciudad": "La Florida",
    "Region": "Metropolitana",
    "Fecha": "5/20/15",
    "Tipo": "",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "Frauleín Alfaro Díaz",
    "Edad": "38",
    "Ciudad": "La Florida",
    "Region": "Metropolitana",
    "Fecha": "5/20/15",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Gladys Donaire Luco",
    "Edad": "73",
    "Ciudad": "San Felipe",
    "Region": "Valparaíso",
    "Fecha": "5/24/15",
    "Tipo": "Impacto de bala ",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Carolina Torres Piña",
    "Edad": "34",
    "Ciudad": "Melipilla",
    "Region": "Metropolitana",
    "Fecha": "5/25/15",
    "Tipo": "Calcinada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "H.G.M.B",
    "Edad": "88",
    "Ciudad": "Viña del Mar",
    "Region": "Valparaíso",
    "Fecha": "5/25/15",
    "Tipo": "",
    "Relación Víctima": "Sobrino"
  },
  {
    "Nombre_Victima": "Tania Águila Raddatz",
    "Edad": "14",
    "Ciudad": "Puerto Varas",
    "Region": "Los Lagos",
    "Fecha": "5/27/15",
    "Tipo": "Golpes",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Carla Jara Tapia",
    "Edad": "21",
    "Ciudad": "Buin",
    "Region": "Metropolitana",
    "Fecha": "5/31/15",
    "Tipo": "Asfixia",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Verónica Avendaño Albornóz",
    "Edad": "51",
    "Ciudad": "Lo Barnechea",
    "Region": "Metropolitana",
    "Fecha": "6/6/15",
    "Tipo": "Asfixia",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Margarita Inés Zambrano Cea",
    "Edad": "63",
    "Ciudad": "Contulmo",
    "Region": "Biobío",
    "Fecha": "6/10/15",
    "Tipo": "Golpes con hacha",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Paula Quiroz",
    "Edad": "29",
    "Ciudad": "Valparaíso",
    "Region": "Valparaíso",
    "Fecha": "6/11/15",
    "Tipo": "Sobredosis",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Karina Alejandra Barría Muñoz",
    "Edad": "25",
    "Ciudad": "Puerto Aysen",
    "Region": "Aysén",
    "Fecha": "6/21/15",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Carol Martínez Múñoz",
    "Edad": "30",
    "Ciudad": "La Granja",
    "Region": "Metropolitana",
    "Fecha": "6/28/15",
    "Tipo": "Degollada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Juana María del Carmen Carvajal",
    "Edad": "88",
    "Ciudad": "La Granja",
    "Region": "Metropolitana",
    "Fecha": "6/28/15",
    "Tipo": "Degollada",
    "Relación Víctima": "Conviviente de su nieta"
  },
  {
    "Nombre_Victima": "Jelen Joana Jory Angulo",
    "Edad": "39",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "7/12/15",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Susana del Rosario Ovalle Alfaro",
    "Edad": "37",
    "Ciudad": "Limache",
    "Region": "Valparaíso",
    "Fecha": "7/13/15",
    "Tipo": "Apuñalda",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Deisy Cabrero",
    "Edad": "24",
    "Ciudad": "Purranque",
    "Region": "Los Lagos",
    "Fecha": "7/28/15",
    "Tipo": "Golpes con hacha",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Cinthya Catrilef Cabrero",
    "Edad": "6",
    "Ciudad": "Purranque",
    "Region": "Los Lagos",
    "Fecha": "7/28/15",
    "Tipo": "Golpes con hacha",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "María Magdalena Ortega Becerra",
    "Edad": "36",
    "Ciudad": "Coihueco",
    "Region": "Biobío",
    "Fecha": "8/5/15",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Patricia del Carmen Bustos Pincheira",
    "Edad": "58",
    "Ciudad": "Villarrica",
    "Region": "La Araucanía",
    "Fecha": "8/11/15",
    "Tipo": "golpes y estrangulamiento",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Rosa Ibáñez Muñoz",
    "Edad": "36",
    "Ciudad": "Los Andes",
    "Region": "Valparaíso",
    "Fecha": "8/22/15",
    "Tipo": "golpes",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Gabriela Andrea Pérez Urzúa",
    "Edad": "39",
    "Ciudad": "Rancagua",
    "Region": "O'Higgins",
    "Fecha": "8/25/15",
    "Tipo": "Asfixia",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Camila Daniela Peralta Tank",
    "Edad": "23",
    "Ciudad": "Valparaíso",
    "Region": "Valparaíso",
    "Fecha": "9/7/15",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Sonia De Lourdes Almonacid Hernández",
    "Edad": "50",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "9/25/15",
    "Tipo": "EStrangulada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Joselin Andrea Riquelme González",
    "Edad": "31",
    "Ciudad": "Paipote",
    "Region": "Atacama",
    "Fecha": "9/27/15",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Nicole Casilla Manzano",
    "Edad": "29",
    "Ciudad": "Colina",
    "Region": "Metropolitana",
    "Fecha": "10/14/15",
    "Tipo": "Inyeccion letal",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Yanina Scarlet Paredes Lara",
    "Edad": "19",
    "Ciudad": "Alhue",
    "Region": "Metropolitana",
    "Fecha": "10/29/15",
    "Tipo": "Golpes",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Ana María Arancibia Palma",
    "Edad": "24",
    "Ciudad": "Punta Arenas",
    "Region": "Magallanes",
    "Fecha": "10/29/15",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Priscila Vera Mansilla",
    "Edad": "21",
    "Ciudad": "Puerto Natales",
    "Region": "Magallanes",
    "Fecha": "10/31/15",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Nelyda Anet Álvarez Burgos",
    "Edad": "38",
    "Ciudad": "Lonquimay",
    "Region": "Araucanía",
    "Fecha": "11/3/15",
    "Tipo": "Disparo de escopeta",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Marcela Acevedo García",
    "Edad": "45",
    "Ciudad": "Maipú",
    "Region": "Metropolitana",
    "Fecha": "11/3/15",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Francisca Pilar Astudillo Ávila",
    "Edad": "28",
    "Ciudad": "Illapel",
    "Region": "Coquimbo",
    "Fecha": "11/7/15",
    "Tipo": "Golpeada y apuñalada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Julia Poblete Ramírez",
    "Edad": "33",
    "Ciudad": "Vallenar",
    "Region": "Atacama",
    "Fecha": "11/15/15",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "María Alejandra Olguín Barraza",
    "Edad": "29",
    "Ciudad": "San Antonio",
    "Region": "Valparaíso",
    "Fecha": "11/21/15",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Margoth Elizabeth Parada Caro",
    "Edad": "43",
    "Ciudad": "Victoria",
    "Region": "Araucanía",
    "Fecha": "11/29/15",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Alejandra Noemi Campos Sandoval",
    "Edad": "17",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "11/29/15",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Gloria Juana Labrín Orellana",
    "Edad": "62",
    "Ciudad": "Collipulli",
    "Region": "Araucanía",
    "Fecha": "12/12/15",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "María Angélica Varela Vivero",
    "Edad": "40",
    "Ciudad": "Pitrufquén",
    "Region": "Araucanía",
    "Fecha": "12/17/15",
    "Tipo": "EStrangulada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Giovanna Andrea Marambio Miranda",
    "Edad": "47",
    "Ciudad": "Maipú",
    "Region": "Metropolitana",
    "Fecha": "12/21/15",
    "Tipo": "Disparo",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Grisela Mariana Vargas Cayo",
    "Edad": "27",
    "Ciudad": "Rancagua",
    "Region": "O'Higgins",
    "Fecha": "12/22/15",
    "Tipo": "Asfixia",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Modesta Mercedes Rojas Bravo",
    "Edad": "53",
    "Ciudad": "Talca",
    "Region": "El Maule",
    "Fecha": "12/26/15",
    "Tipo": "Estrangulada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Amalia del Rosario Contreras González",
    "Edad": "67",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "1/1/16",
    "Tipo": "",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Claudia González Ovalle",
    "Edad": "36",
    "Ciudad": "Recoleta",
    "Region": "Metropolitana",
    "Fecha": "1/2/16",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Magdalena Del Rosario Carrillo Levipán",
    "Edad": "43",
    "Ciudad": "Temuco",
    "Region": "Araucanía",
    "Fecha": "1/10/16",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Elba Inés de las Mercedes Escárate Arenas",
    "Edad": "90",
    "Ciudad": "La Cisterna",
    "Region": "Metropolitana",
    "Fecha": "1/31/16",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Claudia Barrientos Oporto",
    "Edad": "42",
    "Ciudad": "Lago Ranco",
    "Region": "Los Ríos",
    "Fecha": "2/24/16",
    "Tipo": "",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Karen Andrea Wilson Villagrán",
    "Edad": "31",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "3/3/16",
    "Tipo": "",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Marlene Isabel Matamala Villablanca",
    "Edad": "22",
    "Ciudad": "Concepción",
    "Region": "Biobío",
    "Fecha": "3/3/16",
    "Tipo": "",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Silvana del Carmen Sepúlveda Durán",
    "Edad": "41",
    "Ciudad": "Maipú",
    "Region": "Metropolitana",
    "Fecha": "3/5/16",
    "Tipo": "",
    "Relación Víctima": "Coviviente"
  },
  {
    "Nombre_Victima": "Juliana Andrea Aguirre Acevedo",
    "Edad": "21",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "3/5/16",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Magaly del Carmen Carriel Garrido",
    "Edad": "63",
    "Ciudad": "Talcahuano",
    "Region": "Biobío",
    "Fecha": "3/7/16",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Amelia del Carmen García Correa",
    "Edad": "47",
    "Ciudad": "Paredones",
    "Region": "O'Higgins",
    "Fecha": "3/8/16",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Nelly del Carmen Leighton Salazar",
    "Edad": "45",
    "Ciudad": "Renaico",
    "Region": "Araucanía",
    "Fecha": "3/8/16",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Nancy Donatela Arenas Astudillo",
    "Edad": "58",
    "Ciudad": "Los Andes",
    "Region": "Valparaíso",
    "Fecha": "3/10/16",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Matilda Rayún Contardo Vallejos",
    "Edad": "5 meses",
    "Ciudad": "Concepción",
    "Region": "Biobío",
    "Fecha": "3/20/16",
    "Tipo": "",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "Yuri Haydee Alvarez Valderrama",
    "Edad": "28",
    "Ciudad": "Quillón",
    "Region": "Ñuble",
    "Fecha": "3/25/16",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Alison Calderon",
    "Edad": "17",
    "Ciudad": "El Bosque",
    "Region": "Metropolitana",
    "Fecha": "3/25/16",
    "Tipo": "",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Constanza Carreño Cuevas",
    "Edad": "23",
    "Ciudad": "Las Condes",
    "Region": "Metropolitana",
    "Fecha": "4/1/16",
    "Tipo": "",
    "Relación Víctima": "Cliente sexual"
  },
  {
    "Nombre_Victima": "Rayen Ignacia Meñaco Martínez",
    "Edad": "12",
    "Ciudad": "Calbuco",
    "Region": "Los Lagos",
    "Fecha": "4/26/16",
    "Tipo": "",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Adalita Beatriz Ojeda Leiva",
    "Edad": "44",
    "Ciudad": "La Granja",
    "Region": "Metropolitana",
    "Fecha": "5/8/16",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Beatriz Solange López Álvarez",
    "Edad": "54",
    "Ciudad": "Pudahuel",
    "Region": "Metropolitana",
    "Fecha": "5/12/16",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Litzi Odalis Parrales",
    "Edad": "30",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "5/20/16",
    "Tipo": "",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Velia Manríquez Padilla",
    "Edad": "45",
    "Ciudad": "Paine",
    "Region": "Metropolitana",
    "Fecha": "5/26/16",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Vanessa Allison Gamboa Gutierrez",
    "Edad": "18",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "5/30/16",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Mariela García Vera",
    "Edad": "24",
    "Ciudad": "Punta Arenas",
    "Region": "Magallanes",
    "Fecha": "6/4/16",
    "Tipo": "",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Nicole Saavedra Bahamondes",
    "Edad": "23",
    "Ciudad": "Limache",
    "Region": "Valparaíso",
    "Fecha": "6/25/16",
    "Tipo": "",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Silvia Paola Díaz Bastidas",
    "Edad": "34",
    "Ciudad": "Melipilla",
    "Region": "Metropolitana",
    "Fecha": "7/17/16",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Sara Abrego Aguilera",
    "Edad": "15",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "7/24/16",
    "Tipo": "",
    "Relación Víctima": "Padrastro"
  },
  {
    "Nombre_Victima": "Deiny Julisa Torres Laura",
    "Edad": "24",
    "Ciudad": "Calama",
    "Region": "Antofagasta",
    "Fecha": "7/27/16",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Claudia Cristel Martel Torres",
    "Edad": "3",
    "Ciudad": "Calama",
    "Region": "Antofagasta",
    "Fecha": "7/27/16",
    "Tipo": "",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "Lourdes Gisela Ferraro Gordillo",
    "Edad": "30",
    "Ciudad": "Concepción",
    "Region": "Biobío",
    "Fecha": "8/10/16",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Jenery Rayén Carrasco González",
    "Edad": "18",
    "Ciudad": "Talca",
    "Region": "El Maule",
    "Fecha": "8/16/16",
    "Tipo": "",
    "Relación Víctima": "Amigo"
  },
  {
    "Nombre_Victima": "Nadia Valeska Pardo Cabezas",
    "Edad": "30",
    "Ciudad": "Peñaflor",
    "Region": "Metropolitana",
    "Fecha": "8/20/16",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Claudia Andrea Cruzat Poblete",
    "Edad": "46",
    "Ciudad": "Laja",
    "Region": "Biobío",
    "Fecha": "8/23/16",
    "Tipo": "",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Yetzabel Nataly Bustos González",
    "Edad": "28",
    "Ciudad": "Renca",
    "Region": "Metropolitana",
    "Fecha": "9/3/16",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Mariela del Carmen Fernández",
    "Edad": "34",
    "Ciudad": "Hualqui",
    "Region": "Biobío",
    "Fecha": "9/7/16",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "María Edita Nilo Henríquez",
    "Edad": "34",
    "Ciudad": "Cerro Navia",
    "Region": "Metropolitana",
    "Fecha": "9/10/16",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Lorena Jara Letelier",
    "Edad": "45",
    "Ciudad": "Villa Alemana",
    "Region": "Valparaíso",
    "Fecha": "9/19/16",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Doris Muriel Andaur Hidalgo",
    "Edad": "24",
    "Ciudad": "La Cisterna",
    "Region": "Metropolitana",
    "Fecha": "10/7/16",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Cristal Alejandra Muñoz Ampuero",
    "Edad": "22",
    "Ciudad": "Colina",
    "Region": "Metropolitana",
    "Fecha": "10/9/16",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Ana Maribel Gallardo Saldivia",
    "Edad": "24",
    "Ciudad": "Fresia",
    "Region": "Los Lagos",
    "Fecha": "10/10/16",
    "Tipo": "",
    "Relación Víctima": "Hermano"
  },
  {
    "Nombre_Victima": "Carla Vanesa Medina Meza",
    "Edad": "23",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "10/12/16",
    "Tipo": "",
    "Relación Víctima": "Ex cónyugue"
  },
  {
    "Nombre_Victima": "Florencia Aguirre",
    "Edad": "10",
    "Ciudad": "Coyhaique",
    "Region": "Aysén",
    "Fecha": "10/14/16",
    "Tipo": "",
    "Relación Víctima": "Padrastro"
  },
  {
    "Nombre_Victima": "Bernardita de Lourdes Martínez Soto",
    "Edad": "45",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "10/17/16",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Patricia Ester Quiroga Letelier",
    "Edad": "51",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "10/20/16",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Claudia Andrea Núñez Palacios",
    "Edad": "27",
    "Ciudad": "El Monte",
    "Region": "Metropolitana",
    "Fecha": "10/24/16",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Juana del Carmen Saldivia Barrientos",
    "Edad": "41",
    "Ciudad": "Lanco",
    "Region": "Los Ríos",
    "Fecha": "10/27/16",
    "Tipo": "",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Flor del Carmen Nahuel Villagrán",
    "Edad": "54",
    "Ciudad": "La Florida",
    "Region": "Metropolitana",
    "Fecha": "10/29/16",
    "Tipo": "",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Rina del Carmen Rivera",
    "Edad": "95",
    "Ciudad": "Vilcún",
    "Region": "Araucanía",
    "Fecha": "11/3/16",
    "Tipo": "",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Johana Abigail Soto Alarcón",
    "Edad": "24",
    "Ciudad": "Quillota",
    "Region": "Valparaíso",
    "Fecha": "11/4/16",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Nancy Irene Peña Licanan",
    "Edad": "41",
    "Ciudad": "Lautaro",
    "Region": "Araucanía",
    "Fecha": "11/8/16",
    "Tipo": "",
    "Relación Víctima": "Sobrino"
  },
  {
    "Nombre_Victima": "Elizabeth Vilma Uribe Troncoso",
    "Edad": "54",
    "Ciudad": "Coronel",
    "Region": "Biobío",
    "Fecha": "11/15/16",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Mariela del Carmen Bolvarán Bugueño",
    "Edad": "57",
    "Ciudad": "Calama",
    "Region": "Antofagasta",
    "Fecha": "11/22/16",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "María Sebastiana Fernandez Cort",
    "Edad": "78",
    "Ciudad": "Ñuñoa",
    "Region": "Metropolitana",
    "Fecha": "11/22/16",
    "Tipo": "",
    "Relación Víctima": "Cónyugue"
  },
  {
    "Nombre_Victima": "Marta Alicia Bustos Lobos",
    "Edad": "29",
    "Ciudad": "Huasco",
    "Region": "Atacama",
    "Fecha": "12/20/16",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Yini Paola Paz Sandoval Reyes",
    "Edad": "28",
    "Ciudad": "Temuco",
    "Region": "Araucanía",
    "Fecha": "12/29/16",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Sonia Mónica Riquelme Alvarado",
    "Edad": "69",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "1/15/17",
    "Tipo": "",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Camila Yáñez Briceño",
    "Edad": "28",
    "Ciudad": "Maipú",
    "Region": "Metropolitana",
    "Fecha": "1/16/17",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Iris de las Mercedes Peralta Moraga",
    "Edad": "63",
    "Ciudad": "San Antonio",
    "Region": "Valparaíso",
    "Fecha": "1/20/17",
    "Tipo": "",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Silvia Ninaja Condori",
    "Edad": "38",
    "Ciudad": "Melipilla",
    "Region": "Metropolitana",
    "Fecha": "1/21/17",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Liliana Hurtado Echeverry",
    "Edad": "49",
    "Ciudad": "San Ramón",
    "Region": "Metropolitana",
    "Fecha": "1/29/17",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Ruth María Erices Aniñir",
    "Edad": "35",
    "Ciudad": "Coyhaique",
    "Region": "Aysén",
    "Fecha": "2/5/17",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Carmen Mónica Vásquez Contreras",
    "Edad": "42",
    "Ciudad": "San Javier",
    "Region": "El Maule",
    "Fecha": "2/5/17",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Maribel del Carmen Gormaz Ibacache",
    "Edad": "26",
    "Ciudad": "San Bernardo",
    "Region": "Metropolitana",
    "Fecha": "2/8/17",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Jaritza Figueroa Vargas",
    "Edad": "20",
    "Ciudad": "La Pintana",
    "Region": "Metropolitana",
    "Fecha": "2/15/17",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Andrea del Pilar Riquelme Toledo",
    "Edad": "34",
    "Ciudad": "Pemuco",
    "Region": "Biobío",
    "Fecha": "2/23/17",
    "Tipo": "",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Daniela Valentina Reyes Espejo",
    "Edad": "17",
    "Ciudad": "La Serena",
    "Region": "Coquimbo",
    "Fecha": "2/28/17",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Susana Estefanía Sanhueza Aravena",
    "Edad": "22",
    "Ciudad": "San Felipe",
    "Region": "Valparaíso",
    "Fecha": "3/7/17",
    "Tipo": "",
    "Relación Víctima": "Amigo"
  },
  {
    "Nombre_Victima": "Giannina Alejandra Rioseco Bobadilla",
    "Edad": "24",
    "Ciudad": "Molina",
    "Region": "El Maule",
    "Fecha": "3/15/17",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Marisol Vergara Vergara",
    "Edad": "46",
    "Ciudad": "Talcahuano",
    "Region": "Biobío",
    "Fecha": "3/17/17",
    "Tipo": "",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "María Godoy Labbé",
    "Edad": "80",
    "Ciudad": "La Florida",
    "Region": "Metropolitana",
    "Fecha": "3/18/17",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Ximena Fabiola Cortés Rojas",
    "Edad": "32",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "3/22/17",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Ámparo De Lourdes Lagos Martínez",
    "Edad": "32",
    "Ciudad": "Pudahuel",
    "Region": "Metropolitana",
    "Fecha": "3/29/17",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Ruth Noemí Beroíza Anabalón",
    "Edad": "48",
    "Ciudad": "San Bernardo",
    "Region": "Metropolitana",
    "Fecha": "3/30/17",
    "Tipo": "",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Raquel Edelmira Einfalt Fiss",
    "Edad": "58",
    "Ciudad": "Limache",
    "Region": "Valparaíso",
    "Fecha": "3/31/17",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Lorena Elizabeth Carrasco Aguilera",
    "Edad": "33",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "4/3/17",
    "Tipo": "",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Paola Andrea Villalobos Mancilla",
    "Edad": "43",
    "Ciudad": "Dalcahue",
    "Region": "Los Lagos",
    "Fecha": "4/6/17",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Carolina Ignacia Lecaros Lorca",
    "Edad": "21",
    "Ciudad": "Rancagua",
    "Region": "O'Higgins",
    "Fecha": "4/11/17",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Gladys Adriana González Osorio",
    "Edad": "39",
    "Ciudad": "Tomé",
    "Region": "Biobío",
    "Fecha": "4/16/17",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Daisy Ester Millahual Parra",
    "Edad": "23",
    "Ciudad": "Cañete",
    "Region": "Biobío",
    "Fecha": "5/1/17",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "María Elena Droguett Aguilar",
    "Edad": "67",
    "Ciudad": "Rancagua",
    "Region": "O'Higgins",
    "Fecha": "5/2/17",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Alicia Lourdes Cepeda Rojas",
    "Edad": "64",
    "Ciudad": "Coquimbo",
    "Region": "Coquimbo",
    "Fecha": "5/5/17",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Marjorie Solange Varas Cataldo",
    "Edad": "38",
    "Ciudad": "Llay Llay",
    "Region": "Valparaíso",
    "Fecha": "5/11/17",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Magyory Araceli Ponce Barrios",
    "Edad": "20",
    "Ciudad": "Paredones",
    "Region": "O'Higgins",
    "Fecha": "5/13/17",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Karen Daisy Michea Valdebenito",
    "Edad": "32",
    "Ciudad": "San Francisco de Mostazal",
    "Region": "O'Higgins",
    "Fecha": "5/14/17",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Carmen Altamirano Ibarra",
    "Edad": "28",
    "Ciudad": "Valdivia",
    "Region": "Los Ríos",
    "Fecha": "5/16/17",
    "Tipo": "",
    "Relación Víctima": "Cliente sexual"
  },
  {
    "Nombre_Victima": "Josefina Allilef Huenchumil",
    "Edad": "68",
    "Ciudad": "Freire",
    "Region": "Araucanía",
    "Fecha": "5/22/17",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Marita Ortega Sánchez",
    "Edad": "63",
    "Ciudad": "Entre Lagos",
    "Region": "Los Lagos",
    "Fecha": "5/27/17",
    "Tipo": "",
    "Relación Víctima": "Ex yerno"
  },
  {
    "Nombre_Victima": "Graciela Martínez Ramírez",
    "Edad": "87",
    "Ciudad": "Carahue",
    "Region": "Araucanía",
    "Fecha": "6/3/17",
    "Tipo": "",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "María Julissa Sánchez Cotrina",
    "Edad": "40",
    "Ciudad": "Recoleta",
    "Region": "Metropolitana",
    "Fecha": "6/5/17",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Roxana Evelyn Bravo Inostroza",
    "Edad": "36",
    "Ciudad": "Padre Las Casas",
    "Region": "Araucanía",
    "Fecha": "6/5/17",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Bexzabed Lucelinda Castro Bravo",
    "Edad": "17",
    "Ciudad": "Padre Las Casas",
    "Region": "Araucanía",
    "Fecha": "6/5/17",
    "Tipo": "",
    "Relación Víctima": "Ex padrastro"
  },
  {
    "Nombre_Victima": "Paulina del Carmen Varela Viedma",
    "Edad": "30",
    "Ciudad": "San Bernardo",
    "Region": "Metropolitana",
    "Fecha": "6/13/17",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "María Elena Cárdenas Mancilla",
    "Edad": "50",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "6/24/17",
    "Tipo": "",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Millén Alejandra Cancino Soto",
    "Edad": "4",
    "Ciudad": "Tucapel",
    "Region": "Biobío",
    "Fecha": "7/8/17",
    "Tipo": "",
    "Relación Víctima": "Conviviente de la abuela"
  },
  {
    "Nombre_Victima": "Fidelina del Carmén Robledo Villalobos",
    "Edad": "43",
    "Ciudad": "La Serena",
    "Region": "Coquimbo",
    "Fecha": "7/28/17",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Ana María Villaroel",
    "Edad": "26",
    "Ciudad": "Providencia",
    "Region": "Metropolitana",
    "Fecha": "8/2/17",
    "Tipo": "",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Yanina Francesca Bravo Benavides",
    "Edad": "32",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "8/10/17",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Margarita Angélica Henríquez Beltrán",
    "Edad": "48",
    "Ciudad": "Lota",
    "Region": "Biobío",
    "Fecha": "8/16/17",
    "Tipo": "",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Andrea Mazzo Moncada",
    "Edad": "15",
    "Ciudad": "Quinta Normal",
    "Region": "Metropolitana",
    "Fecha": "8/26/17",
    "Tipo": "",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Carolina Andrea Velásquez Jacobsen",
    "Edad": "38",
    "Ciudad": "El Bosque",
    "Region": "Metropolitana",
    "Fecha": "8/26/17",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Jacqueline del Tránsito Soto Fuentes",
    "Edad": "43",
    "Ciudad": "Molina",
    "Region": "El Maule",
    "Fecha": "8/27/17",
    "Tipo": "",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Vania Zúñiga Latapiatt",
    "Edad": "27",
    "Ciudad": "Viña del Mar",
    "Region": "Valparaíso",
    "Fecha": "8/28/17",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Miriam Rosalva Gómez Bejarano",
    "Edad": "23",
    "Ciudad": "Iquique",
    "Region": "Tarapacá",
    "Fecha": "8/29/17",
    "Tipo": "",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Giselle Solange Olivares Tiznado",
    "Edad": "22",
    "Ciudad": "Cochrane",
    "Region": "Aysén",
    "Fecha": "8/31/17",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Danitza Annegrete Buxton Barra",
    "Edad": "20",
    "Ciudad": "Gorbea",
    "Region": "Araucanía",
    "Fecha": "9/2/17",
    "Tipo": "",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Rosa Ester Bahamondes Mardones",
    "Edad": "36",
    "Ciudad": "San Fernando",
    "Region": "O'Higgins",
    "Fecha": "9/6/17",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Isidora Karen González Rojas",
    "Edad": "23",
    "Ciudad": "Melipilla",
    "Region": "Metropolitana",
    "Fecha": "9/7/17",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Ana Lorena Acosta Esquivel",
    "Edad": "27",
    "Ciudad": "Illapel",
    "Region": "Coquimbo",
    "Fecha": "9/9/17",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Mónica Alexandra Huertas Araya",
    "Edad": "36",
    "Ciudad": "Ñuñoa",
    "Region": "Metropolitana",
    "Fecha": "10/3/17",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Regina del Carmen Pichún Puebla",
    "Edad": "32",
    "Ciudad": "San José de la Mariquina",
    "Region": "Los Ríos",
    "Fecha": "10/4/17",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Francis Aguilar Marín",
    "Edad": "50",
    "Ciudad": "La Serena",
    "Region": "Coquimbo",
    "Fecha": "10/13/17",
    "Tipo": "",
    "Relación Víctima": "Ex yerno"
  },
  {
    "Nombre_Victima": "Jacqueline Carmen Oliva Carrillo",
    "Edad": "51",
    "Ciudad": "Chonchi",
    "Region": "Los Lagos",
    "Fecha": "10/18/17",
    "Tipo": "",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Carola Ariztía Fuenzalida",
    "Edad": "42",
    "Ciudad": "Chimbarongo",
    "Region": "O'Higgins",
    "Fecha": "10/20/17",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Daniela Andrea Mardones Alvares",
    "Edad": "27",
    "Ciudad": "Coyhaique",
    "Region": "Aysén",
    "Fecha": "10/21/17",
    "Tipo": "",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Muriel Francisca Mazuelos Valenzuela",
    "Edad": "18",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "10/30/17",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Susjes de la Chiquinquira Mejías Díaz",
    "Edad": "26",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "11/4/17",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "María Esperanza Alcaino Navarro",
    "Edad": "13",
    "Ciudad": "San Joaquín",
    "Region": "Metropolitana",
    "Fecha": "11/7/17",
    "Tipo": "",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Carolina Andrea Ramirez Véliz",
    "Edad": "49",
    "Ciudad": "San Bernardo",
    "Region": "Metropolitana",
    "Fecha": "11/10/17",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Karina Elizabeth Uribe Uribe",
    "Edad": "31",
    "Ciudad": "Valdivia",
    "Region": "Los Ríos",
    "Fecha": "11/19/17",
    "Tipo": "",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Lisette Valentina Paz Ramos Vásquez",
    "Edad": "26",
    "Ciudad": "Lo Espejo",
    "Region": "Metropolitana",
    "Fecha": "11/26/17",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Verónica Ester Urrutia Donoso",
    "Edad": "49",
    "Ciudad": "Macul",
    "Region": "Metropolitana",
    "Fecha": "11/26/17",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Yolanda Stela Jaramillo Naihual",
    "Edad": "37",
    "Ciudad": "Liquiñe",
    "Region": "Los Ríos",
    "Fecha": "11/29/17",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "María Angélica Sandoval Sandoval",
    "Edad": "36",
    "Ciudad": "San Ignacio",
    "Region": "Ñuble",
    "Fecha": "12/8/17",
    "Tipo": "",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Analía Isabel Pino Sepúlveda",
    "Edad": "22",
    "Ciudad": "Coihueco",
    "Region": "Ñuble",
    "Fecha": "12/31/17",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Antonia Isadora Garros Hermosilla",
    "Edad": "25",
    "Ciudad": "Concepción",
    "Region": "Biobío",
    "Fecha": "2/7/17",
    "Tipo": "Suicidio Femicida",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Damaris Angélica Coronado Riveros",
    "Edad": "33",
    "Ciudad": "La Serena",
    "Region": "Coquimbo",
    "Fecha": "1/1/18",
    "Tipo": "Disparo",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Bernardita Valderrama Huenulef",
    "Edad": "24",
    "Ciudad": "La Florida",
    "Region": "Metropolitana",
    "Fecha": "1/3/18",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Lucía del Carmen Parra Mendoza",
    "Edad": "",
    "Ciudad": "La Pintana",
    "Region": "Metropolitana",
    "Fecha": "1/10/18",
    "Tipo": "Disparo",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Marisol Isabel López Jorquera",
    "Edad": "19",
    "Ciudad": "San Vicente de Tagua Tagua",
    "Region": "O'Higgins",
    "Fecha": "1/10/18",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Silvia Roxelia Caro Alarcón",
    "Edad": "",
    "Ciudad": "Labranza",
    "Region": "Araucanía",
    "Fecha": "1/16/18",
    "Tipo": "Golpes, Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Sophie",
    "Edad": "1",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "1/25/18",
    "Tipo": "Asfixia",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "María Luz Insunza Correa",
    "Edad": "45",
    "Ciudad": "Florida",
    "Region": "Biobío",
    "Fecha": "1/27/18",
    "Tipo": "Disparo",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Georgina Berroa Hernández",
    "Edad": "34",
    "Ciudad": "Concepción",
    "Region": "Biobío",
    "Fecha": "2/5/18",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Fernanda Damaris Maciel Correa",
    "Edad": "21",
    "Ciudad": "Conchalí",
    "Region": "Metropolitana",
    "Fecha": "2/10/18",
    "Tipo": "Asfixia",
    "Relación Víctima": "Amigo"
  },
  {
    "Nombre_Victima": "Ximena Andrea Candia Villaroel",
    "Edad": "30",
    "Ciudad": "Paillaco",
    "Region": "Los Ríos",
    "Fecha": "2/18/18",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Alexis Isabel Chandía Parra",
    "Edad": "17",
    "Ciudad": "La Pintana",
    "Region": "Metropolitana",
    "Fecha": "3/15/18",
    "Tipo": "Golpes",
    "Relación Víctima": "Hermano; Cuñada"
  },
  {
    "Nombre_Victima": "Rosa Ester Vilches Navarro",
    "Edad": "59",
    "Ciudad": "Coquimbo",
    "Region": "Coquimbo",
    "Fecha": "4/26/18",
    "Tipo": "Golpes, Apuñalada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Ámbar Lezcano",
    "Edad": "1",
    "Ciudad": "Los Andes",
    "Region": "Valparaíso",
    "Fecha": "4/28/18",
    "Tipo": "Golpes",
    "Relación Víctima": "Pareja de la tía"
  },
  {
    "Nombre_Victima": "Jennifer Rojas Rojas",
    "Edad": "37",
    "Ciudad": "La Calera",
    "Region": "Valparaíso",
    "Fecha": "4/28/18",
    "Tipo": "Golpes",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Sonia del Carmen Avendaño Elgueta",
    "Edad": "65",
    "Ciudad": "Frutillar",
    "Region": "Los Lagos",
    "Fecha": "5/5/18",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Berta Vargas Quilodrán",
    "Edad": "54",
    "Ciudad": "Los Ángeles",
    "Region": "Biobío",
    "Fecha": "5/9/18",
    "Tipo": "Disparo",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Guillermina del Carmen Huenul Marín",
    "Edad": "65",
    "Ciudad": "Perquenco",
    "Region": "La Araucanía",
    "Fecha": "5/21/18",
    "Tipo": "Golpes, Asfixia",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Felisa González Pichipillán",
    "Edad": "42",
    "Ciudad": "Villarrica",
    "Region": "La Araucanía",
    "Fecha": "5/22/18",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Liliana Aurora Gutiérrez Soto",
    "Edad": "36",
    "Ciudad": "Las Cabras",
    "Region": "O'Higgins",
    "Fecha": "5/26/18",
    "Tipo": "Disparo",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "María José Hurtado Ortiz",
    "Edad": "33",
    "Ciudad": "Ñuñoa",
    "Region": "Metropolitana",
    "Fecha": "5/27/18",
    "Tipo": "",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Miralda Moise",
    "Edad": "29",
    "Ciudad": "San Ramón",
    "Region": "Metropolitana",
    "Fecha": "5/29/18",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Catherine Vásquez Muñoz",
    "Edad": "28",
    "Ciudad": "Longaví",
    "Region": "El Maule",
    "Fecha": "5/29/18",
    "Tipo": "Asfixia",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Diana Rosa López Yallico",
    "Edad": "49",
    "Ciudad": "Peñalolén",
    "Region": "Metropolitana",
    "Fecha": "6/3/18",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Nelly Isabel Malo Ascencio",
    "Edad": "35",
    "Ciudad": "Pudahuel",
    "Region": "Metropolitana",
    "Fecha": "6/10/18",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Soraya Pamela Sepúlveda Riquelme",
    "Edad": "29",
    "Ciudad": "Concepción",
    "Region": "Biobío",
    "Fecha": "6/11/18",
    "Tipo": "",
    "Relación Víctima": "Ex cónyugue"
  },
  {
    "Nombre_Victima": "Carolina Ivon Donoso Campos",
    "Edad": "53",
    "Ciudad": "Maipú",
    "Region": "Metropolitana",
    "Fecha": "6/11/18",
    "Tipo": "",
    "Relación Víctima": "Ex pareja de la hija"
  },
  {
    "Nombre_Victima": "Gabriela Paz Alcaíno Donoso",
    "Edad": "17",
    "Ciudad": "Maipú",
    "Region": "Metropolitana",
    "Fecha": "6/11/18",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Gertrudis Martínez Farías",
    "Edad": "50",
    "Ciudad": "Calle Larga",
    "Region": "Valparaíso",
    "Fecha": "6/12/18",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Dayanara Constanza Martínez Cárcamo",
    "Edad": "19",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "6/17/18",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Patricia Chailán Ibacache",
    "Edad": "39",
    "Ciudad": "Renca",
    "Region": "Metropolitana",
    "Fecha": "6/21/18",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Mercedes Del Carmen Vera Arévalo",
    "Edad": "52",
    "Ciudad": "Carahue",
    "Region": "La Araucanía",
    "Fecha": "7/5/18",
    "Tipo": "",
    "Relación Víctima": "Ex cónyugue"
  },
  {
    "Nombre_Victima": "Almendra",
    "Edad": "3",
    "Ciudad": "La Florida",
    "Region": "Metropolitana",
    "Fecha": "7/11/18",
    "Tipo": "",
    "Relación Víctima": "Pareja de la madre"
  },
  {
    "Nombre_Victima": "Leonor Rojas González",
    "Edad": "26",
    "Ciudad": "Diego de Almagro",
    "Region": "Atacama",
    "Fecha": "7/11/18",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Elsa Ayala Cortéz",
    "Edad": "88",
    "Ciudad": "Conchalí",
    "Region": "Metropolitana",
    "Fecha": "7/21/18",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Anilett Carolina Soto Cabrera",
    "Edad": "33",
    "Ciudad": "La Cisterna",
    "Region": "Metropolitana",
    "Fecha": "7/29/18",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "María Pablo García",
    "Edad": "20",
    "Ciudad": "San Pedro de Atacama",
    "Region": "Antofagasta",
    "Fecha": "8/5/18",
    "Tipo": "",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Nancy Araya Ruiz",
    "Edad": "44",
    "Ciudad": "Quilpué",
    "Region": "Valparaíso",
    "Fecha": "8/10/18",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Sara Riquelme Avilés",
    "Edad": "25",
    "Ciudad": "Nueva Imperial",
    "Region": "La Araucanía",
    "Fecha": "8/12/18",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Deyanira Marte",
    "Edad": "42",
    "Ciudad": "La Ligua",
    "Region": "Valparaíso",
    "Fecha": "8/22/18",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Elba Magdalena Roa Fica",
    "Edad": "71",
    "Ciudad": "Coronel",
    "Region": "Biobío",
    "Fecha": "8/30/18",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Rosa Blanca Martínez Duarte",
    "Edad": "58",
    "Ciudad": "El Bosque",
    "Region": "Metropolitana",
    "Fecha": "9/25/18",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Herminda Yanet Núñez Niclouse",
    "Edad": "46",
    "Ciudad": "Molina",
    "Region": "El Maule",
    "Fecha": "10/1/18",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Tatiana Judith Caniulaf Velásquez",
    "Edad": "29",
    "Ciudad": "Paillaco",
    "Region": "Los Ríos",
    "Fecha": "10/8/18",
    "Tipo": "",
    "Relación Víctima": "Amigo"
  },
  {
    "Nombre_Victima": "María Bernarda Cuevas Sandoval",
    "Edad": "56",
    "Ciudad": "Romeral",
    "Region": "El Maule",
    "Fecha": "10/9/18",
    "Tipo": "",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Claudia Jorquera Piña",
    "Edad": "25",
    "Ciudad": "Valparaíso",
    "Region": "Valparaíso",
    "Fecha": "10/18/18",
    "Tipo": "",
    "Relación Víctima": "Cuñado"
  },
  {
    "Nombre_Victima": "Gloria Edita Hueramán Lincopi",
    "Edad": "50",
    "Ciudad": "San José de la Mariquina",
    "Region": "Los Ríos",
    "Fecha": "10/22/18",
    "Tipo": "",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Luisa Ana María Alvarez",
    "Edad": "49",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "11/2/18",
    "Tipo": "",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Paola Andrea Alvarado Cortez",
    "Edad": "34",
    "Ciudad": "Curacautín",
    "Region": "Araucanía",
    "Fecha": "11/9/18",
    "Tipo": "",
    "Relación Víctima": "Cliente"
  },
  {
    "Nombre_Victima": "Etelvina Crucilda Huentequeo Vidal",
    "Edad": "67",
    "Ciudad": "Valdivia",
    "Region": "Los Ríos",
    "Fecha": "11/14/18",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Nancy Muñoz Villalobos",
    "Edad": "64",
    "Ciudad": "San Javier",
    "Region": "El Maule",
    "Fecha": "11/17/18",
    "Tipo": "",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Liliana Olmos Vargas",
    "Edad": "42",
    "Ciudad": "La Pintana",
    "Region": "Metropolitana",
    "Fecha": "11/24/18",
    "Tipo": "",
    "Relación Víctima": "Desconocido; Desconocido"
  },
  {
    "Nombre_Victima": "María Paulina del Carmen Castro Mejía",
    "Edad": "32",
    "Ciudad": "Alto Hospicio",
    "Region": "Tarapacá",
    "Fecha": "11/26/18",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Catalina Salazar León",
    "Edad": "28",
    "Ciudad": "Colina",
    "Region": "Metropolitana",
    "Fecha": "11/27/18",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Nury Briones Torrealba",
    "Edad": "61",
    "Ciudad": "Huechuraba",
    "Region": "Metropolitana",
    "Fecha": "12/4/18",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Patricia del Carmen Catrilaf Curipan",
    "Edad": "44",
    "Ciudad": "Panguipulli",
    "Region": "Los Ríos",
    "Fecha": "12/12/18",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Rita Fidelina Machuca Ramírez",
    "Edad": "35",
    "Ciudad": "Molina",
    "Region": "El Maule",
    "Fecha": "12/15/18",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Marjorie Ayala Farías",
    "Edad": "51",
    "Ciudad": "Buin",
    "Region": "Metropolitana",
    "Fecha": "12/20/18",
    "Tipo": "",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Felisa Altamirano Peralta",
    "Edad": "79",
    "Ciudad": "Cabildo",
    "Region": "Valparaíso",
    "Fecha": "12/28/18",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "María Edith Barría Mansilla",
    "Edad": "56",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "1/1/19",
    "Tipo": "Golpes con objeto contundente",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Sandra Pozo Rivas",
    "Edad": "49",
    "Ciudad": "Rancagua",
    "Region": "O'Higgins",
    "Fecha": "1/2/19",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Laura Beatriz Gálvez Videla",
    "Edad": "47",
    "Ciudad": "Los Andes",
    "Region": "Valparaíso",
    "Fecha": "1/5/19",
    "Tipo": "Golpes con objeto contundente",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Aylin Fuentes Álvarez",
    "Edad": "18",
    "Ciudad": "Talca",
    "Region": "El Maule",
    "Fecha": "1/6/19",
    "Tipo": "Golpes",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Sajuste Deliseanne",
    "Edad": "26",
    "Ciudad": "El Quisco",
    "Region": "Valparaíso",
    "Fecha": "1/8/19",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Rosa Ester Cañulef Paillamanque",
    "Edad": "38",
    "Ciudad": "Osorno",
    "Region": "Los Lagos",
    "Fecha": "1/14/19",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Sussy Montalván",
    "Edad": "50",
    "Ciudad": "Copiapó",
    "Region": "Atacama",
    "Fecha": "1/18/19",
    "Tipo": "Asfixia; Quemada",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "MEDIOS NO INFORMAN",
    "Edad": "36",
    "Ciudad": "Concon",
    "Region": "Valparaíso",
    "Fecha": "1/26/19",
    "Tipo": "Disparo",
    "Relación Víctima": "Cliente sexual"
  },
  {
    "Nombre_Victima": "Silvana Marisol Garrido Urdiles",
    "Edad": "25",
    "Ciudad": "Recoleta",
    "Region": "Metropolitana",
    "Fecha": "1/27/19",
    "Tipo": "Lanzada desde balcón",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Lissete Dayana Riffo Cayupan",
    "Edad": "23",
    "Ciudad": "Lebu",
    "Region": "Biobío",
    "Fecha": "2/1/19",
    "Tipo": "Degollada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Marina Cabrera Almendras",
    "Edad": "24",
    "Ciudad": "Copiapó",
    "Region": "Atacama",
    "Fecha": "2/5/19",
    "Tipo": "",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Scarlett Solange Díaz Llaitul",
    "Edad": "19",
    "Ciudad": "San Juan de la Costa",
    "Region": "Los Lagos",
    "Fecha": "2/12/19",
    "Tipo": "Ahogada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Mónica del Carmen Paillacar Paillacar",
    "Edad": "48",
    "Ciudad": "Calbuco",
    "Region": "Los Lagos",
    "Fecha": "2/26/19",
    "Tipo": "Asfixiada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Laura Sonia Buendía Aguilar",
    "Edad": "50",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "2/27/19",
    "Tipo": "",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Carolina Muñoz Rebolledo",
    "Edad": "41",
    "Ciudad": "Quintero",
    "Region": "Valparaíso",
    "Fecha": "3/7/19",
    "Tipo": "Disparo",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Natividad Barcaza Faúndez",
    "Edad": "46",
    "Ciudad": "Recoleta",
    "Region": "Metropolitana",
    "Fecha": "3/8/19",
    "Tipo": "Disparo",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Marta Norambuena Cárdenas",
    "Edad": "58",
    "Ciudad": "Laja",
    "Region": "Biobío",
    "Fecha": "3/23/19",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Bernardita del Pilar Pedraza Gutiérrez",
    "Edad": "35",
    "Ciudad": "Trehuaco",
    "Region": "Ñuble",
    "Fecha": "4/12/19",
    "Tipo": "Disparo",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Wendy del Carmen González Pérez",
    "Edad": "46",
    "Ciudad": "Cerro Navia",
    "Region": "Metropolitana",
    "Fecha": "4/17/19",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Joyce Yanette Tello Avilés",
    "Edad": "48",
    "Ciudad": "Arica",
    "Region": "Arica y Parinacota",
    "Fecha": "4/19/19",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Carla Fernanda González Vásquez",
    "Edad": "26",
    "Ciudad": "Los Lagos",
    "Region": "Los Lagos",
    "Fecha": "4/24/19",
    "Tipo": "Golpes",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Vesna Philbey",
    "Edad": "35",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "4/26/19",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Mia Palma Espinoza",
    "Edad": "27",
    "Ciudad": "San Felipe",
    "Region": "O'Higgins",
    "Fecha": "4/29/19",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Estefanía del Carmen Martínez Pérez",
    "Edad": "27",
    "Ciudad": "Providencia",
    "Region": "Metropolitana",
    "Fecha": "5/6/19",
    "Tipo": "",
    "Relación Víctima": "Amigo"
  },
  {
    "Nombre_Victima": "María Evelyn Saavedra Mondocorro",
    "Edad": "29",
    "Ciudad": "Iquique",
    "Region": "Tarapacá",
    "Fecha": "5/7/19",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Lorena Patricia Quidenao Gallardo",
    "Edad": "47",
    "Ciudad": "Collipulli",
    "Region": "Araucanía",
    "Fecha": "5/7/19",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Danae Millaray Marianela Benavides Matus",
    "Edad": "13",
    "Ciudad": "San José de la Mariquina",
    "Region": "Los Ríos",
    "Fecha": "5/14/19",
    "Tipo": "",
    "Relación Víctima": "Ex cuñado"
  },
  {
    "Nombre_Victima": "Sandra Etelvina Matus Ramírez",
    "Edad": "48",
    "Ciudad": "San José de la Mariquina",
    "Region": "Los Ríos",
    "Fecha": "5/14/19",
    "Tipo": "",
    "Relación Víctima": "Ex yerno"
  },
  {
    "Nombre_Victima": "Mariela Naigual Pinol",
    "Edad": "42",
    "Ciudad": "San Juan de la Costa",
    "Region": "Los Lagos",
    "Fecha": "5/15/19",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Patricia Raquel Silva Leal",
    "Edad": "59",
    "Ciudad": "San Joaquín",
    "Region": "Metropolitana",
    "Fecha": "6/7/19",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Genoveva del Carmen Reyes Olea",
    "Edad": "26",
    "Ciudad": "Quinta Normal",
    "Region": "Metropolitana",
    "Fecha": "6/16/19",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Yaricza Cáceres Montesinos",
    "Edad": "29",
    "Ciudad": "Chillán",
    "Region": "Ñuble",
    "Fecha": "6/16/19",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Ana María Velásquez Muñoz",
    "Edad": "31",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "6/20/19",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Catalina Álvarez Godoy",
    "Edad": "16",
    "Ciudad": "Copiapó",
    "Region": "Atacama",
    "Fecha": "6/23/19",
    "Tipo": "",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Lisbeth Apurani Paniagua",
    "Edad": "23",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "6/23/19",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Hellen Barra Ortega",
    "Edad": "20",
    "Ciudad": "Chimbarongo",
    "Region": "O'Higgins",
    "Fecha": "6/26/19",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "E.C.A.T. (MEDIOS NO INFORMAN)",
    "Edad": "85",
    "Ciudad": "Salamanca",
    "Region": "Coquimbo",
    "Fecha": "7/7/19",
    "Tipo": "",
    "Relación Víctima": "Sobrino"
  },
  {
    "Nombre_Victima": "Gloria del Carmen Lagos Huenullán",
    "Edad": "51",
    "Ciudad": "Coñaripe",
    "Region": "Los Lagos",
    "Fecha": "7/21/19",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Gabriela Estefanía Contreras Uribe",
    "Edad": "28",
    "Ciudad": "Calama",
    "Region": "Antofagasta",
    "Fecha": "7/23/19",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Deisy Alejandra Inostroza Araya",
    "Edad": "38",
    "Ciudad": "Petorca",
    "Region": "Valparaíso",
    "Fecha": "8/6/19",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Amanda Montserrat López Inostroza",
    "Edad": "1",
    "Ciudad": "Petorca",
    "Region": "Valparaíso",
    "Fecha": "8/6/19",
    "Tipo": "",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "Tiare Castro Cáceres",
    "Edad": "21",
    "Ciudad": "Ovalle",
    "Region": "Coquimbo",
    "Fecha": "8/11/19",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Ethel Liseth Chevez Sánchez",
    "Edad": "25",
    "Ciudad": "La Florida",
    "Region": "Metropolitana",
    "Fecha": "8/12/19",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Leidy Lorena Saavedra Santa",
    "Edad": "25",
    "Ciudad": "Macul",
    "Region": "Metropolitana",
    "Fecha": "8/17/19",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Natalia Scarleth Mella Rodríguez",
    "Edad": "17",
    "Ciudad": "Valdivia",
    "Region": "Los Ríos",
    "Fecha": "8/18/19",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Mireya del Carmen Martínez Maldonado",
    "Edad": "63",
    "Ciudad": "La Florida",
    "Region": "Metropolitana",
    "Fecha": "8/20/19",
    "Tipo": "",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Susana Hernández Chiche",
    "Edad": "31",
    "Ciudad": "La Granja",
    "Region": "Metropolitana",
    "Fecha": "8/30/19",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Carolina Lincán Villegas Viveros",
    "Edad": "29",
    "Ciudad": "Renca",
    "Region": "Metropolitana",
    "Fecha": "9/7/19",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Fahime Andrea Díaz Dervich",
    "Edad": "49",
    "Ciudad": "Arica",
    "Region": "Arica y Parinacota",
    "Fecha": "9/10/19",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "María Cristina Jiménez Orellana",
    "Edad": "44",
    "Ciudad": "Coltauco",
    "Region": "O'Higgins",
    "Fecha": "9/23/19",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Constanza Chandía Rivera",
    "Edad": "25",
    "Ciudad": "Cañete",
    "Region": "Biobío",
    "Fecha": "9/27/19",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Ana Elisa Millan Antileo",
    "Edad": "48",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "10/1/19",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "María José Zambra Cortés",
    "Edad": "30",
    "Ciudad": "La Serena",
    "Region": "Coquimbo",
    "Fecha": "10/19/19",
    "Tipo": "",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Silvia Susana Adasme Soto",
    "Edad": "44",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "10/29/19",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "María Elena Sánchez Soto",
    "Edad": "66",
    "Ciudad": "Valdivia",
    "Region": "Los Ríos",
    "Fecha": "11/5/19",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Christianne Villard",
    "Edad": "31",
    "Ciudad": "San Antonio",
    "Region": "Valparaíso",
    "Fecha": "11/11/19",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Yocelyn Judit Arrué Romero",
    "Edad": "27",
    "Ciudad": "Marchihue",
    "Region": "O'Higgins",
    "Fecha": "11/17/19",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Katherine Fernández Quintero",
    "Edad": "28",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "11/23/19",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Daniela Estefani Vivar Nauto",
    "Edad": "30",
    "Ciudad": "Quellón",
    "Region": "Los Lagos",
    "Fecha": "12/1/19",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Luzminalda Pereira",
    "Edad": "44",
    "Ciudad": "Chanco",
    "Region": "El Maule",
    "Fecha": "12/7/19",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Isabel Margarita Álvarez Solís",
    "Edad": "59",
    "Ciudad": "Padre Hurtado",
    "Region": "Metropolitana",
    "Fecha": "12/15/19",
    "Tipo": "",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Xaviera Constanza Rojas Neira",
    "Edad": "18",
    "Ciudad": "San Bernardo",
    "Region": "Metropolitana",
    "Fecha": "12/15/19",
    "Tipo": "",
    "Relación Víctima": "Conocidos"
  },
  {
    "Nombre_Victima": "Mónica del Carmen Mansilla Muñoz",
    "Edad": "54",
    "Ciudad": "Quinchao",
    "Region": "Los Lagos",
    "Fecha": "12/19/19",
    "Tipo": "Estrangulamiento; Golpes",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Glenda Delgado Cárdenas",
    "Edad": "43",
    "Ciudad": "Punta Arenas",
    "Region": "Magallanes",
    "Fecha": "12/28/19",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Antonia Barra Parra",
    "Edad": "20",
    "Ciudad": "Temuco",
    "Region": "Araucanía",
    "Fecha": "10/13/19",
    "Tipo": "Suicidio Femicida",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Gladys Gallegos Insunza",
    "Edad": "53",
    "Ciudad": "Valdivia",
    "Region": "Los Ríos",
    "Fecha": "1/5/20",
    "Tipo": "Golpe con objeto contundente",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Alejandra Macarena Castro Barahona",
    "Edad": "32",
    "Ciudad": "Requínoa",
    "Region": "O'Higgins",
    "Fecha": "1/10/20",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Uberlinda del Carmen Leiva Orellana",
    "Edad": "59",
    "Ciudad": "Parral",
    "Region": "El Maule",
    "Fecha": "1/13/20",
    "Tipo": "Golpe con hacha",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Karen Alejandra Ramírez Salinas",
    "Edad": "45",
    "Ciudad": "Rosario",
    "Region": "O'Higgins",
    "Fecha": "1/30/20",
    "Tipo": "Golpe con objeto contundente",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Yasna Ivon Bustos Muñoz",
    "Edad": "31",
    "Ciudad": "Maipú",
    "Region": "Metropolitana",
    "Fecha": "2/16/20",
    "Tipo": "Degollada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Ana Pilar Viveros Echeverría",
    "Edad": "47",
    "Ciudad": "Mulchén",
    "Region": "Biobío",
    "Fecha": "2/17/20",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Brenda Vidal",
    "Edad": "23",
    "Ciudad": "Villa Alemana",
    "Region": "Valparaíso",
    "Fecha": "2/22/20",
    "Tipo": "Quemada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Beatriz Esperanza Rosa González Vilches",
    "Edad": "16",
    "Ciudad": "Rengo",
    "Region": "O'Higgins",
    "Fecha": "2/27/20",
    "Tipo": "Disparo",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Tamara Ruiz Villalobos",
    "Edad": "20",
    "Ciudad": "Alto Hospicio",
    "Region": "Tarapacá",
    "Fecha": "2/29/20",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Sara Delfina Gutiérrez Rojas",
    "Edad": "39",
    "Ciudad": "Los Andes",
    "Region": "Valparaíso",
    "Fecha": "3/5/20",
    "Tipo": "Apuñalada, Golpe con objeto contundente",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Elizabeth Noemí Mella Cárcamo",
    "Edad": "54",
    "Ciudad": "Punta Arenas",
    "Region": "Magallanes",
    "Fecha": "3/8/20",
    "Tipo": "Apuñalada, Quemada",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Mariela de las Mercedes Fuentes Lucero",
    "Edad": "39",
    "Ciudad": "San Vicente de Tagua Tagua",
    "Region": "O'Higgins",
    "Fecha": "3/15/20",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Natalia Davison Escobar",
    "Edad": "24",
    "Ciudad": "Colina",
    "Region": "Metropolitana",
    "Fecha": "3/16/20",
    "Tipo": "Golpes, Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Maribel Soledad Mallea Quinzacara",
    "Edad": "26",
    "Ciudad": "Diego de Almagro",
    "Region": "Atacama",
    "Fecha": "3/20/20",
    "Tipo": "Apuñalada, Quemada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Marianela del Carmen Guzmán Ortiz",
    "Edad": "49",
    "Ciudad": "Navidad",
    "Region": "O'Higgins",
    "Fecha": "4/11/20",
    "Tipo": "Disparo",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Viviana de las Nieves Estrada Valenzuela",
    "Edad": "38",
    "Ciudad": "Colina",
    "Region": "Metropolitana",
    "Fecha": "4/22/20",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Ruth Tania Mendoza Mamani",
    "Edad": "19",
    "Ciudad": "Arica",
    "Region": "Arica y Parinacota",
    "Fecha": "4/25/20",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Yulisa Belén Cerda Aguilera",
    "Edad": "22",
    "Ciudad": "La Serena",
    "Region": "Coquimbo",
    "Fecha": "4/28/20",
    "Tipo": "Disparo",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Carmen del Pilar Toro Durán",
    "Edad": "68",
    "Ciudad": "Coronel",
    "Region": "Biobío",
    "Fecha": "5/21/20",
    "Tipo": "Golpes",
    "Relación Víctima": "Se investiga"
  },
  {
    "Nombre_Victima": "Gladys Quezada Rojas",
    "Edad": "46",
    "Ciudad": "Valparaíso",
    "Region": "Valparaíso",
    "Fecha": "5/30/20",
    "Tipo": "Disparo",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Ruth Victoria Gallardo Gutierrez",
    "Edad": "25",
    "Ciudad": "Constitución",
    "Region": "El Maule",
    "Fecha": "6/3/20",
    "Tipo": "Golpes, Apuñalada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Nataly Valeria Sepulveda Oria",
    "Edad": "29",
    "Ciudad": "Victoria",
    "Region": "Araucanía",
    "Fecha": "6/8/20",
    "Tipo": "Disparo",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Eliana Urra Colicoy",
    "Edad": "48",
    "Ciudad": "Cunco",
    "Region": "Araucanía",
    "Fecha": "6/14/20",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Nancy Riquelme Morales",
    "Edad": "25",
    "Ciudad": "Lota",
    "Region": "Biobío",
    "Fecha": "7/5/20",
    "Tipo": "Disparo",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Soledad Valenzuela Valenzuela",
    "Edad": "29",
    "Ciudad": "Doñihue",
    "Region": "O'Higgins",
    "Fecha": "7/5/20",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cliente"
  },
  {
    "Nombre_Victima": "Gladys Ardila",
    "Edad": "",
    "Ciudad": "Chillán",
    "Region": "Ñuble",
    "Fecha": "7/6/20",
    "Tipo": "Estrangulada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Vilma Escobar Jara",
    "Edad": "18",
    "Ciudad": "Ñuñoa",
    "Region": "Metropolitana",
    "Fecha": "8/4/20",
    "Tipo": "Asfixia",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Ámbar",
    "Edad": "16",
    "Ciudad": "Villa Alemana",
    "Region": "Valparaíso",
    "Fecha": "8/6/20",
    "Tipo": "Asfixia",
    "Relación Víctima": "Padrastro"
  },
  {
    "Nombre_Victima": "Kleybell Luisana Morales Graterol",
    "Edad": "30",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "8/8/20",
    "Tipo": "Golpe con objeto contundente, Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Esperanza Graterol Moya",
    "Edad": "53",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "8/8/20",
    "Tipo": "Golpe con objeto contundente, Apuñalada",
    "Relación Víctima": "Yerno"
  },
  {
    "Nombre_Victima": "Norma Isabel Vásquez Soto",
    "Edad": "20",
    "Ciudad": "Linares",
    "Region": "El Maule",
    "Fecha": "8/22/20",
    "Tipo": "Golpe con objeto contundente, Apuñalada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Camila Alejandra Díaz Álvarez",
    "Edad": "21",
    "Ciudad": "La Pintana",
    "Region": "Metropolitana",
    "Fecha": "9/5/20",
    "Tipo": "Apuñalada, Asfixia",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Alsacia Lorena Arriagada Morales",
    "Edad": "60",
    "Ciudad": "Lampa",
    "Region": "Metropolitana",
    "Fecha": "9/8/20",
    "Tipo": "Asfixia",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Betty del Carmen Torres Villarroel",
    "Edad": "46",
    "Ciudad": "Viña del Mar",
    "Region": "Valparaíso",
    "Fecha": "9/9/20",
    "Tipo": "Golpeada; Baleada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Esperanza Érika Aguilar Olivares",
    "Edad": "54",
    "Ciudad": "Quilicura",
    "Region": "Metropolitana",
    "Fecha": "9/14/20",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Caroline Giselle Venegas Aguilar",
    "Edad": "18",
    "Ciudad": "Quilicura",
    "Region": "Metropolitana",
    "Fecha": "9/14/20",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Hermano"
  },
  {
    "Nombre_Victima": "Sara Tatiana Muñoz Farías",
    "Edad": "26",
    "Ciudad": "Curicó",
    "Region": "El Maule",
    "Fecha": "9/22/20",
    "Tipo": "Asfixia",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Julia Aluen Mancilla Vargas",
    "Edad": "21",
    "Ciudad": "Coyhaique",
    "Region": "Aysén",
    "Fecha": "10/1/20",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Primo"
  },
  {
    "Nombre_Victima": "Carolina Fuentes Bustos",
    "Edad": "42",
    "Ciudad": "Portezuelo",
    "Region": "Ñuble",
    "Fecha": "10/6/20",
    "Tipo": "Golpes con objeto contundente, Asfixia",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Lady Paola Arboleda Riascos",
    "Edad": "33",
    "Ciudad": "Copiapó",
    "Region": "Atacama",
    "Fecha": "10/11/20",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Ercilia Gladys Salgado Yáñez",
    "Edad": "63",
    "Ciudad": "Valparaíso",
    "Region": "Valparaíso",
    "Fecha": "10/16/20",
    "Tipo": "Asfixia",
    "Relación Víctima": "Sobrino"
  },
  {
    "Nombre_Victima": "Lucía Chicchi Leandro",
    "Edad": "37",
    "Ciudad": "Calama",
    "Region": "Antofagasta",
    "Fecha": "10/20/20",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Tania Macarena Bustamante Díaz",
    "Edad": "24",
    "Ciudad": "Valdivia",
    "Region": "Los Ríos",
    "Fecha": "11/2/20",
    "Tipo": "Disparo",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Claudia Andrea Villenas Vega",
    "Edad": "36",
    "Ciudad": "Cauquenes",
    "Region": "El Maule",
    "Fecha": "11/1/20",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Hermano"
  },
  {
    "Nombre_Victima": "Lhysbet Ureta Méndez",
    "Edad": "20",
    "Ciudad": "Talca",
    "Region": "El Maule",
    "Fecha": "11/1/20",
    "Tipo": "Golpe con objeto contundente, Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Yenny Shirley Ancamilla Collinao",
    "Edad": "26",
    "Ciudad": "Panguipulli",
    "Region": "Los Ríos",
    "Fecha": "11/3/20",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Nancy Gloria Rojas Arenas",
    "Edad": "67",
    "Ciudad": "San Bernardo",
    "Region": "Metropolitana",
    "Fecha": "11/14/20",
    "Tipo": "Golpes con objeto contundente, Asfixia",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Jacqueline Hernández Morales",
    "Edad": "52",
    "Ciudad": "San Miguel",
    "Region": "Metropolitana",
    "Fecha": "11/15/20",
    "Tipo": "Lanzada por balcón",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Sandra Carolina Pizarro Jeria",
    "Edad": "45",
    "Ciudad": "San Felipe",
    "Region": "Valparaíso",
    "Fecha": "11/20/20",
    "Tipo": "Golpes",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Katherine Andrea Ayala Ayala",
    "Edad": "38",
    "Ciudad": "Valparaíso",
    "Region": "Valparaíso",
    "Fecha": "11/22/20",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Yanira Javiera Díaz Vera",
    "Edad": "26",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "11/28/20",
    "Tipo": "Golpes con objeto contundente, Asfixia",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Jocelyn Hernández Jara",
    "Edad": "28",
    "Ciudad": "Peñalolén",
    "Region": "Metropolitana",
    "Fecha": "12/5/20",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Francisca Ignacia Kunstmann Rojas",
    "Edad": "36",
    "Ciudad": "Colín",
    "Region": "El Maule",
    "Fecha": "12/12/20",
    "Tipo": "Golpes con objeto contundente, Asfixia",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Margarita Paredes Santana",
    "Edad": "54",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "12/14/20",
    "Tipo": "Golpes, Apuñalada",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Ana María Guerra Castañeda",
    "Edad": "66",
    "Ciudad": "San Pedro de la Paz",
    "Region": "Biobío",
    "Fecha": "12/15/20",
    "Tipo": "Golpe con hacha",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "María Isabel Pavez Zamora",
    "Edad": "22",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "12/23/20",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Elsa Janet Muñoz Santana",
    "Edad": "40",
    "Ciudad": "Viña del Mar",
    "Region": "Valparaíso",
    "Fecha": "12/24/20",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Gladys Margarita Escalona Garcés",
    "Edad": "46",
    "Ciudad": "La Calera",
    "Region": "Valparaíso",
    "Fecha": "12/24/20",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Amada Andrade",
    "Edad": "89",
    "Ciudad": "Llanquihue",
    "Region": "Los Lagos",
    "Fecha": "12/28/20",
    "Tipo": "",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Jacqueline Marcela Calfulaf Poblete",
    "Edad": "34",
    "Ciudad": "Renca",
    "Region": "Metropolitana",
    "Fecha": "4/20/20",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Anaís Godoy Ramírez",
    "Edad": "16",
    "Ciudad": "Vicuña",
    "Region": "Coquimbo",
    "Fecha": "6/28/20",
    "Tipo": "",
    "Relación Víctima": "Amigo"
  },
  {
    "Nombre_Victima": "Deysi Nobelia Compay Schmitd",
    "Edad": "20",
    "Ciudad": "Hornopirén",
    "Region": "Los Lagos",
    "Fecha": "8/2/20",
    "Tipo": "",
    "Relación Víctima": "Pololo"
  },
  {
    "Nombre_Victima": "Luis Díaz Parraguez",
    "Edad": "11",
    "Ciudad": "Palmilla",
    "Region": "O'Higgins",
    "Fecha": "2/9/20",
    "Tipo": "",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "Daniela",
    "Edad": "1",
    "Ciudad": "Villa Alemana",
    "Region": "Valparaíso",
    "Fecha": "2/22/20",
    "Tipo": "",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "Daniel",
    "Edad": "2",
    "Ciudad": "Villa Alemana",
    "Region": "Valparaíso",
    "Fecha": "2/22/20",
    "Tipo": "",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "Joaquín Mallea",
    "Edad": "7",
    "Ciudad": "Diego de Almagro",
    "Region": "Atacama",
    "Fecha": "3/20/20",
    "Tipo": "",
    "Relación Víctima": "Pareja de la madre"
  },
  {
    "Nombre_Victima": "Chico Leslie Velásquez (Cynthia Leslie Velásquez Cabrera)",
    "Edad": "",
    "Ciudad": "Lo Espejo",
    "Region": "Metropolitana",
    "Fecha": "8/9/20",
    "Tipo": "",
    "Relación Víctima": "Amigo"
  },
  {
    "Nombre_Victima": "Vicente González Lorca",
    "Edad": "25",
    "Ciudad": "Valdivia",
    "Region": "Los Ríos",
    "Fecha": "10/31/20",
    "Tipo": "",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Ariana Maritza Bravo Aracena",
    "Edad": "39",
    "Ciudad": "Huara",
    "Region": "Tarapacá",
    "Fecha": "1/9/21",
    "Tipo": "Disparo",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Bartolita del Carmen Paredes Castillo",
    "Edad": "67",
    "Ciudad": "Talagante",
    "Region": "Metropolitana",
    "Fecha": "1/20/21",
    "Tipo": "Golpe con objeto contundente",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Pamela Verónica Fonseca Rebolledo",
    "Edad": "39",
    "Ciudad": "Lo Espejo",
    "Region": "Metropolitana",
    "Fecha": "1/21/21",
    "Tipo": "Quemada",
    "Relación Víctima": "Tío de su pareja"
  },
  {
    "Nombre_Victima": "Brenda Cartes Guzmán",
    "Edad": "43",
    "Ciudad": "Porvenir",
    "Region": "Magallanes",
    "Fecha": "1/27/21",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex pareja de su sobrina"
  },
  {
    "Nombre_Victima": "Mariana Ariela Milla Nuñez",
    "Edad": "57",
    "Ciudad": "La Florida",
    "Region": "Metropolitana",
    "Fecha": "2/7/21",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Yorka Gonzalez Barrera",
    "Edad": "52",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "2/15/21",
    "Tipo": "Golpe con objeto contundente",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Herlin Montaño Valencia",
    "Edad": "33",
    "Ciudad": "Alto Hospicio",
    "Region": "Tarapacá",
    "Fecha": "2/16/21",
    "Tipo": "Quemada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Estefanía Constanza Breve Neira",
    "Edad": "19",
    "Ciudad": "Coronel",
    "Region": "Biobío",
    "Fecha": "2/17/21",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Kimberly Ugalde Palma",
    "Edad": "19",
    "Ciudad": "Viña del Mar",
    "Region": "Valparaíso",
    "Fecha": "2/20/21",
    "Tipo": "Disparo",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Damaris Ana Meliñir Llanqui",
    "Edad": "19",
    "Ciudad": "Temuco",
    "Region": "La Araucanía",
    "Fecha": "3/1/21",
    "Tipo": "Asfixia",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Norma Jeannette Quiroga Zúñiga",
    "Edad": "45",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "3/15/21",
    "Tipo": "Disparo",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Valeria Esmeralda Ortiz Oyarzún",
    "Edad": "22",
    "Ciudad": "San Felipe",
    "Region": "Valparaíso",
    "Fecha": "3/30/21",
    "Tipo": "Golpe con objeto contundente, asfixiada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Carolina Ortega Cariqueo",
    "Edad": "40",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "3/31/21",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Michelle",
    "Edad": "11",
    "Ciudad": "San Bernardo",
    "Region": "Metropolitana",
    "Fecha": "4/13/21",
    "Tipo": "Disparo",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "Valentina",
    "Edad": "3",
    "Ciudad": "San Bernardo",
    "Region": "Metropolitana",
    "Fecha": "4/13/21",
    "Tipo": "Disparo",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "Carmen Rosa González Valdés",
    "Edad": "74",
    "Ciudad": "Viña del Mar",
    "Region": "Valparaíso",
    "Fecha": "4/14/21",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Rosa Nélida Muñoz Antinopai",
    "Edad": "44",
    "Ciudad": "Valparaíso",
    "Region": "Valparaíso",
    "Fecha": "4/21/21",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Franshesca Tamara González Miranda",
    "Edad": "18",
    "Ciudad": "Quilpué",
    "Region": "Valparaíso",
    "Fecha": "4/24/21",
    "Tipo": "Asfixia",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "María Teresa Sepúlveda Smith",
    "Edad": "61",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "4/28/21",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Stephanie Emilien",
    "Edad": "33",
    "Ciudad": "San Joaquín",
    "Region": "Metropolitana",
    "Fecha": "4/29/21",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Rosa Francisca Millanao Chule",
    "Edad": "73",
    "Ciudad": "Talca",
    "Region": "El Maule",
    "Fecha": "5/2/21",
    "Tipo": "Golpe con objeto contundente",
    "Relación Víctima": "Amigo"
  },
  {
    "Nombre_Victima": "Paulina Alejandra Gatica González",
    "Edad": "42",
    "Ciudad": "Renca",
    "Region": "Metropolitana",
    "Fecha": "5/8/21",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Maylin Rachel Guevara Guevara",
    "Edad": "28",
    "Ciudad": "Quilpué",
    "Region": "Valparaíso",
    "Fecha": "5/15/21",
    "Tipo": "Golpes",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Catalina E.V.U",
    "Edad": "14",
    "Ciudad": "El Bosque",
    "Region": "Metropolitana",
    "Fecha": "5/17/21",
    "Tipo": "Degollada",
    "Relación Víctima": "Arrendatario"
  },
  {
    "Nombre_Victima": "Jocelyn Sáez",
    "Edad": "29",
    "Ciudad": "Talca",
    "Region": "El Maule",
    "Fecha": "5/19/21",
    "Tipo": "",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Laura Norma Maldonado Solís",
    "Edad": "84",
    "Ciudad": "Osorno",
    "Region": "Los Lagos",
    "Fecha": "5/30/21",
    "Tipo": "Asfixia",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Yaritza Navarro González",
    "Edad": "18",
    "Ciudad": "Chépica",
    "Region": "O'Higgins",
    "Fecha": "6/17/21",
    "Tipo": "Disparo",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Gloria Yanet Labraña Aros",
    "Edad": "63",
    "Ciudad": "Temuco",
    "Region": "Araucanía",
    "Fecha": "6/20/21",
    "Tipo": "Asfixia, Apuñalada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Willianyis Rojas Rosales",
    "Edad": "17",
    "Ciudad": "Arica",
    "Region": "Arica y Parinacota",
    "Fecha": "6/29/21",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Pololo"
  },
  {
    "Nombre_Victima": "Nayara Vit",
    "Edad": "33",
    "Ciudad": "Las Condes",
    "Region": "Metropolitana",
    "Fecha": "7/3/21",
    "Tipo": "Lanzada del Balcón",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Alejandra Carola Contreras Valdivia",
    "Edad": "43",
    "Ciudad": "Copiapó",
    "Region": "Atacama",
    "Fecha": "7/20/21",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Verónica del Carmen Palacios Tapia",
    "Edad": "58",
    "Ciudad": "San Bernardo",
    "Region": "Metropolitana",
    "Fecha": "8/7/21",
    "Tipo": "Disparo",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "María de Jesús Bermúdez Fuentes",
    "Edad": "29",
    "Ciudad": "Curanipe",
    "Region": "El Maule",
    "Fecha": "9/1/21",
    "Tipo": "Disparo",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "María Amparo Velásquez Garcés",
    "Edad": "61",
    "Ciudad": "Renca",
    "Region": "Metropolitana",
    "Fecha": "9/3/21",
    "Tipo": "Apuñalada y descuartizada",
    "Relación Víctima": "Yerno"
  },
  {
    "Nombre_Victima": "Mónica Astorga Vega",
    "Edad": "55",
    "Ciudad": "Viña del Mar",
    "Region": "Valparaíso",
    "Fecha": "9/5/21",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Acosador de su hija"
  },
  {
    "Nombre_Victima": "Jéssica del Carmen González Toledo",
    "Edad": "38",
    "Ciudad": "Los Ángeles",
    "Region": "Biobío",
    "Fecha": "9/14/21",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Jessica Angelina Ortiz Cisternas",
    "Edad": "53",
    "Ciudad": "San Clemente",
    "Region": "El Maule",
    "Fecha": "9/18/21",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Verónica Cuero Cuero",
    "Edad": "21",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "9/18/21",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Cindy Estrada Muñoz",
    "Edad": "24",
    "Ciudad": "Independencia",
    "Region": "Metropolitana",
    "Fecha": "9/23/21",
    "Tipo": "Baleada",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Madely Padilla Martínez",
    "Edad": "32",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "9/24/21",
    "Tipo": "Apuñalada; Golpes",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Marjorie Caris Aillal",
    "Edad": "23",
    "Ciudad": "La Pintana",
    "Region": "Metropolitana",
    "Fecha": "10/10/21",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Olga del Tránsito Poblete Campos",
    "Edad": "53",
    "Ciudad": "Peñalolén",
    "Region": "Metropolitana",
    "Fecha": "10/17/21",
    "Tipo": "Golpes",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Jeanette de las Mercedes Sepulveda Curín",
    "Edad": "58",
    "Ciudad": "Conchalí",
    "Region": "Metropolitana",
    "Fecha": "10/24/21",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Pamela Solange Álvarez Soto",
    "Edad": "55",
    "Ciudad": "Coquimbo",
    "Region": "Coquimbo",
    "Fecha": "10/28/21",
    "Tipo": "Asfixia",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Rosa Fritis Barraza",
    "Edad": "49",
    "Ciudad": "Coquimbo",
    "Region": "Coquimbo",
    "Fecha": "10/31/21",
    "Tipo": "Golpes",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Gabriela Machicado Hurtado",
    "Edad": "38",
    "Ciudad": "Mejillones",
    "Region": "Antofagasta",
    "Fecha": "11/3/21",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Carla Ivana Olmedo Olmedo",
    "Edad": "42",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "11/4/21",
    "Tipo": "Apuñalada, Descuartizada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Carolina del Pilar Pinilla Aránguiz",
    "Edad": "37",
    "Ciudad": "Rancagua",
    "Region": "O'Higgins",
    "Fecha": "11/14/21",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Belén de los Ángeles Bascur Marileo",
    "Edad": "22",
    "Ciudad": "Pichilemu",
    "Region": "O'Higgins",
    "Fecha": "11/29/21",
    "Tipo": "Disparo de escopeta",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Javiera Rojas Veas",
    "Edad": "42",
    "Ciudad": "Calama",
    "Region": "Antofagasta",
    "Fecha": "11/30/21",
    "Tipo": "Golpes",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Silvia del Carmen Medina Monsalve",
    "Edad": "53",
    "Ciudad": "San Ignacio",
    "Region": "Ñuble",
    "Fecha": "12/4/21",
    "Tipo": "Asfixia",
    "Relación Víctima": "Hijo de su pareja"
  },
  {
    "Nombre_Victima": "Corina Bernardita Cabrera Rojas",
    "Edad": "61",
    "Ciudad": "San José de Maipo",
    "Region": "Metropolitana",
    "Fecha": "12/6/21",
    "Tipo": "Degollamiento",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Diana Alexandra Orobio Peña",
    "Edad": "32",
    "Ciudad": "Quinta Normal",
    "Region": "Metropolitana",
    "Fecha": "12/12/21",
    "Tipo": "Disparo",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Teresita de Jesús Ponce Rojas",
    "Edad": "28",
    "Ciudad": "La Granja",
    "Region": "Metropolitana",
    "Fecha": "12/15/21",
    "Tipo": "",
    "Relación Víctima": "Ex pololo"
  },
  {
    "Nombre_Victima": "Roxana Valeria López Jara",
    "Edad": "45",
    "Ciudad": "Melipilla",
    "Region": "Metropolitana",
    "Fecha": "12/16/21",
    "Tipo": "Asfixia",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Elisoida Elizabeth Nova Dotel",
    "Edad": "30",
    "Ciudad": "Renca",
    "Region": "Metropolitana",
    "Fecha": "12/25/21",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Angélica Jacqueline Ramírez Gracia",
    "Edad": "46",
    "Ciudad": "Independencia",
    "Region": "Metropolitana",
    "Fecha": "12/27/21",
    "Tipo": "Quemada a lo bonzo",
    "Relación Víctima": "Ex pololo"
  },
  {
    "Nombre_Victima": "Karina Melanie Cuevas Cárcamo",
    "Edad": "25",
    "Ciudad": "Santa Juana",
    "Region": "Biobío",
    "Fecha": "1/5/21",
    "Tipo": "",
    "Relación Víctima": "Amigo"
  },
  {
    "Nombre_Victima": "Natalia Javiera Hidalgo Leiva",
    "Edad": "40",
    "Ciudad": "La Reina",
    "Region": "Metropolitana",
    "Fecha": "1/25/21",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Francisca Andrea Eliette Moll Moreno",
    "Edad": "37",
    "Ciudad": "Las Condes",
    "Region": "Metropolitana",
    "Fecha": "4/7/21",
    "Tipo": "",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Amira Godoy Guerrero",
    "Edad": "16",
    "Ciudad": "",
    "Region": "Metropolitana",
    "Fecha": "4/10/21",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Katherine Muriel Cruz Chacana",
    "Edad": "33",
    "Ciudad": "Viña del Mar",
    "Region": "Valparaíso",
    "Fecha": "11/6/21",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Gicela Ávila",
    "Edad": "21",
    "Ciudad": "Caldera",
    "Region": "Atacama",
    "Fecha": "12/24/21",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Orión V.",
    "Edad": "4",
    "Ciudad": "Huara",
    "Region": "Tarapacá",
    "Fecha": "1/9/21",
    "Tipo": "Golpe con objeto contundente",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "Michelle",
    "Edad": "11",
    "Ciudad": "San Bernardo",
    "Region": "Metropolitana",
    "Fecha": "4/13/21",
    "Tipo": "Disparo",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "Valentina",
    "Edad": "3",
    "Ciudad": "San Bernardo",
    "Region": "Metropolitana",
    "Fecha": "4/13/21",
    "Tipo": "Disparo",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "MEDIOS NO INFORMAN",
    "Edad": "",
    "Ciudad": "San Joaquín",
    "Region": "Metropolitana",
    "Fecha": "4/29/21",
    "Tipo": "Apuñalado",
    "Relación Víctima": "Ex conviviente de su novia"
  },
  {
    "Nombre_Victima": "Rubén",
    "Edad": "18",
    "Ciudad": "El Bosque",
    "Region": "Metropolitana",
    "Fecha": "5/17/21",
    "Tipo": "Degollado",
    "Relación Víctima": "Arrendatario"
  },
  {
    "Nombre_Victima": "Guillermo Valenzuela",
    "Edad": "62",
    "Ciudad": "San Ignacio",
    "Region": "Ñuble",
    "Fecha": "5/17/21",
    "Tipo": "Asfixia",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Francisco Tejeda",
    "Edad": "",
    "Ciudad": "Renca",
    "Region": "Metropolitana",
    "Fecha": "12/25/21",
    "Tipo": "Apuñalado",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Yan Carlos Ferrera José",
    "Edad": "",
    "Ciudad": "Renca",
    "Region": "Metropolitana",
    "Fecha": "12/25/21",
    "Tipo": "Apuñalado",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Claudia Verónica Ortiz Lobo",
    "Edad": "55",
    "Ciudad": "Papudo",
    "Region": "Valparaíso",
    "Fecha": "1/2/22",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Claudia Fernanda Casas-Cordero Rivera",
    "Edad": "36",
    "Ciudad": "Paine",
    "Region": "Metropolitana",
    "Fecha": "1/9/22",
    "Tipo": "Degollada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Nataly Andrea Rojas Castillo",
    "Edad": "37",
    "Ciudad": "Arica",
    "Region": "Arica y Parinacota",
    "Fecha": "1/15/22",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Valentina Olea",
    "Edad": "32",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "1/15/22",
    "Tipo": "",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "María de los Ángeles Sáez Luengo",
    "Edad": "26",
    "Ciudad": "Pitrufquén",
    "Region": "Araucanía",
    "Fecha": "1/23/22",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Paula Lorena Martínez Espinoza",
    "Edad": "37",
    "Ciudad": "Coquimbo",
    "Region": "Coquimbo",
    "Fecha": "1/27/22",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Pamela Olivia Zavala Villar",
    "Edad": "42",
    "Ciudad": "Pudahuel",
    "Region": "Metropolitana",
    "Fecha": "1/29/22",
    "Tipo": "Baleada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "María Elena Becerra Ulloa",
    "Edad": "42",
    "Ciudad": "Mulchén",
    "Region": "Biobío",
    "Fecha": "2/4/22",
    "Tipo": "Baleada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Neila Llarimi Orejuela Mejía",
    "Edad": "24",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "2/10/22",
    "Tipo": "Baleada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Kimberly Ugalde Palma",
    "Edad": "19",
    "Ciudad": "Viña del Mar",
    "Region": "Valparaíso",
    "Fecha": "2/20/22",
    "Tipo": "Baleada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Edilia del Carmen Astroza Uribe",
    "Edad": "",
    "Ciudad": "Renca",
    "Region": "Metropolitana",
    "Fecha": "3/9/22",
    "Tipo": "Baleada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Marta Haydee Núñez Medina",
    "Edad": "40",
    "Ciudad": "Santa Juana",
    "Region": "Biobío",
    "Fecha": "3/13/22",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Teresa del Carmen Parra Miranda",
    "Edad": "54",
    "Ciudad": "Valparaíso",
    "Region": "Valparaíso",
    "Fecha": "3/15/22",
    "Tipo": "Baleada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Ana Alejandra Almonacid Águila",
    "Edad": "39",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "4/15/22",
    "Tipo": "Quemada",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Cinthia Carolina Vivanco Muñoz",
    "Edad": "32",
    "Ciudad": "Rengo",
    "Region": "O'Higgins",
    "Fecha": "4/19/22",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Yocelyn Lorena Monsalvez Vera",
    "Edad": "26",
    "Ciudad": "Osorno",
    "Region": "Los Lagos",
    "Fecha": "4/30/22",
    "Tipo": "Asfixiada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Erika Johanna Acosta",
    "Edad": "30",
    "Ciudad": "El Quisco",
    "Region": "Valparaíso",
    "Fecha": "5/1/22",
    "Tipo": "Apuñalada y quemada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "María Leonor Aguilera Mardones",
    "Edad": "60",
    "Ciudad": "Pemuco",
    "Region": "Ñuble",
    "Fecha": "5/1/22",
    "Tipo": "Degollada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Maria Leidi Barriga",
    "Edad": "26",
    "Ciudad": "Melipilla",
    "Region": "Metropolitana",
    "Fecha": "5/9/22",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Catalina Noemí Navarrete Segura",
    "Edad": "22",
    "Ciudad": "Gorbea",
    "Region": "Araucanía",
    "Fecha": "5/20/22",
    "Tipo": "Asfixiada",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Yuridia Pizarro Torres",
    "Edad": "55",
    "Ciudad": "Iquique",
    "Region": "Tarapacá",
    "Fecha": "5/29/22",
    "Tipo": "Golpeada; Asfixiada",
    "Relación Víctima": "Conviviente; Conocido; Conocido"
  },
  {
    "Nombre_Victima": "Irma del Carmen Curiñanco Carrera",
    "Edad": "30",
    "Ciudad": "Puerto Saavedra",
    "Region": "Araucanía",
    "Fecha": "6/3/22",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Kassandra Andrea Rocha Ruminot",
    "Edad": "23",
    "Ciudad": "Coquimbo",
    "Region": "Coquimbo",
    "Fecha": "6/8/22",
    "Tipo": "Envenenada, Golpeada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Pamela Soledad Carrillo Carrasco",
    "Edad": "43",
    "Ciudad": "Rio Negro",
    "Region": "Los Lagos",
    "Fecha": "6/30/22",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Jeannette Lourdes Medina Álvarez",
    "Edad": "61",
    "Ciudad": "Quilpué",
    "Region": "Valparaíso",
    "Fecha": "7/6/22",
    "Tipo": "Asfixiada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Sandra Cecilia Jorquera Guerrero",
    "Edad": "56",
    "Ciudad": "San Felipe",
    "Region": "Valparaíso",
    "Fecha": "7/13/22",
    "Tipo": "Golpeada, Asfixiada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Roxana Burgos",
    "Edad": "17",
    "Ciudad": "Recoleta",
    "Region": "Metropolitana",
    "Fecha": "7/18/22",
    "Tipo": "Asfixiada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Juana de las Mercedes Leiva Pozo",
    "Edad": "44",
    "Ciudad": "Pichidegua",
    "Region": "O'Higgins",
    "Fecha": "7/22/22",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Jéssica del Carmen Parra Sepúlveda",
    "Edad": "50",
    "Ciudad": "El Bosque",
    "Region": "Metropolitana",
    "Fecha": "7/23/22",
    "Tipo": "Quemada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Valentina Ninoska Mora Parra",
    "Edad": "20",
    "Ciudad": "El Bosque",
    "Region": "Metropolitana",
    "Fecha": "7/23/22",
    "Tipo": "Quemada",
    "Relación Víctima": "Ex pareja de su madre"
  },
  {
    "Nombre_Victima": "Andrea Cristina Salazar Placencia",
    "Edad": "37",
    "Ciudad": "Yerbas Buenas",
    "Region": "El Maule",
    "Fecha": "7/26/22",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Simeona Loayza",
    "Edad": "",
    "Ciudad": "Iquique",
    "Region": "Tarapacá",
    "Fecha": "7/28/22",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Ignacia Palma",
    "Edad": "26",
    "Ciudad": "Valparaíso",
    "Region": "Valparaíso",
    "Fecha": "8/3/22",
    "Tipo": "Apuñalada, Quemada",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Marjorie Johanna Palma Celedón",
    "Edad": "26",
    "Ciudad": "Lo Espejo",
    "Region": "Metropolitana",
    "Fecha": "8/13/22",
    "Tipo": "Asfixiada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "María Inés Sepúlveda Matus",
    "Edad": "63",
    "Ciudad": "Pinto",
    "Region": "Ñuble",
    "Fecha": "8/14/22",
    "Tipo": "Degollada",
    "Relación Víctima": "Ex vecino"
  },
  {
    "Nombre_Victima": "Franshesca Soledad Flores Raillanca",
    "Edad": "40",
    "Ciudad": "Futrono",
    "Region": "Los Ríos",
    "Fecha": "9/1/22",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Faumelisa del Carmen Chiguay Millaquien",
    "Edad": "63",
    "Ciudad": "Quinchao",
    "Region": "Los Lagos",
    "Fecha": "9/4/22",
    "Tipo": "Golpeada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Nayaret Constanza Cisternas Latin",
    "Edad": "32",
    "Ciudad": "Quillota",
    "Region": "Valparaíso",
    "Fecha": "9/19/22",
    "Tipo": "Envenenada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Verónica Vanessa Díaz Vega",
    "Edad": "38",
    "Ciudad": "Rancagua",
    "Region": "O'Higgins",
    "Fecha": "9/25/22",
    "Tipo": "Estrangulada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Fernanda Camila Peña Hernández",
    "Edad": "32",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "10/6/22",
    "Tipo": "No se informa",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Katherine Andrea Maturana Mena",
    "Edad": "34",
    "Ciudad": "La Pintana",
    "Region": "Metropolitana",
    "Fecha": "10/7/22",
    "Tipo": "Apuñalada y asfixiada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Ghislaine Estefanía Morales Ortega",
    "Edad": "23",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "10/20/22",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "MEDIOS NO INFORMAN",
    "Edad": "54",
    "Ciudad": "La Florida",
    "Region": "Metropolitana",
    "Fecha": "10/23/22",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Yerno"
  },
  {
    "Nombre_Victima": "Daniela Rocío Quilodrán Peñaloza",
    "Edad": "35",
    "Ciudad": "San Ramón",
    "Region": "Metropolitana",
    "Fecha": "11/7/22",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Keyti Sayuri Rodríguez Vásquez",
    "Edad": "",
    "Ciudad": "Recoleta",
    "Region": "Metropolitana",
    "Fecha": "11/8/22",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Desconocidos"
  },
  {
    "Nombre_Victima": "Michelle Anaís Ayala Martínez",
    "Edad": "21",
    "Ciudad": "Quilpué",
    "Region": "Valparaíso",
    "Fecha": "11/20/22",
    "Tipo": "Estrangulada y quemada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Cindy Marlene Muñoz Mallanes",
    "Edad": "36",
    "Ciudad": "Valdivia",
    "Region": "Los Ríos",
    "Fecha": "11/23/22",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Carmen Narcisa Chávez Sevillano",
    "Edad": "35",
    "Ciudad": "Molina",
    "Region": "El Maule",
    "Fecha": "11/27/22",
    "Tipo": "Golpeada",
    "Relación Víctima": "Relación ocasional"
  },
  {
    "Nombre_Victima": "María Leticia Peña Pacheco",
    "Edad": "82",
    "Ciudad": "Isla de Maipo",
    "Region": "Metropolitana",
    "Fecha": "12/8/22",
    "Tipo": "Golpes",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Claudia Díaz Pérez",
    "Edad": "73",
    "Ciudad": "Cartagena",
    "Region": "Valparaíso",
    "Fecha": "12/10/22",
    "Tipo": "Estrangulada y golpeada",
    "Relación Víctima": "Conocido"
  },
  {
    "Nombre_Victima": "Fabiola Vargas Pallauta",
    "Edad": "35",
    "Ciudad": "Arica",
    "Region": "Arica y Parinacota",
    "Fecha": "12/22/22",
    "Tipo": "Golpes",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Estela del Pilar Vega Estuardo",
    "Edad": "57",
    "Ciudad": "Coronel",
    "Region": "Biobío",
    "Fecha": "12/21/22",
    "Tipo": "Golpes y asfixia",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Lorena Alejandra Cárdenas Díaz",
    "Edad": "22",
    "Ciudad": "Calbuco",
    "Region": "Los Lagos",
    "Fecha": "12/22/22",
    "Tipo": "Golpes y asfixia",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Cinthia Rivas Corrales",
    "Edad": "37",
    "Ciudad": "La Granja",
    "Region": "Metropolitana",
    "Fecha": "12/24/22",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "María Angélica Vallejos Troncoso",
    "Edad": "49",
    "Ciudad": "Retiro",
    "Region": "El Maule",
    "Fecha": "12/28/22",
    "Tipo": "Golpes",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Carmen Troncoso (G.C.T.L.)",
    "Edad": "69",
    "Ciudad": "Retiro",
    "Region": "El Maule",
    "Fecha": "12/28/22",
    "Tipo": "Golpes",
    "Relación Víctima": "Yerno"
  },
  {
    "Nombre_Victima": "Lastenia Barrientos Soto",
    "Edad": "64",
    "Ciudad": "Dalcahue",
    "Region": "Los Lagos",
    "Fecha": "12/29/22",
    "Tipo": "",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "María José Mercado Sweet",
    "Edad": "23",
    "Ciudad": "La Florida",
    "Region": "Metropolitana",
    "Fecha": "9/12/22",
    "Tipo": "Suicidio Femicida",
    "Relación Víctima": "Pololo"
  },
  {
    "Nombre_Victima": "MEDIOS NO INFORMAN",
    "Edad": "29",
    "Ciudad": "Viña del Mar",
    "Region": "Valparaíso",
    "Fecha": "9/18/22",
    "Tipo": "Suicidio Femicida",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Jazmín Pinda",
    "Edad": "33",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "9/19/22",
    "Tipo": "Suicidio Femicida",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "María Luisa Loyola Rojas",
    "Edad": "",
    "Ciudad": "Copiapó",
    "Region": "Atacama",
    "Fecha": "9/4/22",
    "Tipo": "Suicidio Femicida",
    "Relación Víctima": "Pololo"
  },
  {
    "Nombre_Victima": "Solange Mesina Díaz",
    "Edad": "22",
    "Ciudad": "Viña del Mar",
    "Region": "Valparaíso",
    "Fecha": "10/4/22",
    "Tipo": "Suicidio Femicida",
    "Relación Víctima": "Primo"
  },
  {
    "Nombre_Victima": "Yanira",
    "Edad": "",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "9/30/22",
    "Tipo": "Suicidio Femicida",
    "Relación Víctima": "Ex pololo"
  },
  {
    "Nombre_Victima": "Diana Carolina Guaina Jerez",
    "Edad": "29",
    "Ciudad": "Osorno",
    "Region": "Los Lagos",
    "Fecha": "1/1/23",
    "Tipo": "Golpeada; Baleada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Nenerose Destiron",
    "Edad": "39",
    "Ciudad": "Pedro Aguirre Cerda",
    "Region": "Metropolitana",
    "Fecha": "1/9/23",
    "Tipo": "Asfixiada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Mariela Andrea Fuentealba Delgado",
    "Edad": "43",
    "Ciudad": "Coronel",
    "Region": "Biobío",
    "Fecha": "1/11/23",
    "Tipo": "",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Carmen Rosa Santos Villanueva",
    "Edad": "64",
    "Ciudad": "San Esteban",
    "Region": "Valparaíso",
    "Fecha": "1/12/23",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Ana Beatriz Neipan Vargas",
    "Edad": "29",
    "Ciudad": "San Juan de la Costa",
    "Region": "Los Lagos",
    "Fecha": "1/15/23",
    "Tipo": "Baleada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Patricia Elena Zapata Restrepo",
    "Edad": "48",
    "Ciudad": "Estación Central",
    "Region": "Metropolitana",
    "Fecha": "1/23/23",
    "Tipo": "Golpes",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Margarita María López Vera",
    "Edad": "47",
    "Ciudad": "Coquimbo",
    "Region": "Coquimbo",
    "Fecha": "3/7/23",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Pololo"
  },
  {
    "Nombre_Victima": "Alejandra Elizabeth Palma Chávez",
    "Edad": "31",
    "Ciudad": "Concepción",
    "Region": "Biobío",
    "Fecha": "3/8/23",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Elsa Del Carmen Garrido Espinoza",
    "Edad": "74",
    "Ciudad": "Maule",
    "Region": "El Maule",
    "Fecha": "3/27/23",
    "Tipo": "Golpe de hacha",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Cindy Ortiz Lincoñin",
    "Edad": "36",
    "Ciudad": "Lebu",
    "Region": "Biobío",
    "Fecha": "3/29/23",
    "Tipo": "Degollada",
    "Relación Víctima": "DESCONOCE"
  },
  {
    "Nombre_Victima": "Marcela del Pilar Pérez Tapia",
    "Edad": "32",
    "Ciudad": "Parral",
    "Region": "El Maule",
    "Fecha": "4/2/23",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Karen Liliana Moreno Pernía",
    "Edad": "25",
    "Ciudad": "Sagrada Familia",
    "Region": "El Maule",
    "Fecha": "4/27/23",
    "Tipo": "Estrangulada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Teresa del Rosario Mejías Muñoz",
    "Edad": "56",
    "Ciudad": "Padre Las Casas",
    "Region": "Araucanía",
    "Fecha": "4/28/23",
    "Tipo": "Baleada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Raquel del Carmen Díaz Jiménez",
    "Edad": "38",
    "Ciudad": "Punta Arenas",
    "Region": "Magallanes",
    "Fecha": "5/15/23",
    "Tipo": "Apuñalada; Golpeada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Ethlina Casseus",
    "Edad": "30",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "5/15/23",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Paulette Margarita Díaz Vargas",
    "Edad": "33",
    "Ciudad": "Quinta Normal",
    "Region": "Metropolitana",
    "Fecha": "5/24/23",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Luz Eliana Saavedra Cocio",
    "Edad": "42",
    "Ciudad": "Pitrufquén",
    "Region": "Araucanía",
    "Fecha": "6/1/23",
    "Tipo": "Baleada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Monserrat",
    "Edad": "6",
    "Ciudad": "Pitrufquén",
    "Region": "Araucanía",
    "Fecha": "6/1/23",
    "Tipo": "Baleada",
    "Relación Víctima": "Padrastro"
  },
  {
    "Nombre_Victima": "Jéssica Pamela Alarcón Álvarez",
    "Edad": "49",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "6/3/23",
    "Tipo": "Asfixiada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Ana Rosa Solís Zamora",
    "Edad": "49",
    "Ciudad": "Concon",
    "Region": "Valparaíso",
    "Fecha": "6/6/23",
    "Tipo": "Golpeada; Asfixiada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Raquel del Carmen Melita Roca",
    "Edad": "47",
    "Ciudad": "Cañete",
    "Region": "Biobío",
    "Fecha": "6/19/23",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Bárbara Contreras Miranda",
    "Edad": "33",
    "Ciudad": "Rancagua",
    "Region": "O'Higgins",
    "Fecha": "6/28/23",
    "Tipo": "",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Carolina Gálvez Bustamante",
    "Edad": "33",
    "Ciudad": "Providencia",
    "Region": "Metropolitana",
    "Fecha": "7/22/23",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Karin Guajardo González",
    "Edad": "41",
    "Ciudad": "Providencia",
    "Region": "Metropolitana",
    "Fecha": "8/3/23",
    "Tipo": "Golpeada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Gabriela del Carmen Montoya Montoya",
    "Edad": "38",
    "Ciudad": "Renaico",
    "Region": "Araucanía",
    "Fecha": "8/4/23",
    "Tipo": "Baleada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Silvia Inés Huenchuán Guaitiao",
    "Edad": "57",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "8/10/23",
    "Tipo": "Degollada",
    "Relación Víctima": "Cónyuge"
  },
  {
    "Nombre_Victima": "Sindy Caballero Celin",
    "Edad": "32",
    "Ciudad": "Concepción",
    "Region": "Biobío",
    "Fecha": "8/11/23",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Krishna Olivares Tapia",
    "Edad": "22",
    "Ciudad": "Quillota",
    "Region": "Valparaíso",
    "Fecha": "8/15/23",
    "Tipo": "Asfixiada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Lesly Galdames Vega",
    "Edad": "29",
    "Ciudad": "Coronel",
    "Region": "Biobío",
    "Fecha": "8/16/23",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Carol González Venegas",
    "Edad": "37",
    "Ciudad": "Villarrica",
    "Region": "La Araucanía",
    "Fecha": "8/23/23",
    "Tipo": "Golpe en la cabeza y calcinada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Javiera Lucila Jiménez Galleguillos",
    "Edad": "23",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "8/26/23",
    "Tipo": "Arma de fuego",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Melida Bernal Cáceres",
    "Edad": "38",
    "Ciudad": "Cañete",
    "Region": "Biobío",
    "Fecha": "8/27/23",
    "Tipo": "",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Priscila Alejandra Miranda Salazar",
    "Edad": "39",
    "Ciudad": "Concepción",
    "Region": "Biobío",
    "Fecha": "8/31/23",
    "Tipo": "Golpe en la cabeza y calcinada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "MEDIOS NO INFORMAN",
    "Edad": "66",
    "Ciudad": "Quilicura",
    "Region": "Metropolitana",
    "Fecha": "9/2/23",
    "Tipo": "Golpe en la cabeza",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Camila Becerra Placencia",
    "Edad": "50",
    "Ciudad": "San Pedro de la Paz",
    "Region": "Biobío",
    "Fecha": "9/8/23",
    "Tipo": "Golpe en la cabeza con objeto contundente",
    "Relación Víctima": "Se desconoce"
  },
  {
    "Nombre_Victima": "Tránsito San Martin Fuentealba",
    "Edad": "61",
    "Ciudad": "Chillán",
    "Region": "Ñuble",
    "Fecha": "9/11/23",
    "Tipo": "Baleada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "MEDIOS NO INFORMAN",
    "Edad": "1 mes y 24 días",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "9/14/23",
    "Tipo": "",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "Yesibeth Lastra Gutierrez",
    "Edad": "23",
    "Ciudad": "Peralillo",
    "Region": "O'Higgins",
    "Fecha": "9/17/23",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Yennifer Cortes Filigrana",
    "Edad": "30",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "9/17/23",
    "Tipo": "Golpes; Apuñalada",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Nimi Cárdenas Salazar",
    "Edad": "38",
    "Ciudad": "Vallenar",
    "Region": "Atacama",
    "Fecha": "9/23/23",
    "Tipo": "",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Alexandra Benítez Quina",
    "Edad": "35",
    "Ciudad": "Quellón",
    "Region": "Los Lagos",
    "Fecha": "9/26/23",
    "Tipo": "Asfixiada",
    "Relación Víctima": "Cliente sexual"
  },
  {
    "Nombre_Victima": "Camila Javiera Ugalde Gómez",
    "Edad": "19",
    "Ciudad": "San Vicente de Tagua Tagua",
    "Region": "O'Higgins",
    "Fecha": "9/27/23",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Karen Xiomara Gómez Bravo",
    "Edad": "20",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "10/16/23",
    "Tipo": "Baleada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "María Jesús Troncoso Muñoz",
    "Edad": "16",
    "Ciudad": "Los Ángeles",
    "Region": "Biobío",
    "Fecha": "10/19/23",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Vecino"
  },
  {
    "Nombre_Victima": "Teresa Flor Cea Cea",
    "Edad": "60",
    "Ciudad": "Puente Alto",
    "Region": "Metropolitana",
    "Fecha": "10/24/23",
    "Tipo": "",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Gabriela Salazar Valenzuela",
    "Edad": "39",
    "Ciudad": "Renca",
    "Region": "Metropolitana",
    "Fecha": "10/26/23",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "MEDIOS NO INFORMAN",
    "Edad": "35",
    "Ciudad": "Constitución",
    "Region": "El Maule",
    "Fecha": "10/28/23",
    "Tipo": "Baleada",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Sandra Almeida Lizama",
    "Edad": "58",
    "Ciudad": "Lo Barnechea",
    "Region": "Metropolitana",
    "Fecha": "12/2/23",
    "Tipo": "Golpes",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Rossana Del Carmen Flores Vega",
    "Edad": "38",
    "Ciudad": "Ovalle",
    "Region": "Coquimbo",
    "Fecha": "12/6/23",
    "Tipo": "Apuñalada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "María Cristina Rodríguez Álvarez",
    "Edad": "41",
    "Ciudad": "Loncoche",
    "Region": "Araucanía",
    "Fecha": "12/18/23",
    "Tipo": "Degollada",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Marianela Santander Vega",
    "Edad": "44",
    "Ciudad": "Pudahuel",
    "Region": "Metropolitana",
    "Fecha": "12/26/23",
    "Tipo": "Se desconoce",
    "Relación Víctima": "Sobrino"
  },
  {
    "Nombre_Victima": "Nataly Muñoz Thather",
    "Edad": "29",
    "Ciudad": "La Pintana",
    "Region": "Metropolitana",
    "Fecha": "12/28/23",
    "Tipo": "Asfixiada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Keny",
    "Edad": "16",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "10/18/23",
    "Tipo": "Baleada",
    "Relación Víctima": "Coonocidos"
  },
  {
    "Nombre_Victima": "Stephanie Subercaseaux Vergara",
    "Edad": "38",
    "Ciudad": "Las Condes",
    "Region": "Metropolitana",
    "Fecha": "1/21/23",
    "Tipo": "Suicidio Femicida",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Francisca Romero Valenzuela",
    "Edad": "",
    "Ciudad": "",
    "Region": "Metropolitana",
    "Fecha": "11/8/23",
    "Tipo": "Suicidio Femicida",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Michelle Silva Gutiérrez",
    "Edad": "20",
    "Ciudad": "San Felipe",
    "Region": "Valparaíso",
    "Fecha": "1/6/24",
    "Tipo": "Asfixia",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Guirnet Bustos Mancilla",
    "Edad": "58",
    "Ciudad": "Talca",
    "Region": "El Maule",
    "Fecha": "1/16/24",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Tabita Ester Lizana Allende",
    "Edad": "31",
    "Ciudad": "Pichilemu",
    "Region": "O'Higgins",
    "Fecha": "1/20/24",
    "Tipo": "Arma de fuego",
    "Relación Víctima": "Ex cónyuge"
  },
  {
    "Nombre_Victima": "Irenia Gavilán",
    "Edad": "55",
    "Ciudad": "Los Lagos",
    "Region": "Los Ríos",
    "Fecha": "1/21/24",
    "Tipo": "Objeto contundente",
    "Relación Víctima": "Hijo"
  },
  {
    "Nombre_Victima": "Ruby Queipul Lican",
    "Edad": "37",
    "Ciudad": "Victoria",
    "Region": "La Araucanía",
    "Fecha": "1/30/24",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Ari Salgado Arango",
    "Edad": "23",
    "Ciudad": "Maipú",
    "Region": "Metropolitana",
    "Fecha": "2/20/24",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Ex pololo"
  },
  {
    "Nombre_Victima": "Madeley Aduviry Cordova",
    "Edad": "18",
    "Ciudad": "Alto Hospicio",
    "Region": "Tarapacá",
    "Fecha": "3/1/24",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Karina del Valle Montaval",
    "Edad": "49",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "3/5/24",
    "Tipo": "",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Kissinver Pacheco Valenzuela",
    "Edad": "33",
    "Ciudad": "La Florida",
    "Region": "Metropolitana",
    "Fecha": "3/8/24",
    "Tipo": "Golpes",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "María Carrillo Sotoki",
    "Edad": "72",
    "Ciudad": "Lebu",
    "Region": "Biobío",
    "Fecha": "3/11/24",
    "Tipo": "Golpes",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Paola Cofré Arellano",
    "Edad": "56",
    "Ciudad": "Talca",
    "Region": "El Maule",
    "Fecha": "3/22/24",
    "Tipo": "Objeto contundente",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Solange Argomedo Ramírez",
    "Edad": "39",
    "Ciudad": "Maipú",
    "Region": "Metropolitana",
    "Fecha": "3/30/24",
    "Tipo": "Indeterminada",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Medios no informan",
    "Edad": "29",
    "Ciudad": "Alto Hospicio",
    "Region": "Tarapacá",
    "Fecha": "3/31/24",
    "Tipo": "Arma blanca",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Paulina Alejandra Cáceres Espinoza",
    "Edad": "17",
    "Ciudad": "Ovalle",
    "Region": "Coquimbo",
    "Fecha": "3/31/24",
    "Tipo": "Arma de fuego",
    "Relación Víctima": "Pololo"
  },
  {
    "Nombre_Victima": "Evelyn Quinzacara Alvarado",
    "Edad": "41",
    "Ciudad": "Ovalle",
    "Region": "Antofagasta",
    "Fecha": "4/10/24",
    "Tipo": "Golpes",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Nelly Quispe Tamargo",
    "Edad": "25",
    "Ciudad": "Melipilla",
    "Region": "Metropolitana",
    "Fecha": "4/13/24",
    "Tipo": "Asfixia",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Laura Valentina Mendonza Araujo",
    "Edad": "24",
    "Ciudad": "Arica",
    "Region": "Arica y Parinacota",
    "Fecha": "4/13/24",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Daniela Trinidad Silva Álvarez",
    "Edad": "30",
    "Ciudad": "Valparaíso",
    "Region": "Valparaíso",
    "Fecha": "4/22/24",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Catalina Herrera Barra",
    "Edad": "23",
    "Ciudad": "Pozo Almonte",
    "Region": "Tarapacá",
    "Fecha": "4/23/24",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Gabriela Flores Bustamante",
    "Edad": "23",
    "Ciudad": "Osorno",
    "Region": "Los Lagos",
    "Fecha": "4/28/24",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Marie Souerette Desort",
    "Edad": "47",
    "Ciudad": "Melipilla",
    "Region": "Metropolitana",
    "Fecha": "5/21/24",
    "Tipo": "Incendio",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Lohy Grey Sazo Espinoza",
    "Edad": "34",
    "Ciudad": "Temuco",
    "Region": "La Araucanía",
    "Fecha": "5/22/24",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Yeksiris Borges Zambrano",
    "Edad": "22",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "5/29/24",
    "Tipo": "Asfixia",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Camila Rojas Ayala",
    "Edad": "29",
    "Ciudad": "La Serena",
    "Region": "Coquimbo",
    "Fecha": "7/3/24",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Vecino"
  },
  {
    "Nombre_Victima": "Daniela Olate Venegas",
    "Edad": "23",
    "Ciudad": "La Florida",
    "Region": "Metropolitana", 
    "Fecha": "7/16/24",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Desconocido"
  },
  {
    "Nombre_Victima": "Jennifer Danitza Carrillo Sandoval",
    "Edad": "26",
    "Ciudad": "Victoria",
    "Region": "La Araucanía",
    "Fecha": "8/4/24",
    "Tipo": "Hacha",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Claudia Salas Gárate",
    "Edad": "48",
    "Ciudad": "Buin",
    "Region": "Metropolitana",
    "Fecha": "8/12/24",
    "Tipo": "",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "María Eugenia Paz",
    "Edad": "34",
    "Ciudad": "Linares",
    "Region": "El Maule",
    "Fecha": "8/27/24",
    "Tipo": "Golpes",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Nicole Andrea Breve Neira",
    "Edad": "25",
    "Ciudad": "Coronel",
    "Region": "Biobío",
    "Fecha": "9/5/24",
    "Tipo": "Golpes",
    "Relación Víctima": "Ex Pareja"
  },
  {
    "Nombre_Victima": "Constanza Herrera",
    "Edad": "17",
    "Ciudad": "Angol",
    "Region": "La Araucanía",
    "Fecha": "9/9/24",
    "Tipo": "Asfixia",
    "Relación Víctima": "Pololo"
  },
  {
    "Nombre_Victima": "Yurlay Jaspe Díaz",
    "Edad": "33",
    "Ciudad": "Cerrillos",
    "Region": "Metropolitana",
    "Fecha": "9/14/24",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Ex Pareja"
  },
  {
    "Nombre_Victima": "Dania Correa Chacano",
    "Edad": "24",
    "Ciudad": "Pedro Aguirre Cerda",
    "Region": "Metropolitana",
    "Fecha": "9/18/24",
    "Tipo": "Asfixia",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "Rose Mary Bravo Bravo",
    "Edad": "",
    "Ciudad": "La Serena",
    "Region": "Coquimbo",
    "Fecha": "9/21/24",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Medios no informan",
    "Edad": "71",
    "Ciudad": "Valparaíso",
    "Region": "Valparaíso",
    "Fecha": "10/12/24",
    "Tipo": "Arma de fuego",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Yessenia Edith Ibarra Contreras",
    "Edad": "36",
    "Ciudad": "El Quisco",
    "Region": "Valparaíso",
    "Fecha": "10/31/24",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Carola del Carmen Loyola Torres",
    "Edad": "47",
    "Ciudad": "Los Ángeles",
    "Region": "Biobío",
    "Fecha": "11/8/24",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Ex Pareja"
  },
  {
    "Nombre_Victima": "Soledad Pichaud",
    "Edad": "22",
    "Ciudad": "Ancud",
    "Region": "Los Lagos",
    "Fecha": "11/10/24",
    "Tipo": "Caída de altura",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Camila Alexandra Vaitiare Jopia Reinuaba",
    "Edad": "25",
    "Ciudad": "Vallenar",
    "Region": "Atacama",
    "Fecha": "11/11/24",
    "Tipo": "Indeterminada",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Cecilia Guevilao Astete",
    "Edad": "",
    "Ciudad": "Lautaro",
    "Region": "La Araucanía",
    "Fecha": "11/17/24",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Rosa Cubillo Cabello",
    "Edad": "57",
    "Ciudad": "Teno",
    "Region": "El Maule",
    "Fecha": "11/18/24",
    "Tipo": "Arma de fuego",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Medios no informan",
    "Edad": "41",
    "Ciudad": "San Ignacio",
    "Region": "Ñuble",
    "Fecha": "11/18/24",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Jenny Navas Angulo",
    "Edad": "63",
    "Ciudad": "Las Condes",
    "Region": "Metropolitana",
    "Fecha": "11/22/24",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Karla Belén Huaiquián",
    "Edad": "15",
    "Ciudad": "Temuco",
    "Region": "La Araucanía",
    "Fecha": "11/25/24",
    "Tipo": "",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Julia del Carmen Navarro Corrales",
    "Edad": "",
    "Ciudad": "Chépica",
    "Region": "O'Higgins",
    "Fecha": "11/26/24",
    "Tipo": "Arma de fuego",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Catherin Shaaron Herrera Bahamondes",
    "Edad": "32",
    "Ciudad": "Ovalle",
    "Region": "Coquimbo",
    "Fecha": "11/26/24",
    "Tipo": "Asfixia",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Nicole Aranzave",
    "Edad": "34",
    "Ciudad": "Valdivia",
    "Region": "Los Ríos",
    "Fecha": "11/28/24",
    "Tipo": "",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Ivanna Vivero Torres",
    "Edad": "",
    "Ciudad": "Viña Del Mar",
    "Region": "Valparaíso",
    "Fecha": "11/30/24",
    "Tipo": "",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Roxana Barrientos",
    "Edad": "30",
    "Ciudad": "Los Vilos",
    "Region": "Coquimbo",
    "Fecha": "12/23/24",
    "Tipo": "Arma de fuego",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "María José Ramírez Muñoz",
    "Edad": "33",
    "Ciudad": "San Carlos",
    "Region": "Ñuble",
    "Fecha": "12/30/24",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Claudina Aliante",
    "Edad": "84",
    "Ciudad": "Villarrica",
    "Region": "La Araucanía",
    "Fecha": "12/28/24",
    "Tipo": "Incendio",
    "Relación Víctima": "Suegra"
  },
  {
    "Nombre_Victima": "Maite Daniela Arce Arce",
    "Edad": "15",
    "Ciudad": "Talca",
    "Region": "El Maule",
    "Fecha": "12/20/24",
    "Tipo": "",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Jessica Abigail Catrupay Quilapán",
    "Edad": "44",
    "Ciudad": "Lautaro",
    "Region": "La Araucanía",
    "Fecha": "1/5/25",
    "Tipo": "Golpes",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "María Paz Peña Bustamante",
    "Edad": "24",
    "Ciudad": "Curicó",
    "Region": "El Maule",
    "Fecha": "1/6/25",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Medios no informan",
    "Edad": "62",
    "Ciudad": "Vilcún",
    "Region": "La Araucanía",
    "Fecha": "1/14/25",
    "Tipo": "Arma de fuego",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Andrea Pizarro Linco",
    "Edad": "39",
    "Ciudad": "Estación Central",
    "Region": "Metropolitana",
    "Fecha": "1/17/25",
    "Tipo": "Caída de altura",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Medios no informan",
    "Edad": "30",
    "Ciudad": "Arica",
    "Region": "Arica y Parinacota",
    "Fecha": "2/4/25",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "Medios no informan",
    "Edad": "41",
    "Ciudad": "Yungay",
    "Region": "Ñuble",
    "Fecha": "2/11/25",
    "Tipo": "Golpes",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Paola Gómez Navarrete",
    "Edad": "41",
    "Ciudad": "San Fernando",
    "Region": "O'Higgins",
    "Fecha": "2/13/25",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Ex conviviente"
  },
  {
    "Nombre_Victima": "Sarais González",
    "Edad": "22",
    "Ciudad": "Temuco",
    "Region": "La Araucanía",
    "Fecha": "",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "María Angélica Ascui Silva",
    "Edad": "69",
    "Ciudad": "Castro",
    "Region": "Los Lagos",
    "Fecha": "2/25/25",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Arrendatario"
  },
  {
    "Nombre_Victima": "Aurora Bustos Orellana",
    "Edad": "39",
    "Ciudad": "Vitacura",
    "Region": "Metropolitana",
    "Fecha": "3/29/25",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Conviviente"
  },
  {
    "Nombre_Victima": "A.R.B.",
    "Edad": "2",
    "Ciudad": "Vitacura",
    "Region": "Metropolitana",
    "Fecha": "3/30/25",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Padre"
  },
  {
    "Nombre_Victima": "Angie Tatiana Graciano Gómez",
    "Edad": "24",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "4/2/25",
    "Tipo": "Golpes y arma blanca",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Ana María Pizarro",
    "Edad": "56",
    "Ciudad": "La Serena",
    "Region": "Coquimbo",
    "Fecha": "4/19/25",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Ex pareja"
  },
  {
    "Nombre_Victima": "Viviana Andrea Castro Fajardo",
    "Edad": "",
    "Ciudad": "Vallenar",
    "Region": "Atacama",
    "Fecha": "4/19/25",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Josefina de Las Rosas Igor Muñoz",
    "Edad": "59",
    "Ciudad": "Puerto Montt",
    "Region": "Los Lagos",
    "Fecha": "4/19/25",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Medios no informan",
    "Edad": "40",
    "Ciudad": "San Javier",
    "Region": "El Maule",
    "Fecha": "4/21/25",
    "Tipo": "",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Medios no informan",
    "Edad": "",
    "Ciudad": "Santiago",
    "Region": "Metropolitana",
    "Fecha": "4/26/25",
    "Tipo": "",
    "Relación Víctima": ""
  },
  {
    "Nombre_Victima": "Isabel Andrea Porras Uribe",
    "Edad": "45",
    "Ciudad": "Arica",
    "Region": "Arica y Parinacota",
    "Fecha": "4/26/25",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Ingrid Fabiola Ramos Villegas",
    "Edad": "33",
    "Ciudad": "Cartagena",
    "Region": "Valparaíso",
    "Fecha": "5/19/25",
    "Tipo": "Arma de fuego",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Claudia Soledad Ruiz Soto",
    "Edad": "51",
    "Ciudad": "Calbuco",
    "Region": "Los Lagos",
    "Fecha": "5/22/25",
    "Tipo": "Objeto contundente y asfixia",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Rosalina Damarish Díaz López",
    "Edad": "29",
    "Ciudad": "Antofagasta",
    "Region": "Antofagasta",
    "Fecha": "6/1/25",
    "Tipo": "Caída de altura",
    "Relación Víctima": "Pareja"
  },
  {
    "Nombre_Victima": "Medios no informan",
    "Edad": "74",
    "Ciudad": "Los Ángeles",
    "Region": "Biobío",
    "Fecha": "6/19/25",
    "Tipo": "Arma de fuego",
    "Relación Víctima": "Conyuge"
  },
  {
    "Nombre_Victima": "Medios no informan",
    "Edad": "26",
    "Ciudad": "Graneros",
    "Region": "O'Higgins",
    "Fecha": "4/24/25",
    "Tipo": "Arma blanca",
    "Relación Víctima": "Ex pareja"
  }
];

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Función para convertir fecha dd/mm/yy a objeto Date y extraer el año
function extractYearFromDate(dateStr) {
  if (!dateStr) return null;
  const parts = dateStr.split('/');
  if (parts.length !== 3) return null;
  let year = parseInt(parts[2]);
  return year < 100 ? 2000 + year : year;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function processData() {
  // 1. Conservar todos los registros originales
  femicideData = JSON.parse(JSON.stringify(embeddedData)); // Copia profunda
  
  // 2. Procesar campos sin filtrar
  femicideData.forEach(item => {
    item.Edad = item.Edad ? parseInt(item.Edad) : 0;
    item.Año = extractYearFromDate(item.Fecha);
    
    // Validación de registro
    if (!item.Nombre_Victima && !item.Fecha) {
      console.warn('Registro problemático:', item);
    }
  });

  // 3. Preparar estructura para filtros
  allCitiesByRegion = {};
  femicideData.forEach(item => {
    if (item.Region) {
      if (!allCitiesByRegion[item.Region]) {
        allCitiesByRegion[item.Region] = new Set();
      }
      allCitiesByRegion[item.Region].add(item.Ciudad || 'No especificada');
    }
  });
  
  // 4. Verificación de conteo
  console.log(`Total registros procesados: ${femicideData.length}`);
  if (femicideData.length !== embeddedData.length) {
    console.error('Discrepancia en el conteo de registros!');
    // Forzar igualdad conservando todos los registros
    femicideData = [...embeddedData].map(item => ({
      ...item,
      Edad: item.Edad ? parseInt(item.Edad) : 0,
      Año: extractYearFromDate(item.Fecha)
    }));
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////

function initializeCharts() {
  // Opciones comunes para los gráficos
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      },
      tooltip: {
        enabled: true
      },
      title: {
        display: true,
        font: {
          size: 16
        }
      }
    }
  };

  // Gráfico de edades
  ageChart = new Chart(document.getElementById('ageChart'), {
    type: 'pie',
    data: {
      labels: ['0-18 años', '19-25 años', '26-35 años', '36-45 años', '46+ años'],
      datasets: [{
        data: [0, 0, 0, 0, 0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      ...commonOptions,
      plugins: {
        ...commonOptions.plugins,
        title: {
          ...commonOptions.plugins.title,
          text: 'Distribución por Edad'
        }
      }
    }
  });

////////////////////////////////////////////////////////////////////////////////////////////////////

  // Gráfico por año/mes
 
yearChart = new Chart(document.getElementById('yearChart'), {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Evolución anual de casos',
      data: [],
      borderColor: '#3a86ff', // Azul profesional
      backgroundColor: 'rgba(58, 134, 255, 0.08)',
      borderWidth: 3,
      pointBackgroundColor: '#ffffff',
      pointBorderColor: '#3a86ff',
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 7,
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333',
          font: {
            family: "'Segoe UI', Roboto, sans-serif",
            size: 13,
            weight: 'bold'
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: '#2b2d3',
        titleColor: '#ffffff',
        bodyColor: '#e0e0e0',
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        padding: 12,
        callbacks: {
          label: function(context) {
            return ` ${context.parsed.y} casos`;
          }
        }
      },
      title: {
        display: true,
        text: 'Tendencia de Casos por Año',
        color: '#333',
        font: {
          size: 16,
          weight: '600',
          family: "'Segoe UI', sans-serif"
        },
        padding: {
          top: 10,
          bottom: 20
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.03)',
          drawBorder: false
        },
        ticks: {
          color: '#6b7280',
          precision: 0,
          padding: 10
        }
      },
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          color: '#6b7280',
          font: {
            weight: '500'
          }
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'nearest'
    },
    layout: {
      padding: {
        right: 20
      }
    }
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////  

  // Gráfico por región/ciudad
  regionChart = new Chart(document.getElementById('regionChart'), {
    type: 'bar',
    data: {
      labels: [],
      datasets: [{
        label: 'Casos',
        data: [],
        backgroundColor: 'rgba(220, 53, 69, 0.7)',
        borderWidth: 1
      }]
    },
    options: {
      ...commonOptions,
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            precision: 0
          }
        }
      },
      plugins: {
        ...commonOptions.plugins,
        title: {
          ...commonOptions.plugins.title,
          text: 'Distribución por Región'
        }
      }
    }
  });
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function initializeFilters() {
  const regionFilter = document.getElementById('regionFilter');
  const cityFilter = document.getElementById('cityFilter');
  const yearFilter = document.getElementById('yearFilter');
  
  // Limpiar selects
  regionFilter.innerHTML = '<option value="all">Todas las regiones</option>';
  cityFilter.innerHTML = '<option value="all">Todas las ciudades</option>';
  yearFilter.innerHTML = '<option value="all">Todos los años</option>';
  
  // Llenar región
  const regions = [...new Set(femicideData.map(item => item.Region))].sort();
  regions.forEach(region => {
    regionFilter.innerHTML += `<option value="${region}">${region}</option>`;
  });
  
  // Llenar años
  const years = [...new Set(femicideData.map(item => item.Año).filter(Boolean))].sort();
  years.forEach(year => {
    yearFilter.innerHTML += `<option value="${year}">${year}</option>`;
  });
  
  // Event listeners
  regionFilter.addEventListener('change', function() {
    updateCityFilter();
    applyFilters();
  });
  
  cityFilter.addEventListener('change', applyFilters);
  yearFilter.addEventListener('change', applyFilters);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function updateCityFilter() {
  const regionFilter = document.getElementById('regionFilter');
  const cityFilter = document.getElementById('cityFilter');
  const selectedRegion = regionFilter.value;
  
  cityFilter.innerHTML = '<option value="all">Todas las ciudades</option>';
  cityFilter.disabled = selectedRegion === 'all';
  
  if (selectedRegion !== 'all') {
    const cities = [...(allCitiesByRegion[selectedRegion] || [])].sort();
    cities.forEach(city => {
      if (city) { // Filtra valores nulos/undefined
        cityFilter.innerHTML += `<option value="${city}">${city}</option>`;
      }
    });
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////

function applyFilters() {
  updateAllVisualizations(femicideData);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

function updateAllVisualizations(data = femicideData) {
  // Asegurarnos que usamos los mismos datos en todas las visualizaciones
  const filteredData = applyDataFilters(data);
  
  updateAgeChart(filteredData);
  updateYearChart(filteredData);
  updateRegionChart(filteredData);
  updateSummary(filteredData);
  updateVictimsTable(filteredData);
  updateCounters(filteredData);
}

function applyDataFilters(data) {
  const selectedRegion = document.getElementById('regionFilter').value;
  const selectedCity = document.getElementById('cityFilter').value;
  const selectedYear = document.getElementById('yearFilter').value;
  
  let filteredData = [...data];
  
  if (selectedRegion !== 'all') {
    filteredData = filteredData.filter(item => item.Region === selectedRegion);
    
    if (selectedCity !== 'all') {
      filteredData = filteredData.filter(item => item.Ciudad === selectedCity);
    }
  }
  
  if (selectedYear !== 'all') {
    filteredData = filteredData.filter(item => item.Año === parseInt(selectedYear));
  }
  
  return filteredData;
}

//////////////////////////////////////////////////////////////////////////////////////////////////

// Funciones de actualización de gráficos
function updateAgeChart(data) {
  const ageGroups = {
    '0-18': 0, '19-25': 0, '26-35': 0, '36-45': 0, '46+': 0
  };

  data.forEach(item => {
    const age = item.Edad;
    if (age <= 18) ageGroups['0-18']++;
    else if (age <= 25) ageGroups['19-25']++;
    else if (age <= 35) ageGroups['26-35']++;
    else if (age <= 45) ageGroups['36-45']++;
    else ageGroups['46+']++;
  });

  ageChart.data.datasets[0].data = Object.values(ageGroups);
  ageChart.update();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

function updateYearChart(data) {
  const selectedYear = document.getElementById('yearFilter').value;
  
  if (selectedYear !== 'all') {
    // Mostrar distribución por mes para el año seleccionado
    const months = {
      'Enero': 0, 'Febrero': 0, 'Marzo': 0, 'Abril': 0, 
      'Mayo': 0, 'Junio': 0, 'Julio': 0, 'Agosto': 0,
      'Septiembre': 0, 'Octubre': 0, 'Noviembre': 0, 'Diciembre': 0
    };
    
    data.forEach(item => {
      if (item.Fecha) {
        const parts = item.Fecha.split('/');
        if (parts.length === 3) {
          const monthIndex = parseInt(parts[1]) - 1;
          const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
          months[monthNames[monthIndex]]++;
        }
      }
    });
    
    yearChart.data.labels = Object.keys(months);
    yearChart.data.datasets[0].data = Object.values(months);
    yearChart.options.plugins.title = {
      display: true,
      text: `Distribución por Mes (${selectedYear})`
    };
  } else {
    // Mostrar distribución por año
    const years = {};
    data.forEach(item => {
      if (item.Año) years[item.Año] = (years[item.Año] || 0) + 1;
    });

    const sortedYears = Object.keys(years).sort((a, b) => a - b);
    yearChart.data.labels = sortedYears;
    yearChart.data.datasets[0].data = sortedYears.map(year => years[year]);
    yearChart.options.plugins.title = {
      display: true,
      text: 'Casos por Año'
    };
  }
  
  yearChart.update();
}

////////////////////////////////////////////////////////////////////////////////////////////////////

function updateRegionChart(data) {
  // Si hay una región seleccionada, mostrar ciudades en lugar de regiones
  const selectedRegion = document.getElementById('regionFilter').value;
  
  if (selectedRegion !== 'all') {
    const cities = {};
    data.forEach(item => {
      cities[item.Ciudad] = (cities[item.Ciudad] || 0) + 1;
    });
    
    const sortedCities = Object.keys(cities).sort((a, b) => cities[b] - cities[a]);
    regionChart.data.labels = sortedCities;
    regionChart.data.datasets[0].data = sortedCities.map(city => cities[city]);
    regionChart.options.plugins.title = {
      display: true,
      text: `Distribución por Ciudad (${selectedRegion})`
    };
  } else {
    const regions = {};
    data.forEach(item => {
      regions[item.Region] = (regions[item.Region] || 0) + 1;
    });
    
    const sortedRegions = Object.keys(regions).sort((a, b) => regions[b] - regions[a]);
    regionChart.data.labels = sortedRegions;
    regionChart.data.datasets[0].data = sortedRegions.map(region => regions[region]);
    regionChart.options.plugins.title = {
      display: true,
      text: 'Distribución por Región'
    };
  }
  
  regionChart.update();
}

////////////////////////////////////////////////////////////////////////////////////////////////////

function updateSummary(data) {
  document.getElementById('totalCases').textContent = data.length;
  
  const regions = {};
  data.forEach(item => {
    regions[item.Region] = (regions[item.Region] || 0) + 1;
  });
  
  document.getElementById('byRegion').textContent = 
    Object.entries(regions).map(([r, c]) => `${r}: ${c}`).join(', ') || 'N/A';
  
  const avgAge = data.length > 0 ? 
    (data.reduce((sum, item) => sum + item.Edad, 0) / data.length) : 0;
  document.getElementById('avgAge').textContent = avgAge.toFixed(1);
}



// Función para mostrar/ocultar loading
function setAppState(loading) {
  const loadingIndicator = document.getElementById('loadingIndicator');
  const mainContent = document.getElementById('mainContent');
  
  if (loading) {
    loadingIndicator.style.display = 'flex';
    if (mainContent) mainContent.style.display = 'none';
  } else {
    loadingIndicator.style.display = 'none';
    if (mainContent) mainContent.style.display = 'block';
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function updateVictimsTable(data = femicideData) {
  const tableBody = document.querySelector('#victimsTable tbody');
  tableBody.innerHTML = '';
  
  // Contador de registros omitidos
  let omittedCount = 0;

  data.forEach((victim, index) => {
    // Verificar requisitos mínimos para mostrar el registro
    if (!victim.Fecha && !victim.Nombre_Victima) {
      omittedCount++;
      return; // Omitir registros completamente vacíos
    }
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1 - omittedCount}</td>
      <td>${victim.Nombre_Victima || 'No informado'}</td>
      <td>${victim.Edad || '-'}</td>
      <td>${victim.Ciudad || 'No especificada'}</td>
      <td>${victim.Region || 'No especificada'}</td>
      <td>${victim.Fecha || 'No informada'}</td>
      <td>${victim.Tipo || 'No especificado'}</td>
      <td>${victim['Relación Víctima'] || 'No especificada'}</td>
    `;
    tableBody.appendChild(row);
  });
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Cargar datos iniciales
function loadData() {
  setAppState(true);
  
  try {
    // Procesar datos primero
    processData();
    
    // Inicializar gráficos con datos procesados
    initializeCharts();
    
    // Inicializar filtros
    initializeFilters();
    
    // Actualizar visualizaciones con datos
    updateAllVisualizations();
  } catch (error) {
    console.error("Error al cargar datos:", error);
  } finally {
    setAppState(false);
  }
}

// Iniciar aplicación
document.addEventListener('DOMContentLoaded', loadData);

