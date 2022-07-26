export const mapAccountFromApitoViewModel = (account) => {
  return {
    ...account,
    alias: account.name,
  };
};

export const mapAccountFromViewModelToApi = (account) => {
  return {
    ...account,
    name: account.alias,
  };
};
