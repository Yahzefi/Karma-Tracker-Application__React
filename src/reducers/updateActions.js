export function updateActions(state, update){

    switch(update.type){
        case "c1":
            return update.data.C1
        case "c2":
            return update.data.C2
        default:
            return state
    }
}