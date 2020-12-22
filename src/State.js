let state = {
    profilePage:{
        people: [
            {id:1, message:'Привет', img:"https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg"},
            {id:2, message:'Приве', img:"https://cs8.pikabu.ru/post_img/2016/01/20/9/1453305573168164067.jpg"},
            {id:3, message:'Прив', img:"https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg"},
            {id:4, message:'При', img:"https://cs8.pikabu.ru/post_img/2016/01/20/9/1453305573168164067.jpg"},
            {id:5, message:'Пр', img:"https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg"},
            {id:6, message:'П', img:"https://cs8.pikabu.ru/post_img/2016/01/20/9/1453305573168164067.jpg"}
        ],
        dialogs: [
            {id:1, message:'Пока'},
            {id:2, message:'Пок'},
            {id:3, message:'По'},
            {id:4, message:'П'}
        ]
    },
    messagePage: {
        message:[
        {id:1, name:'Хелло', like:3},
        {id:2, name:'Прив', like:22},
        {id:3, name:'Че', like:0},
        {id:4, name:'Хало', like:9}
        ]
    },
    navbarPage: {
        friends: [
            {id:1, name:"Matroskin", img:'https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg'},
            {id:2, name:"Sharik", img:'https://lh3.googleusercontent.com/proxy/3OE3AIgPW90-pme68pNnWUy0gupVDzOV5XeqWe5NkvrWX_N-Saqo27qsFYpVcTJq1t47sVjcI1D5sCOy'},
            {id:3, name:"Pechkin", img:'https://cs8.pikabu.ru/post_img/2016/01/20/9/1453305573168164067.jpg'},
        ]
    }
}
export let addPost = (info) => {
    state.navbarPage.friends.push({
        id:4, name:info, img:'https://i.movielib.ru/charpic/1580660/l/98a8/Kot_Matroskin.jpg'
    })
    console.log(state); 
    console.log(info); 
}



export default state;