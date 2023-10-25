const update = (address)=>
  fetch(`http://localhost:3001/addresses/${address.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(address)
  })

export default update;