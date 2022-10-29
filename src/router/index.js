import { createRouter, createWebHistory } from 'vue-router'
import { camelCase } from 'lodash'

const routes = []

const router = createRouter({
    scrollBehavior: () => ({ top: 0, left: 0, behavior: 'smooth' }),
    routes,
    history: createWebHistory(),
})

function getRoutes() {
    const pages = import.meta.globEager('../pages/**/*.vue')
    console.log(pages)
    for (const path in pages) {
        console.log(path)

        const pageName = camelCase(
            path
                .split('/')
                .pop()
                .replace(/\.\w+$/, '')
        )

        console.log(pageName)

        if (pageName === 'home') {
            router.addRoute({
                path: '/',
                name: pageName,
                component: () => import(/* @vite-ignore */ path),
            })
        } else {
            router.addRoute({
                path: `/${pageName}`,
                name: pageName,
                component: () => import(/* @vite-ignore */ path),
            })
        }
    }
}

getRoutes()

export default router
