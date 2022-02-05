export const addItemToCart = (cartItems, cartItemtoAdd) => {
    const existingCartItem = cartItems.find(el => el?.id === cartItemtoAdd?.id)
    if (existingCartItem) {
        // console.log("existingCartItexm", existingCartItem);
        console.log(cartItems.map(item =>
            item?.id === cartItemtoAdd.id ? { ...item, quantity: 20 } : item
        ));
        return cartItems.map(item =>
            item?.id === cartItemtoAdd?.id ? { ...item, quantity: item?.quantity + 1 } : item
        )
    }
    return [...cartItems, { ...cartItemtoAdd, quantity: 1 }]
}

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems?.filter(el => el?.id !== cartItemToRemove?.id)
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    console.log({ cartItems, cartItemToRemove });
    const existingCartItem = cartItems.find(cartItem => cartItem?.id === cartItemToRemove?.id)

    if (existingCartItem?.quantity === 1) {
        return cartItems?.filter(cartItem => cartItem?.id !== cartItemToRemove?.id)
    } else {
        return cartItems?.map(cartItem => cartItem?.id === cartItemToRemove?.id ? { ...cartItem, quantity: cartItem?.quantity - 1 } : cartItem)
    }
}
