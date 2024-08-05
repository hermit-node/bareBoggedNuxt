// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        "@nuxt/image",
        '@davestewart/nuxt-scrollbar',
        "@ant-design-vue/nuxt",
        "maz-ui/nuxt",
        "@unocss/nuxt",
        "@nuxt/icon",
        "@hypernym/nuxt-anime",
        "@pinia/nuxt",
        "@vueuse/nuxt",
        "nuxt-lodash"
    ],
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => ['UseFetchDemo'].includes(tag),
        },
    },
    vite: {},
    mazUi: {
        injectComponents: true,
        injectCss: true,
        injectAos: {
            injectCss: true,
        },
        injectUseToast: true,
        injectUseThemeHandler: true,
        devtools: true,
    },
    components: {
        global: true,
        dirs: ['~/components'],
    },
    content: {
        // https://content.nuxtjs.org/api/configuration
        highlight: {
            preload: ['javascript', 'vue', 'html'],
            theme: 'monokai',
        },
    },
    devtools: {enabled: true},
    css: ['@/assets/css/main.css', '@/assets/css/maz-ui-variables.css'],
    icon: {
        serverBundle: {
            collections: ['heroicons', 'mdi', 'material-symbols-light', 'bi'] // <!--- this
        }
    },
    anime: {
        provide: true
    },
    lodash: {
        prefix: "_",
        prefixSkip: ["string"],
        upperAfterPrefix: false,
        exclude: ["map"],
        alias: [
            ["camelCase", "stringToCamelCase"], // => stringToCamelCase
            ["kebabCase", "stringToKebab"], // => stringToKebab
            ["isDate", "isLodashDate"], // => _isLodashDate
        ],
    },
});