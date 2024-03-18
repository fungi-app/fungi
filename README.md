# fungi

В проекте есть:
1. backend -- backend на djanog rest framework
2. website -- фронтенд сайт
3. frontend -- frontend мобильное приложение

Для запуска проекта нужно иметь docker и docker-compose

Для работы website нужно установить все модули
```
cd website;
npm install;
cd ..;
```

Запуск проекта:
```
docker volume create --name=fungi-database
docker-compose -f docker-compose.dev.yml up
```

Заполнение бд тестовыми данными:
```
docker-compose -f docker-compose.dev.yml exec backend python manage.py first_start
```
