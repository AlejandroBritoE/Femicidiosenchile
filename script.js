// Variables globales
let femicideData = [];
let ageChart, yearChart, regionChart;
const EXCEL_FILENAME = 'sabana.xlsx';


/////////////////////////////////////////////////////////////////////////////////////////////////////

function setAppState(loading) {
    try {
        const loadingIndicator = document.getElementById('loadingIndicator');
        const mainContent = document.getElementById('mainContent');
        
        // Si los elementos no existen, simplemente retornar
        if (!loadingIndicator || !mainContent) {
            console.warn('Elementos de carga no encontrados - continuando sin indicador visual');
            return;
        }
        
        if (loading) {
            loadingIndicator.style.display = 'flex';
            mainContent.style.display = 'none';
        } else {
            loadingIndicator.style.display = 'none';
            mainContent.style.display = 'block';
        }
    } catch (error) {
        console.error('Error en setAppState:', error);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////

function processData() {
    if (!femicideData || !Array.isArray(femicideData)) {
        throw new Error('Datos no válidos para procesar');
    }

    femicideData = femicideData.map(item => {
        // Normalización de datos con valores por defecto
        const processedItem = {
            Nombre_Victima: 'Desconocido',
            Edad: 0,
            Region: 'DESCONOCIDO',
            Ciudad: 'Desconocida',
            FechaFormatted: 'Desconocida',
            Año: 'Desconocido',
            Tipo: 'No especificado',
            ...item  // Spread operator para mantener los datos originales
        };

        // Procesamiento de región
        processedItem.Region = processedItem.Region 
            ? processedItem.Region.toString().trim().toUpperCase() 
            : 'DESCONOCIDO';

        // Procesamiento de fecha - manejo mejorado
        if (processedItem.Fecha) {
            try {
                // Intenta parsear como fecha de Excel (número serial)
                if (!isNaN(processedItem.Fecha)) {
                    const dateObj = excelSerialToJSDate(parseFloat(processedItem.Fecha));
                    processedItem.FechaFormatted = dateObj.toLocaleDateString('es-ES');
                    processedItem.Año = dateObj.getFullYear().toString();
                } 
                // Intenta parsear como string (dd/mm/yyyy)
                else if (typeof processedItem.Fecha === 'string') {
                    const dateParts = processedItem.Fecha.split(/[/-]/);
                    if (dateParts.length === 3) {
                        const day = parseInt(dateParts[0]);
                        const month = parseInt(dateParts[1]) - 1;
                        let year = parseInt(dateParts[2]);
                        
                        // Manejar años de dos dígitos
                        if (dateParts[2].length === 2) {
                            year = year >= 30 ? 1900 + year : 2000 + year;
                        }
                        
                        const dateObj = new Date(year, month, day);
                        if (!isNaN(dateObj.getTime())) {
                            processedItem.FechaFormatted = dateObj.toLocaleDateString('es-ES');
                            processedItem.Año = year.toString();
                        }
                    }
                }
            } catch (e) {
                console.warn('Error al procesar fecha:', processedItem.Fecha, e);
            }
        }

        // Resto del procesamiento...
        return processedItem;
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////

// Función para actualizar filtros
function updateFilters() {
    updateRegionFilter();
    updateYearFilter();
}

// Función para actualizar filtro de regiones
function updateRegionFilter() {
    const regionFilter = document.getElementById('regionFilter');
    
    // Limpiar opciones excepto la primera
    while (regionFilter.options.length > 1) {
        regionFilter.remove(1);
    }
    
    // Obtener regiones únicas
    const regions = [...new Set(femicideData.map(item => item.Region))].sort();
    
    // Agregar opciones
    regions.forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionFilter.appendChild(option);
    });
}

// Función para actualizar filtro de años
function updateYearFilter() {
    const yearFilter = document.getElementById('yearFilter');
    
    // Limpiar opciones excepto la primera
    while (yearFilter.options.length > 1) {
        yearFilter.remove(1);
    }
    
    // Obtener años únicos
    const years = [...new Set(femicideData.map(item => item.Año).filter(year => year))].sort();
    
    // Agregar opciones
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
}

// Función para aplicar filtros
function applyFilters() {
    const region = document.getElementById('regionFilter').value;
    const year = document.getElementById('yearFilter').value;
    
    let filteredData = femicideData;
    
    // Aplicar filtro de región
    if (region && region !== 'all') {
        filteredData = filteredData.filter(item => item.Region === region);
    }
    
    // Aplicar filtro de año
    if (year && year !== 'all') {
        filteredData = filteredData.filter(item => item.Año === year);
    }
    
    // Actualizar visualizaciones con datos filtrados
    updateAllVisualizations(filteredData, region, year);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

// Función para actualizar el gráfico de edades
function updateAgeChart(data, region = 'todas las regiones') {
    const ageGroups = {
        '0-18': 0,
        '19-25': 0,
        '26-35': 0,
        '36-45': 0,
        '46+': 0
    };

    data.forEach(item => {
        const age = item.Edad || 0;
        if (age <= 18) ageGroups['0-18']++;
        else if (age <= 25) ageGroups['19-25']++;
        else if (age <= 35) ageGroups['26-35']++;
        else if (age <= 45) ageGroups['36-45']++;
        else ageGroups['46+']++;
    });

    ageChart.data.datasets[0].data = [
        ageGroups['0-18'],
        ageGroups['19-25'],
        ageGroups['26-35'],
        ageGroups['36-45'],
        ageGroups['46+']
    ];

    // Actualizar el título y subtítulo
    ageChart.options.plugins.title = {
        display: true,
        text: 'Distribución por Edad',
        font: { size: 16 }
    };
    
    ageChart.options.plugins.subtitle = {
        display: true,
        text: `Región: ${region}`,
        font: { size: 14 },
        color: '#666',
        padding: { bottom: 20 }
    };
    
    ageChart.update();
}

//////////////////////////////////////////////////////////////////////////////////////////////////

// Función para actualizar el gráfico por año
function updateYearChart(data) {
    const years = {};
    data.forEach(item => {
        if (item.Año) {
            years[item.Año] = (years[item.Año] || 0) + 1;
        }
    });

    const sortedYears = Object.keys(years).sort((a, b) => a.localeCompare(b));
    yearChart.data.labels = sortedYears;
    yearChart.data.datasets[0].data = sortedYears.map(year => years[year]);
    yearChart.update();
}

////////////////////////////////////////////////////////////////////////////////////////////////////

function setAppState(loading) {
    try {
        const loadingIndicator = document.getElementById('loadingIndicator');
        const mainContent = document.getElementById('mainContent');
        
        if (!loadingIndicator || !mainContent) {
            throw new Error('Elementos del DOM no encontrados');
        }
        
        if (loading) {
            loadingIndicator.style.display = 'flex';
            mainContent.style.display = 'none';
        } else {
            loadingIndicator.style.display = 'none';
            mainContent.style.display = 'block';
        }
    } catch (error) {
        console.error('Error en setAppState:', error);
        // Opcional: Mostrar mensaje de error al usuario
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Modifica la función loadExcelData para que no verifique el botón
function loadExcelData() {
    const fileInput = document.getElementById('excelFile');
    const file = fileInput.files[0];
    
    if (!file) {
        return; // Simplemente retorna si no hay archivo
    }

    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, {type: 'array'});
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            femicideData = XLSX.utils.sheet_to_json(firstSheet);

            if (!femicideData || femicideData.length === 0) {
                throw new Error('El archivo está vacío o no tiene el formato correcto');
            }

            processData();
            updateFilters();
            applyFilters();
            
            // Muestra un mensaje de éxito
            showToast('Datos cargados correctamente', 'success');
            
        } catch (error) {
            console.error('Error:', error);
            showToast('Error al procesar el archivo: ' + error.message, 'danger');
        }
    };
    
    reader.onerror = function() {
        showToast('Error al leer el archivo', 'danger');
    };
    
    reader.readAsArrayBuffer(file);
}

// Función para mostrar notificaciones toast
function showToast(message, type = 'info') {
    const toastContainer = document.createElement('div');
    toastContainer.innerHTML = `
        <div class="toast align-items-center text-white bg-${type} border-0 show" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    `;
    
    toastContainer.style.position = 'fixed';
    toastContainer.style.top = '20px';
    toastContainer.style.right = '20px';
    toastContainer.style.zIndex = '1100';
    
    document.body.appendChild(toastContainer);
    
    // Elimina el toast después de 5 segundos
    setTimeout(() => {
        toastContainer.remove();
    }, 5000);
}

// Agrega esto al inicializar la aplicación para los estilos de los toast
function initializeToastSystem() {
    const style = document.createElement('style');
    style.textContent = `
        .toast {
            opacity: 1;
            transition: opacity 0.5s ease;
        }
        .toast.hide {
            opacity: 0;
        }
    `;
    document.head.appendChild(style);
}

///////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    try {
        // Verificar elementos del DOM críticos
        const requiredElements = {
            'loadingIndicator': 'Indicador de carga',
            'mainContent': 'Contenedor principal',
            'ageChart': 'Gráfico de edades',
            'yearChart': 'Gráfico por año',
            'regionChart': 'Gráfico por región'
        };
        
        for (const [id, description] of Object.entries(requiredElements)) {
            if (!document.getElementById(id)) {
                throw new Error(`${description} (elemento con ID '${id}') no encontrado en el HTML`);
            }
        }
        
        // Verificar dependencias
        if (!checkDependencies()) return;
        
        // Inicializar componentes
        initializeToastSystem();
        initializeCharts();
        
        // Mostrar mensaje de carga
        showToast('Inicializando aplicación...', 'info');
        
        // Iniciar carga automática
        setTimeout(loadExcelAutomatically, 300);
    } catch (error) {
        console.error('Error en la inicialización:', error);
        displayPermanentError(`Error de inicialización: ${error.message}`);
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////

// Función para verificar dependencias
function checkDependencies() {
    const requiredLibs = {
        'XLSX': typeof XLSX,
        'Chart': typeof Chart,
        'ChartDataLabels': typeof ChartDataLabels
    };

    let allLoaded = true;
    
    for (const [lib, type] of Object.entries(requiredLibs)) {
        if (type === 'undefined') {
            console.error(`Falta la biblioteca: ${lib}`);
            allLoaded = false;
        }
    }

    if (!allLoaded) {
        displayPermanentError('Error: Faltan bibliotecas necesarias. Verifique la consola para más detalles.');
        return false;
    }
    
    return true;
}

// Modificar el DOMContentLoaded para incluir verificación
document.addEventListener('DOMContentLoaded', function() {
    if (!checkDependencies()) return;
    
    initializeToastSystem();
    initializeCharts();
    
    // Mostrar mensaje de carga
    showToast('Inicializando aplicación...', 'info');
    
    // Iniciar carga automática
    setTimeout(loadExcelAutomatically, 300);
});

/////////////////////////////////////////////////////////////////////////////////////////////////

// Elimina la doble inicialización de gráficos (quita una de las funciones initializeCharts)
// Mantén solo esta versión mejorada:

function initializeCharts() {
    // Destruir gráficos existentes antes de crear nuevos
    [ageChart, yearChart, regionChart].forEach(chart => {
        if (chart) chart.destroy();
    });

    // Verificar que los canvas existan
    const ageCanvas = document.getElementById('ageChart');
    const yearCanvas = document.getElementById('yearChart');
    const regionCanvas = document.getElementById('regionChart');
    
    if (!ageCanvas || !yearCanvas || !regionCanvas) {
        throw new Error('No se encontraron todos los elementos canvas necesarios');
    }

    // Gráfico de edades (torta)
    ageChart = new Chart(ageCanvas.getContext('2d'), {
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
        options: { /* ... mantener las opciones existentes ... */ }
    });

    // Resto de la inicialización de gráficos...
}

///////////////////////////////////////////////////////////////////////////////////////////////////

// Gráfico de edades (torta)
const ageCtx = document.getElementById('ageChart').getContext('2d');
ageChart = new Chart(ageCtx, {
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
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Distribución por Edad',
                font: { size: 16 }
            },
            subtitle: {
                display: true,
                text: 'Región: todas las regiones',
                font: { size: 14 },
                color: '#666',
                padding: { bottom: 20 }
            },
            legend: { 
                position: 'right',
                labels: {
                    generateLabels: function(chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            return data.labels.map((label, i) => {
                                const value = data.datasets[0].data[i];
                                const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                                const percentage = Math.round((value / total) * 100);
                                
                                return {
                                    text: `${label}: ${value} (${percentage}%)`,
                                    fillStyle: data.datasets[0].backgroundColor[i],
                                    hidden: false,
                                    index: i
                                };
                            });
                        }
                        return [];
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = Math.round((context.raw / total) * 100);
                        return `${context.label}: ${context.raw} casos (${percentage}%)`;
                    }
                }
            },
            datalabels: {
                formatter: (value, context) => {
                    return value;
                },
                color: '#fff',
                font: {
                    weight: 'bold',
                    size: 14
                },
                anchor: 'center',
                align: 'center'
            }
        }
    }
});    
    
