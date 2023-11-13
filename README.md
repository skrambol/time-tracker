# Time Tracker

A time tracker built with [Countable Modern Django](https://github.com/countable-web/countable-modern-django)

## Build and Deploy

Prerequisites:
- Install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/), if you don't have them installed.

Clone the repo:
```
git clone https://github.com/skrambol/time-tracker
cd time-tracker
```

You will need to create a Docker Compose override file from one of the templates (`dc.dev.yml` or `dc.prod.yml`).  
(Note: if you are using `dc.prod.yml`, you will need to create the environment variables `POSTGRES_PASSWORD` and `DJANGO_SECRET` in a .env file and populate them with passwords of your choice. You will also need to modify port 80000 in the nginx config to the correct port that is setup on the hosting machine. These environment variables are hardcoded for local development in `dc.dev.yml`.)
```
cp dc.dev.yml docker-compose.override.yml
```

Spin up the app using the following command:
```
docker-compose up
```

The frontend app runs Vue and is served at `http://localhost`.
The backend app runs Django and is served at `http://localhost/api`.

To set up a superuser in Django and load a test data, run the following command:

```
docker-compose run web ./manage.py loaddata dump.json
```

You can visit the Django admin at `http://localhost/admin`. The username is `admin`, password is `pass`.
