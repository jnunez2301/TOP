import { useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList, ActivityIndicator, SafeAreaView, StatusBar, TextInput, Button} from 'react-native';

export const RestAPI = () => {

  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState("");
  
  const fetchData = async (limit = 10) => {
      try{
        const baseURL = `https://jsonplaceholder.typicode.com/posts?limit=${limit}`;
      const response = await fetch(baseURL);
      const data = await response.json();
      setPostList(data);
      setIsLoading(false);
      setError("")
      }catch(error){
        console.log(error);
        setIsLoading(false);
        setError("Failed to fetch Post List");
      }
  };
  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  }
  
  useEffect(() =>{
      fetchData()
    },[])

  if(isLoading){
      return (
        <SafeAreaView style={styles.loadingContainer}>
          <ActivityIndicator size='large' color="#0000ff" />
          <Text>Loading...</Text>
        </SafeAreaView>
      )
    }

  const addPost = async() => {
    setIsPosting(true);
    try{
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'post',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title: postTitle,
            body: postBody
          })
        }
        );
      const newPost = await response.json();
      setPostList([newPost, ...postList]);
      setPostTitle("");
      setPostBody("");
      setIsPosting(false);
      setError("");
    }catch(error){
      console.error(error);
      setError('Failed to Post');
    }
  }

  return (
    <>
    {
      error ? 
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View> : 
    <>
    <View style={styles.inputContainer}>
      <TextInput 
      style={styles.input}
      onChangeText={setPostTitle}
      placeholder='Post title' value={postTitle}/>

      <TextInput
      style={styles.input}
      placeholder='Post message'
      onChangeText={setPostBody}
      value={postBody}/>
      <Button 
      title={isPosting ? 'Adding...' : 'Post'} 
      onPress={addPost}
      disabled={isPosting}/>
    </View>
    <View>
        <FlatList 
        data={postList}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <Text style={styles.titleText}>{item.title}</Text>    
              <Text style={styles.bodyText}>{item.body}</Text>
            </View>
          )
        }}
        ItemSeparatorComponent={<View style={{height: 16}}/>}
        ListEmptyComponent={<Text>No Posts Found</Text>}
        ListHeaderComponent={<Text style={styles.headerText}>Post list</Text>}
        ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        />
    </View>
    </>
    }
    </>
  )
}

const styles = StyleSheet.create({
  btn: {
      marginBottom: 10
  },
  input: {
      height: 40,
      margin: 15,
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "#ddd"
  },
  text: {
      fontSize: 30,
      padding: 10,
  },
  multilineText: {
      minHeight: 100,
      textAlignVertical: 'top'
  },
  switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10
  },
  form: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      shadowColor: "black",
      shadowOffset: {
          width: 0,
          height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
  },
  label: {
      fontSize: 16,
      marginBottom: 5,
      fontWeight: 'bold'
  },
  image: {
      width: 200,
      height: 200,
      alignSelf: 'center',
      marginBottom: 50
  },
  errorText: {
      color: 'red',
      marginBottom: 10
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  titleText:{
    fontSize: 30,
  },
  bodyText: {
    fontSize: 24,
    color: '#666666'
  },
  footerText: {
    textAlign: 'center',
    fontSize: 18
  },
  headerText: {
    marginTop: 16,
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 24
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight
  },
  inputContainer: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10
  },
  errorContainer: {
   backgroundColor: "#FFC0CB",
   padding: 16,
   borderRadius: 8,
   borderWidth: 1,
   margin: 16,
   alignItems: 'center'
  },
  errorText: {
    color: "#D8000C",
    fontSize: 16,
    textAlign: "center"
  }
});