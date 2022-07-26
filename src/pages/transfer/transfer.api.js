import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/transfer`;

export const getTransfers = (accountId) =>
  Axios.get(`${url}`).then((response) => {
    const transferList = response.data.filter(
      (res) => res.accountId === accountId
    );
    return transferList;
  });

export const insertTransfer = (transfer) =>
  Axios.post(`${url}`, transfer).then((response) => {
    return response.data;
  });
