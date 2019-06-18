import englishMessages from 'ra-language-english';

export default {
    ...englishMessages,
    resources: {
        posts: {
            name: "posts",
            fields: {
                userId: 'author',
                title: 'title',
                body: 'content',
            },
        },
        customer: {
            name: 'Customer |||| Customers',
            fields: {
                first_name: 'First name',
                last_name: 'Last name',
                dob: 'Date of birth',
            }
        }
    },
    component: {
        search: "search"
    }
}