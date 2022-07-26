import { getMovements } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { mapMovementListFromApiToVm } from './movements.mappers';
import { history } from '../../core/router';
import { onSetValues } from '../../common/helpers';
import { getAccount } from '../../common/api/getAccount.api';
import { mapAccountFromApitoViewModel } from '../account/account.mappers';

const params = history.getParams();
let account = {};

getMovements(params.id).then((movementList) => {
  const movementListViewModel = mapMovementListFromApiToVm(movementList);
  addMovementRows(movementListViewModel);
});

getAccount(params.id).then((apiAccount) => {
  account = mapAccountFromApitoViewModel(apiAccount);
  onSetValues(account);
});
