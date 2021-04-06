export function updateScore(state, update){
    switch(update.type){
        case "BOX_CHECKED":
            if(update.karma.type === "Good"){
                return ( state +  update.karma.value )
                
            } else if(update.karma.type === "Neutral"){
                return state
            } else if(update.karma.type === "Bad"){
                return ( state - update.karma.value )
            }
            console.log(state)
            return state;
        case "BOX_UNCHECKED":
            if(update.karma.type === "Good"){
                return ( state - update.karma.value )
                
            } else if(update.karma.type === "Neutral"){
                return state
            } else if(update.karma.type === "Bad"){
                return ( state + update.karma.value )
            }
            console.log(state)
            return state;
        default:
            return state;
    }
}
