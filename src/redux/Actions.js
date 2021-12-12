
export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}

// another way to write it without the return
// const addCar = (car) => ({
//         type: 'ADD_CAR',
//         value: car
// })
