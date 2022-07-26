import { getAccountList } from '../../common/api/account-list.api';
import { addAccountRows } from './account-list.helpers';
import { mapAccountListFromApiToVm } from './account-list.mappers';
import { onUpdateField } from '../../common/helpers';
import { history } from '../../core/router/history';

getAccountList().then((accountList) => {
  const viewModelAccountList = mapAccountListFromApiToVm(accountList);
  addAccountRows(viewModelAccountList);

  viewModelAccountList.forEach((account) => {
    onUpdateField(`select-${account.id}`, (event) => {
      const route = event.target.value;
      history.push(route);
    });
  });
});
