import chineseMessages from 'ra-language-chinese';

export default {
    ...chineseMessages,
    resources: {
        posts: {
            name: "posts",
            fields: {
                userId: '创作人',
                title: '标题',
                body: '文章正文',
                id: "编号"
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
        search: "搜索",
        menu: {
            posts: "文章"
        }
    }
}