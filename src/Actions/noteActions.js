export function addNotes (newNotes) {
    return {
        type: "SET_ADD_NOTES",
        payload: newNotes
    }
}

export function deleteNotes (id) {
    return {
        type: "SET_DELETE_NOTES",
        payload: id
    }
}

export  function updateNotes(id,updatednote) {
    console.log("nau",updatednote)
     
    return{
       type:"SET_UPDATE_NOTE",
       payload:{ id:id , updatednoteinfo:updatednote},
       
    }
}