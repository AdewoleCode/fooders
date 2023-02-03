// import burger1 from '../assets/burger1.jpg'
// import burger2 from '../assets/burger2.jpg'
// import burger3 from '../assets/burger3.jpg'
// import burger4 from '../assets/burger4.jpg'
// import burger5 from '../assets/burger5.jpg'

// import gyros1 from '../assets/gyros1.jpg'
// import gyros2 from '../assets/gyros2.jpg'
// import gyros3 from '../assets/gyros3.jpg'
// import gyros4 from '../assets/gyros4.jpg'
// import gyros5 from '../assets/gyros5.jpg'

// import pizza1 from '../assets/pizza1.jpg'
// import pizza2 from '../assets/pizza2.jpg'
// import pizza3 from '../assets/pizza3.jpg'
// import pizza4 from '../assets/pizza4.jpg'
// import pizza5 from '../assets/pizza5.jpg'

// import pasta1 from '../assets/pasta1.jpg'
// import pasta2 from '../assets/pasta2.jpg'
// import pasta3 from '../assets/pasta3.jpg'
// import pasta4 from '../assets/pasta4.jpg'
// import pasta5 from '../assets/pasta5.jpg'


export const foodTypes = [
    {
        name: 'rice',
        img: "https://www.allrecipes.com/thmb/RgUS1zTYjeGmt3qW-EX9N-5GvGQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79543-fried-rice-restaurant-style-mfs-51-155e83b4e4444e2292707287a56ddd93.jpg",
        id: crypto.randomUUID()
    },
    {
        name: 'chicken',
        img: "https://images.themodernproper.com/billowy-turkey/production/posts/2021/Fried-Rice-12.jpeg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1631766057&s=91ecf2b6243e477083e60b3a096f1b98",
        id: crypto.randomUUID()
    },
    {
        name: 'pizza',
        img: "https://www.simplyrecipes.com/thmb/pjYMLcsKHkr8D8tYixmaFNxppPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg",
        id: crypto.randomUUID()
    },
    {
        name: 'pasta',
        img: "https://www.foodandwine.com/thmb/97PY4E6Wk95IYv1_8pDZvBEi0Uw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cream-tomato-rigatoni-FT-RECIPE1020-139fb3fa52574e8bb06f98e7fa3e4f1e.jpg",
        id: crypto.randomUUID()
    },
    {
        name: 'shawarma',
        img: "https://ministryofcurry.com/wp-content/uploads/2021/05/chicken-shawarma-6.jpg",
        id: crypto.randomUUID()
    },
    {
        name: 'fish',
        img: "https://netstorage-legit.akamaized.net/images/vllkyt7an08gk2477.jpg?imwidth=900",
        id: crypto.randomUUID()
    },
]


// 24 foods (6 burger, 6 gyros, 6 pizza, 6 pasta)
// export const foods = [
//     {
//         name: 'Burger 1',
//         category: 'burger',
//         img: burger1,
//         id: crypto.randomUUID(),
//         price: Math.floor(Math.random() * 20 + 7)
//     },
//     {
//         name: 'Burger 2',
//         category: 'burger',
//         img: burger2,
//         id: crypto.randomUUID(),
//         price: Math.floor(Math.random() * 20 + 7)
//     },
//     {
//         name: 'Burger 3',
//         category: 'burger',
//         img: burger3,
//         id: crypto.randomUUID(),
//         price: Math.floor(Math.random() * 20 + 7)
//     },
//     {
//         name: 'Burger 4',
//         category: 'burger',
//         img: burger4,
//         id: crypto.randomUUID(),
//         price: Math.floor(Math.random() * 20 + 7)
//     },
//     {
//         name: 'Burger 5',
//         category: 'burger',
//         img: burger5,
//         id: crypto.randomUUID(),
//         price: Math.floor(Math.random() * 20 + 7)
//     },
//     {
//         name: 'Pizza 1',
//         category: 'pizza',
//         img: pizza1,
//         id: crypto.randomUUID(),
//         price: Math.floor(Math.random() * 20 + 7)
//     },
//     {
//         name: 'Pizza 2',
//         category: 'pizza',
//         img: pizza2,
//         id: crypto.randomUUID(),
//         price: Math.floor(Math.random() * 20 + 7)
//     },
//     {
//         name: 'Pizza 3',
//         category: 'pizza',
//         img: pizza3,
//         id: crypto.randomUUID(),
//         price: Math.floor(Math.random() * 20 + 7)
//     },
//     {
//         name: 'Pizza 4',
//         category: 'pizza',
//         img: pizza4,
//         id: crypto.randomUUID(),
//         price: Math.floor(Math.random() * 20 + 7)
//     },
//     {
//         name: 'Pizza 5',
//         category: 'pizza',
//         img: pizza5,
//         id: crypto.randomUUID(),
//         price: Math.floor(Math.random() * 20 + 7)
//     },
//     {
//         name: 'Gyros 1',
//         category: 'gyros',
//         img: gyros1,
//         id: crypto.randomUUID(),
//         price: Math.floor(Math.random() * 20 + 7)
//     },
//     {
//         name: 'Gyros 2',
//         category: 'gyros',
//         img: gyros2,
//         id: crypto.randomUUID(),
//         price: Math.floor(Math.random() * 20 + 7)
//     },
//     {
//         name: 'Gyros 3',
//         category: 'gyros',
//         img: gyros3,
//         id: crypto.randomUUID(),
//         price: Math.floor(Math.random() * 20 + 7)
//     },
//     {
//         name: 'Gyros 4',
//         category: 'gyros',
//         img: gyros4,
//         id: crypto.randomUUID(),
//         price: Math.floor(Math.random() * 20 + 7)
//     },
//     {
//         name: 'Gyros 5',
//         category: 'gyros',
//         img: gyros5,
//         id: crypto.randomUUID(),
//         price: Math.floor(Math.random() * 20 + 7)
//     },
//     {
//         name: 'Pasta 1',
//         category: 'pasta',
//         img: pasta1,
//         id: crypto.randomUUID(),
//         price: Math.floor(Math.random() * 20 + 7)
//     },
//     {
//         name: 'Pasta 2',
//         category: 'pasta',
//         img: pasta2,
//         id: crypto.randomUUID(),
//         price: Math.floor(Math.random() * 20 + 7)
//     },
//     {
//         name: 'Pasta 3',
//         category: 'pasta',
//         img: pasta3,
//         id: crypto.randomUUID(),
//         price: Math.floor(Math.random() * 20 + 7)
//     },
//     {
//         name: 'Pasta 4',
//         category: 'pasta',
//         img: pasta4,
//         id: crypto.randomUUID(),
//         price: Math.floor(Math.random() * 20 + 7)
//     },
//     {
//         name: 'Pasta 5',
//         category: 'pasta',
//         img: pasta5,
//         id: crypto.randomUUID(),
//         price: Math.floor(Math.random() * 20 + 7)
//     },
// ]