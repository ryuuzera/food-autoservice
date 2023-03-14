import { createContext, useContext, useState } from 'react';

type Order = 'dine-in' | 'take-out';

enum OrderType {
  dineIn = 'dine-in',
  takeout = 'take-out',
}

interface IOrderContext {
  orderType: Order;
  setOrderType: (newOrderType: Order) => void;
}

const OrderContext = createContext<IOrderContext>({
  orderType: OrderType.dineIn,
  setOrderType: () => {},
});

export const OrderProvider = ({ children }: any) => {
  const [orderType, setOrderType] = useState<Order>((localStorage.getItem('orderType') as Order) || OrderType.dineIn);

  const handleSetOrderType = (newOrderType: Order) => {
    setOrderType(newOrderType);
    localStorage.setItem('orderType', newOrderType);
  };

  return (
    <OrderContext.Provider value={{ orderType, setOrderType: handleSetOrderType }}>{children}</OrderContext.Provider>
  );
};

export const useOrder = () => {
  const OrderControl = useContext<IOrderContext>(OrderContext);

  const getOrderType = () => {
    return (localStorage.getItem('orderType') as Order) ?? null;
  };

  const setOrderTypeAndPersist = (newOrderType: Order) => {
    OrderControl.setOrderType(newOrderType);
    localStorage.setItem('orderType', newOrderType);
  };

  return { getOrderType, setOrderTypeAndPersist };
};
