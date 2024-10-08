export const languageConfig = {
  'default' : {
    placeholder: 'What would you like to translate?',
    reset: 'Reset',
    translate: 'Translate',
    alertTitle: 'Input Warning',
    alertMessage: 'Please enter text',
    errorResponse: {
      latin: `We're sorry, we are unable to complete your request at this time.`,
      arabic:  'ببخشید، ما نمیتوانم درخواست شما را انجام دهم'
    }
  },
  'English': {
      placeholder: 'What would you like to translate?',
      reset: 'Reset',
      translate: 'Translate',
      alertTitle: 'Input Warning',
      alertMessage: 'Please enter text in English.',
      errorResponse: {
        latin: `We're sorry, we are unable to complete your request at this time.`,
      },
      icons: {
        file: 'File',
        photo: 'Photo',
        camera: 'Camera',
        scan: 'Scan'
      }
    },
    'Dari': {
      placeholder: 'چه میخواهید ترجمه کنید؟' + '\n' + 'Che mikhahi tarjuma koni?',
      reset: 'Reset',
      translate: 'چگونه',
      alertTitle: 'پیغام هوشدار',
      alertMessage: 'لطفاً متن را برای ترجمه وارد کنید',
      errorResponse: {
        arabic:  'ببخشید، ما نمیتوانم درخواست شما را انجام دهم'
      },
      icons: {
        file: 'فایل',
        photo: 'عکس',
        camera: 'دوربین',
        scan: 'اسکن'
      }
  }
}
