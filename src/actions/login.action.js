import { LOGIN } from './login.action.types';
import axios from 'axios';


export const loginAct = (credentials) => ({
        type: LOGIN,
        payload: axios({
            url:'http://127.0.0.1:8000/api/users/login/',
            method: 'POST',
            data: {user:credentials},
            header: {
                'Content-Type': 'application/json'
            }
        })
});

