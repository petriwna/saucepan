# Використовуємо офіційний Node.js образ як базовий
FROM node:22.11.0

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо package.json та package-lock.json
COPY package.json yarn.lock ./

# Встановлюємо залежності
RUN yarn install

# Копіюємо весь код в контейнер
COPY . .

# Вказуємо порт, на якому працюватиме додаток
EXPOSE 3003

# Команда для запуску проєкту
CMD ["yarn", "start"]
