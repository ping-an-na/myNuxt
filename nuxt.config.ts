// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    css: ["~/assets/css/index.scss"], // 全局样式 仅仅是初始化样式，引用变量 不可以
    vite: { // vite 配置
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/css/base.scss" as *;',// @use scss 导入命令 // 跟上面css 不能重复引用
                }
            }
        }
    },

    runtimeConfig: {
        name: "Nuxt学习项目-项目基础模板", // runtimeConfig下直接取值，服务器能取到，客户端取不到
        public: {
            name: "Nuxt学习项目-项目基础模板",//runtimeConfig.public下直接取值 服务端和客户端 均可取到
        },
    },

    modules: [
        '@element-plus/nuxt'
    ],
    elementPlus: { /** Options */ },



})
