const size = 820
let volume_gb = prompt("Введіть обсяг флешки (ГБ)")
let volume_mb = volume_gb * 1000
let amount = Math.floor(volume_mb / size)
alert("Кількість файлів розміром " + size + " МБ" + ", які вмістяться на флешку " + volume_gb + " ГБ: " + amount)