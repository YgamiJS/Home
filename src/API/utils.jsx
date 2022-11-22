export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
    
    return Array.from({length: totalPages} , (_ , i) => i + 1);
    
}

export const getId = (event) => event.target.getAttribute("id");

export const getElement = (ArrData , KeyData) => ArrData.find(elem => elem.id == KeyData);