function App() {
  const title = 'Blog Post'
  const body = 'This is my blog post'
  const comments = [
    { id: 1, text: 'Comment 1' },
    { id: 2, text: 'Comment 2' },
    { id: 3, text: 'Comment 3' },
  ]

  const loading = false
  const showComments = true
  if (loading) return <h1>Loading...</h1>

  return (
    <div className="container">
      {/* <h1>Shree Ganesh</h1> */}
      <h1>{title.toUpperCase()}</h1>
      <h2>{body}</h2>

      {showComments ? (
        <ul>
          {comments.map((items) => (
            <li key={items.id}>
              {items.id}. {items.text}
            </li>
          ))}
        </ul>
      ) : null}

      {showComments && (
        <ul>
          {comments.map((items) => (
            <li key={items.id}>
              {items.id}. {items.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default App
