import { Application } from './../framework/Application';

export class App extends Application
{
    public static instance() : App
    {
        if(!this._app)
            this._app = new App();
        return this._app;
    }
}

export default App.instance();
