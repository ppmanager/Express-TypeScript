import * as configNS from './../framework/Configuration'

var config = configNS.applyMode(configNS.default);

export interface Configuration
{
    port : number;
}

export default configNS.default as Configuration;
