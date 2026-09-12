# 🌊 El Desafío Definitivo · Maldivas

Una Progressive Web App interactiva para descubrir y registrar avistamientos de fauna marina en las islas Maldivas.

## 🎮 Sobre la Aplicación

**El Desafío Definitivo** es un diario personal digital que te permite explorar más de 100 especies marinas diferentes. Descubre información sobre vida marina, completa desafíos y construye tu propio registro de avistamientos.

### ✨ Características

- 📱 **Progressive Web App (PWA)** - Funciona como app nativa en tu teléfono
- 🔌 **Modo Offline** - Juega sin conexión a internet
- 📸 **Galería Completa** - Más de 100 especies marinas con imágenes
- 💾 **Persistencia Local** - Guarda tu progreso automáticamente
- 🎨 **Diseño Responsivo** - Optimizado para móviles, tablets y desktop
- 🌊 **Tema Oceánico** - Interfaz inspirada en el mar profundo
- ⚡ **Rápido y Ligero** - Carga instantáneamente

## 🚀 Cómo Jugar

1. **Visita la app**: [Abre El Desafío Definitivo](https://tuusuario.github.io/MaldivasGame)
2. **Instala en tu dispositivo**: 
   - En móviles: Menú → "Instalar app" o "Agregar a pantalla de inicio"
   - Funciona perfectamente offline después de la primera carga
3. **Explora especies**: Navega por el catálogo de fauna marina
4. **Completa desafíos**: Registra avistamientos y completa objetivos
5. **Comparte tu progreso**: Muestra tus descubrimientos

## 💻 Instalación Local

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Para desarrollo: Node.js 16+ y un editor de código

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/MaldivasGame.git
cd MaldivasGame

# Servir localmente (opción 1: Python)
python -m http.server 8000

# O servir localmente (opción 2: Node.js)
npx http-server

# Abre en navegador: http://localhost:8000
```

## 📁 Estructura del Proyecto

```
MaldivasGame/
├── index.html                 # Página de entrada
├── desafio-definitivo.html   # Aplicación principal
├── manifest.json             # Configuración PWA
├── sw.js                     # Service Worker
├── icon.svg                  # Ícono de la app
├── README.md                 # Este archivo
├── LICENSE                   # Licencia MIT
└── [imágenes de especies]    # Base de datos de fauna marina
```

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Animaciones y diseño responsive
- **JavaScript Vanilla** - Sin dependencias externas
- **Service Workers** - Para funcionalidad offline
- **PWA Manifest** - Para instalación como app

## 📊 Especificaciones Técnicas

- **Tamaño**: ~50 MB (incluyendo imágenes)
- **Compatibilidad**: iOS 12+, Android 8+, Desktop
- **Rendimiento**: Carga en <2s (cached) en conexión rápida
- **Storage**: Utiliza LocalStorage para persistencia

## 🎯 Roadmap Futuro

- [ ] Sistema de puntuación y logros
- [ ] Multiplayer / Competencias
- [ ] Más especies marinas
- [ ] Animaciones 3D
- [ ] Integración con redes sociales
- [ ] Modo oscuro/claro (tema)
- [ ] Multi-idioma

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar la app:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 📧 Contacto

**Creador**: [Tu Nombre]  
**Email**: tu.email@example.com  
**GitHub**: [@tuusuario](https://github.com/tuusuario)

---

**¡Sumérgete en el mundo marino de Maldivas! 🐠🐙🦈**
