import apiClient from "../api/apiClient";

// Get all bills
export const getBills = async () => {
  return await apiClient.get("/bills");
};

// Create a new bill
export const createBill = async (billData) => {
  return await apiClient.post("/bills", billData);
};

// Delete bill
export const deleteBill = async (id) => {
  return await apiClient.delete(`/bills/${id}`);
};
