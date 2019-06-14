import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Admin, Resource, resolveBrowserLocale } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from '../components/pages/admin/Dashboard';
import authProvider from '../uitls/authProvider';
import { UserList } from '../components/pages/admin/users';
import { PostList, PostEdit, PostCreate } from '../components/pages/admin/posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import englishMessages from 'ra-language-english';
import chineseMessages from 'ra-language-chinese';

const messages = {
    zh: chineseMessages,
    en: englishMessages,
};

const i18nProvider = (locale:any) => messages[locale] ? messages[locale] : messages["en"];

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');


const App = () => 
    <Admin  dashboard={Dashboard}  authProvider={authProvider} dataProvider={dataProvider}    locale={resolveBrowserLocale()} i18nProvider={i18nProvider} >
        <Resource name="posts" list={PostList}  edit={PostEdit} create={PostCreate}   icon={PostIcon}/>
        <Resource name="users" list={UserList}  icon={UserIcon} />
    </Admin>;

ReactDOM.render(<App />, document.querySelector('#app'));