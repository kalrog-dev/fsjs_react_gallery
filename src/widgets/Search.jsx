import { search } from '@/assets/icons'

const Input = ({ data }) => {
  if (!data) {
    return null
  }

  const { name, label, placeholder } = data

  return (
    <form className='search-form'>
      <label className='sr-only' htmlFor={name}>
        {label}
      </label>
      <div className='input-group'>
        <input
          id={name}
          type='text'
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
