import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'

window.onload = function () {
    SwaggerUI({
        url: "./swagger.yaml",
        dom_id: '#root',
        deepLinking: true,
    })
}
