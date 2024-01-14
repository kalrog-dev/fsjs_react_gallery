import { search } from '../assets'

const Input = ({ data }) => {
  const { name, label, placeholder } = data

  return (
    <form className='search-form'>
      <label className='sr-only' for={name}>
        {label}
      </label>
      <div className='input-group'>
        <input
          id={name}
          type='search'
          name={name}
          placeholder={placeholder}
          required
        />
        <button type='submit' className='search-button'>
          <img src={search} alt='search icon' />
        </button>
      </div>
    </form>
  )
}

export default Input
