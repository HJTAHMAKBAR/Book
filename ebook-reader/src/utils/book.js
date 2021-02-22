import {realPx} from "@/utils/utils";

export const FONT_FAMILY = [
  { fontType: 'Times New Roman' },
  { fontType: 'Cabin' },
  { fontType: 'DaysOne' },
  { fontType: 'Montserrat' },
  { fontType: 'Tangerine' }
]

export function themeList(vue) {
  return [
    {
      name: 'Default',
      style: {
        body: {
          'color': '#4c5059',
          'background': '#cecece',
          'padding-top': `${realPx(32)}px!important`,
          'padding-bottom': `${realPx(32)}px!important`
        }
      }
    },
    {
      name: 'Gold',
      style: {
        body: {
          'color': '#5c5b56',
          'background': '#c6c2b6',
          'padding-top': `${realPx(32)}px!important`,
          'padding-bottom': `${realPx(32)}px!important`
        }
      }
    },
    {
      name: 'Eye',
      style: {
        body: {
          'color': '#404c42',
          'background': '#a9c1a9',
          'padding-top': `${realPx(32)}px!important`,
          'padding-bottom': `${realPx(32)}px!important`
        }
      }
    },
    {
      name: 'Night',
      style: {
        body: {
          'color': '#cecece',
          'background': '#000000',
          'padding-top': `${realPx(32)}px!important`,
          'padding-bottom': `${realPx(32)}px!important`
        }
      }
    }
  ]
}

export function deleteCss(href) {
  const links = document.getElementsByTagName('link')
  for (let i = links.length; i >= 0; i--) {
    const link = links[i]
    if (link && link.getAttribute('href') && link.getAttribute('href') === href) {
      link.parentNode.removeChild(link)
    }
  }
}

export function clearCss(href) {
  deleteCss(`${process.env.VUE_APP_RES_URL}/theme/theme_default.css`)
  deleteCss(`${process.env.VUE_APP_RES_URL}/theme/theme_eye.css`)
  deleteCss(`${process.env.VUE_APP_RES_URL}/theme/theme_gold.css`)
  deleteCss(`${process.env.VUE_APP_RES_URL}/theme/theme_night.css`)
}

export function addCss(href) {
  const link = document.createElement('link')
  link.setAttribute('rel', 'stylesheet')
  link.setAttribute('type', 'text/css')
  link.setAttribute('href', href)
  document.getElementsByTagName('head')[0].appendChild(link)
}

export function flatten(array) {
  //递归
  return [].concat(...array.map(item => [].concat(item, ...flatten(item.subitems))))
}
