// import axios from "axios";
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

export default function AddAsCollection(props) {

  function handleAddCollection() {
    
    const queryEndpoint = "http://localhost:4000/graphql/";
    
    const addCollectionMutation = gql`
    {
        collections {
            fileName
            content
        }
    }
    `;

    // i'll need to be careful to avoid an infinite loop 
    // const { data, isLoading, error } = useQuery("launches", () => {
    //     return request(queryEndpoint, addCollectionMutation);
    //   });
    
    //   if (isLoading) return "Loading the query...";
    //   if (error) return <pre>{error.message}</pre>;
    
    // alternatively,
    // useLazyQuery 
    // "is an appropriate hook for something that should only execute after an event, like clicking a button". Maybe that for sending a mutation?
  }

  return (
    <button onClick={handleAddCollection}>Add table and map as a collection</button>
  )
}