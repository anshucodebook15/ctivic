import { useQuery } from "@tanstack/react-query";
import { getHomepage } from "./apiClient";
// import { getHomepage } from "../api/homeApi";/

export const useHomepage = () => {
    return useQuery({
        queryKey: ["homepage"],
        queryFn: getHomepage,
    });
};
