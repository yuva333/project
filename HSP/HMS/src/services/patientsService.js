// src/services/patientsService.js
import apiClient from "../api/apiClient";

const PatientsService = {
  getAll: () => apiClient.get("/patients"),
  getById: (id) => apiClient.get(`/patients/${id}`),
  create: (data) => apiClient.post("/patients", data),
  update: (id, data) => apiClient.put(`/patients/${id}`, data),
  delete: (id) => apiClient.delete(`/patients/${id}`),
};

export default PatientsService;
