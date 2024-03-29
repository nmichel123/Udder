import http from '../http-common'

class UdderDataService {
    getAll() {
        return http.get('/udders')
    }

    get(id) {
        return http.get(`/udders/${id}`)
    }

    create(data) {
        return http.post('/udders', data);
    }

    update(id, data) {
        return http.put(`/udders/${id}`, data)
    }

    delete(id) {
        return http.delete(`/udders/${id}`);
    }

    deleteAll() {
        return http.delete(`/udders`);
    }

    findByUdder(udder) {
        return http.get(`/udders?udder=${udder}`);
    }
    
}

export default new UdderDataService();