import { useState } from 'react';
import { ICartItem } from '../@types/cart';
import useScript from './useScript';

const usePayWithMyBank = (successCallback: () => void, failureCallback: () => void) => {
  const [payWithMyBank, setPayWithMyBank] = useState<any>(null);
  const [isLoadingPayWithMyBankScript, setIsLoadingPayWithMyBankScript] = useState<boolean>(true);
  const $ = (window as any);

  const url = '//sandbox.paywithmybank.com/start/scripts/pwmb.js?accessId=D61EC9BAF0BB369B9438';

  const initPayWithMyBank = () => {
    setIsLoadingPayWithMyBankScript(false);

    $.PayWithMyBank.addPanelListener((command, event) => {
      if (command === 'event' && event.type === 'new_location') {
        if (event.data.indexOf('#success') === 0) {
          successCallback();
        } else {
          failureCallback();
        }
      }
      return false;
    });

    setPayWithMyBank($.PayWithMyBank);
  };

  // Loads the PayWithMyBank script and runs the init callback
  useScript(url, initPayWithMyBank, [url, isLoadingPayWithMyBankScript]);

  const PayWithMyBankEstablish = (cartItem: ICartItem) => {
    payWithMyBank.establish({
      accessId: 'D61EC9BAF0BB369B9438',
      merchantId: '1004314986',
      metadata: { demo: 'enabled' },
      currency: 'USD',
      paymentType: 'Deferred',
      amount: cartItem.product.price,
      description: 'guilhermenunes@id.uff.br',
      merchantReference: '123456',
      returnUrl: '#success',
      cancelUrl: '#cancel',
    });
  };

  return { payWithMyBank, PayWithMyBankEstablish };
};

export default usePayWithMyBank;
