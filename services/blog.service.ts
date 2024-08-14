import { BlogsType } from '@/interfaces/blog.interface';
import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;
    
export const BlogService = {
    async getAllBlogs(){
        const query = gql`
            query getAllBlogs {
                        blogs {
                            id
                            titile
                            slug
                            excerept
                            image {
                            url
                            }
                            author {
                            name
                            avatar {
                                url
                            }
                            createdAt
                            }
                            category {
                            slug
                            label
                            }
                        }
                        }
        `;

        const result = await request<{blogs: BlogsType[]}>(graphqlAPI, query);
        return result.blogs;
    }
}