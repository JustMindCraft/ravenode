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
import zhLang from "../i18n/zh";
import enLang from "../i18n/zh";

const i18nProvider:Function = (locale:string) => {
    if (locale === 'zh') {
        return zhLang;
    }

    // Always fallback on english
    return enLang;
};


const dataProvider:any = jsonServerProvider('http://jsonplaceholder.typicode.com');

const browserLang:string = resolveBrowserLocale();

const currentLocale:any = i18nProvider(browserLang);

class App extends React.Component{
    render(){
        return (
            <Admin  title="My Custom Admin"  dashboard={Dashboard}  authProvider={authProvider} dataProvider={dataProvider}  locale={browserLang} i18nProvider={i18nProvider} >
                <Resource name={currentLocale.resources.posts.name}  options={{ label: 'giid123123' }}  list={PostList}  edit={PostEdit} create={PostCreate}   icon={PostIcon}/>
                <Resource name="users" list={UserList}  icon={UserIcon} />
            </Admin>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));