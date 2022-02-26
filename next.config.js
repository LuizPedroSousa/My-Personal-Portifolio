const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withTM = require('next-transpile-modules')(['three'])

const imagePlugin = withImages({
    esModule: true
})

const nextConfig = {
    images: {
        domains: ['avatars.githubusercontent.com']
    },

    env: {}
}

module.exports = withPlugins([imagePlugin, nextConfig, withTM])
