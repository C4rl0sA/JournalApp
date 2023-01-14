import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: "dipsuvrks",
  api_key: "231726294687557",
  api_secret: "Z5G5eGwJlKqb46s2SHJSZy9UV2g",
  secure: true,
});

describe("Pruebas en fileUpload", () => {
  test("Debe de subir el archivo correctamente a cloudinary", async () => {
    const imageUrl =
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);
    expect(typeof url).toBe("string");

    // console.log(url);
    const segments = url.split("/");
    // console.log(segments);
    const imageId = segments[segments.length - 1].replace(".jpg", "");
    // console.log(imageId);

    await cloudinary.api.delete_resources(["journal/" + imageId], {
      resource_type: "image",
    });
  });

  test("Debe de retornar null", async () => {
    const file = new File([], "foto.jpg");

    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
