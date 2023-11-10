import { gql } from '@apollo/client';

export const UserQuery = gql`
query Page($page:Int, $perPage:Int){
    Page(page: $page, perPage: $perPage){
    users {
            name
            id
            about
             avatar {
        large
        medium
      }
      options {
        titleLanguage
      }
        }
    }
}`

