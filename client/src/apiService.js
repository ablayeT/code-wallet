// client/src/apiService.js
import api from "./api";

// FRAGMENTS

// Récupère tous les fragments
export const getFragments = async () => {
  const response = await api.get("/fragments");
  return response.data;
};

// Récupère un fragment précis par son id
export const getFragmentById = async (id) => {
  const response = await api.get(`/fragments/${id}`);
  return response.data;
};

// Crée un nouveau fragment
export const addFragment = async (fragment) => {
  const response = await api.post("/fragments", fragment);
  return response.data;
};

// Met à jour un fragment existant
export const updateFragment = async (id, updatedFragment) => {
  const response = await api.put(`/fragments/${id}`, updatedFragment);
  return response.data;
};

// Supprime un fragment
export const deleteFragment = async (id) => {
  const response = await api.delete(`/fragments/${id}`);
  return response.data;
};

// TAGS

export const getTags = async () => {
  const response = await api.get("/tags");
  return response.data;
};

export const addTag = async (tag) => {
  const response = await api.post("/tags", { name: tag });
  return response.data;
};

export const deleteTag = async (tagName) => {
  const response = await api.delete(`/tags/${tagName}`);
  return response.data;
};
