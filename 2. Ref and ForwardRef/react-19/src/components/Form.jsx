import { useRef } from 'react';
import Input from "./Input";
import './Form.css';

function Form() {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const email = emailRef.current.value;

    if (!username) {
      usernameRef.current.focus();
      return;
    }

    if (!email.includes("@")) {
      emailRef.current.focus();
      return;
    }

    alert("Form submitted Successfully");
  }

  return (
    <div className='form-container'>
      <h1>React 19 Refs and ForwardRefs</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Username" ref={usernameRef} />
        <Input label="Email" ref={emailRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form;
