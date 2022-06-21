import { dataItems } from "../Data/dataList";

export const findAll = () => {
    return Promise.resolve(dataItems);
}

export const findById = (id: number) => {
    const item = dataItems.find((item) => item.id === id);
    if(item) {
        return Promise.resolve(item);
    }
    return Promise.reject();
}