export const readFileAsDataURL = (
  file: File,
): Promise<string | ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      if (reader.result) {
        resolve(reader.result);
      }
    };

    reader.onerror = reject;

    if (file) {
      reader.readAsDataURL(file);
    } else {
      reject(new Error("No file provided"));
    }
  });
};

export type ImageDimensions = {
  width: number;
  height: number;
};

export const getImageDimensions = (file: string): Promise<ImageDimensions> => {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.src = file;

    image.onload = () => {
      const { width, height } = image;

      resolve({
        width,
        height,
      });
    };

    image.onerror = reject;
  });
};
