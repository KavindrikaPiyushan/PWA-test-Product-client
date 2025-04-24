import axios from 'axios';
import { getSyncQueue, clearSyncItem } from './db';

export const syncWithServer = async () => {
  if (!navigator.onLine) return;

  const queue = await getSyncQueue();

  for (const item of queue) {
    try {
      if (item.action === 'create') {
        await axios.post('https://pwa-test-product-server.onrender.com/users', item.payload);
      } else if (item.action === 'update') {
        await axios.put(`https://pwa-test-product-server.onrender.com/users/${item.payload.id}`, item.payload);
      } else if (item.action === 'delete') {
        await axios.delete(`https://pwa-test-product-server.onrender.com/users/${item.payload.id}`);
      }
      await clearSyncItem(item.id);
    } catch (err) {
      console.error('Failed to sync item:', item, err);
    }
  }
};
