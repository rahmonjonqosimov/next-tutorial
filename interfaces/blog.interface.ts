export interface BlogsType {
    id: string,
    titile:string,
    slug:string;
    excerept : string,
    image: {
    url: string;
    },
    author: {
    name: string,
    avatar: {
        url:string,
    },
    category: {
        slug:string,
        label:string
    }
}
}