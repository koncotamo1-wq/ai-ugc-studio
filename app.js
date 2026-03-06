
let uploadedImage=null
let mediaRecorder
let recordedChunks=[]

document.getElementById("imageUpload").addEventListener("change",function(e){

let reader=new FileReader()

reader.onload=function(){
uploadedImage=new Image()
uploadedImage.src=reader.result
}

reader.readAsDataURL(e.target.files[0])

})

function generateContent(){

let product=document.getElementById("product").value
let target=document.getElementById("target").value
let feature=document.getElementById("feature").value

let hooks=[
`Serius ${product} ini murah tapi kualitasnya premium`,
`${product} ini lagi viral di TikTok`,
`Baru nemu ${product} sebagus ini di harga segini`,
`Kalau cari ${product}, lihat ini dulu`
]

document.getElementById("hooks").value=hooks.join("\n")

document.getElementById("script").value=
`Scene1 Hook
${hooks[0]}

Scene2 Highlight
Cocok buat ${target}
Bahannya ${feature}

Scene3 CTA
Cek keranjang kuning`

document.getElementById("caption").value=
`${product} lagi viral. Bahannya ${feature}.`
}

async function createVideo(){

let canvas=document.getElementById("videoCanvas")
let ctx=canvas.getContext("2d")

const stream=canvas.captureStream(30)
mediaRecorder=new MediaRecorder(stream)

recordedChunks=[]

mediaRecorder.ondataavailable=e=>{
if(e.data.size>0) recordedChunks.push(e.data)
}

mediaRecorder.start()

let hooks=document.getElementById("hooks").value.split("\n")

for(let i=0;i<3;i++){

ctx.fillStyle="black"
ctx.fillRect(0,0,canvas.width,canvas.height)

if(uploadedImage){

ctx.drawImage(uploadedImage,140,300,800,800)

}

ctx.fillStyle="white"
ctx.font="60px Arial"

ctx.fillText(hooks[0]||"Hook",100,200)

await new Promise(r=>setTimeout(r,3000))

}

mediaRecorder.stop()

}

function downloadVideo(){

let blob=new Blob(recordedChunks,{type:"video/webm"})

let url=URL.createObjectURL(blob)

let a=document.createElement("a")
a.href=url
a.download="ugc-video.webm"
a.click()

}
