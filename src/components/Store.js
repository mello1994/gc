import { createStore } from 'redux';

const initData = {
    schedules: [],
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

        case 'CHANGE_MONTH':
            return changeReduce(state, action);

        case 'ADD_SCHEDULES':
            return addSchedulesReduce(state, action);

        case 'DELETE_SCHEDULES':
            return deleteSchedulesReduce(state, action);

        default:
            return state;
    }
}

function nextReduce(state) {
    const currentDate = new Date(state.currentDate.getFullYear(), state.currentDate.getMonth() + 1, 1);
    const nextMonth = new Date(state.nextMonth.getFullYear(), state.nextMonth.getMonth() + 1, 1);
    const previousMonth = new Date(state.previousMonth.getFullYear(), state.previousMonth.getMonth() + 1, 1);
    return {
        schedules: state.schedules,
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
        schedules: state.schedules,
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
        schedules: state.schedules,
        currentDate: currentDate,
        nextMonth: nextMonth,
        previousMonth: previousMonth
    };
}

function addSchedulesReduce(state, action) {
    let id = 1;
    if (state.schedules.length !== 0) {
        id = state.schedules[state.schedules.length - 1].id + 1;
    }
    let newSchedules = state.schedules.slice();
    newSchedules.push({
        id: id,
        date: action.date,
        schedule: action.schedule
    })
    return {
        schedules: newSchedules,
        currentDate: state.currentDate,
        nextMonth: state.nextMonth,
        previousMonth: state.previousMonth
    };
}

function deleteSchedulesReduce(state, action) {
    const schedules = state.schedules;
    const newSchedules = schedules.filter((value, index, array) => {
        return value.id !== Number(action.id);
    })
    return {
        schedules: newSchedules,
        currentDate: state.currentDate,
        nextMonth: state.nextMonth,
        previousMonth: state.previousMonth
    };
}

export function nextMonthCalender() {
    return {
        type: 'NEXT'
    }
}

export function previousMonthCalender() {
    return {
        type: 'PREVIOUS'
    }
}

export function changeMonthCalender(date) {
    return {
        type: 'CHANGE_MONTH',
        date: date
    }
}

export function addSchedules(date, schedule) {
    return {
        type: 'ADD_SCHEDULES',
        date: date,
        schedule: schedule
    }
}

export function deleteSchedules(id) {
    return {
        type: 'DELETE_SCHEDULES',
        id: id
    }
}

export default createStore(calenderReducer);