/////////////////////////////////////////////////////////////////////////////////////////////////////    

    // Gráfico de años (línea)
    const yearCtx = document.getElementById('yearChart').getContext('2d');
    yearChart = new Chart(yearCtx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Casos por Año',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                tension: 0.1,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Evolución de Casos por Año',
                    font: { size: 16 }
                }
            },
            scales: {
                y: { beginAtZero: true },
                x: { title: { display: true, text: 'Año' } }
            }
        }
    });

    // Gráfico de regiones (barras)
    const regionCtx = document.getElementById('regionChart').getContext('2d');
    regionChart = new Chart(regionCtx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Casos por Región',
                data: [],
                backgroundColor: 'rgba(220, 53, 69, 0.7)',
                borderColor: 'rgba(220, 53, 69, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            indexAxis: 'y',
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Distribución por Región',
                    font: { size: 16 }
                }
            },
            scales: {
                x: { beginAtZero: true }
            }
        }
    });


// Modificar updateAllVisualizations para aceptar parámetros de filtro
function updateAllVisualizations(data = femicideData, region = 'todas las regiones', year = 'todos los años') {
    updateAgeChart(data, region);
    updateYearChart(data);
    
    // Mostrar ciudades si hay filtro de región, sino mostrar regiones
    if (region && region !== 'todas las regiones') {
        updateRegionChartWithCities(data, region);
    } else {
        updateRegionChartWithRegions(data);
    }
    
    updateSummary(data);
    displayDataTable(data);
    
    // Verifica si el elemento existe antes de intentar modificarlo
    const subtitleElement = document.getElementById('chartSubtitle');
    if (subtitleElement) {
        const subtitleText = [];
        if (region !== 'todas las regiones') subtitleText.push(`Región: ${region}`);
        if (year !== 'todos los años') subtitleText.push(`Año: ${year}`);
        
        subtitleElement.textContent = subtitleText.length > 0 ? 
            subtitleText.join(' | ') : 'Todos los datos';
    }
}


