function ocultarResultados() {
    document.getElementById('iteracionesCostoMinimo').innerHTML = '';
    document.getElementById('resultadoFinal').textContent = '';
    document.getElementById('iteracionesRinconNoroeste').innerHTML = '';
    document.getElementById('resultadoRinconNoroeste').textContent = '';
    document.getElementById('iteracionesVogel').innerHTML = '';
    document.getElementById('resultadoVogel').textContent = '';
}

function calcularCostoMinimo() {
    ocultarResultados();

    let costos = [
        [parseInt(document.getElementById('costo11').value), parseInt(document.getElementById('costo12').value)],
        [parseInt(document.getElementById('costo21').value), parseInt(document.getElementById('costo22').value)],
        [parseInt(document.getElementById('costo31').value), parseInt(document.getElementById('costo32').value)]
    ];

    let requerimientos = [
        parseInt(document.getElementById('req1').value),
        parseInt(document.getElementById('req2').value),
        parseInt(document.getElementById('req3').value)
    ];

    let suministros = [
        parseInt(document.getElementById('supplyNorte').value),
        parseInt(document.getElementById('supplySur').value)
    ];

    let asignacion = [
        [0, 0],
        [0, 0],
        [0, 0]
    ];

    let totalCost = 0;
    let iteracion = 1;
    let iteracionesHTML = '';

    while (true) {
        let minCosto = Infinity;
        let obra = -1;
        let banco = -1;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 2; j++) {
                if (requerimientos[i] > 0 && suministros[j] > 0 && costos[i][j] < minCosto) {
                    minCosto = costos[i][j];
                    obra = i;
                    banco = j;
                }
            }
        }

        if (minCosto === Infinity) break;

        let cantidadAsignada = Math.min(requerimientos[obra], suministros[banco]);
        asignacion[obra][banco] = cantidadAsignada;
        requerimientos[obra] -= cantidadAsignada;
        suministros[banco] -= cantidadAsignada;
        totalCost += cantidadAsignada * minCosto;

        iteracionesHTML += `
        <div class="table-container">
            <h4>Iteración ${iteracion}</h4>
            <table class="table table-bordered table-striped">
                <thead class="table-dark">
                    <tr>
                        <th>Obra</th>
                        <th>Banco Norte</th>
                        <th>Banco Sur</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Obra 1</td>
                        <td>${asignacion[0][0]}</td>
                        <td>${asignacion[0][1]}</td>
                    </tr>
                    <tr>
                        <td>Obra 2</td>
                        <td>${asignacion[1][0]}</td>
                        <td>${asignacion[1][1]}</td>
                    </tr>
                    <tr>
                        <td>Obra 3</td>
                        <td>${asignacion[2][0]}</td>
                        <td>${asignacion[2][1]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        `;
        iteracion++;
    }

    document.getElementById('iteracionesCostoMinimo').innerHTML = iteracionesHTML;
    document.getElementById('resultadoFinal').textContent = `Costo Total: ${totalCost} cientos de pesos`;
}

function calcularRinconNoroeste() {
    ocultarResultados();

    let costos = [
        [parseInt(document.getElementById('costo11').value), parseInt(document.getElementById('costo12').value)],
        [parseInt(document.getElementById('costo21').value), parseInt(document.getElementById('costo22').value)],
        [parseInt(document.getElementById('costo31').value), parseInt(document.getElementById('costo32').value)]
    ];

    let requerimientos = [
        parseInt(document.getElementById('req1').value),
        parseInt(document.getElementById('req2').value),
        parseInt(document.getElementById('req3').value)
    ];

    let suministros = [
        parseInt(document.getElementById('supplyNorte').value),
        parseInt(document.getElementById('supplySur').value)
    ];

    let asignacion = [
        [0, 0],
        [0, 0],
        [0, 0]
    ];

    let totalCost = 0;
    let i = 0;
    let j = 0;
    let iteracion = 1;
    let iteracionesHTML = '';

    while (i < 3 && j < 2) {
        let cantidadAsignada = Math.min(requerimientos[i], suministros[j]);
        asignacion[i][j] = cantidadAsignada;
        requerimientos[i] -= cantidadAsignada;
        suministros[j] -= cantidadAsignada;
        totalCost += cantidadAsignada * costos[i][j];

        if (requerimientos[i] === 0) i++;
        if (suministros[j] === 0) j++;

        iteracionesHTML += `
        <div class="table-container">
            <h4>Iteración ${iteracion}</h4>
            <table class="table table-bordered table-striped">
                <thead class="table-dark">
                    <tr>
                        <th>Obra</th>
                        <th>Banco Norte</th>
                        <th>Banco Sur</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Obra 1</td>
                        <td>${asignacion[0][0]}</td>
                        <td>${asignacion[0][1]}</td>
                    </tr>
                    <tr>
                        <td>Obra 2</td>
                        <td>${asignacion[1][0]}</td>
                        <td>${asignacion[1][1]}</td>
                    </tr>
                    <tr>
                        <td>Obra 3</td>
                        <td>${asignacion[2][0]}</td>
                        <td>${asignacion[2][1]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        `;
        iteracion++;
    }

    document.getElementById('iteracionesRinconNoroeste').innerHTML = iteracionesHTML;
    document.getElementById('resultadoRinconNoroeste').textContent = `Costo Total: ${totalCost} cientos de pesos`;
}

