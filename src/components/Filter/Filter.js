export const Filter = ({filter, onUpdateFilter}) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={filter}
        onChange={(e) => onUpdateFilter(e.target.value)} />
    </div>
  )
}