// Agregar event listeners para los filtros
document.getElementById('regionFilter').addEventListener('change', applyFilters);
document.getElementById('yearFilter').addEventListener('change', applyFilters);

// Modificar loadExcelData para actualizar los filtros después de cargar datos
function loadExcelData() {
    const fileInput = document.getElementById('excelFile');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Por favor, selecciona un archivo Excel primero.');
        return;
    }

    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, {type: 'array'});
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            femicideData = XLSX.utils.sheet_to_json(firstSheet);

            if (!femicideData || femicideData.length === 0) {
                throw new Error('El archivo está vacío o no tiene el formato correcto');
            }

            processData();
            updateFilters(); // Actualizar ambos filtros
            applyFilters(); // Aplicar filtros iniciales
            
        } catch (error) {
            console.error('Error:', error);
            alert('Error al procesar el archivo: ' + error.message);
        }
    };
    
    reader.onerror = function() {
        alert('Error al leer el archivo');
    };
    
    reader.readAsArrayBuffer(file);
}



/////////////////////////////////////////////////////////////////////////////////////////////////////
// Actualizar resumen
function updateSummary(data) {
    document.getElementById('totalCases').textContent = data.length;

    // Distribución por año
    const yearCounts = {};
    data.forEach(item => {
        if (item.Año) {
            yearCounts[item.Año] = (yearCounts[item.Año] || 0) + 1;
        }
    });
    
    const yearSummary = Object.entries(yearCounts)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([year, count]) => `${year}: ${count}`)
        .join(', ');
    document.getElementById('byYear').textContent = yearSummary || 'No disponible';
    
    // Distribución por región
    const regionCounts = {};
    data.forEach(item => {
        regionCounts[item.Region] = (regionCounts[item.Region] || 0) + 1;
    });
    
    const regionSummary = Object.entries(regionCounts)
        .sort((a, b) => b[1] - a[1])
        .map(([region, count]) => `${region}: ${count}`)
        .join(', ');
    document.getElementById('byRegion').textContent = regionSummary || 'No disponible';
    
    // Edad promedio
    const validAges = data.map(item => item.Edad).filter(age => age > 0);
    const avgAge = validAges.length > 0 ? 
        (validAges.reduce((a, b) => a + b, 0) / validAges.length).toFixed(1) : 0;
    document.getElementById('avgAge').textContent = avgAge > 0 ? `${avgAge} años` : 'No disponible';
}


