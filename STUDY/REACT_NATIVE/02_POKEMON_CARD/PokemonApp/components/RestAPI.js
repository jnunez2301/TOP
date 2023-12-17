import { useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export const RestAPI = () => {

  const [postList, setPostList] = useState([]);

  
  const fetchData = async (limit = 10) => {
      const baseURL = `https://jsonplaceholder.typicode.com/posts?limit=${limit}`;
      const response = await fetch(baseURL);
      const data = await response.json();
      setPostList(data);
  };
  
  useEffect(() =>{
      fetchData()
    },[])


  return (
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
        />
    </View>
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
  }
});