const [date, setDate] = useState({})
const uri = 'https://pokeapi.co/api/v2/pokemon/'
useEffect(() => (
    window.fetch(uri)
        .then(res => res.json())
        .then(json => json.result)
        .then(date => setDate(date))
), [])

    return (
        <>
            <ul>
             {date.map(v => (
               <li key={v.url}>{v.name}</li>
               ))}
            </ul>
        </>
    )
