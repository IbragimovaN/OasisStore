import fs from "fs";

// Чтение файла
fs.readFile("catalog.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  try {
    // Преобразование JSON в объект
    const jsonData = JSON.parse(data);
    // console.log(jsonData);

    // Удаление всех строчек с ключем id
    jsonData.map((obj) => {
      delete obj.id;
    });
    console.log(jsonData);
    // Преобразование объекта обратно в JSON
    const newData = JSON.stringify(jsonData);

    // Запись обновленных данных обратно в файл
    fs.writeFile("db.json", newData, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Строчки с ключем id удалены из файла");
    });
  } catch (error) {
    console.error(error);
  }
});
