export function updateActions(state, update){

    switch(update.type){
        case "c1":
            return update.data.C1
        case "c2":
            return update.data.C2
        case "c3":
            return update.data.C3
        case "c4":
            return update.data.C4
        case "c5":
            return update.data.C5
        case "c6":
            return update.data.C6
        default:
            return state
    }
}
