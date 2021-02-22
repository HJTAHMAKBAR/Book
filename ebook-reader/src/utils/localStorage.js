import Storage from 'web-storage-cache'
import book from "@/store/modules/book";

const localStorage = new Storage()

export function setLocalStorage(key, value) {
  return localStorage.set(key, value)
}

export function getLocalStorage(key) {
  return localStorage.get(key)
}

export function  removeLocalStorage(key) {
  return localStorage.delete(key)
}

export function clearLocalStorage() {
  return localStorage.clear()
}

export function setBookObject(bookName, key, value) {
  let book = getLocalStorage(`${bookName}-info`)
  if (!book) {
    book = {}
  }
  book[key] = value
  setLocalStorage(`${bookName}-info`, book)
}

export function getBookObject(bookName, key) {
  let book = getLocalStorage(`${bookName}-info`)
  if (book) {
    return book[key]
  } else {
    return null
  }
}

export function getFontFamily(bookName) {
  return getBookObject(bookName, 'fontFamily')
}

export function saveFontFamily(bookName, fontType) {
  return setBookObject(bookName, 'fontFamily', fontType)
}

export function getFontSize(bookName) {
  return getBookObject(bookName, 'fontSize')
}

export function saveFontSize(bookName, fontSize) {
  setBookObject(bookName, 'fontSize', fontSize)
}

export function getTheme(bookName) {
  return getBookObject(bookName, 'theme')
}

export function saveTheme(bookName, theme) {
  setBookObject(bookName, 'theme', theme)
}

export function getLocation(bookName) {
  return getBookObject(bookName, 'location')
}

export function saveLocation(bookName, location) {
  setBookObject(bookName, 'location', location)
}

export function getBookmark(fileName) {
  return getBookObject(fileName, 'bookmark')
}

export function saveBookmark(fileName, bookmark) {
  setBookObject(fileName, 'bookmark', bookmark)
}


