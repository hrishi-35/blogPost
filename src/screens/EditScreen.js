import React,{useContext,useState} from 'react';
import {View, Text, StyleSheet,TextInput,Button} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../component/BlogPostForm';

const EditScreen = ({navigation})=> { 

const {state , editBlogPost} = useContext(Context);
const blogPost = state.find((blogPost)=>blogPost.id===navigation.getParam('id'));

	return <BlogPostForm 
	initialValues={{title: blogPost.title, content: blogPost.content}}
	onSubmit={(title , content)=>{
		editBlogPost(navigation.getParam('id'),title,content,()=>navigation.pop());
	}} />

};




const styles = StyleSheet.create({
	input:{
		fontSize:18,
		borderWidth:1,
		borderColor:'black',
		marginBottom:15,
		padding:5,
		margin:5
	},
	text:{
		fontSize:20,
		marginBottom:5,
		marginLeft:5

	}
});

export default EditScreen;