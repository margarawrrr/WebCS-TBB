const places = {
    mooncoffee: {
        name: "Moon Coffee",
        address: "Ma. Theresa, Cabanatuan City, Philippines 3100",
        hours: "11 am - 11 pm",
        contact: "0960 213 4912",
        price: "₱140 - ₱500",
        images: [
            "cafe/mooncoffee.jpg",
            "cafe/mooncoffee.jpg",
            "cafe/mooncoffee.jpg",
            "cafe/mooncoffee.jpg",
        ]
    },
    bgcafe: {
        name: "Board Game Cafe",
        address: "The Medical Hub Bldg., Cabanatuan City",
        hours: "11 am - 9 pm",
        contact: "@bgcboardgamecafe",
        price: "wala pa be",
        images: [
            "cafe/bgc.jpg",
            "cafe/bgc.jpg",
            "cafe/bgc.jpg",
            "cafe/bgc.jpg",
        ]
    },
    cafecove: {
        name: "Cafe Cove by Lukas",
        address: "29th street general extension kapitan pepe phase II Cabanatuan City, Philippines 3100",
        hours: "8 am - 9:30 pm",
        contact: "0917 134 3600",
        price: "wala pa be",
        images: [
            "cafe/cafecove.jpg",
            "cafe/cafecove.jpg",
            "cafe/cafecove.jpg",
            "cafe/cafecove.jpg",
        ]
    },
    streetshack: {
        name: "Street Shacks",
        address: "19th street kapitan pepe subdivision, Cabanatuan City, Philippines 3100",
        hours: "8 am - 10 pm",
        contact: "0995 964 8189",
        price: "wala pa be",
        images: [
            "cafe/streetshack.jpg",
            "cafe/streetshack.jpg",
            "cafe/streetshack.jpg",
            "cafe/streetshack.jpg",
        ]
    },
    happythoughts: {
        name: "Happy Thoughts Cafe",
        address: "Brgy. Nabao, Cabanatuan City, Philippines 3100",
        hours: "11 am - 11 pm",
        contact: "0966 778 1777",
        price: "wala pa be",
        images: [
            "cafe/happythoughts.jpg",
            "cafe/happythoughts.jpg",
            "cafe/happythoughts.jpg",
            "cafe/happythoughts.jpg",
        ]
    },
    manacafe: {
        name: "Mana Cafe",
        address: "Mana Cafe Lakewood Avenue, lakewood subdivision, sumacab este, Cabanatuan City 3100",
        hours: "7 am - 10 pm",
        contact: "0917 168 9888",
        price: "wala pa be",
        images: [
            "cafe/mana.jpg",
        ]
    },
    hulma: {
        name: "Hulma",
        address: "Clamonte Street, Aduas Centro, Cabanatuan City, Philippines 3100",
        hours: "12 pm - 9 pm",
        contact: "@hulma.local",
        price: "wala pa be",
        images: [
            "cafe/hulma.jpg",
        ]
    },
    centralblends: {
        name: "Central Blends & Co",
        address: "12 Jimenez Street, Kapitan Pepe, Cabanatuan City, Philippines 3100",
        hours: "12 pm - 10 pm",
        contact: "@Central Blends & Co",
        price: " ₱145 - ₱365",
        images: [
            "cafe/centralblendsco.jpg",
        ]
    },
    horti: {
        name: "HORTI Café",
        address: "Valdefuente, Cabanatuan City, Philippines, 3100",
        hours: "12 am - 10 pm",
        contact: "(044) 511 2656",
        price: " ₱65 - ₱398",
        images: [
            "cafe/horticafe.jpeg",
        ]
    },
    bereans: {
        name: "La Berean’s Café",
        address: "Purok 6 Santander Street, Corner St. Joseph Ave., Kapitan Pepe, Cabanatuan City, Philippines, 3100",
        hours: "10 am - 9 pm",
        contact: "0985 089 2120",
        price: "₱114 - ₱800",
        images: [
            "cafe/labereans.jpeg",
        ]
    },
    caffeinated: {
        name: "Caffeinated & Co",
        address: "General Tinio Extension, Kapitan Pepe subdivision, Cabanatuan City, Philippines, 3100",
        hours: "9 am - 9 pm",
        contact: "(044) 940 9525",
        price: "₱114 - ₱800",
        images: [
            "cafe/caffeinated.jpg",
        ]
    },
    nala: {
        name: "Nala Café",
        address: "ICG Building, Kapitan Pepe, Cabanatuan City, Philippines, 3100",
        hours: "11 am - 10 pm",
        contact: "@nalacafeph",
        price: "₱114 - ₱800",
        images: [
            "cafe/nala.jpg",
        ]
    },
    kayoubi: {
        name: "Kayoubi Café",
        address: "Circumferential Road (near terminal), Cabanatuan City, Philippines, 3100",
        hours: "11 am - 10 pm",
        contact: "0956 644 2431",
        price: "88 - ₱500",
        images: [
            "cafe/kayoubi.webp",
        ]
    },
    lattea: {
        name: "Lattea Café",
        address: "Near Wesleyan Church, Block 9 Camp Tinio, Cabanatuan City, Nueva Ecija 3100",
        hours: "9 pm - 10 pm",
        contact: "0956 644 2431",
        price: "88 - ₱500",
        images: [
            "cafe/lattea.webp",
        ]
    },
    meow: {
        name: "Hello Meow Café",
        address: "1, Magsaysay South, Brgy, Cabanatuan City, 3100 Nueva Ecija",
        hours: "wala pa",
        contact: "wala pa",
        price: "wala pa",
        images: [
            "cafe/hellomeow.jpg",
        ]
    },
    thirdspace: {
        name: "3rd Space Café",
        address: "485, Brgy. H Concepcion, Cabanatuan City, 3100 Nueva Ecija",
        hours: "wala pa",
        contact: "wala pa",
        price: "wala pa",
        images: [
            "cafe/3rd_space.jpg",
        ]
    },
    trinidad: {
        name: "Trinidad il Baretto",
        address: "Tandang Sora Extension, Magsaysay Forte, Cabanatuan City, Philippines, 3100",
        hours: "11 am - 11:10 pm",
        contact: "0968 406 7785",
        price: "₱160 - ₱720",
        images: [
            "resto/trinidad.jpeg",
        ]
    },
    estoria: {
        name: "Estoria Bistro",
        address: "Estoria Bistro, Cabanatuan City, Philippines, 3105",
        hours: "11 am - 10 pm",
        contact: "0928 352 5931",
        price: "₱110 - ₱2,000",
        images: [
            "resto/estoria.png",
        ]
    },
    bistro: {
        name: "Bistro 360",
        address: "1093 Del Pilar Street, Barangay Sangitan West, Cabanatuan City, Philippines, 3100",
        hours: "10:30 am - 10 pm",
        contact: "0943 836 0360",
        price: "wala pa",
        images: [
            "resto/bistro.png",
        ]
    },
    rustica: {
        name: "Rustica Restaurant",
        address: "Maharlika Highway Across from Zulueta Street, Cabanatuan City, 3100 Philippines",
        hours: "10:30 am - 10 pm",
        contact: "0944 940 7927",
        price: "wala pa",
        images: [
            "resto/rustica.jpg",
        ]
    },
    vicenticos: {
        name: "Hapag Vicenticos",
        address: "1077 Del Pilar Street, Cabanatuan City, Luzon 3100 Philippines",
        hours: "10 am - 9 pm",
        contact: "0917 565 7860",
        price: "wala pa be",
        images: [
            "resto/hapag.jpg",
        ]
    },
    lamarang: {
        name: "Lamarang Restaurant",
        address: "1077 Del Pilar Street, Cabanatuan City, Luzon 3100 Philippines",
        hours: "9 am - 10 pm",
        contact: "0933 017 8581",
        price: "₱100 - ₱3,000",
        images: [
            "resto/lamarang.jpg",
        ]
    },
    maru: {
        name: "Maru Korean Restaurant",
        address: "General Tinio Extension, Cabanatuan City 3100",
        hours: "11 am - 9 pm",
        contact: "0915 894 0111",
        price: "₱150 - ₱500",
        images: [
            "resto/maru.jpg",
        ]
    },
    ednas: {
        name: "Edna’s Cakeland ",
        address: "#1Don Manuel Avenue, Kapitan Pepe Subdivision, Cabanatuan City 3100",
        hours: "6:30 am - 5:30 pm",
        contact: "0917 574 2727",
        price: "wala pa",
        images: [
            "resto/edna's.jpg",
        ]
    },
    finecut: {
        name: "Fine Cut Butchery",
        address: "Gen. Tinio Ave. Villa Benita H. Conception, Cabanatuan City, 3100",
        hours: "10:30 am - 10 pm",
        contact: "0922 794 4246",
        price: "wala p",
        images: [
            "resto/finecut.jpg",
        ]
    },
    giligans: {
        name: "Giligan’s Restaurant",
        address: "2nd level SM city, Cabanatuan City, 3100",
        hours: "10 am - 9 pm",
        contact: "0929 613 0548",
        price: "₱150 - ₱500",
        images: [
            "resto/giligans.jpg",
        ]
    },
    woodside: {
        name: "Woodside Restaurant",
        address: "Corner Del Pilar & Parumog Streets, Cabanatuan City, 3100",
        hours: "10:30 am - 9 pm",
        contact: "0917 636  5814",
        price: "wala pa",
        images: [
            "resto/woodside.jpg",
        ]
    },
    nanayzeny: {
        name: "Nanay Zeny",
        address: "Lot 30, Blk 26, 18th Street, Kapitan Pepe (Phase II), San Josef Sur, Cabanatuan City, Nueva Ecija (Across Boss Tano Mamihan / Former Paleta & Omiaki by Ambula)",
        hours: "10:30 am - 9 pm",
        contact: "---",
        price: "wala pa",
        images: [
            "resto/nanayzeny.jpg",
        ]
    },
    cilantro: {
        name: "Cilantro Restaurant",
        address: "Sanciangco Street, Dating University of Pares,  Near Old LTO Office, Eco oil Gas Station, Going Cabanatuan Bus terminal Road. , Cabanatuan City, Philippines, 3100",
        hours: "9 am - 9 pm",
        contact: "0927 172 6806",
        price: "wala pa",
        images: [
            "resto/cilantro.jpg",
        ]
    },
    panyeros: {
        name: "Panyeros Restaurant",
        address: "Gen. Tinio Extension Brgy. H. Concepcion Cabanatuan City, Nueva Ecija, 3100",
        hours: "11 am - 11 pm",
        contact: "0962 288 2589",
        price: "wala pa",
        images: [
            "resto/panyeros.jpg",
        ]
    },
    primitive: {
        name: "Hidden Primitive Pancit Cabagan and Pancit Batil Patong",
        address: "38 1, Valdefuente, Cabanatuan City, 3100 Nueva Ecija",
        hours: "wala pa",
        contact: "wala pa",
        price: "wala pa",
        images: [
            "resto/primitive.jpg",
        ]
    },
    kopibreak: {
        name: "Coffee Break",
        address: "A. Valino Street, Cabanatuan City, 3100 Nueva Ecija",
        hours: "9 am - 9 pm",
        contact: "09456091226",
        price: "₱100 – 500/pax.",
        images: [
            "cafe/kopibreak.jpg",
        ]
    },
    ninetiescafe: {
        name: "90’s Café",
        address: "Brgy DS garcia, Circumferential Rd, Cabanatuan City, Philippines, 3100",
        hours: "9 am - 1 pm",
        contact: "0936 405 7472",
        price: "₱89 - ₱299",
        images: [
            "cafe/90'scafe.jpg",
        ]
    },
    ash: {
        name: "ASH",
        address: "St. franciss street, Brgy. Kapitan Pepe, Cabanatuan City, Philippines 3100",
        hours: "6:30 am - 9:30 pm",
        contact: "0998 841 1224",
        price: "₱80 - ₱250",
        images: [
            "cafe/ash.jpg",
        ]
    },
    bfc: {
        name: "But First, Coffee",
        address: "Wellspring Complex, Villaluz Corner Mabini St. Extension, Cabanatuan City, Philippines, 3100",
        hours: "9 am - 9:15 pm",
        contact: "0939 456 5196",
        price: "₱99 - ₱250",
        images: [
            "cafe/bfc.jpg",
        ]
    },
    timpla: {
        name: "Timpla Café",
        address: "32nd street General Tinio Street Extension, Cabanatuan City, 3100",
        hours: "10 am - 10 pm",
        contact: "0912 102 6953",
        price: " ₱75 - ₱249",
        images: [
            "cafe/timpla.jpg",
        ]
    },
    theo: {
        name: "Theo's Diner",
        address: "Del Pilar Street, Cabanatuan City, Nueva Ecija",
        hours: "9 am - 9 pm",
        contact: "0970 710 7128",
        price: "₱100-500/pax",
        images: [
            "resto/theo'sdiner.jpg",
        ]
    },
    dads: {
        name: "Dad's Family Restaurant-Cabanatuan",
        address: "Fortaleza, Brgy. Bangad 3100 Cabanatuan City, Philippines",
        hours: "11 am - 9 pm",
        contact: "0939 507 0868",
        price: "₱200-400/pax.",
        images: [
            "resto/dad's.jpg",
        ]
    },
    malamacau: {
        name: "Mala Macau",
        address: "Fernandez Building, Brgy. D.S Garcia, Circum. Road, Cabanatuan City, Philippines, 3100",
        hours: "Tuesday to Sunday (4:00 PM – 12:00 MN)",
        contact: "0952 472 7793",
        price: "₱100-500/pax.",
        images: [
            "resto/m.macau.jpg",
        ]
    },
    takusa: {
        name: "Takusa Ramen",
        address: "RCB Annex Sangitan East, Cabanatuan City, Philippines, 3100",
        hours: "2:00 pm - 10:00 pm",
        contact: "0924 171 1859",
        price: "₱89 - ₱288",
        images: [
            "resto/takusa.jpg",
        ]
    },
    grazy: {
        name: "Grazy’s Biriani Cabanatuan",
        address: "M.De Leon, Cabanatuan City, Philippines, 3100",
        hours: "11:00 am - 10:00 pm",
        contact: "wala pa be",
        price: "₱54 - ₱500",
        images: [
            "resto/grazy.jpg",
        ]
    },
};

const params = new URLSearchParams(window.location.search);
const place = params.get("place");

const data = places[place];

document.getElementById("place-name").textContent = data.name;
document.getElementById("place-address").textContent = data.address;
document.getElementById("place-hours").textContent = data.hours;
document.getElementById("place-contact").textContent = data.contact;
document.getElementById("place-price").textContent = data.price;

document.getElementById("place-image1").src = data.images[0];
document.getElementById("place-image2").src = data.images[1];
document.getElementById("place-image3").src = data.images[2];
document.getElementById("place-image4").src = data.images[3];