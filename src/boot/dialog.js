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
};

export default boot(({ app }) => {
  app.config.globalProperties.$dialog = dialog;
});

export { dialog };
