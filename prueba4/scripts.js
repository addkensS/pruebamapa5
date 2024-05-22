document.getElementById('find-route').addEventListener('click', function() {
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    drawRoute(start, end);
});

const routes = {
    'lobby-redes': [
        { x: 160, y: 350 },   // Lobby
        { x: 160, y: 300},
        { x: 160, y: 190},
        { x: 170, y: 190},
    ],
    
    'lobby-laboratorios': [
        { x: 150, y: 350 },   // Lobby
        { x: 150, y: 190},
        { x: 70, y: 190},
        { x: 70, y: 120},
        { x: 200, y: 120},
        { x: 200, y: 110}
    ],

    'lobby-cafeteria': [
        { x: 160, y: 350 },   // Lobby
        { x: 160, y: 280},
        { x: 230, y: 280}
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