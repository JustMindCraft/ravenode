export default {
    resources: {
        posts: {
            name: "posts",
            fields: {
                userId: '创作人',
                title: '标题',
                body: '文章正文',
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
        search: "搜索"
    }
}