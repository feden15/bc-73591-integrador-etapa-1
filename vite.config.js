import { resolve } from 'path' /* Node */

// https://vite.dev/config/
// https://vite.dev/config/shared-options.html#css-devsourcemap
// https://vite.dev/guide/build.html#multi-page-app

export default {
    // config options
    css: {
        devSourcemap: true
        /* Configuramos para ver la línea donde está escrita la regla CSS. Nos permite ver en qué línea está cada estilo si consoleamos nuestro proyecto */
    },
    build: {
        rollupOptions: {
            input: resolve(__dirname, 'index.html')
        }
    }
}