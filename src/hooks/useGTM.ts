import TagManager from 'react-gtm-module'

export const initializeGTM = () => {
  const tagManagerArgs = {
    gtmId: 'GTM-M52HRZ6',
  }

  TagManager.initialize(tagManagerArgs)
}

export const trackMenuClick = (to: string) => {
  ;(window as any).dataLayer.push({
    event: 'menu_click',
    menu_name: to,
  })
}
