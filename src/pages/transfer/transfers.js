import { setAccountOptions, getOption } from './transfer.helpers';
import {
  onSubmitForm,
  onSetFormErrors,
  onUpdateField,
  onSetError,
} from '../../common/helpers';
import { formValidation } from './transfers.validations';
import { getAccountList } from '../../common/api/account-list.api';
import { history } from '../../core/router';
import { getTransfers, insertTransfer } from './transfer.api';
import { mapTransferFromVmtoApi } from './transfer.mapper';
const params = history.getParams();
let accounts = {};
let transfer = {
  id: '',
  iban: '',
  name: '',
  amount: '',
  concept: '',
  notes: '',
  day: '',
  month: '',
  year: '',
  date: '',
  email: '',
};

let validDate = {
  day: '',
  month: '',
  year: '',
};
getAccountList().then((accountList) => {
  accounts = accountList;
  setAccountOptions(accounts, params.id);
});

getTransfers(params.id).then((list) => {
  const res = list;
});

onUpdateField('iban', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    iban: value,
  };
  formValidation.validateField('iban', transfer.iban).then((result) => {
    onSetError('iban', result);
  });
});

onUpdateField('name', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    name: value,
  };
  formValidation.validateField('name', transfer.name).then((result) => {
    onSetError('name', result);
  });
});

onUpdateField('amount', (event) => {
  const value = parseFloat(Math.abs(event.target.value)).toFixed(2);
  transfer = {
    ...transfer,
    amount: value,
  };
  console.log('value', value);
  formValidation.validateField('amount', transfer.amount).then((result) => {
    onSetError('amount', result);
  });
});

onUpdateField('concept', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    concept: value,
  };
  formValidation.validateField('concept', transfer.concept).then((result) => {
    onSetError('concept', result);
  });
});

onUpdateField('notes', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    notes: value,
  };
  formValidation.validateField('notes', transfer.notes).then((result) => {
    onSetError('notes', result);
  });
});

onUpdateField('day', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    day: value,
  };
  formValidation.validateField('day', transfer.day).then((result) => {
    onSetError('day', result);
  });
});

onUpdateField('month', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    month: value,
  };
  formValidation.validateField('month', transfer.month).then((result) => {
    onSetError('month', result);
  });
});

onUpdateField('year', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    year: value,
  };
  formValidation.validateField('year', transfer.year).then((result) => {
    onSetError('year', result);
  });
});

const transferDateToDate = () => {
  if (transfer.day && transfer.month && transfer.year) {
    transfer.date = transfer.day + '/' + transfer.month + '/' + transfer.year;
  } else {
    transfer.date = '';
  }
};

onUpdateField('email', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    email: value,
  };
  formValidation.validateField('email', transfer.email).then((result) => {
    onSetError('email', result);
  });
});

onSubmitForm('transfer-button', () => {
  transferDateToDate();
  formValidation.validateForm(transfer).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      insertTransfer(mapTransferFromVmtoApi(transfer));
    }
  });
});
