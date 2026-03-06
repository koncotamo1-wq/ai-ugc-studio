
function previewImage(event){

let reader=new FileReader()

reader.onload=function(){
document.getElementById("preview").src=reader.result
}

reader.readAsDataURL(event.target.files[0])

}

function generateAll(){

let product=document.getElementById("product").value
let target=document.getElementById("target").value
let feature=document.getElementById("feature").value

let hooks=[
`Serius ${product} ini murah tapi kualitasnya premium`,
`${product} ini lagi viral di TikTok`,
`Baru nemu ${product} sebagus ini di harga segini`,
`Kalau cari ${product}, lihat ini dulu`,
`Ini alasan kenapa ${product} banyak yang beli`,
`${product} ini dipakai seharian tetap adem`,
`Jarang ada ${product} kualitas begini`,
`Harga ${product} segini tapi feelnya mahal`,
`${product} cocok buat dipakai harian`,
`Produk ini lagi ramai di TikTok Shop`
]

document.getElementById("hooks").value=hooks.join("\n")

document.getElementById("script").value=

`Scene 1 Hook
(pilih salah satu hook)

Scene 2 Highlight
Produk ini cocok buat ${target}.
Bahannya ${feature}.

Scene 3 CTA
Kalau lagi cari ${product},
cek keranjang kuning sekarang.`

document.getElementById("caption").value=
`${product} lagi viral di TikTok. Bahannya ${feature}. Wajib coba.`

document.getElementById("hashtags").value=
`#tiktokshop #racuntiktok #fyp #fashion #outfit #viralproduk`

document.getElementById("prompt").value=
`Ultra realistic fashion photo of a model wearing ${product}, studio lighting, commercial fashion photography, sharp fabric detail, vertical 9:16`

}
