const DB_NAME = "NexusElevateDB";
const STORE_NAME = "pdf_store";
const DB_VERSION = 1;

/**
 * Initializes the IndexedDB database.
 */
function initDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      console.error("Error opening database");
      reject(request.error);
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });
}

export type PDFData = {
  name: string;
  blob: Blob;
};

/**
 * Saves a PDF blob and name to IndexedDB.
 * @param blob The PDF file blob.
 * @param name The name of the PDF file.
 * @param key The key to store it under (default: "main_pdf").
 */
export async function savePDF(blob: Blob, name: string, key: string = "main_pdf"): Promise<void> {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    
    const data: PDFData = { name, blob };
    const request = store.put(data, key);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
    
    transaction.oncomplete = () => db.close();
  });
}

/**
 * Retrieves a PDF from IndexedDB.
 * @param key The key it was stored under (default: "main_pdf").
 */
export async function getPDF(key: string = "main_pdf"): Promise<PDFData | null> {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(key);

    request.onsuccess = () => {
      // Handle legacy case where just a Blob was stored
      if (request.result instanceof Blob) {
        resolve({ name: "Document.pdf", blob: request.result });
      } else {
        resolve(request.result || null);
      }
    };
    request.onerror = () => reject(request.error);

    transaction.oncomplete = () => db.close();
  });
}

/**
 * Deletes a PDF from IndexedDB.
 * @param key The key to delete.
 */
export async function deletePDF(key: string = "main_pdf"): Promise<void> {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(key);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);

    transaction.oncomplete = () => db.close();
  });
}
