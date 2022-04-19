import React, {useState, useEffect} from "react"
import imagesData from "./imagesData"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    
    // const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        setAllPhotos(imagesData)
    }, [])

    // setAllPhotos(imagesData)
    
    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        
        setAllPhotos(updatedArr)
    }
    
    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    
    function emptyCart() {
        setCartItems([])
    }
    
    return (
        <Context.Provider value={{
            allPhotos, 
            toggleFavorite, 
            cartItems, 
            addToCart, 
            removeFromCart, 
            emptyCart
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}



// export default {
//     "success": true,
//     "data": {
//         "memes": [
//             {
//                 "id": "181913649",
//                 "name": "Drake Hotline Bling",
//                 "url": "https://i.imgflip.com/30b1gx.jpg",
//                 "width": 1200,
//                 "height": 1200,
//                 "box_count": 2
//             },
            