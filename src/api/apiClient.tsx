import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://drupal.thekahanikaars.com",
});

export const getHomepage = async () => {
    const { data } = await apiClient.get("/api/menu_items/main");
    return data;
};


export const getPage = async (path: string) => {
    const { data } = await apiClient.get(`/api/page/${path}`);
    return data;
}