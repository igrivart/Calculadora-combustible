// Base de datos (equivalente a hoja CIUDAD)
const ciudades = {

  "Arica": { distancia: 2437, tiempo: 27 },
  "Alto Hospicio": { distancia: 2158, tiempo: 24 },
  "Antofagasta": { distancia: 1737, tiempo: 19.05 },
  "Caldera": { distancia: 1274, tiempo: 14.07 },
  "Copiapó": { distancia: 1208, tiempo: 13.57 },
  "Coquimbo": { distancia: 862, tiempo: 9.25 },
  "Los Vilos": { distancia: 626, tiempo: 6.68 },
  "Isla De Pascua": { distancia: 0, tiempo: 0 },
  "Villa Alemana": { distancia: 509, tiempo: 5.5 },
  "Viña Del Mar": { distancia: 516, tiempo: 5.52 },
  "San Antonio": { distancia: 420, tiempo: 5.07 },
  "Santiago": { distancia: 406, tiempo: 4.32 },
  "Cauquenes": { distancia: 120, tiempo: 1.65 },
  "Constitución": { distancia: 226, tiempo: 3.17 },
  "Curicó": { distancia: 194, tiempo: 2.47 },
  "Chillán": { distancia: 0, tiempo: 0 },
  "Los Ángeles": { distancia: 130, tiempo: 1.95 },
  "Concepción": { distancia: 105, tiempo: 1.58 },
  "Angol": { distancia: 170, tiempo: 2.25 },
  "Victoria": { distancia: 215, tiempo: 2.3 },
  "Pedregoso": { distancia: 361, tiempo: 4.58 },
  "Temuco": { distancia: 278, tiempo: 3.13 },
  "Teodoro Schmidt": { distancia: 349, tiempo: 3.92 },
  "Traiguen": { distancia: 227, tiempo: 2.68 },
  "Trovolhue": { distancia: 358, tiempo: 4.33 },
  "Troyo": { distancia: 375, tiempo: 5.1 },
  "Valdivia": { distancia: 447, tiempo: 5 },
  "La Unión": { distancia: 502, tiempo: 5.42 },
  "Puerto Montt": { distancia: 631, tiempo: 6.72 },
  "Castro": { distancia: 798, tiempo: 9.82 },
  "Ancud": { distancia: 722, tiempo: 8.8 },
  "Futaleufu": { distancia: 1021, tiempo: 16.88 },
  "Puerto Aysen": { distancia: 1262, tiempo: 20.13 },
  "Coyhaique": { distancia: 1291, tiempo: 20.65 },
  "Punta Arenas": { distancia: 2571, tiempo: 31 }
};


// Cargar ciudades en el select
const selectCiudad = document.getElementById("ciudad");
for (const ciudad in ciudades) {
    const option = document.createElement("option");
    option.value = ciudad;
    option.textContent = ciudad;
    selectCiudad.appendChild(option);
}


function calcular() {
    const ciudad = selectCiudad.value;
    if (!ciudad) return;

    const precio = Number(document.getElementById("precio").value);
    const rendimiento = Number(document.getElementById("rendimiento").value);
    const factor = Number(document.getElementById("factor").value);

    const { distancia, tiempo } = ciudades[ciudad];

    // Fórmula exacta del Excel
    const costo = ((distancia * 2) * (factor * precio)) / rendimiento;

    document.getElementById("distancia").textContent = distancia;
    document.getElementById("tiempo").textContent = tiempo;
    document.getElementById("costo").textContent = Math.round(costo).toLocaleString("es-CL");
}
