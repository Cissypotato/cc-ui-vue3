import Dialog from './dialog.vue';
import { createApp, h } from 'vue'

export const openDialog = (options) => {
    let { title, content, ok, cancel } = options
    let div = document.createElement('div')
    document.body.appendChild(div)
    const close = () => {
        app.unmount(div)
        div.remove()
    }
    const app = createApp({
        render() {
            return h(Dialog, {
                title,
                visible: true,
                'onUpdate:visible': (newVisible) => {
                    if (newVisible === false) {
                        close()
                    }
                },
                ok,
                cancel
            }, { content })
        }
    })
    app.mount(div)
}