function calcularVogel() {
    ocultarResultados();

    let costos = [
        [parseInt(document.getElementById('costo11').value), parseInt(document.getElementById('costo12').value)],
        [parseInt(document.getElementById('costo21').value), parseInt(document.getElementById('costo22').value)],
        [parseInt(document.getElementById('costo31').value), parseInt(document.getElementById('costo32').value)]
    ];

    let requerimientos = [
        parseInt(document.getElementById('req1').value),
        parseInt(document.getElementById('req2').value),
        parseInt(document.getElementById('req3').value)
    ];

    let suministros = [
        parseInt(document.getElementById('supplyNorte').value),
        parseInt(document.getElementById('supplySur').value)
    ];

    // Añadir variable ficticia (SF)
    let sumaRequerimientos = requerimientos.reduce((a, b) => a + b, 0);
    let sumaSuministros = suministros.reduce((a, b) => a + b, 0);

    let ficticia = false;
    if (sumaRequerimientos !== sumaSuministros) {
        ficticia = true;
        if (sumaRequerimientos > sumaSuministros) {
            suministros.push(sumaRequerimientos - sumaSuministros);
            costos.forEach(fila => fila.push(0)); // Añadir columna ficticia
        } else {
            requerimientos.push(sumaSuministros - sumaRequerimientos);
            costos.push(new Array(costos[0].length).fill(0)); // Añadir fila ficticia
        }
    }

    let asignacion = Array.from({ length: costos.length }, () => new Array(costos[0].length).fill(0));
    let totalCost = 0;
    let iteracion = 1;
    let iteracionesHTML = '';

    while (true) {
        let penalizaciones = { filas: [], columnas: [] };

        // Calcular penalizaciones de filas
        for (let i = 0; i < costos.length; i++) {
            let filaCostos = costos[i].filter((_, j) => suministros[j] > 0);
            if (requerimientos[i] > 0) {
                filaCostos.sort((a, b) => a - b);
                penalizaciones.filas[i] = filaCostos.length > 1 ? filaCostos[1] - filaCostos[0] : filaCostos[0];
            } else {
                penalizaciones.filas[i] = -1;
            }
        }

        // Calcular penalizaciones de columnas
        for (let j = 0; j < costos[0].length; j++) {
            let columnaCostos = costos.map((fila) => fila[j]).filter((_, i) => requerimientos[i] > 0);
            if (suministros[j] > 0) {
                columnaCostos.sort((a, b) => a - b);
                penalizaciones.columnas[j] = columnaCostos.length > 1 ? columnaCostos[1] - columnaCostos[0] : columnaCostos[0];
            } else {
                penalizaciones.columnas[j] = -1;
            }
        }

        // Encontrar la mayor penalización
        let maxPenalizacion = -1;
        let maxIndex = { tipo: null, index: -1 };

        penalizaciones.filas.forEach((penalizacion, i) => {
            if (penalizacion > maxPenalizacion) {
                maxPenalizacion = penalizacion;
                maxIndex.tipo = 'fila';
                maxIndex.index = i;
            }
        });

        penalizaciones.columnas.forEach((penalizacion, j) => {
            if (penalizacion > maxPenalizacion) {
                maxPenalizacion = penalizacion;
                maxIndex.tipo = 'columna';
                maxIndex.index = j;
            }
        });

        if (maxPenalizacion === -1) break;

        let i, j;
        if (maxIndex.tipo === 'fila') {
            i = maxIndex.index;
            j = costos[i].indexOf(Math.min(...costos[i].filter((_, j) => suministros[j] > 0)));
        } else {
            j = maxIndex.index;
            i = costos.map((fila) => fila[j]).indexOf(Math.min(...costos.map((fila) => fila[j]).filter((_, i) => requerimientos[i] > 0)));
        }

        let asignacionCantidad = Math.min(requerimientos[i], suministros[j]);
        asignacion[i][j] = asignacionCantidad;
        requerimientos[i] -= asignacionCantidad;
        suministros[j] -= asignacionCantidad;
        totalCost += asignacionCantidad * costos[i][j];

        // Actualizar HTML de iteración
        iteracionesHTML += `
        <div class="table-container">
            <h4>Iteración ${iteracion}</h4>
            <table class="table table-bordered table-striped">
                <thead class="table-dark">
                    <tr>
                        <th>Obra</th>
                        <th>Banco Norte</th>
                        <th>Banco Sur</th>
                    </tr>
                </thead>
                <tbody>
                    ${asignacion.map((fila, index) => `
                        <tr>
                            <td>Obra ${index + 1}</td>
                            ${fila.map((valor, j) => `<td>${valor}</td>`).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        `;
        iteracion++;
    }

    // Mostrar resultados
    document.getElementById('iteracionesVogel').innerHTML = iteracionesHTML;
    document.getElementById('resultadoVogel').textContent = `Costo Total: ${totalCost} cientos de pesos`;
}