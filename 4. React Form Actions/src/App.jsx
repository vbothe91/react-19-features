import { useActionState } from 'react';
import './App.css'

function App() {
  const handleSubmit = async (_prevState, formData) => {
    const userName = formData.get("username");
    const password = formData.get("password");

    let error = "";

    if (userName.length === 0 || password.length === 0) {
      error = "All fields are required";

      return { error, userName, password };
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
      success: "Successfully submitted"
    }
  };

  const [formState, formAction, pending] = useActionState(handleSubmit, []);

  return (
    <>
      <h1>React Forms</h1>
      <form action={formAction}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            defaultValue={formState?.userName || ""} 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            defaultValue={formState?.password || ""}
          />
        </div>

        { pending && <p>Submitting...</p> }
        { formState?.error && <p style={{ color: 'red' }}>{formState.error}</p> }
        { formState?.success && <p style={{ color: 'green' }}>{formState.success}</p> }

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
