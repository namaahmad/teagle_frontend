import { BaseResponse } from "@/dto";


const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
const apiUrlClient = process.env.NEXT_PUBLIC_BASE_URL_CLIENT;

export const ApiServices = {
    apiUrl: apiUrl,
    VERSION_SOFTWARE: "0.0.6",
    site: {
        getSetting: () => fetch(`${apiUrl}/site/getSetting`),
        getPageData: (slug: string, language: string) => fetch(`${apiUrl}/site/getPageData/${slug}/${language}`),
        getNewsDetail: (id: any, language: string) => fetch(`${apiUrl}/site/getNewsDetail/${id}?lan=${language}`),
        addNewsComment: (data: any) => fetch(`${apiUrlClient}/site/addNewsComment`, { method: "POST", body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } }),
        getNews: (language: string, page: any, perPage: any, categoryId: any, query: any) =>
            fetch(`${apiUrl}/site/getNews?lan=${language}&page=${page}&perPage=${perPage}${categoryId ? "&categoryId=" + categoryId : ""}${query ? "&query=" + query : ""}`),
        getBlog: (language: string, page: any, perPage: any, categoryId: any, query: any) =>
            fetch(`${apiUrl}/site/getBlog?lan=${language}&page=${page}&perPage=${perPage}${categoryId ? "&categoryId=" + categoryId : ""}${query ? "&query=" + query : ""}`),
        addBlogComment: (data: any) => fetch(`${apiUrlClient}/site/addBlogComment`, { method: "POST", body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } }),
        getBlogDetail: (id: any, language: string) => fetch(`${apiUrl}/site/getBlogDetail/${id}?lan=${language}`),
    },

}

