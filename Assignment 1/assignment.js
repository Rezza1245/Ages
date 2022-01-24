// load library express
const e = require("express")
const { response, request } = require("express")
let express = require("express")
const req = require("express/lib/request")

//inisiasi objek baru dari express
let app = express()

// 1

app.get("/satu/:sisi", (request, response)=>{
    let sisi = request.params.sisi
    let hasil = 0

    hasil =+ sisi * sisi * sisi

    return response.json({
        message:`Volume `+ hasil
    })
})
app.get("/dua/:panjang/:lebar/:tinggi", (request, response)=>{
    let panjang = request.params.panjang
    let lebar = request.params.lebar
    let tinggi = request.params.tinggi

    let volume = panjang * lebar * tinggi
    let luasPermukaan = 2 * (panjang * lebar) + (panjang * tinggi) + (lebar * tinggi)

    return response.json({
        message:`Volume balok ${volume} dan Luas Permukaan balok${luasPermukaan}`
    })
})    
app.get("/tiga/:radius/:tinggi", (request, response)=>{
    let radius = request.params.radius
    let tinggi = request.params.tinggi

    let volume = 22 * radius * radius * tinggi / 7
    let luasPermukaan = 2 * 22 * radius * (radius + tinggi) / 7

    return response.json({
        message:`Volume tabung ${volume} dan luas permukaannya ${luasPermukaan}`
    })
})
app.get("/empat/:sisi/:tinggi", (request, response)=>{
    let sisi = request.params.sisi
    let tinggi = request.params.tinggi

    let luasAlas = sisi * sisi
    let luasSegitiga = sisi * tinggi / 3
    let volume = luasAlas * tinggi * sisi 
    let luasPermukaan = luasAlas * luasSegitiga * luasSegitiga * luasSegitiga * luasSegitiga

    return response.json({
        message:`Volume limas segi 4 ${volume} dan luas permukaanya ${luasPermukaan}`
    })
})
app.get("/lima/:radius", (request, response)=>{
    let radius = request.params.radius

    let volume = 4 * Math.PI * radius * radius * radius / 3 
    let luasPermukaan = 4 * Math.PI * radius * radius

    return response.json({
        message:`Volume bola ${volume} dan luas permukaanya ${luasPermukaan}`
    })
})
app.get("enam/:convert/:celcius/")
    
    return response.json({
        message:`celcius ${celcius}, result: ${suhu}`
    })

app.listen(5000, () => {
    console.log(`server run on port 5000`);
})