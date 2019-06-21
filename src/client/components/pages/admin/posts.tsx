import * as React from 'react';
import { translate, Responsive, Filter, List,SimpleList, Datagrid, TextField, ReferenceField, EditButton, Edit, SimpleForm, ReferenceInput, TextInput, SelectInput, DisabledInput, LongTextInput, Create } from 'react-admin';

const PostFilter = (props:any) => (
    <Filter {...props}>
        <TextInput label={props.translate("component.search")} source="q" alwaysOn />
        <ReferenceInput label={props.translate("resources.posts.fields.userId")} source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

const PostFilterTrans = translate(PostFilter);

const PostTitle = ({ record }:any) => {
    return <span>文章 {record ? `"${record.title}"` : ''}</span>;
};

export const PostList = (props:any) => (
    <List  filters={<PostFilterTrans />} {...props} title="文章列表">
       <Responsive
            small={
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                    linkType="show"
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="title" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const PostEdit = (props:any) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props:any) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);