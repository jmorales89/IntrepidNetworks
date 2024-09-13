import api from "../utils/axios";


export const fetchAllMarkers = async () => {
    
    const response = await api.get("/markers");
    
    return response

}

