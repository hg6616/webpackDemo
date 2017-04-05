module.exports = {
    entry: './A.js',
    output: {
        filename: './bundle.js'
    },
    resolve: {
        alias: {
            Components: path.join(__dirname, '..', 'src', 'scripts', 'components')
        }
    },
    watch: true
}