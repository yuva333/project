// src/services/doctorsService.js
import apiClient from "../api/apiClient";

const DoctorsService = {
  getAll: () => apiClient.get("/doctors"),
  getById: (id) => apiClient.get(`/doctors/${id}`),
  create: (data) => apiClient.post("/doctors", data),
  update: (id, data) => apiClient.put(`/doctors/${id}`, data),
  delete: (id) => apiClient.delete(`/doctors/${id}`),
};

export default DoctorsService;
