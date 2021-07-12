//decorator is a special kind of declearation that can be attached to classes, methods or properties and decorators get evaluated into a
//function that will be called at runtime
@Component({
    selector: 'my-app',
    template: `<h1>Nidhi Verma<h1>`
})

export class AppComponent{

}

//if when ever use my-app then it will show this <h1>Nidhi Verma<h1> html part  