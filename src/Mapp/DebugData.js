// import axios from "axios";
import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

export default function DebugData(props) {
    // const [variableOne, variableTwo] = props;

    const real_endpoint = "http://localhost:4000/graphql/";
    
    const real_request = gql`
    {
        collections {
            id
            fileName
        }
    }
    `;

    const { data, isLoading, error } = useQuery("launches", () => {
        return request(real_endpoint, real_request);
      });
    
      if (isLoading) return "Loading the query...";
      if (error) return <pre>{error.message}</pre>;
    
      return (
        <div>
          <h1>Collections</h1>
          <ul>
            {data.collections.map((collection) => (
              <li key={collection.id}>{collection.fileName}
              {/* fileName is what ruby calls `file_name`. pay attention to variable names as they ride through graphQL */}
              </li>
            ))}
          </ul>
        </div>
      );
}