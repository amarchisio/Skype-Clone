import _ from 'lodash'

import { getMessages} from "../static-data";
import {SEND_MESSAGE} from "../constants/action-types";

export default function messages(state = getMessages(10), action) {
    switch (action.type) {
        case SEND_MESSAGE:
            const { message, userId} = action.payload
            const allUserMsg = state[userId]
            const number = _.keys(allUserMsg).pop() + 1
            return {
                ...state,
                [userId]: {
                    ...allUserMsg,
                    [number]: {
                        number,
                        text: message,
                        is_user: true
                    }
                }

            }

        default:
            return state
    }
}