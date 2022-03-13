export const DEFAULT_CLASSES =
  'block m-0 w-full items-center justify-center uppercase font-medium text-center px-6 py-4 rounded disabled:border-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed';

export const VARIANT_CLASSES = {
  primary: 'text-white bg-gray-900 hover:bg-gray-800 active:bg-gray-700',
  secondary: 'bg-white hover:bg-gray-50 active:bg-gray-100 border border-black'
};

export const BUTTON_PRIMARY_CLASSES = `${DEFAULT_CLASSES} ${VARIANT_CLASSES.primary}`;
export const BUTTON_SECONDARY_CLASSES = `${DEFAULT_CLASSES} ${VARIANT_CLASSES.secondary}`;
