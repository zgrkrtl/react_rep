import { default as x} from "./Lists";
// x refers to ShoppingList function in Lists module which can be exported as anything as long as its default export
let content;
export default function logIn() {
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return <div>{content}</div>;
}
/*The code you provided is written in JSX, 
    a syntax extension for JavaScript commonly used in React applications. 
    It checks if a user is logged in and renders different components based on the condition. 
    If the user is logged in, it renders an <AdminPanel /> component, 
    and if the user is not logged in, it renders a <LoginForm /> component. 
    The components are then wrapped inside a <div> element and returned. */

//faster way to code in simple manner
export default function logInS() {
  return <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>;
}

//more faster if you dont need else condition

export default function logInXS() {
  return <div>{isLoggedIn && <AdminPanel />}</div>}