import { createStore } from 'redux';

const initData = {
    currentDate: new Date(),
    nextMonth: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
    previousMonth: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1)
};

//コントローラーの役割
export function calenderReducer(state = initData, action) {
    switch (action.type) {
        case 'NEXT':
            return nextReduce(state);

        case 'PREVIOUS':
            return previousReduce(state);
        
        case 'CHANGE_MONTH' :
            return changeReduce(state, action);

        default:
            return state;
    }
}

function nextReduce(state) {
    const currentDate = new Date(state.currentDate.getFullYear(), state.currentDate.getMonth() + 1, 1);
    const nextMonth = new Date(state.nextMonth.getFullYear(), state.nextMonth.getMonth() + 1, 1);
    const previousMonth = new Date(state.previousMonth.getFullYear(), state.previousMonth.getMonth() + 1, 1);
    return {
        currentDate: currentDate,
        nextMonth: nextMonth,
        previousMonth: previousMonth
    };
}

function previousReduce(state) {
    const currentDate = new Date(state.currentDate.getFullYear(), state.currentDate.getMonth() - 1, 1);
    const nextMonth = new Date(state.nextMonth.getFullYear(), state.nextMonth.getMonth() - 1, 1);
    const previousMonth = new Date(state.previousMonth.getFullYear(), state.previousMonth.getMonth() - 1, 1);
    return {
        currentDate: currentDate,
        nextMonth: nextMonth,
        previousMonth: previousMonth
    };
}

function changeReduce(state, action) {
    const currentDate = new Date(action.date.getFullYear(), action.date.getMonth(), 1);
    const nextMonth = new Date(action.date.getFullYear(), action.date.getMonth() + 1, 1);
    const previousMonth = new Date(action.date.getFullYear(), action.date.getMonth() - 1, 1);
    return {
        currentDate: currentDate,
        nextMonth: nextMonth,
        previousMonth: previousMonth
    };
}

export function nextMonthCalender() {
    return {
        type:'NEXT'
    }
}

export function previousMonthCalender() {
    return {
        type:'PREVIOUS'
    }
}

export function changeMonthCalender(date) {
    return {
        type:'CHANGE_MONTH',
        date:date
    }
}

export default createStore(calenderReducer);