import { OrderItemModel } from '@d-restaurant-frontend/drestaurant-shared/src/lib/order/order-item.model';

export class OrderModel {
  id: string;
  state: string;
  lineItems: OrderItemModel[];
}
