import axios from 'axios'

const GET_USERS = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'

export const getUser = async () => {
  let result = null
  try {
    const response = await axios.get(GET_USERS)
    if (response?.data) result = response?.data

  } catch (err) {
    console.log(err)
  }
  return result

}