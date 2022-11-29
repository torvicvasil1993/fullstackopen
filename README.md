# fullstackopen
Repository with the exercises

refs.:

https://stackoverflow.com/questions/40546231/sh-react-scripts-command-not-found-after-running-npm-start

Fly.io

torvicvasil@WPA08D71SWD3N:~/fullstackopen/part3/notes-backend$ export FLYCTL_INSTALL="/home/torvicvasil/.fly"
torvicvasil@WPA08D71SWD3N:~/fullstackopen/part3/notes-backend$ export PATH="$FLYCTL_INSTALL/bin:$PATH"

deploy:
fly deploy

create secret on fly:
fly secrets set MONGODB_URI='mongodb+srv://fullstack:<password>@cluster0.o1opl.mongodb.net/noteApp?retryWrites=true&w=majority'

https://stackoverflow.com/questions/51126472/how-to-organise-file-structure-of-backend-and-frontend-in-mern
https://www.baeldung.com/linux/kill-process-on-port
