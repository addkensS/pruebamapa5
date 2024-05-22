document.getElementById('find-route').addEventListener('click', function() {
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    drawRoute(start, end);
});

const routes = {
    'lobby-lab-redes': [
        { x: 50, y: 500 },   // Lobby
        { x: 100, y: 50 },  // Centro de la universidad
        { x: 150, y: 100 }, // Cerca del ascensor
        { x: 150, y: 200 }  // Laboratorio de Redes
    ],
    // Puedes agregar más rutas aquí
    'lobby-cafeteria': [
        { x: 50, y: 50 },   // Lobby
        { x: 50, y: 150 },  // Pasillo
        { x: 100, y: 150 }  // Cafetería
    ]
};

function drawRoute(start, end) {
    const routeId = `${start}-${end}`;
    const route = routes[routeId];

    const svg = document.getElementById('routes');
    svg.innerHTML = '';

    if (route) {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        let d = `M ${route[0].x} ${route[0].y}`;
        for (let i = 1; i < route.length; i++) {
            d += ` L ${route[i].x} ${route[i].y}`;
        }
        path.setAttribute('d', d);
        path.setAttribute('stroke', 'red');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('fill', 'none');
        svg.appendChild(path);
    } else {
        alert('Ruta no encontrada.');
    }
}