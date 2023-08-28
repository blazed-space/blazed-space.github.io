import { useRouteError } from "react-router-dom";

import NotFound from "../components/not-found";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="error-page">
        <NotFound />
      </div>
    );
}