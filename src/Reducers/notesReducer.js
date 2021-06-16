const initialstate = { notes: [] }

const notesReducer =(state=initialstate,action) =>{
        switch (action.type) {
            case "SET_ADD_NOTES":
                console.log(action.payload)
                return { ...state, notes: [...state.notes, action.payload] };
            
            case "SET_DELETE_NOTES":
                var notesDelete = state.notes.filter(note => note.id !== action.payload)
                return { ...state, notes: notesDelete }
            
            case "SET_UPDATE_NOTE":
                var id=action.payload.id;
                var updatedinfo=action.payload.updatednoteinfo;
                var Notesupdate = state.notes.map((note) =>{
                    if (note.id===id) {
                      return updatedinfo
                    }
                    return note
                  })
                  return{notes:Notesupdate}
                  
            default:
                return state;
        }

}
export default notesReducer;