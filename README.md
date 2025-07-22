# Cypress Automation - Vita Wallet Challenge

Este repositorio contiene pruebas automatizadas **WEB** y **API**
utilizando [Cypress](https://www.cypress.io/) con integración de reportes en **[Allure](https://allurereport.org/)**.

---

## 🛠️ Tecnologías y herramientas utilizadas

* **Lenguaje:** JavaScript
* **Framework:** Cypress
* **Reportes:** Allure
* **Code style:** Prettier
* Patrones de diseño:
    * Page Object Model (POM)
    * Builder (Manejo de data)

---

## 📦 Condiciones previas

Antes de ejecutar las pruebas, asegúrate de tener configurado tu entorno correctamente.

* Node.js
* npm
* Git

---

## ⚙️ Instalación

1. Clona el repositorio

   **`git clone https://github.com/dfmerchan2/challenge-vita-wallet.git`**

2. Accede al proyecto

   **`cd challenge-vita-wallet`**

3. Cambia a la rama principal

   **`git checkout main`**

4. Instala las dependencias necesarias (incluye Cypress y Allure)

   **`npm install`**

5. Verifica que Cypress se abre correctamente

   **`npm run open `**

---

## 📁 Estructura del proyecto

```challenge-vita-wallet/
├── cypress/             
│   ├── apis/              # Consumo de servicios REST (GET, POST, PUT, DELETE)
│   ├── builders/          # Generadores (builders) para modelar la data
│   ├── e2e/               # Pruebas de extremo a extremo
│   │   ├── api/           # Tests de API
│   │   └── web/           # Tests de Web
│   ├── fixtures/          # Archivos JSON con datos de prueba
│   ├── pages/             # Page Objects de la interfaz web
│   │   └── components/    # Componentes reutilizables de UI
│   ├── support/           # Comandos personalizados, configuración y hooks
│   └── utils/             # Funciones utilitarias compartidas
├── .gitignore             # Archivos y carpetas ignoradas por Git
├── .prettierrc            # Configuración de estilo para Prettier
├── .prettierignore        # Archivos que deben excluirse del formateo de Prettier
├── cypress.config.js      # Configuración principal de Cypress
├── index.js               # Archivo base de arranque
├── package.json           # Dependencias, scripts y metadatos del proyecto
├── package-lock.json      # Lockfile de NPM para versiones exactas de dependencias
├── README.md              # Documentación del proyecto
```

---

## 🚀 Comandos disponibles

### Ejecutar pruebas en modo headless

| Comando            | Descripción                   |
|--------------------|-------------------------------|
| `npm run test`     | Ejecuta todos los tests       |
| `npm run test:web` | Ejecuta solo los tests de web |
| `npm run test:api` | Ejecuta solo los tests de API |

### Ejecutar pruebas (con Allure)

| Comando                      | Descripción                                                        |
|------------------------------|--------------------------------------------------------------------|
| `npm run test:allure`        | Ejecuta todos los tests con reporte de Allure                      |
| `npm run test:headed:allure` | Ejecuta todos los tests con reporte de Allure, pero en modo headed |
| `npm run test:web:allure`    | Ejecuta solo pruebas de Web con Allure                             |
| `npm run test:api:allure`    | Ejecuta solo test de API con Allure                                |

### Ejecutar pruebas Web por tipo de dispositivo (con Allure)

| Comando                          | Descripción                                    |
|----------------------------------|------------------------------------------------|
| `npm run test:web:mobile:allure` | Ejecuta Web simulando dispositivo móvil        |
| `npm run test:web:tablet:allure` | Ejecuta Web simulando tablet                   |
| `npm run test:web:full:allure`   | Ejecuta Web en resolución de pantalla completa |

### Generar y abrir reporte Allure

| Comando                   | Descripción                               |
|---------------------------|-------------------------------------------|
| `npm run allure:generate` | Genera el reporte desde `allure-results/` |
| `npm run allure:open`     | Abre el reporte generado en el navegador  |

### Utilidades

| Comando          | Descripción                               |
|------------------|-------------------------------------------|
| `npm run format` | Formatea el código fuente usando Prettier |

---

## 🎬 Demo

Haz clic en la imagen o en este [enlace](https://www.youtube.com/watch?v=rTsfn8OExko) para ver una demostración del
proyecto:

[![Ver la demo en YouTube](https://img.youtube.com/vi/rTsfn8OExko/0.jpg)](https://www.youtube.com/watch?v=rTsfn8OExko)

## 🤖 Author

#### Diego Fernando Merchan Jimenez