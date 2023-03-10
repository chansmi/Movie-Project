import axios from "axios";

class GroupDataService {

    getUsers(id) {
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/groups/id/${id}`);
    }

    updateGroupsList(data) {
        return axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/v1/groups`, data);
    }

    getAllGroups(userId) {
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/groups/${userId}`);
    }
}
export default new GroupDataService();



