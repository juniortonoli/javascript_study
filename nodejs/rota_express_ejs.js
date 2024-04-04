const express = require("express")
const app = express()

//registrar o template engine (view engine)
app.set('view engine', 'ejs')

//escutar os requests
app.listen(3000)

//routes with express + ejs (pasta views)
app.get('/', (req, res) => {
    res.render('home', {title: "Pagina Inicial"})
})

app.use((req, res) => {
    res.status(404).render('404', {title: "Erro!"})