/////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////

// Mostrar datos en tabla
function displayDataTable(data) {
    const tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = '';
    
    if (!data || data.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="7" class="text-center">No hay datos para mostrar</td>';
        tableBody.appendChild(row);
        return;
    }

    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.Nombre_Victima || 'Desconocido'}</td>
            <td>${item.Edad > 0 ? item.Edad : 'Desconocida'}</td>
            <td>${item.Region || 'Desconocida'}</td>
            <td>${item.Ciudad || 'Desconocida'}</td>
            <td>${item.FechaFormatted || 'Desconocida'}</td>
            <td>${item.Tipo || 'No especificado'}</td>
        `;
        tableBody.appendChild(row);
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////

// Actualizar filtro de regiones
function updateRegionFilter() {
    const regionFilter = document.getElementById('regionFilter');
    
    // Limpiar opciones excepto la primera
    while (regionFilter.options.length > 1) {
        regionFilter.remove(1);
    }
    
    // Obtener regiones únicas
    const regions = [...new Set(femicideData.map(item => item.Region))].sort();
    
    // Agregar opciones
    regions.forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionFilter.appendChild(option);
    });
    
    // Evento de cambio
    regionFilter.addEventListener('change', function() {
        filterDataByRegion(this.value);
    });
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function filterDataByRegion(region) {
    let filteredData = femicideData;
    
    if (region && region !== 'all') {
        filteredData = femicideData.filter(item => item.Region === region);
        updateAgeChart(filteredData, region); // Pasar la región como parámetro
        updateRegionChartWithCities(filteredData, region);
    } else {
        updateAgeChart(femicideData, 'todas las regiones');
        updateRegionChartWithRegions(femicideData);
    }
    
    updateYearChart(filteredData);
    updateSummary(filteredData);
    displayDataTable(filteredData);
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// Función para actualizar gráfico con ciudades de una región específica
function updateRegionChartWithCities(data, region) {
    // Contar casos por ciudad
    const cityCounts = {};
    data.forEach(item => {
        const city = item.Ciudad || 'Desconocida';
        cityCounts[city] = (cityCounts[city] || 0) + 1;
    });
    
    // Ordenar ciudades por cantidad (mayor a menor)
    const sortedCities = Object.entries(cityCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 15); // Limitar a 15 ciudades para mejor visualización
    
    // Configurar colores
    const backgroundColors = generateColors(sortedCities.length);
    
    // Actualizar gráfico
    regionChart.data.labels = sortedCities.map(city => city[0]);
    regionChart.data.datasets = [{
        label: `Casos por Ciudad en ${region}`,
        data: sortedCities.map(city => city[1]),
        backgroundColor: backgroundColors,
        borderColor: backgroundColors.map(color => color.replace('0.7', '1')),
        borderWidth: 1
    }];
    
    // Cambiar configuración para gráfico de ciudades
    regionChart.options = {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: `Distribución por Ciudad - ${region}`,
                font: { size: 16 }
            },
            datalabels: {
                display: true,
                color: '#fff',
                anchor: 'end',
                align: 'start',
                formatter: (value) => value
            }
        },
        scales: {
            x: { 
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Número de Casos'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Ciudades'
                }
            }
        }
    };
    
    // Asegurarse de que el plugin de datalabels está registrado
    regionChart.update();
}

// Función para mostrar todas las regiones (sin filtro)
function updateRegionChartWithRegions(data) {
    const regionCounts = {};
    data.forEach(item => {
        regionCounts[item.Region] = (regionCounts[item.Region] || 0) + 1;
    });
    
    // Ordenar regiones por cantidad (mayor a menor)
    const sortedRegions = Object.entries(regionCounts)
        .sort((a, b) => b[1] - a[1]);
    
    // Configurar colores
    const backgroundColors = generateColors(sortedRegions.length);
    
    // Actualizar gráfico
    regionChart.data.labels = sortedRegions.map(region => region[0]);
    regionChart.data.datasets = [{
        label: 'Casos por Región',
        data: sortedRegions.map(region => region[1]),
        backgroundColor: backgroundColors,
        borderColor: backgroundColors.map(color => color.replace('0.7', '1')),
        borderWidth: 1
    }];
    
    // Cambiar configuración para gráfico de regiones
    regionChart.options = {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Distribución por Región',
                font: { size: 16 }
            },
            datalabels: {
                display: true,
                color: '#fff',
                anchor: 'end',
                align: 'start',
                formatter: (value) => value
            }
        },
        scales: {
            x: { 
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Número de Casos'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Regiones'
                }
            }
        }
    };
    
    regionChart.update();
}

// Función auxiliar para generar colores
function generateColors(count) {
    const colors = [];
    const hueStep = 360 / Math.max(count, 1); // Evitar división por cero
    for (let i = 0; i < count; i++) {
        colors.push(`hsla(${i * hueStep}, 70%, 50%, 0.7)`);
    }
    return colors;
}

