export const getCalender = (date) => {
    //先月末日
    const a = new Date(date.getFullYear(), date.getMonth(), 0);
    //当月初日
    const b = new Date(date.getFullYear(), date.getMonth(), 1);
    //当月末日
    const c = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    //来月初日
    const d = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    
    const start = new Date(a.getFullYear(), a.getMonth(), a.getDate() - b.getDay() + 1)
    let result = [];
    for(let i = 0; i < 42; i++){
        result.push(new Date(start.getFullYear(), start.getMonth(), start.getDate() + i));
    }
    return result;
}
