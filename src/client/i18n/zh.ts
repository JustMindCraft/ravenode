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
    },
    auth: {
        404: "用户不存在"
    }, 
    "Failed to fetch": "网络暂时无法链接，请稍后重试"
}