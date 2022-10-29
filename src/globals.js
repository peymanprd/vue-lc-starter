import { upperFirst, camelCase } from 'lodash'

export default {
    install(app) {
        const componentFiles = import.meta.globEager('./components/base/*.vue')
        for (const componentPath in componentFiles) {
            const componentName = upperFirst(
                camelCase(
                    componentPath
                        .split('/')
                        .pop()
                        .replace(/\.\w+$/, '')
                )
            )
            const componentModule = componentFiles[componentPath].default
            app.component(`Base${componentName}`, componentModule)
        }
    },
}
