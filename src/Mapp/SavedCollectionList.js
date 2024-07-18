import { request, gql } from "graphql-request";
import { useQuery } from "react-query";


export default function SavedCollectionList() {
    const real_endpoint = "http://localhost:4000/graphql/";
    
    const getAllCollections = gql`
    {
        collections {
            id
            fileName
        }
    }`;

    const { data, isLoading, error } = useQuery("launches", () => {
        return request(real_endpoint, getAllCollections);
    });
    
    if (isLoading) return "Loading the query...";
    if (error) return <pre>{error.message}</pre>;

    // see individual collection, just here while I get my graphQL sea legs; this would be more complicated in real life and have its own component
    function handleOpenCollection(event) {
      console.log(["We clicked a button to open a particular collection in the map", "Collection ID:", event.target.id]);
    }

    const getCollectionById = gql`
    {
      query collection($collectionId: Int) {
        collection(id: $collectionId) {
            id
            fileName
            content
        }
      }
    }`;
    
    // export const queryComponent = ({ collectionId }) => (
    //     <Query query={getCollectionById} variables={{ collectionId }}>
    //         {({ loading, error, data }) => {
    //             if (loading) return 'We are trying to get a specific collection...';
    //             if (error) return 'Error! ${error}';
    //             return <img src={data.collection.content} />;
    //         }}
    //     </Query>
    // );
    // end experimentation
    
      return (
        <div>
          <h1>Collections</h1>
          <ul>
            {data.collections && data.collections.map((collection) => (
              <li key={collection.id} onClick={handleOpenCollection}>{collection.fileName}
              {/* fileName is what ruby calls `file_name`. pay attention to variable names as they ride through graphQL */}
              <button >Open this collection on map</button>
              </li>
            ))}
          </ul>
        </div>
      );
}