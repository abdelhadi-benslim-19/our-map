var map = L.map('map').setView([35.920825, 0.090569], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var locations = [
    {
        name: 'Lycee Benguella Touati',
        location: [35.920825, 0.090569],
        description: 'The place we first met',
        images: [
            'https://scontent.faae1-1.fna.fbcdn.net/v/t39.30808-6/302483921_414123580808422_5834301863336735390_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGSuZAhOLwweitkHRvViuLKln9uXTH44heWf25dMfjiF3hZPB8gTHLy3HosAoEqmalfHto5hHyA7qTTLPEsh81J&_nc_ohc=BmdD6Y0mFgwAX9hL8i8&_nc_zt=23&_nc_ht=scontent.faae1-1.fna&oh=00_AfCZmeun0aQyBE9AyqGA1Nlr19KeKRxy6JBp_PWs8mQfVw&oe=65BD3AA1',
        ],
    },
    {
        name: 'دار الثقافة',
        location: [35.926737, 0.080892],
        description: 'Our first trip together',
        images: [
            'https://scontent.faae1-2.fna.fbcdn.net/v/t39.30808-6/298685609_478062837660133_745023549605417580_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHffTH5r2desvi_jIDERKuxOsE12-vF2Ks6wTXb68XYqwvo860fFLLTt7ox_vikLdugEi-T1gpc9xWuezUa_Pvw&_nc_ohc=W__yFvCOVtIAX9wnQeT&_nc_zt=23&_nc_ht=scontent.faae1-2.fna&oh=00_AfDKpAXmqfKE6k3k0KIub1huaW3833Vvgfbmwv1XL2KEdQ&oe=65BC1ADE', // Replace with the path to your image
            'https://www.ennaharonline.com/2017-wp-content/uploads/2020/01/DSC_0090.jpg', // Add more images if needed
            'https://www.ennaharonline.com/2017-wp-content/uploads/2020/01/DSC_0070.jpg',
        ],
    },
    {
        name: 'Cite 5 Juillet',
        location: [35.921083, 0.100671],
        description: 'Les Cours Ostad Zitouni',
        images: [
            'path/to/your/ostad_zitouni_image1.jpg',
        ],
    },
    {
        name: 'Chemouma',
        location: [35.915569, 0.092070],
        description: 'we also saw each other here',
        images: [
            'chmouma.PNG',
        ]
    },
    {
        name: 'Zaghloul',
        location: [35.918885, 0.090384],
        description: 'Last time we saw each other face to face',
        images: [
            'lycee benguella.jpg',
        ]
    },
];

locations.forEach(function (loc) {
    var marker = L.marker(loc.location).addTo(map);

    // Create popup content with multiple images
    var imagesHtml = loc.images.map(image => `<img src="${image}" alt="${loc.name}" style="max-width: 100%;">`).join('');
    var popupContent = `<b>${loc.name}</b><br>${loc.description}<br>${imagesHtml}`;

    marker.bindPopup(popupContent).openPopup();
});
