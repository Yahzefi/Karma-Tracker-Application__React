export function updateChapter(state, update){
    switch(update.type){
        case 1:
            return "c1"
        case 2:
            return "c2"
        default:
            return state
    }
}
