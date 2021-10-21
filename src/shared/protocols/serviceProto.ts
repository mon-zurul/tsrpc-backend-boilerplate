import { ServiceProto } from 'tsrpc-proto';
import { ReqLogin, ResLogin } from './PtlLogin';

export interface ServiceType {
    api: {
        "Login": {
            req: ReqLogin,
            res: ResLogin
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 2,
    "services": [
        {
            "id": 0,
            "name": "Login",
            "type": "api"
        }
    ],
    "types": {
        "PtlLogin/ReqLogin": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "username",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "password",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlLogin/ResLogin": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "code",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "message",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "data",
                    "type": {
                        "type": "Reference",
                        "target": "../interface/IUser/default"
                    }
                }
            ]
        },
        "../interface/IUser/default": {
            "type": "Reference",
            "target": "../interface/IUser/IUser"
        },
        "../interface/IUser/IUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "username",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "password",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "email",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        }
    }
};