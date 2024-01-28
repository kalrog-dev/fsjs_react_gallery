import { search } from '@assets/icons'
import { useState } from 'react'

const Search = ({ data, handleSubmit }) => {
  if (!data) {
    return null
  }

  const { name, label, placeholder } = data

  const [value, setValue] = useState('')

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
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />
        <button
          type='submit'
          className='search-button'
          onClick={(e) => handleSubmit(e, value)}
        >
          <img src={search} alt='search icon' />
        </button>
      </div>
    </form>
  )
}

export default Search
