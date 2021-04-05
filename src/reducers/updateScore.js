export function updateScore(state, update){
    switch(update.type){
        case "ADD_ONE":
            return (state + 1)
        case "ADD_TWO":
            return (state + 2)
        case "ADD_THREE":
            return (state + 3)
        case "SUB_ONE":
            return (state - 1)
        case "SUB_TWO":
            return (state - 2)
        case "SUB_THREE":
            return (state - 3)
        default:
            return state;
    }
}