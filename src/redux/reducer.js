const initState = {
    ahihi:[
        {id : 0, title : "Son"},
        {id : 1, title : "hihi"}
    ]    
}
   

const rootReducer = (state = initState, action) =>{
    switch(action.type){
        case"":
        return{
            ...state ,
        }
        default: 
        return {
            state
        }
    }
}

export default rootReducer;