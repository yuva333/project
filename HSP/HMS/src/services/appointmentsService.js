import apiClient from "../api/apiClient";

// Get all appointments
export const getAppointments = async () => {
  return await apiClient.get("/appointments");
};

// Create a new appointment
export const createAppointment = async (appointmentData) => {
  return await apiClient.post("/appointments", appointmentData);
};

// Delete appointment
export const deleteAppointment = async (id) => {
  return await apiClient.delete(`/appointments/${id}`);
};
