export const mapMovementListFromApiToVm = (movementList) => {
  return movementList.map((movement) => mapMovementFromApiToVm(movement));
};
const mapMovementFromApiToVm = (movement) => {
  return {
    accountId: movement.accountId,
    amount: `${movement.amount} €`,
    balance: `${movement.balance} €`,
    description: movement.description,
    id: movement.id,
    realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
    transaction: new Date(movement.transaction).toLocaleDateString(),
  };
};
