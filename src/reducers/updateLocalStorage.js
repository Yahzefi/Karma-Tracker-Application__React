export function updateLocalStorage(state, update){
    switch(update.type){
        case "BOX_CHECKED":
            return [ 
                ...state, {
                    localKey: "checkBoxStatus_" + update.chapter.name + "_" + update.chapter.itemNumber,
                    localValue: true
                }
            ]
        case "BOX_UNCHECKED":
            return [ 
                ...state, {
                    localKey: "checkBoxStatus_" + update.chapter.name + "_" + update.chapter.itemNumber,
                    localValue: false
                }
            ]
        case "INIT":
            return [
                ...state, {
                    localKey: update.localData.key,
                    localValue: update.localData.value
                }
            ]
        default:
            return state;
    }
}