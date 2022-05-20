let menu = [
    {
    foto: "data:image/jpeg;base64,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",
    harga: 15000, 
    kode: "BRG0B1",
    nama: "jus", 
    rating: "5.0",
    stock: 10
    },
    {

    foto: "https://1.bp.blogspot.com/-1pTpOb9UA0g/Xn1iz4R175I/AAAAAAAAEWA/ywOapWon2xgPVCEVGJi0jzBLrhzM0-iqgCLcBGAsYHQ/s1600/Bakso%2BPedas%2Bdi%2BSemarang.webp",
    harga: 15000,
    kode: "BRG002",
    nama: "bakso",
    rating:"5.0",
    stock: 20
    },
    {

    foto: "https://img-global.cpcdn.com/recipes/b5884e94c22035aa/400x400cq70/photo.jpg",
    harga: 2000,
    kode: "BRG003",
    nama: "heci",
    rating: "5.0",
    stock: 1000
    },
    {

    foto: "https://cdn1-production-images-kly.akamaized.net/aGsJSE-5PlZOIBar0T3L1ecKXRA=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2054451/original/070398300_1522833158-iStock-153502589.jpg",
    harga: 500,
    kode: "BRG004",
    nama: "permen",
    rating: "5.0",
    stock: 1000
    },
    {

    foto: "https://cf.shopee.co.id/file/fd3bf326f2a08c9df4e983f1e8c363fd",
    harga: 6000,
    kode: "BRG005",
    nama: "air mineral",
    rating: "5.0",
    stock: 50
    },
    {

    foto: "https://images.solopos.com/2021/01/16-yupi.jpg" ,
    harga: 500,
    kode: "BRG006",
    nama: "yupi",
    rating: "5.0",
    stock: 30
    },
    {

    foto: "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg?20201002142956&q=80&rw=750&rh=536",
    harga: 200000,
    kode: "BRG007",
    nama: "sushi",
    rating: "5.0",
    stock: 70
    },
    {

    foto: "https://editor.id/wp-content/uploads/2022/02/Screenshot-2022-02-04-at-23-25-46-Street-Boba-Indonesia-streetboba-%E2%80%A2-Foto-dan-video-Instagram.png",
    harga: 25000,
    kode: "BRG008",
    nama: "street boba",
    rating: "5.0",
    stock: 90
    },
    {

    foto: "https://etmpoonhvga.exactdn.com/wp-content/uploads/2016/08/12748343_1041946309200542_1448675584_n.jpg?strip=all&lossy=1&ssl=1",
    harga: 35000,
    kode: "BRG009",
    nama: "terang bulan",
    rating: "5.0",
    stock: 10
    },
    {

    foto: "https://www.kooliner.com/blog/wp-content/uploads/2017/07/Pizza-Hut-Kuy.jpg",
    harga: 229000,
    kode: "BRG010",
    nama: "pizza hut",
    rating: "5.0",
    stock: 60,
    },
]
console.log(menu)
    