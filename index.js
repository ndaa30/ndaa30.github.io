let kembang = [
    {
        bunga : "Daisy",
        arti : "Termasuk si morning person, seseorang yang menyukai bunga daisy adalah sosok yang sangat optimis. Mereka selalu bisa menemukan hal baik dalam situasi seburuk apapun. Memiliki karakter yang ceria dan dikenal sangat peduli, penyuka bunga daisy selalu tahu apa yang harus dikatakan untuk membuat orang lain tenang dan tersenyum."
        
        
    },
    {
        bunga : "Mawar",
        arti : "Bunga mawar memang memiliki berbagai arti tergantung warnanya. Misalnya, mawar merah melambangkan cinta dan keinginan, sementara mawar pink melambangkan kebahagiaan dan kelembutan. Seseorang yang menyukai bunga mawar cenderung bertindak menggunakan hati dan cenderung romantis"
        
        
    },
    {
        bunga : "Tulip",
        arti : "Seseorang yang menyukai bunga tulip adalah pribadi yang bijaksana dan percaya diri, lho. Sosok yang penuh warna, para penyuka tulip juga mudah beradaptasi dengan baik dan cenderung punya banyak teman. Mereka suka tampil atau bergaya sesuai suasana hati, tapi selalu kece dan menawan!"
        
        
    },
    {
        bunga : "Lily",
        arti : "Orang yang menyukai bunga lily adalah sosok pekerja keras dan mandiri. Penyuka bunga lily selalu bersemangat dan menyukai apa yang ia lakukan. \n Mereka juga selalu menghargai proses dan bangga dengan pencapaian yang sudah dicapainya. Sosoknya yang charming, enggak heran sosok penyuka bunga lily sering jadi idola!"
        
    },
    {
        bunga : "Matahari",
        arti : "Seseorang yang menyukai bunga matahari dikenal sebagai sosok yang hangat dan ceria. Enggak heran deh, kalau mereka bisa dengan mudah memancarkan aura positif bagi orang-orang disekitarnya dan termasuk pribadi yang berdedikasi, lho! Penyuka bunga matahari juga adalah sosok yang ramah dan mudah bergaul. Sangat supel, mereka juga senang ketika jadi pusat perhatian."
       
    },
    {
        bunga : "Anggrek",
        arti : "Seseorang yang menyukai bunga anggrek adalah sosok yang menawan dan elegan tapi juga misterius. Mereka juga dikenal sebagai seseorang yang teratur dan detail. Penyuka bunga anggrek juga cenderung lebih suka menghabiskan waktu sendirian dan punya teman dekat yang terbatas."
       
    },

]


let random = Math.floor(Math.random() * 6)
let bunga = document.getElementById("bunga")
let arti = document.getElementById("arti")

bunga.innerHTML = kembang[random].bunga
arti.innerHTML = kembang[random].arti

function my(){
    let random = Math.floor(Math.random() * 6)
    bunga.innerHTML = kembang[random].bunga
    arti.innerHTML = kembang[random].arti
}



// setInterval(function(){
//     let random = Math.floor(Math.random() * 6)
//     bunga.innerHTML = kembang[random].bunga
//     arti.innerHTML = kembang[random].arti
// }, 250)





let myInterval = setInterval(my,100)


function myStop(){
    clearInterval(myInterval)
}

document.getElementById('berhenti').addEventListener('click', myStop)
