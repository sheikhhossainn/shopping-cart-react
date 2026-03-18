import appleImage from '../assets/apple_image.jpg'
import mangoImage from '../assets/mango_image.jpg'
import watermelonImage from '../assets/watermelon_image.jpg'
import strawberryImage from '../assets/strawberry_image.jpg'

const itemLists = [
    {
        id: 1, name: "Apple", description: "Imported from USA", price: 10, /* 10$ */ image: appleImage
    },

    {
        id: 2, name: "Mango", description: "Imported from Brazil", price: 20, image: mangoImage
    },

    {
        id: 3, name: "Watermelon", description: "Imported from USA", price: 10, image: watermelonImage
    },

    {
        id: 4, name: "Strawberry", description: "Imported from USA", price: 10, image: strawberryImage
    }
]

export default itemLists //export the variable not the filename