// Base de datos (equivalente a hoja CIUDAD)
const ciudades = {

  "Arica": { distancia: 2437, tiempo: 27 },
  "Alto Hospicio": { distancia: 2158, tiempo: 24 },
  "Antofagasta": { distancia: 1737, tiempo: 18.57 },
  "Caldera": { distancia: 1274, tiempo: 13.42 },
  "Copiapó": { distancia: 1208, tiempo: 13.10 },
  "Coquimbo": { distancia: 862, tiempo: 9.10 },
  "Los Vilos": { distancia: 626, tiempo: 6.43 },
  "Isla De Pascua": { distancia: 0, tiempo: 0 },
  "Villa Alemana": { distancia: 509, tiempo: 5.38 },
  "Viña del mar": { distancia: 516, tiempo: 5.48 },
  "San Antonio": { distancia: 420, tiempo: 5.9 },
  "Santiago": { distancia: 406, tiempo: 4.23 },
  "Curicó": { distancia: 194, tiempo: 2.47 },
  "Constitución": { distancia: 226, tiempo: 2.38 },
  "Empedrado": { distancia: 177, tiempo: 2.30 },
  "Cauquenes": { distancia: 120, tiempo: 1.38 },
  "Talcahuano": { distancia: 102, tiempo: 1.20 },
  "Los Ángeles": { distancia: 113, tiempo: 1.23 },
  "Curanilahue": { distancia: 192, tiempo: 2.45 },
  "Cañete": { distancia: 234, tiempo: 3.17 },
  "Tirúa": { distancia: 301, tiempo: 4.14 },
  "Angol": { distancia: 165, tiempo: 1.56 },
  "Victoria": { distancia: 215, tiempo: 2.18 },
  "Traiguen": { distancia: 227, tiempo: 2.40 },
  "Troyo": { distancia: 375, tiempo: 5 },
  "Curacautín": { distancia: 271, tiempo: 3.9 },
  "Lautaro": { distancia: 254, tiempo: 2.46 },
  "Pedregoso": { distancia: 361, tiempo: 4.29 },
  "Temuco": { distancia: 278, tiempo: 3.8 },
  "Nueva Imperial": { distancia: 320, tiempo: 3.35 },
  "Teodoro Schmidt": { distancia: 349, tiempo: 3.52 },
  "Loncoche": { distancia: 360, tiempo: 3.50 },
  "Trovolhue": { distancia: 358, tiempo: 4.22 },
  "Valdivia": { distancia: 447, tiempo: 5 },
  "La Unión": { distancia: 502, tiempo: 5.23 },
  "Puerto Montt": { distancia: 631, tiempo: 6.44 },
  "Ancud": { distancia: 722, tiempo: 8.45 },
  "Castro": { distancia: 798, tiempo: 9.45 },
  "Futaleufu": { distancia: 1021, tiempo: 16.55 },
  "Puerto Aysen": { distancia: 1262, tiempo: 20.10 },
  "Coyhaique": { distancia: 1291, tiempo: 20.42 },
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
