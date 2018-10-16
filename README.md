#readme

### mypushnotify

Push Notifications on Current System.
_* Check the [HowTo](#HowTo) section below._

## Features

- Supports basic angular .
- Supports multiple platforms
- Emits an event after every notification release.
- Nice devs behind it. 🤓

<!-- For hints -->
_* Check the [Updates](#Updates) section below._

<!-- For hints -->
_* Check the [Hints](#Hints) section below._


## HowTo


# Important

<!-- import in the module -->
I _promise_ that it's **very** easy to use:

install using npm i mypushnotify

_* Check the [Usage](#Usage) section below._


## Usage

app.module.ts

import { NotifyService } from 'mypushnotify/dist/notify.service';

providers:[NotifyService]

Call it from the html of the file from where you want to pop up notification , like

<button (click)="notify()">Show Notiication</button>

In your component.ts use this like 

import { NotifyService } from 'mypushnotify/dist/notify.service';
- For sending multiple notifications.

 notify() {
    const data: Array<any> = [];
    data.push({
      'title': 'Notification 1',
      'alertContent': 'This is First Alert ',
      renotify:true
    });
     data.push({
       'title': 'Notification 2',
       'alertContent': 'This is Second Alert '
     });
     data.push({
       'title': 'Notification 3',
       'alertContent': 'This is Third Alert '
     });
     data.push({
       'title': 'Notification 4',
       'alertContent': 'This is Fourth Alert '
     });
     data.push({
       'title': 'Notification 5',
       'alertContent': 'This is Fifth Alert '
     });

    var count = 0;
    var notificationInterval = setInterval(() => {
      if (count < data.length) {
        this._notificationService.generateNotification([data[count]]:Array<any>,((val)=>{
          console.log(val);}));
        count += 1;
      }
      else
        clearInterval(notificationInterval);
    }, 1000);
  }

  
- For sending multiple notifications.

 notify() {
    const data: Array<any> = [];
    data.push({
      'title': 'Notification 1',
      'alertContent': 'This is First Alert',
      renotify:true
    });
    
     this._notificationService.generateNotification([data[0]]):Array<any>,((val)=>{
          console.log(val);}));
      }
  }

    For further help
_* Check the [Help](#Help) section below._

## Hints
* Send multiple and single push notifications easily on local system where button is clicked.
* Use window's default permissions to send local notifications.
* No maximum limit for notifications.


## Demo

> Previews needs to be opened in new standalone windows.

- [StackBlitz](https://stackblitz.com/edit/mypushnotify)
- [Github](https://github.com/IAshish480/demo-mypushnotify)


## Repositories

- [Github](https://github.com/IAshish480/mypushnotify.git)


## Help

If you need help you can contact to iashish480@gmail.com with a subject "HELP REGARDING NOTIFICATIONS" in the mail.



