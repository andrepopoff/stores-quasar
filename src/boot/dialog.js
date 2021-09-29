import { Dialog } from 'quasar';
import { boot } from 'quasar/wrappers';

const dialog = {
  error(message, title) {
    if (!title) title = 'Error';
    return Dialog.create({
      title,
      message,
      ok: 'ОК',
    });
  },
  storeDialog(store) {
    const message = `
    <strong>Code:</strong> ${store.code || 'No info'}<br>
    <strong>Allowance:</strong> ${store.allowance || 'No info'}<br>
    <strong>Address:</strong> ${store.address || 'No info'}<br>
    <strong>Secondary address:</strong> ${store.address2 || 'No info'}<br>
    <strong>City:</strong> ${store.city || 'No info'}<br>
    <strong>Code:</strong> ${store.code || 'No info'}<br>
    <strong>Company name:</strong> ${store.companyName || 'No info'}<br>
    <strong>Country code:</strong> ${store.countreCode || 'No info'}<br>
    <strong>Latitude:</strong> ${store.latitude || 'No info'}<br>
    <strong>Longitude:</strong> ${store.longitude || 'No info'}<br>
    <strong>Post code:</strong> ${store.postCode || 'No info'}<br>
    <strong>Post code:</strong> ${store.postCode || 'No info'}<br>
    <strong>State:</strong> ${store.state || 'No info'}<br>
    <strong>Store Email:</strong> ${store.storeEmail || 'No info'}<br>
    <strong>Store Phone:</strong> ${store.storePhone || 'No info'}<br>
    <strong>Store Type:</strong> ${store.storeType || 'No info'}<br>
    `;
    return Dialog.create({
      title: store.name,
      message,
      html: true,
      ok: 'ОК',
    });
  },
};

export default boot(({ app }) => {
  app.config.globalProperties.$dialog = dialog;
});

export { dialog };
