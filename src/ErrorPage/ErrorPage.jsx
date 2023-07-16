import { useRouteError } from "react-router-dom";
import './ErrorPage.scss';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const serverErrorMessage = "Sorry, an unexpected server error has occurred.";
  const genericErrorMessage = "Sorry, an unexpected error has occurred.";

  const statusCodeToMessageMap = {
    400: 'Hmm... the server did not like your request.',
    403: 'You are not authorized to view this page.',
    404: 'This route does not exist.',
    500: serverErrorMessage,
    501: serverErrorMessage,
    502: serverErrorMessage,
    503: serverErrorMessage,
    504: serverErrorMessage,
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>{statusCodeToMessageMap[error.status] || genericErrorMessage}</p>
      <p>
        Status code: <b>{error.status} </b>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
