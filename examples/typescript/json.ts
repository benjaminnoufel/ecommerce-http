import {HttpCors} from "@benjaminnoufel/http-cors";

/**
 * Create a new HTTP request on POST method with a body with a JSON response
 * Adding Headers and cors for call API
 * Adding additional option for fetch with requestInit()
 */
const jsonRequest = () => {
    HttpCors.post("https://jsonplaceholder.typicode.com/todos", {name: "Doe"})
        .then((res: JSON) => console.log(res))
        .catch((err: Error) => console.error(err.message));
};

/**
 * Create a new HTTP request on POST method with a body with async/await with a JSON response
 */
const jsonRequestAsyncAwait = async () => HttpCors.get("https://jsonplaceholder.typicode.com/todos/1");
