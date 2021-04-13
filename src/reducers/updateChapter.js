export function updateChapter(state, update){
    switch(update.type){
        case 0:
            return "home"
        case 1:
            return "c1"
        case 2:
            return "c2"
        case 3:
            return "c3"
        case 4:
            return "c4"
        case 5:
            return "c5"
        case 6:
            return "c6"
        default:
            return state
    }
}
