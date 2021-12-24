import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const WishListDatabase = {
  async getBooks(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getALlBooks() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putBooks(books) {
    return (await dbPromise).put(OBJECT_STORE_NAME, books);
  },
  async deleteBooks(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

const proggresDatabase = {
  async getBook(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getALlBook() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putBook(books) {
    return (await dbPromise).put(OBJECT_STORE_NAME, books);
  },
  async deleteBook(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default { WishListDatabase, proggresDatabase };
