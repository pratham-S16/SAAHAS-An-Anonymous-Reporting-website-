import cloudinary from "./cloudinary";

export async function cleanupFiles(urls: string[]) {
  if (!urls || urls.length === 0) return;

  for (const url of urls) {
    try {
      const publicId = url.split("/").slice(-1)[0].split(".")[0];
      await cloudinary.uploader.destroy(`saahas/evidence/${publicId}`);
    } catch (err) {
      console.error("Failed to cleanup file:", url);
    }
  }
}
