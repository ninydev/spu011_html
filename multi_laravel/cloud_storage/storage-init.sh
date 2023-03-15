#!/bin/bash

# Создание хранилища
mc alias set cloud-storage http://cloud.storage:9000 root_user root_password
mc config host add cloud-storage http://cloud.storage:9000 root_user root_password

# Создать тест
mc mb --debug cloud-storage/test

# Создание нового пользователя
mc admin user add cloud-storage webuser kfFh3J2gkD56Hl3f4d7

# Добавление пользователю политики доступа
mc admin policy set cloud-storage readwrite user=webuser



