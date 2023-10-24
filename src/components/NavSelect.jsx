import React from 'react'

const NavSelect = () => {
  return (
    <div className='select'>
<select name="Products" id="Products">
  <option value="volvo">Products</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
<select name="Products" id="Products">
  <option value="volvo">Solutions</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
<select name="Products" id="Products">
  <option value="volvo">Resources</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
<label htmlFor="">Pricing</label>
    </div>
  )
}

export default NavSelect