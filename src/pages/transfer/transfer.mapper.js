export const mapTransferFromVmtoApi = (transfer) => {
  return {
    id: transfer.id,
    iban: transfer.iban,
    name: transfer.name,
    amount: transfer.amount,
    concept: transfer.concept,
    notes: transfer.notes,
    date: new Date(transfer.date).toLocaleDateString(),
    email: transfer.email,
  };
};
