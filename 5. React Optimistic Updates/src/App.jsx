import { useActionState, useOptimistic } from 'react';
import './App.css'

async function updateAction(prevState, formData) {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const action = formData.get("action");
  
  if (action === "like") {
    return { ...prevState, likes: prevState.likes + 1 };
  }
  if (action === "dislike") {
    return { ...prevState, dislikes: prevState.dislikes + 1 };
  }
  return prevState;
}

function App() {
  const [state, formAction, loading] = useActionState(updateAction, {
    likes: 100,
    dislikes: 6,
  });

  const[optimisticState, callOptimistic] = useOptimistic(state, (currentState, action) => {
    if (action === "like") {
      return { ...currentState, likes: currentState.likes + 1 };
    }
    if (action === "dislike") {
      return { ...currentState, dislikes: currentState.dislikes + 1 };
    }
    return currentState;
  });

  return (
    <>
      <h1>React 19 useOptimistic Hook</h1>
      <form action={formAction} className="card">
        <button
          type="submit"
          name="action"
          value="like"
          disabled={loading}
          onClick={() => callOptimistic("like")}
        >👍</button>
        <button type="button">{optimisticState.likes}</button>

        <button
          type="submit"
          name="action"
          value="dislike"
          disabled={loading}
          onClick={() => callOptimistic("dislike")}
        >👎</button>
        <button type="button">{optimisticState.dislikes}</button>
      </form>
    </>
  )
}

export default App
