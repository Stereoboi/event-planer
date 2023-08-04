function formatDate(inputDate: string) {
  const dateParts = inputDate.split("-"); // Розділяємо дату на частини
  const day = dateParts[2];
  const month = dateParts[1];
  return `${day}.${month}`; // Об'єднуємо частини дати у бажаний формат
}

export { formatDate };
