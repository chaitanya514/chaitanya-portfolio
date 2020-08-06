const [list, setList] = useState([]);

const showLoading = useCallback((id, loading) => {
  // Update the list
  setList(list.map(item => {
    if(item.id === id) {
      return {
        ...item,
        isLoading: loading
      }
    }
    return item;
  }));
}, [list]);

useEffect(() => {
  // Connect the websocket
  const ws = new Websocket(...);

  // A message signals to reload one of the `list` items
  ws.addEventListener("message", e => {
    showLoading(e.id, true);
  });

  // Before next effect runs, close this websocket
  return () => ws.close();
}, [showLoading]);