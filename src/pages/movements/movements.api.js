import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovements = (accountId) =>
  Axios.get(`${url}`).then((response) => {
    const movementList = response.data.filter(
      (res) => res.accountId === accountId
    );
    return movementList;
  });
