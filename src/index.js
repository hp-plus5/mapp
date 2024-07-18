import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from "react-query";

// QueryClient/Provider
// https://www.freecodecamp.org/news/5-ways-to-fetch-data-react-graphql/
// You use React Query's Provider component and create a query client where you can set some default data fetching settings if you like. Then within your app component itself, or any child components of App, you can use the useQuery hook.
// eventually React will release a stable hook just called "use". We'll update to that when the time comes, I think.
const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
